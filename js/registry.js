/*
 * registry.js — ทะเบียนกลางสำหรับเก็บข้อมูลโมโนกราฟทั้งหมด
 * ไฟล์ข้อมูลแต่ละไฟล์ใน data/monographs/ จะเรียก HERB_DB.register({...})
 * เพื่อลงทะเบียนตัวเองเข้ามาในระบบ
 */

window.HERB_DB = {
  items: [],
  byId: Object.create(null),

  register: function (mono) {
    if (!mono || typeof mono !== 'object' || !mono.id) {
      console.warn('HERB_DB.register: ข้อมูลไม่ถูกต้อง (ต้องมี id)', mono);
      return;
    }
    mono.sections = mono.sections || {};
    mono.synonyms = mono.synonyms || [];
    mono.category = mono.category || 'other';
    mono.status = mono.status || 'draft';

    if (this.byId[mono.id]) {
      // ลงทะเบียนซ้ำ: แทนที่รายการเดิม (เผื่อกรณีแก้ไขไฟล์)
      var idx = this.items.findIndex(function (m) { return m.id === mono.id; });
      if (idx >= 0) this.items[idx] = mono;
      console.warn('HERB_DB.register: id ซ้ำ "' + mono.id + '" — ใช้ข้อมูลล่าสุดแทน');
    } else {
      this.items.push(mono);
    }
    this.byId[mono.id] = mono;
  },
};
