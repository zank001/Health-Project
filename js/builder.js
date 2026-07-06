/*
 * builder.js — สร้างฟอร์มกรอกข้อมูลจากโครงหัวข้อ (schema) โดยอัตโนมัติ
 * และแปลงข้อมูลที่กรอกเป็นไฟล์ .js ที่พร้อมนำไปวางใน data/monographs/
 */
(function () {
  'use strict';

  var SCHEMA = window.MONOGRAPH_SCHEMA || [];
  var CATEGORIES = window.PRODUCT_CATEGORIES || {};
  var STATUS = window.ENTRY_STATUS || {};
  var form = document.getElementById('mono-form');
  var output = document.getElementById('output');
  var toastEl = document.getElementById('toast');

  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    if (html != null) e.innerHTML = html;
    return e;
  }

  function toast(msg) {
    toastEl.textContent = msg;
    if (toast._t) clearTimeout(toast._t);
    toast._t = setTimeout(function () { toastEl.textContent = ''; }, 2600);
  }

  /* ---------- ส่วนข้อมูลทั่วไป (metadata) ---------- */
  function buildMetaGroup() {
    var g = el('div', { class: 'form-group' });
    g.appendChild(el('h2', null, 'ข้อมูลทั่วไป (General Information)'));

    var catOpts = Object.keys(CATEGORIES).map(function (k) {
      return '<option value="' + k + '">' + CATEGORIES[k].th + ' (' + CATEGORIES[k].en + ')</option>';
    }).join('');
    var statusOpts = Object.keys(STATUS).map(function (k) {
      return '<option value="' + k + '">' + STATUS[k].th + '</option>';
    }).join('');

    g.innerHTML +=
      '<div class="row2">' +
      field('text', 'meta-id', 'รหัส (id) *', 'ใช้ a-z, ตัวเลข, ขีดกลาง — ต้องไม่ซ้ำ เช่น ginger') +
      field('text', 'meta-updated', 'วันที่อัปเดต (YYYY-MM-DD)', '') +
      '</div>' +
      '<div class="row2">' +
      field('text', 'meta-nameTh', 'ชื่อไทย *', '') +
      field('text', 'meta-nameEn', 'ชื่ออังกฤษ', '') +
      '</div>' +
      '<div class="row2">' +
      field('text', 'meta-scientificName', 'ชื่อวิทยาศาสตร์', 'เช่น Zingiber officinale') +
      field('text', 'meta-family', 'วงศ์ (Family)', '') +
      '</div>' +
      '<div class="row2">' +
      field('text', 'meta-partUsed', 'ส่วนที่ใช้', 'เช่น เหง้า, ใบ') +
      '<div class="field"><label>หมวดหมู่ <span class="en-lbl">Category</span></label>' +
      '<select id="meta-category">' + catOpts + '</select></div>' +
      '</div>' +
      '<div class="row2">' +
      '<div class="field"><label>สถานะข้อมูล <span class="en-lbl">Status</span></label>' +
      '<select id="meta-status">' + statusOpts + '</select></div>' +
      field('text', 'meta-synonyms', 'ชื่อพ้อง/ชื่ออื่น', 'คั่นด้วยเครื่องหมายจุลภาค เช่น Ginger, ขิงแก่') +
      '</div>' +
      '<div class="field"><label>ข้อความแจ้งเตือน (ALERTS) <span class="en-lbl">แสดงเป็นแบนเนอร์ด้านบน</span></label>' +
      '<textarea id="meta-alerts" placeholder="กรอกแยกบรรทัดละ 1 รายการ"></textarea>' +
      '<div class="hint">แต่ละบรรทัดจะกลายเป็น 1 หัวข้อแจ้งเตือน (เว้นว่างได้)</div></div>';

    return g;
  }

  function field(type, id, label, hint) {
    return '<div class="field"><label for="' + id + '">' + label + '</label>' +
      '<input type="' + type + '" id="' + id + '">' +
      (hint ? '<div class="hint">' + hint + '</div>' : '') + '</div>';
  }

  /* ---------- ช่องเนื้อหาแต่ละหัวข้อ (recursive) ---------- */
  function contentField(node, depth) {
    var wrap = el('div', { class: 'field' + (depth > 0 ? ' indent' : '') });
    if (node.references) {
      wrap.innerHTML =
        '<label for="sec-' + node.id + '">' + node.en + ' <span class="en-lbl">' + node.th + '</span></label>' +
        '<textarea id="sec-' + node.id + '" data-ref="1" placeholder="กรอกอ้างอิงแยกบรรทัดละ 1 รายการ"></textarea>' +
        '<div class="hint">' + (node.hint || '') + ' — แต่ละบรรทัด = 1 รายการอ้างอิง</div>';
    } else {
      wrap.innerHTML =
        '<label for="sec-' + node.id + '">' + node.en + ' <span class="en-lbl">' + node.th + '</span></label>' +
        '<textarea id="sec-' + node.id + '"></textarea>' +
        (node.hint ? '<div class="hint">' + node.hint + '</div>' : '');
    }
    return wrap;
  }

  function buildSectionGroup(node) {
    var g = el('div', { class: 'form-group' });
    g.appendChild(el('h2', null, node.en + ' — ' + node.th));

    // เนื้อหาของหัวข้อหลักเอง (ถ้า schema ตั้งใจให้มี เช่น หัวข้อที่ไม่มีลูก)
    appendNodeFields(g, node, 0);
    return g;
  }

  function appendNodeFields(container, node, depth) {
    var hasKids = node.children && node.children.length;
    // หัวข้อที่ไม่มีลูก หรือหัวข้อ references → มีช่องกรอกของตัวเอง
    if (!hasKids || node.references) {
      container.appendChild(contentField(node, depth));
    } else {
      // หัวข้อที่มีลูก: อาจมีเนื้อหานำ (intro) ของตัวเองด้วย — ให้ช่องเล็ก ๆ
      var intro = el('div', { class: 'field' + (depth > 0 ? ' indent' : '') });
      intro.innerHTML =
        '<label for="sec-' + node.id + '">' + node.en + ' <span class="en-lbl">' + node.th + ' — เนื้อหานำ (ถ้ามี)</span></label>' +
        '<textarea id="sec-' + node.id + '"></textarea>' +
        (node.hint ? '<div class="hint">' + node.hint + '</div>' : '');
      container.appendChild(intro);
      node.children.forEach(function (c) { appendNodeFields(container, c, depth + 1); });
    }
  }

  /* ---------- สร้างฟอร์มทั้งหมด ---------- */
  function renderForm() {
    form.appendChild(buildMetaGroup());
    SCHEMA.forEach(function (node) {
      if (node.id === 'alerts') return; // จัดการใน metadata แล้ว
      form.appendChild(buildSectionGroup(node));
    });
  }

  /* ---------- อ่านค่าจากฟอร์ม → object ---------- */
  function val(id) {
    var e = document.getElementById(id);
    return e ? e.value.trim() : '';
  }

  function collectSections(node, sections) {
    var v = val('sec-' + node.id);
    if (v) {
      if (node.references) {
        sections[node.id] = v.split('\n').map(function (l) { return l.trim(); }).filter(Boolean);
      } else {
        sections[node.id] = v;
      }
    }
    if (node.children) node.children.forEach(function (c) { collectSections(c, sections); });
  }

  function collectData() {
    var id = val('meta-id') || 'new-item';
    id = id.toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '') || 'new-item';

    var sections = {};
    SCHEMA.forEach(function (n) { if (n.id !== 'alerts') collectSections(n, sections); });

    return {
      id: id,
      nameTh: val('meta-nameTh'),
      nameEn: val('meta-nameEn'),
      scientificName: val('meta-scientificName'),
      family: val('meta-family'),
      partUsed: val('meta-partUsed'),
      category: val('meta-category') || 'other',
      status: val('meta-status') || 'draft',
      updated: val('meta-updated'),
      synonyms: val('meta-synonyms').split(',').map(function (s) { return s.trim(); }).filter(Boolean),
      alerts: val('meta-alerts').split('\n').map(function (s) { return s.trim(); }).filter(Boolean),
      sections: sections,
    };
  }

  /* ---------- serialize เป็นโค้ด JS ---------- */
  function q(s) { return "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n') + "'"; }

  function serializeArray(arr, indent) {
    if (!arr.length) return '[]';
    return '[\n' + arr.map(function (s) { return indent + '  ' + q(s); }).join(',\n') + '\n' + indent + ']';
  }

  function generateCode(data) {
    var lines = [];
    lines.push('/*');
    lines.push(' * ' + (data.nameTh || data.id) + (data.nameEn ? ' (' + data.nameEn + ')' : ''));
    lines.push(' * สร้างด้วยเครื่องมือ “เพิ่มข้อมูล” ของ HerbBase');
    lines.push(' */');
    lines.push('HERB_DB.register({');
    lines.push("  id: " + q(data.id) + ",");
    lines.push("  nameTh: " + q(data.nameTh) + ",");
    lines.push("  nameEn: " + q(data.nameEn) + ",");
    lines.push("  scientificName: " + q(data.scientificName) + ",");
    lines.push("  family: " + q(data.family) + ",");
    lines.push("  partUsed: " + q(data.partUsed) + ",");
    lines.push("  category: " + q(data.category) + ",");
    lines.push("  status: " + q(data.status) + ",");
    lines.push("  updated: " + q(data.updated) + ",");
    lines.push("  synonyms: " + serializeArray(data.synonyms, '  ') + ",");
    lines.push("  alerts: " + serializeArray(data.alerts, '  ') + ",");
    lines.push("  sections: {");
    var keys = Object.keys(data.sections);
    keys.forEach(function (k) {
      var v = data.sections[k];
      if (Array.isArray(v)) {
        lines.push("    " + k + ": " + serializeArray(v, '    ') + ",");
      } else {
        lines.push("    " + k + ": " + q(v) + ",");
      }
    });
    lines.push("  },");
    lines.push("});");
    lines.push('');
    return lines.join('\n');
  }

  var lastData = null;

  document.getElementById('btn-generate').addEventListener('click', function () {
    lastData = collectData();
    if (!lastData.nameTh && !lastData.nameEn) {
      toast('กรุณากรอกอย่างน้อยชื่อไทยหรือชื่ออังกฤษ');
    }
    output.value = generateCode(lastData);
    toast('สร้างโค้ดเรียบร้อย — ตรวจสอบด้านล่าง');
    output.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  document.getElementById('btn-download').addEventListener('click', function () {
    if (!output.value) { toast('กด “สร้างไฟล์ข้อมูล” ก่อน'); return; }
    var data = lastData || collectData();
    var blob = new Blob([output.value], { type: 'text/javascript;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = data.id + '.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    toast('ดาวน์โหลด ' + data.id + '.js แล้ว — อย่าลืมเพิ่มพาธใน manifest.js');
  });

  document.getElementById('btn-copy').addEventListener('click', function () {
    if (!output.value) { toast('กด “สร้างไฟล์ข้อมูล” ก่อน'); return; }
    output.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    if (navigator.clipboard) {
      navigator.clipboard.writeText(output.value).then(function () { toast('คัดลอกแล้ว'); }, function () {});
    }
    if (ok) toast('คัดลอกแล้ว');
  });

  document.getElementById('btn-reset').addEventListener('click', function () {
    if (!confirm('ล้างข้อมูลที่กรอกทั้งหมด?')) return;
    form.querySelectorAll('input, textarea').forEach(function (e) { e.value = ''; });
    form.querySelectorAll('select').forEach(function (e) { e.selectedIndex = 0; });
    output.value = '';
    lastData = null;
    toast('ล้างฟอร์มแล้ว');
    window.scrollTo(0, 0);
  });

  renderForm();
})();
