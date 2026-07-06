/*
 * app.js — ตัวควบคุมหลักของแอป (routing, ค้นหา, แสดงโมโนกราฟ) — รองรับสองภาษา (ไทย/อังกฤษ)
 * ไม่ต้องใช้ไลบรารีภายนอก ทำงานได้ทั้งเปิดไฟล์ตรง ๆ (file://) และผ่านเว็บเซิร์ฟเวอร์
 */
(function () {
  'use strict';

  var app = document.getElementById('app');
  var SCHEMA = window.MONOGRAPH_SCHEMA || [];
  var CATEGORIES = window.PRODUCT_CATEGORIES || {};
  var STATUS = window.ENTRY_STATUS || {};
  var LANG = window.LANG;
  function t(k) { return LANG.t(k); }

  /* ============================================================
     ยูทิลิตี้
     ============================================================ */

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function norm(s) { return String(s || '').toLowerCase().trim(); }

  function catLabel(key) {
    var c = CATEGORIES[key];
    return c ? window.pickLang(c) : key;
  }

  function statusBadge(key) {
    var st = STATUS[key] || STATUS.draft;
    return '<span class="badge ' + esc(st.cls) + '">' + esc(window.pickLang(st)) + '</span>';
  }

  /* ชื่อรายการตามภาษาที่เลือก (มีตัวสำรอง) */
  function primaryName(m) {
    return LANG.get() === 'en' ? (m.nameEn || m.nameTh) : (m.nameTh || m.nameEn);
  }
  function secondaryName(m) {
    var other = LANG.get() === 'en' ? m.nameTh : m.nameEn;
    return (other && other !== primaryName(m)) ? other : '';
  }

  /* ชื่อหัวข้อ (outline) ตามภาษา + คำแปลรอง */
  function secTitle(node) { return LANG.get() === 'en' ? node.en : node.th; }
  function secSub(node) { return LANG.get() === 'en' ? node.th : node.en; }

  /* จัดรูปแบบข้อความภายในบรรทัด: escape ก่อน แล้วค่อยแปลง **หนา** *เอียง* และอ้างอิง [1] */
  function inlineFormat(s) {
    var out = esc(s);
    out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    out = out.replace(/\*([^*\n]+)\*/g, '<em>$1</em>');
    out = out.replace(/\[(\d+(?:\s*[,–-]\s*\d+)*)\]/g, function (m, inner) {
      var linked = inner.replace(/\d+/g, function (n) {
        return '<a class="ref-link" data-ref="' + n + '">' + n + '</a>';
      });
      return '[' + linked + ']';
    });
    return out;
  }

  /*
   * แปลงข้อความหลายบรรทัด (markdown อย่างง่าย) เป็น HTML
   *   บรรทัดว่าง = ย่อหน้าใหม่ | "## หัวข้อ" | "- จุด" | "1. ลำดับ" | **หนา** *เอียง* | อ้างอิง [1]
   */
  function renderTextBlock(str) {
    var lines = String(str).replace(/\r\n/g, '\n').split('\n');
    var html = [];
    var list = null;
    var para = [];

    function flushPara() {
      if (para.length) {
        html.push('<p>' + para.map(inlineFormat).join('<br>') + '</p>');
        para = [];
      }
    }
    function flushList() {
      if (list) {
        html.push('<' + list.type + '>' + list.items.map(function (i) {
          return '<li>' + inlineFormat(i) + '</li>';
        }).join('') + '</' + list.type + '>');
        list = null;
      }
    }

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trim();
      if (!line) { flushPara(); flushList(); continue; }

      if (line.indexOf('## ') === 0) {
        flushPara(); flushList();
        html.push('<h4 class="content-subhead">' + inlineFormat(line.slice(3)) + '</h4>');
        continue;
      }
      var mUl = line.match(/^[-•]\s+(.*)$/);
      if (mUl) {
        flushPara();
        if (!list || list.type !== 'ul') { flushList(); list = { type: 'ul', items: [] }; }
        list.items.push(mUl[1]);
        continue;
      }
      var mOl = line.match(/^\d+[.)]\s+(.*)$/);
      if (mOl) {
        flushPara();
        if (!list || list.type !== 'ol') { flushList(); list = { type: 'ol', items: [] }; }
        list.items.push(mOl[1]);
        continue;
      }
      flushList();
      para.push(line);
    }
    flushPara(); flushList();
    return html.join('');
  }

  /* แปลง block แบบ object เช่น {note:...}, {table:{headers,rows}} หรือเนื้อหาสองภาษา {th,en} */
  function renderBlockObject(b) {
    if (b == null) return '';
    if (window.isLocalizedBlock(b)) return renderContent(window.pickLang(b));
    if (typeof b === 'string') return renderTextBlock(b);
    if (b.h) return '<h4 class="content-subhead">' + inlineFormat(window.pickLang(b.h)) + '</h4>';
    if (b.p) return '<p>' + inlineFormat(window.pickLang(b.p)) + '</p>';
    if (b.note) return '<div class="content-note">' + renderTextBlock(window.pickLang(b.note)) + '</div>';
    if (b.ul) {
      return '<ul>' + b.ul.map(function (i) { return '<li>' + inlineFormat(window.pickLang(i)) + '</li>'; }).join('') + '</ul>';
    }
    if (b.ol) {
      return '<ol>' + b.ol.map(function (i) { return '<li>' + inlineFormat(window.pickLang(i)) + '</li>'; }).join('') + '</ol>';
    }
    if (b.table) {
      var tb = b.table;
      var head = (tb.headers && tb.headers.length)
        ? '<thead><tr>' + tb.headers.map(function (h) { return '<th>' + inlineFormat(window.pickLang(h)) + '</th>'; }).join('') + '</tr></thead>'
        : '';
      var body = '<tbody>' + (tb.rows || []).map(function (row) {
        return '<tr>' + row.map(function (c) { return '<td>' + inlineFormat(window.pickLang(c)) + '</td>'; }).join('') + '</tr>';
      }).join('') + '</tbody>';
      return '<div class="content-table-wrap"><table class="content-table">' + head + body + '</table></div>';
    }
    return '';
  }

  /* เนื้อหาหัวข้อ: รองรับ string / array / block object / เนื้อหาสองภาษา {th,en} */
  function renderContent(content) {
    content = window.localizeVal(content);
    if (content == null) return '';
    if (Array.isArray(content)) return content.map(renderBlockObject).join('');
    return renderBlockObject(content);
  }

  function hasContent(content) {
    content = window.localizeVal(content);
    if (content == null) return false;
    if (typeof content === 'string') return content.trim().length > 0;
    if (Array.isArray(content)) return content.length > 0;
    return true;
  }

  function nodeHasContent(node, sections) {
    if (hasContent(sections[node.id])) return true;
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        if (nodeHasContent(node.children[i], sections)) return true;
      }
    }
    return false;
  }

  /* ============================================================
     โหลดไฟล์ข้อมูลตาม manifest (ใช้ <script> จึงทำงานกับ file:// ได้)
     ============================================================ */
  function loadData() {
    var files = window.HERB_DB_MANIFEST || [];
    return Promise.all(files.map(function (src) {
      return new Promise(function (resolve) {
        var s = document.createElement('script');
        // เพิ่มพารามิเตอร์กันแคช (cache-busting) ให้ไฟล์ข้อมูล เพื่อให้ได้เนื้อหาล่าสุดเสมอหลัง deploy
        // โดยไม่ต้อง hard refresh — ข้ามเมื่อเปิดแบบ file:// เพราะ query string ทำให้หาไฟล์ไม่เจอ
        var bust = (location.protocol === 'http:' || location.protocol === 'https:')
          ? (src.indexOf('?') < 0 ? '?' : '&') + 't=' + Date.now()
          : '';
        s.src = src + bust;
        s.onload = resolve;
        s.onerror = function () {
          console.warn('โหลดไฟล์ข้อมูลไม่สำเร็จ: ' + src);
          resolve();
        };
        document.head.appendChild(s);
      });
    }));
  }

  /* ============================================================
     ค้นหา (ค้นได้ทุกภาษาเสมอ)
     ============================================================ */
  function searchItems(q) {
    q = norm(q);
    if (!q) return window.HERB_DB.items.slice();
    var scored = [];
    window.HERB_DB.items.forEach(function (m) {
      var fields = [m.nameTh, m.nameEn, m.scientificName].concat(m.synonyms || []);
      var best = 0;
      fields.forEach(function (f) {
        var v = norm(f);
        if (!v) return;
        if (v === q) best = Math.max(best, 100);
        else if (v.indexOf(q) === 0) best = Math.max(best, 80);
        else if (v.indexOf(q) >= 0) best = Math.max(best, 50);
      });
      if (best > 0) scored.push({ m: m, score: best });
    });
    scored.sort(function (a, b) {
      return b.score - a.score || String(primaryName(a.m)).localeCompare(String(primaryName(b.m)));
    });
    return scored.map(function (x) { return x.m; });
  }

  /* ============================================================
     Routing (hash-based): #/ , #/list , #/item/<id>
     ============================================================ */
  function parseRoute() {
    var h = location.hash || '#/';
    if (h.indexOf('#/') !== 0) h = '#/';
    var rest = h.slice(2);
    var qIdx = rest.indexOf('?');
    var params = {};
    if (qIdx >= 0) {
      rest.slice(qIdx + 1).split('&').forEach(function (kv) {
        if (!kv) return;
        var p = kv.split('=');
        params[decodeURIComponent(p[0])] = decodeURIComponent(p[1] || '');
      });
      rest = rest.slice(0, qIdx);
    }
    var parts = rest.split('/').filter(Boolean);
    return { path: parts, params: params };
  }

  function navigate(hash) { location.hash = hash; }

  /* ============================================================
     หน้าแรก
     ============================================================ */
  function viewHome() {
    var items = window.HERB_DB.items;
    var total = items.length;
    var complete = items.filter(function (m) { return m.status === 'complete'; }).length;

    var catCounts = {};
    items.forEach(function (m) { catCounts[m.category] = (catCounts[m.category] || 0) + 1; });

    var catCards = Object.keys(CATEGORIES).map(function (key) {
      var n = catCounts[key] || 0;
      var c = CATEGORIES[key];
      return '<a class="cat-card" href="#/list?cat=' + encodeURIComponent(key) + '">' +
        '<span><span class="cat-name">' + esc(window.pickLang(c)) + '</span><br>' +
        '<span class="cat-sub">' + esc(LANG.get() === 'en' ? c.th : c.en) + '</span></span>' +
        '<span class="cat-count">' + n + '</span></a>';
    }).join('');

    var recent = items.slice()
      .filter(function (m) { return m.updated; })
      .sort(function (a, b) { return String(b.updated).localeCompare(String(a.updated)); })
      .slice(0, 6);

    var recentHtml = recent.length
      ? '<div class="item-grid">' + recent.map(itemCard).join('') + '</div>'
      : '<div class="empty-state">' + esc(t('emptyDb')) + '</div>';

    app.innerHTML =
      '<div class="hero">' +
      '  <h1>' + esc(t('heroTitle')) + '</h1>' +
      '  <p class="subtitle">' + esc(t('heroSubtitle')) + '</p>' +
      '  <div class="search-wrap">' +
      '    <input type="search" class="search-input" id="home-search" placeholder="' + esc(t('searchPlaceholder')) + '" autocomplete="off">' +
      '    <div class="search-suggest" id="home-suggest" hidden></div>' +
      '  </div>' +
      '  <div class="stat-row">' +
      '    <span class="stat-chip"><b>' + total + '</b> ' + esc(t('statTotal')) + '</span>' +
      '    <span class="stat-chip"><b>' + complete + '</b> ' + esc(t('statComplete')) + '</span>' +
      '    <span class="stat-chip"><b>' + SCHEMA.length + '</b> ' + esc(t('statSections')) + '</span>' +
      '  </div>' +
      '</div>' +
      '<div class="home-section"><h2>' + esc(t('browseByCategory')) + '</h2><div class="cat-grid">' + catCards + '</div></div>' +
      '<div class="home-section"><h2>' + esc(t('recentlyUpdated')) + '</h2>' + recentHtml + '</div>';

    setupHomeSearch();
  }

  function setupHomeSearch() {
    var input = document.getElementById('home-search');
    var box = document.getElementById('home-suggest');
    if (!input) return;

    input.addEventListener('input', function () {
      var q = input.value.trim();
      if (!q) { box.hidden = true; box.innerHTML = ''; return; }
      var results = searchItems(q).slice(0, 8);
      if (!results.length) {
        box.innerHTML = '<a><span class="s-sub">' + esc(t('noResults')) + '</span></a>';
      } else {
        box.innerHTML = results.map(function (m) {
          var sec = secondaryName(m);
          return '<a href="#/item/' + encodeURIComponent(m.id) + '">' +
            '<span class="s-name">' + esc(primaryName(m)) + '</span> ' +
            '<span class="s-sub">' + esc(sec) +
            (m.scientificName ? (sec ? ' · ' : '') + esc(m.scientificName) : '') + '</span></a>';
        }).join('');
      }
      box.hidden = false;
    });

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        navigate('#/list?q=' + encodeURIComponent(input.value.trim()));
      } else if (e.key === 'Escape') {
        box.hidden = true;
      }
    });

    document.addEventListener('click', function (e) {
      if (!box.contains(e.target) && e.target !== input) box.hidden = true;
    });
  }

  /* ============================================================
     หน้ารายการ
     ============================================================ */
  function itemCard(m) {
    var sec = secondaryName(m);
    return '<a class="item-card" href="#/item/' + encodeURIComponent(m.id) + '">' +
      '<h3>' + esc(primaryName(m)) + '</h3>' +
      (sec ? '<p class="en-name">' + esc(sec) + '</p>' : '') +
      (m.scientificName ? '<div class="sci-name">' + esc(m.scientificName) + '</div>' : '') +
      '<div class="badge-row">' +
      '<span class="badge badge-cat">' + esc(catLabel(m.category)) + '</span>' +
      statusBadge(m.status) +
      '</div></a>';
  }

  function viewList(params) {
    var q = params.q || '';
    var cat = params.cat || '';
    var sort = params.sort || 'th';

    var results = searchItems(q);
    if (cat) results = results.filter(function (m) { return m.category === cat; });

    if (!q) {
      results.sort(function (a, b) {
        if (sort === 'en') return String(a.nameEn || '').localeCompare(String(b.nameEn || ''), 'en');
        if (sort === 'updated') return String(b.updated || '').localeCompare(String(a.updated || ''));
        return String(a.nameTh || '').localeCompare(String(b.nameTh || ''), 'th');
      });
    }

    var catOptions = '<option value="">' + esc(t('allCategories')) + '</option>' + Object.keys(CATEGORIES).map(function (key) {
      var c = CATEGORIES[key];
      return '<option value="' + esc(key) + '"' + (key === cat ? ' selected' : '') + '>' +
        esc(window.pickLang(c)) + '</option>';
    }).join('');

    var grid = results.length
      ? '<div class="item-grid">' + results.map(itemCard).join('') + '</div>'
      : '<div class="empty-state">' + esc(t('noResults')) + '</div>';

    var unit = LANG.get() === 'en' ? (results.length === 1 ? ' entry' : ' entries') : ' รายการ';

    app.innerHTML =
      '<div class="page-head"><h1>' + esc(t('listTitle')) + '</h1>' +
      '<p>' + esc(t('listSubtitle')) + '</p></div>' +
      '<div class="filter-bar">' +
      '  <input type="search" id="list-search" placeholder="' + esc(t('searchShort')) + '" value="' + esc(q) + '">' +
      '  <select id="list-cat">' + catOptions + '</select>' +
      '  <select id="list-sort">' +
      '    <option value="th"' + (sort === 'th' ? ' selected' : '') + '>' + esc(t('sortTh')) + '</option>' +
      '    <option value="en"' + (sort === 'en' ? ' selected' : '') + '>' + esc(t('sortEn')) + '</option>' +
      '    <option value="updated"' + (sort === 'updated' ? ' selected' : '') + '>' + esc(t('sortUpdated')) + '</option>' +
      '  </select>' +
      '  <span class="result-count">' + results.length + unit + '</span>' +
      '</div>' + grid;

    function apply() {
      var nq = document.getElementById('list-search').value.trim();
      var ncat = document.getElementById('list-cat').value;
      var nsort = document.getElementById('list-sort').value;
      var parts = [];
      if (nq) parts.push('q=' + encodeURIComponent(nq));
      if (ncat) parts.push('cat=' + encodeURIComponent(ncat));
      if (nsort && nsort !== 'th') parts.push('sort=' + encodeURIComponent(nsort));
      navigate('#/list' + (parts.length ? '?' + parts.join('&') : ''));
    }

    var searchEl = document.getElementById('list-search');
    var deb = null;
    searchEl.addEventListener('input', function () {
      clearTimeout(deb);
      deb = setTimeout(apply, 350);
    });
    document.getElementById('list-cat').addEventListener('change', apply);
    document.getElementById('list-sort').addEventListener('change', apply);
  }

  /* ============================================================
     หน้าโมโนกราฟ
     ============================================================ */
  var showEmpty = localStorage.getItem('herbdb.showEmpty') !== '0';

  function tocEntry(node, sections) {
    var filled = nodeHasContent(node, sections);
    var cls = filled ? '' : ' class="toc-empty"';
    var link = '<a data-anchor="sec-' + esc(node.id) + '"' + cls + '>' +
      '<span class="toc-en">' + esc(secTitle(node)) + '</span>' +
      '<span class="toc-th">' + esc(secSub(node)) + '</span></a>';
    var kids = '';
    if (node.children && node.children.length) {
      kids = '<ul>' + node.children.map(function (c) {
        var cFilled = nodeHasContent(c, sections);
        return '<li><a data-anchor="sec-' + esc(c.id) + '"' + (cFilled ? '' : ' class="toc-empty"') + '>' +
          '<span class="toc-en">' + esc(secTitle(c)) + '</span></a></li>';
      }).join('') + '</ul>';
    }
    return '<li>' + link + kids + '</li>';
  }

  function renderSubsection(node, sections, level) {
    var own = hasContent(sections[node.id]);
    var kidsHtml = (node.children || []).map(function (c) {
      return renderSubsection(c, sections, level + 1);
    }).join('');

    var any = own || (node.children || []).some(function (c) { return nodeHasContent(c, sections); });
    if (!any && !showEmpty) return '';

    var hTag = level <= 1 ? 'h3' : 'h4';
    var body = own
      ? renderContent(sections[node.id])
      : (node.children && node.children.length ? '' : '<p class="empty-note">' + esc(t('emptyNote')) + '</p>');

    return '<div class="subsection" id="sec-' + esc(node.id) + '">' +
      '<' + hTag + '>' + esc(secTitle(node)) + '<span class="sub-th">' + esc(secSub(node)) + '</span></' + hTag + '>' +
      body + kidsHtml + '</div>';
  }

  function renderReferences(refs) {
    if (!hasContent(refs)) return showEmpty ? '<p class="empty-note">' + esc(t('emptyNote')) + '</p>' : '';
    refs = window.localizeVal(refs);
    if (typeof refs === 'string') return renderContent(refs);
    return '<ol class="refs">' + refs.map(function (r, i) {
      return '<li id="ref-' + (i + 1) + '">' + inlineFormat(window.pickLang(r)) + '</li>';
    }).join('') + '</ol>';
  }

  function renderTopSection(node, m) {
    var sections = m.sections;
    var filled = nodeHasContent(node, sections);
    if (!filled && !showEmpty) return '';

    var bodyInner;
    if (node.references) {
      bodyInner = renderReferences(sections[node.id]);
    } else {
      var own = hasContent(sections[node.id]) ? renderContent(sections[node.id]) : '';
      var kids = (node.children || []).map(function (c) {
        return renderSubsection(c, sections, 1);
      }).join('');
      bodyInner = own + kids;
      if (!bodyInner) bodyInner = '<p class="empty-note">' + esc(t('emptyNote')) + '</p>';
    }

    return '<section class="mono-section' + (node.alert ? ' section-alert' : '') + '" id="sec-' + esc(node.id) + '">' +
      '<button type="button" class="sec-head" data-toggle-section>' +
      '<span><span class="sec-en">' + esc(secTitle(node)) + '</span> <span class="sec-th">' + esc(secSub(node)) + '</span></span>' +
      '<span class="sec-caret">▾</span></button>' +
      '<div class="sec-body">' + bodyInner + '</div></section>';
  }

  function viewItem(id) {
    var m = window.HERB_DB.byId[id];
    if (!m) return viewNotFound();

    var sections = m.sections || {};

    var alertHtml = '';
    var alertItems = (m.alerts || []).slice();
    if (alertItems.length) {
      alertHtml = '<div class="alert-banner"><p class="alert-title">' + esc(t('alertBanner')) + '</p><ul>' +
        alertItems.map(function (a) { return '<li>' + inlineFormat(window.pickLang(a)) + '</li>'; }).join('') + '</ul></div>';
    }

    var toc = '<nav class="mono-toc" aria-label="' + esc(t('outlineTitle')) + '"><div class="toc-title">' + esc(t('outlineTitle')) + '</div><ul>' +
      SCHEMA.map(function (n) { return tocEntry(n, sections); }).join('') + '</ul></nav>';

    var body = SCHEMA.map(function (n) { return renderTopSection(n, m); }).join('');

    var meta = [];
    if (m.scientificName) meta.push('<span class="meta-item"><b>' + esc(t('metaSci')) + '</b> <i>' + esc(m.scientificName) + '</i></span>');
    if (m.family) meta.push('<span class="meta-item"><b>' + esc(t('metaFamily')) + '</b> ' + esc(window.pickLang(m.family)) + '</span>');
    if (m.partUsed) meta.push('<span class="meta-item"><b>' + esc(t('metaPart')) + '</b> ' + esc(window.pickLang(m.partUsed)) + '</span>');
    if (m.synonyms && m.synonyms.length) meta.push('<span class="meta-item"><b>' + esc(t('metaSyn')) + '</b> ' + esc(m.synonyms.join(', ')) + '</span>');
    if (m.updated) meta.push('<span class="meta-item"><b>' + esc(t('metaUpdated')) + '</b> ' + esc(m.updated) + '</span>');

    var sec = secondaryName(m);

    app.innerHTML =
      '<div class="back-row"><a href="#/list">' + esc(t('backToList')) + '</a></div>' +
      '<div class="mono-layout">' + toc +
      '<div class="mono-main">' +
      '  <header class="mono-header">' +
      '    <h1>' + esc(primaryName(m)) + '</h1>' +
      (sec ? '<p class="mono-en">' + esc(sec) + '</p>' : '') +
      '    <div class="badge-row"><span class="badge badge-cat">' + esc(catLabel(m.category)) + '</span>' + statusBadge(m.status) + '</div>' +
      '    <div class="mono-meta">' + meta.join('') + '</div>' +
      '  </header>' +
      '  <div class="mono-toolbar">' +
      '    <button type="button" class="btn" id="btn-expand">' + esc(t('expandAll')) + '</button>' +
      '    <button type="button" class="btn" id="btn-collapse">' + esc(t('collapseAll')) + '</button>' +
      '    <button type="button" class="btn" id="btn-empty">' + esc(showEmpty ? t('hideEmpty') : t('showEmpty')) + '</button>' +
      '    <button type="button" class="btn btn-primary" id="btn-print">' + esc(t('print')) + '</button>' +
      '  </div>' +
      alertHtml + body +
      '</div></div>';

    document.getElementById('btn-expand').addEventListener('click', function () {
      document.querySelectorAll('.mono-section').forEach(function (el) { el.classList.remove('collapsed'); });
    });
    document.getElementById('btn-collapse').addEventListener('click', function () {
      document.querySelectorAll('.mono-section').forEach(function (el) { el.classList.add('collapsed'); });
    });
    document.getElementById('btn-empty').addEventListener('click', function () {
      showEmpty = !showEmpty;
      localStorage.setItem('herbdb.showEmpty', showEmpty ? '1' : '0');
      viewItem(id);
    });
    document.getElementById('btn-print').addEventListener('click', function () { window.print(); });

    setupScrollSpy();
  }

  function setupScrollSpy() {
    if (!('IntersectionObserver' in window)) return;
    var links = {};
    document.querySelectorAll('.mono-toc a[data-anchor]').forEach(function (a) {
      links[a.getAttribute('data-anchor')] = a;
    });
    var current = null;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        if (links[id]) {
          if (current) current.classList.remove('active');
          current = links[id];
          current.classList.add('active');
        }
      });
    }, { rootMargin: '-70px 0px -70% 0px', threshold: 0 });
    document.querySelectorAll('.mono-section[id]').forEach(function (el) { observer.observe(el); });
  }

  function viewNotFound() {
    app.innerHTML = '<div class="empty-state"><h2>' + esc(t('notFoundTitle')) + '</h2>' +
      '<p><a href="#/">' + esc(t('backHome')) + '</a></p></div>';
  }

  /* ============================================================
     เหตุการณ์ที่ใช้ event delegation (TOC, ลิงก์อ้างอิง, ย่อ/ขยายหัวข้อ)
     ============================================================ */
  document.addEventListener('click', function (e) {
    var tEl = e.target.closest ? e.target.closest('[data-anchor], [data-ref], [data-toggle-section]') : null;
    if (!tEl) return;

    if (tEl.hasAttribute('data-anchor')) {
      e.preventDefault();
      var el = document.getElementById(tEl.getAttribute('data-anchor'));
      if (el) {
        var s = el.classList.contains('mono-section') ? el : el.closest('.mono-section');
        if (s) s.classList.remove('collapsed');
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    if (tEl.hasAttribute('data-ref')) {
      e.preventDefault();
      var ref = document.getElementById('ref-' + tEl.getAttribute('data-ref'));
      if (ref) {
        var refSec = ref.closest('.mono-section');
        if (refSec) refSec.classList.remove('collapsed');
        ref.scrollIntoView({ behavior: 'smooth', block: 'center' });
        ref.style.background = 'var(--brand-soft)';
        setTimeout(function () { ref.style.background = ''; }, 1600);
      }
      return;
    }

    if (tEl.hasAttribute('data-toggle-section')) {
      var section = tEl.closest('.mono-section');
      if (section) section.classList.toggle('collapsed');
    }
  });

  /* ============================================================
     Router
     ============================================================ */
  function render() {
    var r = parseRoute();
    var page = r.path[0] || '';

    document.querySelectorAll('.topbar nav a[data-nav]').forEach(function (a) {
      var nav = a.getAttribute('data-nav');
      var active = (nav === 'home' && !page) || (nav === 'list' && page === 'list');
      a.classList.toggle('active', active);
    });

    if (!page) return viewHome();
    if (page === 'list') return viewList(r.params);
    if (page === 'item' && r.path[1]) return viewItem(decodeURIComponent(r.path[1]));
    return viewNotFound();
  }

  window.addEventListener('hashchange', function () {
    render();
    window.scrollTo(0, 0);
  });

  /* ============================================================
     ปุ่มสลับภาษา
     ============================================================ */
  function setupLangToggle() {
    var toggle = document.getElementById('lang-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', function () {
      LANG.set(LANG.other());
      window.applyStaticI18n();
      render();
    });
  }

  /* ============================================================
     เริ่มต้น
     ============================================================ */
  window.applyStaticI18n();
  setupLangToggle();
  app.innerHTML = '<div class="empty-state">' + esc(t('loading')) + '</div>';
  loadData().then(render);
})();
