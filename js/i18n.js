/*
 * i18n.js — ระบบสองภาษา (ไทย/อังกฤษ) สำหรับข้อความส่วนติดต่อผู้ใช้ (UI chrome)
 *   - เก็บภาษาที่เลือกไว้ใน localStorage (ค่าเริ่มต้น: ไทย)
 *   - window.LANG.t(key) คืนข้อความตามภาษาปัจจุบัน
 *   - window.applyStaticI18n() แปลอิลิเมนต์ที่มี data-i18n ในหน้า (topbar/footer)
 *   - window.localizeVal(v) ใช้กับเนื้อหาที่เขียนเป็น {th, en} เพื่อเลือกภาษา
 *
 * หมายเหตุ: หัวข้อ (outline) มี en/th อยู่แล้วใน schema.js ส่วนเนื้อหาในไฟล์ข้อมูล
 * ที่ยังเป็นภาษาไทยจะแสดงตามที่เขียนไว้ (รองรับการทำสองภาษาภายหลังผ่านรูปแบบ {th, en})
 */

window.I18N_STRINGS = {
  th: {
    brandTagline: 'คลังข้อมูลอาหารเสริมและสมุนไพร',
    navHome: 'หน้าแรก',
    navList: 'รายการทั้งหมด',
    navAdd: '＋ เพิ่มข้อมูล',
    langToggle: 'EN',            // ป้ายบนปุ่ม = ภาษาที่จะสลับไป
    footerDisclaimer: '⚠️ ข้อมูลในระบบนี้จัดทำขึ้นเพื่อการศึกษาและใช้อ้างอิงภายในเท่านั้น ไม่สามารถใช้แทนคำแนะนำ การวินิจฉัย หรือการรักษาจากแพทย์หรือเภสัชกร โปรดปรึกษาบุคลากรทางการแพทย์ก่อนใช้ผลิตภัณฑ์เสริมอาหารหรือสมุนไพรทุกชนิด',
    footerLine: 'HerbBase — ฐานข้อมูลโมโนกราฟอาหารเสริมและสมุนไพร (โครงหัวข้อตามรูปแบบ UpToDate)',
    builderFooter: 'HerbBase — เครื่องมือสร้างโมโนกราฟตามโครงหัวข้อ UpToDate',

    heroTitle: '🌿 คลังข้อมูลอาหารเสริมและสมุนไพร',
    heroSubtitle: 'ฐานข้อมูลโมโนกราฟผลิตภัณฑ์เสริมอาหารและสมุนไพร (ไม่ใช่ยา) โครงหัวข้อตามรูปแบบ UpToDate',
    searchPlaceholder: 'ค้นหาชื่อไทย / อังกฤษ / ชื่อวิทยาศาสตร์ / ชื่อพ้อง…',
    statTotal: 'รายการทั้งหมด',
    statComplete: 'ตรวจทานแล้ว',
    statSections: 'หัวข้อต่อโมโนกราฟ',
    browseByCategory: 'เรียกดูตามหมวดหมู่',
    recentlyUpdated: 'อัปเดตล่าสุด',
    emptyDb: 'ยังไม่มีข้อมูลในระบบ — เริ่มเพิ่มได้จากหน้า “เพิ่มข้อมูล”',

    listTitle: 'รายการทั้งหมด',
    listSubtitle: 'เรียกดูและค้นหาโมโนกราฟอาหารเสริมและสมุนไพรทั้งหมดในระบบ',
    searchShort: 'ค้นหา…',
    allCategories: 'ทุกหมวดหมู่',
    sortTh: 'เรียงตามชื่อไทย',
    sortEn: 'เรียงตามชื่ออังกฤษ',
    sortUpdated: 'อัปเดตล่าสุด',
    noResults: 'ไม่พบรายการที่ตรงกับเงื่อนไข',

    backToList: '← กลับไปหน้ารายการ',
    expandAll: 'ขยายทุกหัวข้อ',
    collapseAll: 'ย่อทุกหัวข้อ',
    hideEmpty: 'ซ่อนหัวข้อที่ยังไม่มีข้อมูล',
    showEmpty: 'แสดงหัวข้อที่ยังไม่มีข้อมูล',
    print: '🖨 พิมพ์',
    outlineTitle: 'Outline · สารบัญ',
    metaSci: 'ชื่อวิทยาศาสตร์:',
    metaFamily: 'วงศ์:',
    metaPart: 'ส่วนที่ใช้:',
    metaSyn: 'ชื่ออื่น:',
    metaUpdated: 'อัปเดต:',
    alertBanner: '⚠️ การแจ้งเตือนสำคัญ (ALERTS)',
    emptyNote: '— ยังไม่มีข้อมูล (จะเพิ่มในภายหลัง) —',
    notFoundTitle: 'ไม่พบหน้าที่ต้องการ',
    backHome: 'กลับหน้าแรก',
    loading: 'กำลังโหลดข้อมูล…',

    // ---- หน้าเพิ่มข้อมูล (builder) ----
    bPageTitle: 'เพิ่มข้อมูลผลิตภัณฑ์ใหม่',
    bPageSub: 'กรอกข้อมูลตามหัวข้อ (outline แบบ UpToDate) — หัวข้อไหนยังไม่มีข้อมูลเว้นว่างไว้ได้ แล้วค่อยเติมทีหลัง',
    bHelpSummary: 'วิธีนำไฟล์ที่สร้างไปใช้งาน',
    bGenerate: 'สร้างไฟล์ข้อมูล',
    bDownload: '⬇ ดาวน์โหลด .js',
    bCopy: '📋 คัดลอกโค้ด',
    bReset: 'ล้างฟอร์ม',
    bOutputPlaceholder: 'โค้ดไฟล์ข้อมูลจะแสดงที่นี่หลังกด “สร้างไฟล์ข้อมูล”…',
    bGeneralInfo: 'ข้อมูลทั่วไป (General Information)',
    bIntro: 'เนื้อหานำ (ถ้ามี)',
    bId: 'รหัส (id) *',
    bIdHint: 'ใช้ a-z, ตัวเลข, ขีดกลาง — ต้องไม่ซ้ำ เช่น ginger',
    bUpdated: 'วันที่อัปเดต (YYYY-MM-DD)',
    bNameTh: 'ชื่อไทย *',
    bNameEn: 'ชื่ออังกฤษ',
    bSci: 'ชื่อวิทยาศาสตร์',
    bSciHint: 'เช่น Zingiber officinale',
    bFamily: 'วงศ์ (Family)',
    bPart: 'ส่วนที่ใช้',
    bPartHint: 'เช่น เหง้า, ใบ',
    bCategory: 'หมวดหมู่',
    bStatus: 'สถานะข้อมูล',
    bSynonyms: 'ชื่อพ้อง/ชื่ออื่น',
    bSynonymsHint: 'คั่นด้วยเครื่องหมายจุลภาค เช่น Ginger, ขิงแก่',
    bAlerts: 'ข้อความแจ้งเตือน (ALERTS)',
    bAlertsHint: 'กรอกแยกบรรทัดละ 1 รายการ (เว้นว่างได้)',
    bRefsHint: 'แต่ละบรรทัด = 1 รายการอ้างอิง',
    bConfirmReset: 'ล้างข้อมูลที่กรอกทั้งหมด?',
    bNeedName: 'กรุณากรอกอย่างน้อยชื่อไทยหรือชื่ออังกฤษ',
    bGeneratedOk: 'สร้างโค้ดเรียบร้อย — ตรวจสอบด้านล่าง',
    bGenFirst: 'กด “สร้างไฟล์ข้อมูล” ก่อน',
    bDownloaded: 'ดาวน์โหลดแล้ว — อย่าลืมเพิ่มพาธใน manifest.js',
    bCopied: 'คัดลอกแล้ว',
    bCleared: 'ล้างฟอร์มแล้ว',
  },
  en: {
    brandTagline: 'Dietary Supplement & Herbal Database',
    navHome: 'Home',
    navList: 'All Entries',
    navAdd: '＋ Add Entry',
    langToggle: 'ไทย',
    footerDisclaimer: '⚠️ This database is intended for education and internal reference only. It is not a substitute for professional advice, diagnosis, or treatment by a physician or pharmacist. Consult a healthcare professional before using any dietary supplement or herbal product.',
    footerLine: 'HerbBase — Monograph database of dietary supplements & herbals (UpToDate-style outline)',
    builderFooter: 'HerbBase — a tool for building monographs on a UpToDate-style outline',

    heroTitle: '🌿 Dietary Supplement & Herbal Database',
    heroSubtitle: 'A monograph database of non-drug dietary supplements and herbal products, organized on a UpToDate-style outline',
    searchPlaceholder: 'Search Thai / English / scientific name / synonym…',
    statTotal: 'total entries',
    statComplete: 'reviewed',
    statSections: 'sections per monograph',
    browseByCategory: 'Browse by category',
    recentlyUpdated: 'Recently updated',
    emptyDb: 'No entries yet — add one from the “Add Entry” page',

    listTitle: 'All Entries',
    listSubtitle: 'Browse and search all dietary-supplement and herbal monographs',
    searchShort: 'Search…',
    allCategories: 'All categories',
    sortTh: 'Sort by Thai name',
    sortEn: 'Sort by English name',
    sortUpdated: 'Recently updated',
    noResults: 'No entries match your filters',

    backToList: '← Back to list',
    expandAll: 'Expand all',
    collapseAll: 'Collapse all',
    hideEmpty: 'Hide empty sections',
    showEmpty: 'Show empty sections',
    print: '🖨 Print',
    outlineTitle: 'Outline · Contents',
    metaSci: 'Scientific name:',
    metaFamily: 'Family:',
    metaPart: 'Part used:',
    metaSyn: 'Also known as:',
    metaUpdated: 'Updated:',
    alertBanner: '⚠️ ALERTS',
    emptyNote: '— No data yet (to be added later) —',
    notFoundTitle: 'Page not found',
    backHome: 'Back to home',
    loading: 'Loading…',

    // ---- Add-entry page (builder) ----
    bPageTitle: 'Add a New Entry',
    bPageSub: 'Fill in the fields following the UpToDate-style outline — leave any field blank to fill in later.',
    bHelpSummary: 'How to use the generated file',
    bGenerate: 'Generate file',
    bDownload: '⬇ Download .js',
    bCopy: '📋 Copy code',
    bReset: 'Clear form',
    bOutputPlaceholder: 'The generated file will appear here after you click “Generate file”…',
    bGeneralInfo: 'General Information',
    bIntro: 'Intro (optional)',
    bId: 'ID (id) *',
    bIdHint: 'Use a-z, digits, hyphens — must be unique, e.g. ginger',
    bUpdated: 'Updated date (YYYY-MM-DD)',
    bNameTh: 'Thai name *',
    bNameEn: 'English name',
    bSci: 'Scientific name',
    bSciHint: 'e.g. Zingiber officinale',
    bFamily: 'Family',
    bPart: 'Part used',
    bPartHint: 'e.g. rhizome, leaf',
    bCategory: 'Category',
    bStatus: 'Status',
    bSynonyms: 'Synonyms / other names',
    bSynonymsHint: 'Comma-separated, e.g. Ginger, ขิงแก่',
    bAlerts: 'Alert messages (ALERTS)',
    bAlertsHint: 'One item per line (optional)',
    bRefsHint: 'One reference per line',
    bConfirmReset: 'Clear all entered data?',
    bNeedName: 'Please enter at least a Thai or English name',
    bGeneratedOk: 'Code generated — review it below',
    bGenFirst: 'Click “Generate file” first',
    bDownloaded: 'Downloaded — remember to add the path in manifest.js',
    bCopied: 'Copied',
    bCleared: 'Form cleared',
  },
};

window.LANG = {
  current: (function () {
    try { return localStorage.getItem('herbdb.lang') === 'en' ? 'en' : 'th'; } catch (e) { return 'th'; }
  })(),
  get: function () { return this.current; },
  set: function (l) {
    this.current = (l === 'en') ? 'en' : 'th';
    try { localStorage.setItem('herbdb.lang', this.current); } catch (e) {}
  },
  other: function () { return this.current === 'en' ? 'th' : 'en'; },
  t: function (key) {
    var dict = window.I18N_STRINGS[this.current] || window.I18N_STRINGS.th;
    var v = dict[key];
    if (v === undefined) v = window.I18N_STRINGS.th[key];
    return v === undefined ? key : v;
  },
};

/* เลือกภาษาจากค่าที่อาจเป็น {th, en} (ใช้กับชื่อหมวด/สถานะ/เนื้อหาแบบ localized) */
window.pickLang = function (obj, fallbackKey) {
  if (obj == null) return '';
  if (typeof obj === 'string') return obj;
  var l = window.LANG.current;
  if (obj[l] != null) return obj[l];
  if (obj.th != null) return obj.th;
  if (obj.en != null) return obj.en;
  return fallbackKey != null ? obj[fallbackKey] : '';
};

/* ตรวจว่าเป็นบล็อกเนื้อหาแบบ localized {th, en} (ไม่ใช่บล็อก note/table/ul ฯลฯ) */
window.isLocalizedBlock = function (v) {
  if (!v || typeof v !== 'object' || Array.isArray(v)) return false;
  var hasLang = ('th' in v) || ('en' in v);
  var hasBlock = ('table' in v) || ('note' in v) || ('ul' in v) || ('ol' in v) || ('p' in v) || ('h' in v);
  return hasLang && !hasBlock;
};

/* คืนค่าที่ localize แล้ว (ถ้าเป็น {th,en} เลือกภาษา; ไม่งั้นคืนค่าเดิม) */
window.localizeVal = function (v) {
  return window.isLocalizedBlock(v) ? window.pickLang(v) : v;
};

/* แปลอิลิเมนต์ที่มี data-i18n ในหน้า (แถบบน/ท้าย) + ตั้งภาษาเอกสาร + ป้ายปุ่มสลับ */
window.applyStaticI18n = function () {
  document.documentElement.lang = window.LANG.current;
  var nodes = document.querySelectorAll('[data-i18n]');
  for (var i = 0; i < nodes.length; i++) {
    var key = nodes[i].getAttribute('data-i18n');
    var val = window.LANG.t(key);
    if (typeof val === 'string') nodes[i].textContent = val;
  }
  var tog = document.getElementById('lang-toggle');
  if (tog) {
    tog.textContent = window.LANG.t('langToggle');
    tog.setAttribute('aria-label', window.LANG.current === 'en' ? 'สลับเป็นภาษาไทย' : 'Switch to English');
  }
};
