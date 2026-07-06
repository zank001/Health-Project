/*
 * builder.js — สร้างฟอร์มกรอกข้อมูลจากโครงหัวข้อ (schema) โดยอัตโนมัติ รองรับสองภาษา (ไทย/อังกฤษ)
 * และแปลงข้อมูลที่กรอกเป็นไฟล์ .js ที่พร้อมนำไปวางใน data/monographs/
 */
(function () {
  'use strict';

  var SCHEMA = window.MONOGRAPH_SCHEMA || [];
  var CATEGORIES = window.PRODUCT_CATEGORIES || {};
  var STATUS = window.ENTRY_STATUS || {};
  var LANG = window.LANG;
  function t(k) { return LANG.t(k); }

  var form = document.getElementById('mono-form');
  var output = document.getElementById('output');
  var toastEl = document.getElementById('toast');
  var helpBody = document.getElementById('help-body');

  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    if (html != null) e.innerHTML = html;
    return e;
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function toast(msg) {
    toastEl.textContent = msg;
    if (toast._t) clearTimeout(toast._t);
    toast._t = setTimeout(function () { toastEl.textContent = ''; }, 2600);
  }

  /* ป้ายหัวข้อ (outline) ตามภาษา + คำแปลรอง */
  function nodePrimary(node) { return LANG.get() === 'en' ? node.en : node.th; }
  function nodeSecondary(node) { return LANG.get() === 'en' ? node.th : node.en; }

  function field(type, id, label, hint) {
    return '<div class="field"><label for="' + id + '">' + esc(label) + '</label>' +
      '<input type="' + type + '" id="' + id + '">' +
      (hint ? '<div class="hint">' + esc(hint) + '</div>' : '') + '</div>';
  }

  /* ---------- ส่วนข้อมูลทั่วไป (metadata) ---------- */
  function buildMetaGroup() {
    var g = el('div', { class: 'form-group' });
    g.appendChild(el('h2', null, esc(t('bGeneralInfo'))));

    var catOpts = Object.keys(CATEGORIES).map(function (k) {
      return '<option value="' + k + '">' + esc(window.pickLang(CATEGORIES[k])) + '</option>';
    }).join('');
    var statusOpts = Object.keys(STATUS).map(function (k) {
      return '<option value="' + k + '">' + esc(window.pickLang(STATUS[k])) + '</option>';
    }).join('');

    g.innerHTML +=
      '<div class="row2">' +
      field('text', 'meta-id', t('bId'), t('bIdHint')) +
      field('text', 'meta-updated', t('bUpdated'), '') +
      '</div>' +
      '<div class="row2">' +
      field('text', 'meta-nameTh', t('bNameTh'), '') +
      field('text', 'meta-nameEn', t('bNameEn'), '') +
      '</div>' +
      '<div class="row2">' +
      field('text', 'meta-scientificName', t('bSci'), t('bSciHint')) +
      field('text', 'meta-family', t('bFamily'), '') +
      '</div>' +
      '<div class="row2">' +
      field('text', 'meta-partUsed', t('bPart'), t('bPartHint')) +
      '<div class="field"><label>' + esc(t('bCategory')) + '</label>' +
      '<select id="meta-category">' + catOpts + '</select></div>' +
      '</div>' +
      '<div class="row2">' +
      '<div class="field"><label>' + esc(t('bStatus')) + '</label>' +
      '<select id="meta-status">' + statusOpts + '</select></div>' +
      field('text', 'meta-synonyms', t('bSynonyms'), t('bSynonymsHint')) +
      '</div>' +
      '<div class="field"><label for="meta-alerts">' + esc(t('bAlerts')) + '</label>' +
      '<textarea id="meta-alerts"></textarea>' +
      '<div class="hint">' + esc(t('bAlertsHint')) + '</div></div>';

    return g;
  }

  /* ---------- ช่องเนื้อหาแต่ละหัวข้อ (recursive) ---------- */
  function contentField(node, depth) {
    var wrap = el('div', { class: 'field' + (depth > 0 ? ' indent' : '') });
    var lbl = '<label for="sec-' + node.id + '">' + esc(nodePrimary(node)) +
      ' <span class="en-lbl">' + esc(nodeSecondary(node)) + '</span></label>';
    if (node.references) {
      wrap.innerHTML = lbl +
        '<textarea id="sec-' + node.id + '"></textarea>' +
        '<div class="hint">' + esc((node.hint || '')) + ' — ' + esc(t('bRefsHint')) + '</div>';
    } else {
      wrap.innerHTML = lbl +
        '<textarea id="sec-' + node.id + '"></textarea>' +
        (node.hint ? '<div class="hint">' + esc(node.hint) + '</div>' : '');
    }
    return wrap;
  }

  function buildSectionGroup(node) {
    var g = el('div', { class: 'form-group' });
    g.appendChild(el('h2', null, esc(nodePrimary(node)) + ' — ' + esc(nodeSecondary(node))));
    appendNodeFields(g, node, 0);
    return g;
  }

  function appendNodeFields(container, node, depth) {
    var hasKids = node.children && node.children.length;
    if (!hasKids || node.references) {
      container.appendChild(contentField(node, depth));
    } else {
      var intro = el('div', { class: 'field' + (depth > 0 ? ' indent' : '') });
      intro.innerHTML =
        '<label for="sec-' + node.id + '">' + esc(nodePrimary(node)) +
        ' <span class="en-lbl">' + esc(nodeSecondary(node)) + ' — ' + esc(t('bIntro')) + '</span></label>' +
        '<textarea id="sec-' + node.id + '"></textarea>' +
        (node.hint ? '<div class="hint">' + esc(node.hint) + '</div>' : '');
      container.appendChild(intro);
      node.children.forEach(function (c) { appendNodeFields(container, c, depth + 1); });
    }
  }

  /* ---------- สร้างฟอร์มทั้งหมด ---------- */
  function renderForm() {
    form.innerHTML = '';
    form.appendChild(buildMetaGroup());
    SCHEMA.forEach(function (node) {
      if (node.id === 'alerts') return; // จัดการใน metadata แล้ว
      form.appendChild(buildSectionGroup(node));
    });
  }

  /* ---------- คำอธิบายวิธีใช้ (help) แบบสองภาษา ---------- */
  function renderHelp() {
    if (!helpBody) return;
    if (LANG.get() === 'en') {
      helpBody.innerHTML =
        '<ol>' +
        '<li>Fill in the fields below (at minimum an <b>ID</b> and a name)</li>' +
        '<li>Click <b>“Generate file”</b>, then <b>“Download .js”</b></li>' +
        '<li>Put the file in the <code>data/monographs/</code> folder</li>' +
        '<li>Add its path in <code>data/manifest.js</code>, e.g. <code>\'data/monographs/ginger.js\'</code></li>' +
        '<li>Refresh the page — the new entry appears</li>' +
        '</ol>' +
        '<p class="muted">Content formatting: blank line = new paragraph · line starting with <code>- </code> = bullet · <code>## </code> = subheading · <code>**bold**</code> · citation <code>[1]</code></p>';
    } else {
      helpBody.innerHTML =
        '<ol>' +
        '<li>กรอกข้อมูลด้านล่าง (อย่างน้อยควรมี <b>รหัส (id)</b> และ <b>ชื่อ</b>)</li>' +
        '<li>กด <b>“สร้างไฟล์ข้อมูล”</b> แล้วกด <b>“ดาวน์โหลด .js”</b></li>' +
        '<li>นำไฟล์ไปวางในโฟลเดอร์ <code>data/monographs/</code></li>' +
        '<li>เพิ่มพาธไฟล์ลงใน <code>data/manifest.js</code> เช่น <code>\'data/monographs/ginger.js\'</code></li>' +
        '<li>รีเฟรชหน้าเว็บ — รายการใหม่จะปรากฏในระบบ</li>' +
        '</ol>' +
        '<p class="muted">รูปแบบข้อความ: บรรทัดว่าง = ย่อหน้าใหม่ · ขึ้นต้น <code>- </code> = รายการจุด · <code>## </code> = หัวข้อย่อย · <code>**หนา**</code> · อ้างอิง <code>[1]</code></p>';
    }
  }

  /* ---------- อ่าน/คืนค่าฟอร์ม (ใช้ตอนสลับภาษาเพื่อไม่ให้ข้อมูลหาย) ---------- */
  function snapshot() {
    var data = {};
    form.querySelectorAll('input, textarea, select').forEach(function (e) { data[e.id] = e.value; });
    return data;
  }
  function restore(data) {
    form.querySelectorAll('input, textarea, select').forEach(function (e) {
      if (data[e.id] !== undefined) e.value = data[e.id];
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
    Object.keys(data.sections).forEach(function (k) {
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
    if (!lastData.nameTh && !lastData.nameEn) toast(t('bNeedName'));
    output.value = generateCode(lastData);
    toast(t('bGeneratedOk'));
    output.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  document.getElementById('btn-download').addEventListener('click', function () {
    if (!output.value) { toast(t('bGenFirst')); return; }
    var data = lastData || collectData();
    var blob = new Blob([output.value], { type: 'text/javascript;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = data.id + '.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    toast(data.id + '.js — ' + t('bDownloaded'));
  });

  document.getElementById('btn-copy').addEventListener('click', function () {
    if (!output.value) { toast(t('bGenFirst')); return; }
    output.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    if (navigator.clipboard) {
      navigator.clipboard.writeText(output.value).then(function () { toast(t('bCopied')); }, function () {});
    }
    if (ok) toast(t('bCopied'));
  });

  document.getElementById('btn-reset').addEventListener('click', function () {
    if (!confirm(t('bConfirmReset'))) return;
    form.querySelectorAll('input, textarea').forEach(function (e) { e.value = ''; });
    form.querySelectorAll('select').forEach(function (e) { e.selectedIndex = 0; });
    output.value = '';
    lastData = null;
    toast(t('bCleared'));
    window.scrollTo(0, 0);
  });

  /* ---------- ปุ่มสลับภาษา (คงข้อมูลที่กรอกไว้) ---------- */
  function applyLang() {
    window.applyStaticI18n();
    output.setAttribute('placeholder', t('bOutputPlaceholder'));
    renderHelp();
  }

  function setupLangToggle() {
    var toggle = document.getElementById('lang-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', function () {
      var snap = snapshot();
      LANG.set(LANG.other());
      applyLang();
      renderForm();
      restore(snap);
    });
  }

  /* ---------- เริ่มต้น ---------- */
  applyLang();
  setupLangToggle();
  renderForm();
})();
