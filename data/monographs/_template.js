/*
 * _template.js — แม่แบบสำหรับสร้างไฟล์โมโนกราฟใหม่
 *
 * วิธีใช้:
 *   1. คัดลอกไฟล์นี้ แล้วเปลี่ยนชื่อเป็น <ชื่อผลิตภัณฑ์>.js เช่น ginger.js
 *   2. แก้ค่า id (ต้องไม่ซ้ำกับรายการอื่น) และข้อมูลอื่น ๆ
 *   3. เพิ่มพาธไฟล์ลงใน data/manifest.js
 *
 * รูปแบบเนื้อหาของแต่ละหัวข้อ (sections[...]) รองรับ:
 *   - ข้อความล้วน (string): ใช้ markdown อย่างง่าย
 *       บรรทัดว่าง = ย่อหน้าใหม่ | "## หัวข้อ" | "- จุด" | "1. ลำดับ" | **หนา** *เอียง* | อ้างอิง [1]
 *   - อาร์เรย์ของบล็อก: ['ข้อความ', {note:'...'}, {table:{headers:[...], rows:[[...]]}}]
 *
 *   สองภาษา (ไทย/อังกฤษ): เขียนเป็น { th: 'ข้อความไทย', en: 'English text' } ได้ทุกที่ที่เป็นข้อความ
 *       เช่น  labeledIndications: { th: 'บรรเทา...', en: 'Relief of...' }
 *             partUsed: { th: 'เหง้า', en: 'Rhizome' }
 *             alerts: [ { th: '...', en: '...' } ]
 *             ในตาราง: headers/rows แต่ละช่องเป็น { th: '...', en: '...' } ได้
 *       ระบบจะเลือกภาษาตามปุ่มสลับภาษา (ถ้าไม่มีภาษาที่เลือกจะใช้ภาษาที่มีแทน)
 *
 * ดูรายการ id ของหัวข้อทั้งหมดได้ที่ js/schema.js
 */
HERB_DB.register({
  id: 'template-id',              // ★ ต้องไม่ซ้ำ (ใช้ตัวอักษร a-z, ตัวเลข, ขีดกลาง)
  nameTh: 'ชื่อผลิตภัณฑ์ (ไทย)',
  nameEn: 'Product Name (English)',
  scientificName: '',             // ชื่อวิทยาศาสตร์ (ถ้าเป็นสมุนไพร)
  family: '',                     // วงศ์พืช
  partUsed: '',                   // ส่วนที่ใช้ เช่น เหง้า, ใบ
  category: 'herbal',             // herbal | vitamin | mineral | fatty-acid | probiotic | amino-acid | enzyme | other
  status: 'draft',                // draft | review | complete
  updated: '2026-01-01',          // วันที่อัปเดตล่าสุด (YYYY-MM-DD)
  synonyms: [],                   // ชื่อพ้อง/ชื่ออื่น ๆ สำหรับการค้นหา
  alerts: [],                     // ข้อความแจ้งเตือน (แสดงเป็นแบนเนอร์ด้านบน)

  sections: {
    // ใส่เนื้อหาโดยใช้ id ของหัวข้อจาก schema.js เช่น:
    // pharmacologicCategory: 'สมุนไพร',
    // labeledIndications: '...',
    // references: ['อ้างอิงที่ 1', 'อ้างอิงที่ 2'],
  },
});
