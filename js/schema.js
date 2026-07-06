/*
 * schema.js — โครงหัวข้อ (Outline) ของโมโนกราฟ อ้างอิงรูปแบบ UpToDate (Lexidrug)
 * ปรับใช้กับผลิตภัณฑ์เสริมอาหารและสมุนไพร (ไม่ใช่ยา)
 *
 * แต่ละหัวข้อ (node) ประกอบด้วย:
 *   id       : คีย์ที่ใช้ในไฟล์ข้อมูล (data/monographs/*.js) ภายใต้ sections{}
 *   en       : ชื่อหัวข้อภาษาอังกฤษ (ตาม outline ของ UpToDate)
 *   th       : ชื่อหัวข้อภาษาไทย
 *   children : หัวข้อย่อย (ถ้ามี)
 *   hint     : คำแนะนำการกรอกข้อมูล (แสดงในหน้า "เพิ่มข้อมูล")
 *
 * หมายเหตุ: หัวข้อที่มี children สามารถมีเนื้อหาของตัวเองได้ด้วย
 * (ใส่เนื้อหาใน sections ด้วย id ของหัวข้อนั้น)
 */

window.MONOGRAPH_SCHEMA = [
  {
    id: 'alerts', en: 'ALERTS', th: 'การแจ้งเตือนสำคัญ', alert: true,
    hint: 'ประเด็นเร่งด่วน/คำเตือนระดับสูงที่ผู้ใช้ควรเห็นก่อน เช่น การเรียกคืนผลิตภัณฑ์ การปลอมปน (โดยปกติจะแสดงเป็นแบนเนอร์สีแดงด้านบนจาก field alerts ของแต่ละรายการ)',
  },
  {
    id: 'pharmacologicCategory', en: 'Pharmacologic Category', th: 'หมวดหมู่ทางเภสัชวิทยา',
    hint: 'เช่น สมุนไพร (Herbal), ผลิตภัณฑ์เสริมอาหาร (Dietary Supplement), สารต้านอนุมูลอิสระ',
  },
  {
    id: 'dosing', en: 'Dosing', th: 'ขนาดรับประทาน',
    children: [
      {
        id: 'dosingAdult', en: 'Adult', th: 'ผู้ใหญ่',
        children: [
          { id: 'adultDosing', en: 'Adult Dosing', th: 'ขนาดรับประทานในผู้ใหญ่', hint: 'ระบุตามข้อบ่งใช้ เช่น "อาการท้องอืด: ครั้งละ 500 มก. วันละ 4 ครั้ง"' },
          { id: 'adultKidney', en: 'Kidney Impairment', th: 'การทำงานของไตบกพร่อง', hint: 'การปรับขนาดหรือข้อควรระวังในผู้ที่ไตบกพร่อง' },
          { id: 'adultLiver', en: 'Liver Impairment', th: 'การทำงานของตับบกพร่อง', hint: 'การปรับขนาดหรือข้อควรระวังในผู้ที่ตับบกพร่อง' },
          { id: 'olderAdult', en: 'Older Adult', th: 'ผู้สูงอายุ', hint: 'ข้อพิจารณาเฉพาะในผู้สูงอายุ' },
        ],
      },
      {
        id: 'dosingPediatric', en: 'Pediatric', th: 'เด็ก',
        children: [
          { id: 'pediatricDosing', en: 'Pediatric Dosing', th: 'ขนาดรับประทานในเด็ก', hint: 'ระบุช่วงอายุ/น้ำหนักให้ชัดเจน หากไม่แนะนำให้ใช้ในเด็กให้ระบุด้วย' },
          { id: 'pediatricKidney', en: 'Kidney Impairment', th: 'การทำงานของไตบกพร่อง', hint: 'การปรับขนาดหรือข้อควรระวังในเด็กที่ไตบกพร่อง' },
          { id: 'pediatricLiver', en: 'Liver Impairment', th: 'การทำงานของตับบกพร่อง', hint: 'การปรับขนาดหรือข้อควรระวังในเด็กที่ตับบกพร่อง' },
        ],
      },
    ],
  },
  {
    id: 'adverseReactions', en: 'Adverse Reactions', th: 'อาการไม่พึงประสงค์',
    children: [
      { id: 'adrSignificant', en: 'Adverse Reactions (Significant): Considerations', th: 'อาการไม่พึงประสงค์ที่สำคัญ: ข้อพิจารณา', hint: 'อาการไม่พึงประสงค์ที่รุนแรง/สำคัญทางคลินิก พร้อมกลไก ปัจจัยเสี่ยง และแนวทางจัดการ' },
      { id: 'adrList', en: 'Adverse Reactions', th: 'รายการอาการไม่พึงประสงค์', hint: 'รายการอาการไม่พึงประสงค์ จัดตามระบบอวัยวะหรือความถี่' },
    ],
  },
  {
    id: 'contraWarnings', en: 'Contraindications/Warnings', th: 'ข้อห้ามใช้/คำเตือน',
    children: [
      { id: 'contraindications', en: 'Contraindications', th: 'ข้อห้ามใช้', hint: 'ภาวะหรือกลุ่มผู้ใช้ที่ห้ามใช้ผลิตภัณฑ์นี้' },
      { id: 'warningsPrecautions', en: 'Warnings/Precautions', th: 'คำเตือนและข้อควรระวัง', hint: 'ข้อควรระวัง กลุ่มเสี่ยง และคำเตือนตามประกาศของหน่วยงานกำกับดูแล' },
    ],
  },
  {
    id: 'preparations', en: 'Preparations', th: 'รูปแบบผลิตภัณฑ์',
    children: [
      {
        id: 'prepUS', en: 'US', th: 'สหรัฐอเมริกา',
        children: [
          { id: 'dosageForms', en: 'Dosage Forms', th: 'รูปแบบผลิตภัณฑ์', hint: 'เช่น แคปซูล 500 มก., ผงชง, สารสกัดเข้มข้น (ระบุความแรง/ปริมาณสารสำคัญ)' },
          { id: 'genericAvailable', en: 'Generic Equivalent Available', th: 'ผลิตภัณฑ์เทียบเท่าทั่วไป', hint: 'มีผลิตภัณฑ์ทั่วไป/หลายยี่ห้อจำหน่ายหรือไม่' },
          { id: 'pricing', en: 'Pricing', th: 'ราคา', hint: 'ช่วงราคาโดยประมาณ (ระบุวันที่อ้างอิงราคา)' },
        ],
      },
      { id: 'prepCanada', en: 'Canada: Dosage Forms', th: 'แคนาดา: รูปแบบผลิตภัณฑ์', hint: 'รูปแบบผลิตภัณฑ์ที่จำหน่ายในแคนาดา' },
    ],
  },
  {
    id: 'administration', en: 'Administration', th: 'วิธีรับประทาน/วิธีใช้',
    children: [
      { id: 'adminAdult', en: 'Adult: Administration', th: 'ผู้ใหญ่: วิธีใช้', hint: 'เช่น รับประทานพร้อมอาหารเพื่อลดการระคายเคืองกระเพาะ' },
      { id: 'adminPediatric', en: 'Pediatric: Administration', th: 'เด็ก: วิธีใช้', hint: 'วิธีใช้เฉพาะในเด็ก (ถ้ามี)' },
    ],
  },
  {
    id: 'storageStability', en: 'Storage/Stability', th: 'การเก็บรักษา/ความคงตัว',
    hint: 'อุณหภูมิ ความชื้น แสง และอายุหลังเปิดใช้',
  },
  {
    id: 'uses', en: 'Uses', th: 'ข้อบ่งใช้/การนำไปใช้',
    children: [
      { id: 'labeledIndications', en: 'Labeled Indications', th: 'ข้อบ่งใช้ตามฉลาก/ที่ขึ้นทะเบียน', hint: 'สรรพคุณที่ได้รับอนุญาตตามฉลาก/ทะเบียน (เช่น ตามบัญชียาหลักแห่งชาติด้านสมุนไพร)' },
      { id: 'offLabelAdult', en: 'Off-Label: Adult', th: 'การใช้นอกเหนือฉลาก: ผู้ใหญ่', hint: 'การใช้ที่มีหลักฐานสนับสนุนแต่ยังไม่ได้ขึ้นทะเบียน ระบุระดับหลักฐานประกอบ' },
    ],
  },
  {
    id: 'safetyIssues', en: 'Medication Safety Issues', th: 'ประเด็นความปลอดภัยของผลิตภัณฑ์',
    hint: 'เช่น ชื่อพ้อง–มองคล้าย (LASA), การปลอมปนยาแผนปัจจุบัน, โลหะหนัก, ความสับสนของชนิดพืช',
  },
  {
    id: 'interactions', en: 'Interactions', th: 'อันตรกิริยา',
    children: [
      { id: 'metabolismEffects', en: 'Metabolism/Transport Effects', th: 'ผลต่อเอนไซม์เมแทบอลิซึม/ตัวขนส่ง', hint: 'เช่น ยับยั้ง/เหนี่ยวนำ CYP3A4, CYP2C9, P-glycoprotein' },
      { id: 'drugInteractions', en: 'Drug Interactions', th: 'อันตรกิริยากับยา', hint: 'รายการยา/สมุนไพร/อาหารเสริมที่เกิดอันตรกิริยา พร้อมระดับความรุนแรงและคำแนะนำ' },
    ],
  },
  {
    id: 'reproduction', en: 'Reproduction, Pregnancy, Lactation', th: 'การเจริญพันธุ์ การตั้งครรภ์ และการให้นมบุตร',
    children: [
      { id: 'reproductiveConsiderations', en: 'Reproductive Considerations', th: 'ข้อพิจารณาด้านการเจริญพันธุ์', hint: 'ผลต่อภาวะเจริญพันธุ์ การวางแผนมีบุตร' },
      { id: 'pregnancyConsiderations', en: 'Pregnancy Considerations', th: 'ข้อพิจารณาในหญิงตั้งครรภ์', hint: 'ความปลอดภัย/ข้อห้ามในหญิงตั้งครรภ์' },
      { id: 'breastfeedingConsiderations', en: 'Breastfeeding Considerations', th: 'ข้อพิจารณาในหญิงให้นมบุตร', hint: 'การขับออกทางน้ำนมและความปลอดภัยต่อทารก' },
    ],
  },
  {
    id: 'monitoring', en: 'Monitoring', th: 'การติดตาม',
    children: [
      { id: 'monitoringParameters', en: 'Monitoring Parameters', th: 'พารามิเตอร์ที่ควรติดตาม', hint: 'เช่น ค่าการทำงานของตับ/ไต, INR (หากใช้ร่วมกับ warfarin), อาการไม่พึงประสงค์' },
    ],
  },
  {
    id: 'pharmacology', en: 'Pharmacology', th: 'เภสัชวิทยา',
    children: [
      { id: 'mechanismOfAction', en: 'Mechanism of Action', th: 'กลไกการออกฤทธิ์', hint: 'สารสำคัญ (active constituents) และกลไกการออกฤทธิ์ที่เสนอ' },
      { id: 'pharmacokinetics', en: 'Pharmacokinetics', th: 'เภสัชจลนศาสตร์', hint: 'การดูดซึม การกระจายตัว เมแทบอลิซึม การขับออก (ถ้ามีข้อมูล)' },
      { id: 'pkAdditional', en: 'Pharmacokinetics: Additional Considerations', th: 'เภสัชจลนศาสตร์: ข้อพิจารณาเพิ่มเติม', hint: 'เช่น ผลของอาหาร สูตรตำรับที่เพิ่มการดูดซึม ความแปรปรวนระหว่างบุคคล' },
    ],
  },
  {
    id: 'medicationGuide', en: 'Medication Guide and/or Vaccine Information Statement (VIS)', th: 'เอกสารกำกับผลิตภัณฑ์/ข้อมูลสำหรับผู้บริโภค',
    hint: 'ลิงก์หรือสรุปเอกสารข้อมูลสำหรับผู้บริโภค (ถ้ามี)',
  },
  {
    id: 'counselingPoints', en: 'Patient Counseling Points', th: 'คำแนะนำสำหรับผู้ใช้ผลิตภัณฑ์',
    hint: 'ประเด็นที่ควรสื่อสารกับผู้ใช้ เช่น วิธีรับประทาน สัญญาณอันตรายที่ต้องหยุดใช้และพบแพทย์',
  },
  {
    id: 'brandInternational', en: 'Brand Names: International', th: 'ชื่อการค้า: นานาชาติ',
    hint: 'ตัวอย่างชื่อการค้าในประเทศอื่น ๆ รวมถึงประเทศไทย',
  },
  {
    id: 'references', en: 'REFERENCES', th: 'เอกสารอ้างอิง', references: true,
    hint: 'ใส่เป็นรายการ (ในไฟล์ข้อมูลใช้ array ของข้อความ) — อ้างอิงในเนื้อหาด้วย [1], [2] ได้',
  },
];

/* หมวดหมู่ผลิตภัณฑ์ที่ใช้จัดกลุ่ม/กรองในหน้ารายการ */
window.PRODUCT_CATEGORIES = {
  'herbal':      { th: 'สมุนไพร',            en: 'Herbal' },
  'vitamin':     { th: 'วิตามิน',             en: 'Vitamin' },
  'mineral':     { th: 'แร่ธาตุ',             en: 'Mineral' },
  'fatty-acid':  { th: 'กรดไขมัน/น้ำมัน',     en: 'Fatty Acid / Oil' },
  'probiotic':   { th: 'โพรไบโอติก',          en: 'Probiotic' },
  'amino-acid':  { th: 'กรดอะมิโน/โปรตีน',    en: 'Amino Acid / Protein' },
  'enzyme':      { th: 'เอนไซม์',             en: 'Enzyme' },
  'other':       { th: 'อื่น ๆ',              en: 'Other' },
};

/* สถานะความสมบูรณ์ของข้อมูลแต่ละรายการ */
window.ENTRY_STATUS = {
  'draft':    { th: 'ฉบับร่าง',        cls: 'status-draft' },
  'review':   { th: 'รอตรวจทาน',      cls: 'status-review' },
  'complete': { th: 'ตรวจทานแล้ว',    cls: 'status-complete' },
};
