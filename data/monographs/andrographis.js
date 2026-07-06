/*
 * ฟ้าทะลายโจร (Andrographis paniculata)
 * โมโนกราฟสมุนไพรไทย — เริ่มมีเนื้อหาอ้างอิงจาก systematic review / meta-analysis
 * ด้านการติดเชื้อทางเดินหายใจส่วนบนและความปลอดภัย (ดูหัวข้อ REFERENCES)
 * หมายเหตุ: ยังอยู่ระหว่างพัฒนาเนื้อหา ไม่ใช้แทนคำแนะนำของแพทย์/เภสัชกร
 */
HERB_DB.register({
  id: 'andrographis',
  nameTh: 'ฟ้าทะลายโจร',
  nameEn: 'Andrographis',
  scientificName: 'Andrographis paniculata (Burm.f.) Nees',
  family: 'Acanthaceae (วงศ์เหงือกปลาหมอ)',
  partUsed: 'ส่วนเหนือดิน (ใบและลำต้น)',
  category: 'herbal',
  status: 'review',
  updated: '2026-07-06',
  synonyms: ['Andrographolide', 'แอนโดรกราโฟไลด์', 'King of Bitters', 'Kalmegh', 'หญ้ากันงู'],
  alerts: [
    'มีรายงานปฏิกิริยาภูมิแพ้รุนแรง (anaphylaxis) และผื่นแพ้ — ควรหยุดใช้ทันทีหากมีอาการแพ้',
  ],

  sections: {
    pharmacologicCategory: 'สมุนไพร (Herbal); ผลิตภัณฑ์เสริมอาหาร; สารกระตุ้นภูมิคุ้มกัน/ต้านการอักเสบ สารสำคัญหลักคือ andrographolide (กลุ่ม diterpenoid lactone) [1]',

    adultDosing: [
      'ตามบัญชียาหลักแห่งชาติด้านสมุนไพรของประเทศไทย:',
      {
        table: {
          headers: ['ข้อบ่งใช้', 'ขนาด (คิดเป็น andrographolide รวม)'],
          rows: [
            ['บรรเทาอาการหวัด/เจ็บคอ', 'andrographolide รวม 60–120 มก./วัน แบ่งให้วันละ 3–4 ครั้ง'],
            ['บรรเทาอาการท้องเสียชนิดไม่ติดเชื้อ', 'ตามขนาดที่ระบุบนฉลากผลิตภัณฑ์'],
          ],
        },
      },
      { note: 'ระยะเวลาการใช้เพื่อบรรเทาหวัดไม่ควรเกิน 5–7 วัน หากอาการไม่ดีขึ้นควรพบแพทย์' },
    ],
    adultLiver: 'มีรายงานภาวะตับอักเสบสัมพันธ์กับการใช้ ควรหลีกเลี่ยงในผู้ที่มีโรคตับ',

    pediatricDosing: 'ควรใช้ภายใต้คำแนะนำของแพทย์/เภสัชกร ข้อมูลความปลอดภัยในเด็กเล็กยังจำกัด',

    adrSignificant: 'โดยรวมฟ้าทะลายโจรมัก**ทนได้ดี** อาการไม่พึงประสงค์ส่วนใหญ่ไม่รุนแรง (ระบบทางเดินอาหาร เช่น คลื่นไส้ ท้องเสีย เบื่ออาหาร) การทบทวนอย่างเป็นระบบและ meta-analysis ด้านความปลอดภัยไม่พบสัญญาณความปลอดภัยร้ายแรงที่ชัดเจน แต่พบรายงาน**ปฏิกิริยาภูมิแพ้** (ผื่น ลมพิษ และในบางรายรุนแรงถึงขั้น anaphylaxis) จึงควรเฝ้าระวังอาการแพ้ [3,5]',
    adrList: '- ผื่นแพ้ ลมพิษ (พบบ่อยที่สุด)\n- ปฏิกิริยาภูมิแพ้รุนแรง (anaphylaxis) — พบน้อยแต่รุนแรง\n- คลื่นไส้ เบื่ออาหาร วิงเวียน',

    contraindications: '- แพ้ฟ้าทะลายโจรหรือพืชในวงศ์ Acanthaceae\n- หญิงตั้งครรภ์และให้นมบุตร\n- ผู้ที่มีภาวะตับหรือไตบกพร่องรุนแรง',
    warningsPrecautions: '- หยุดใช้ทันทีหากมีอาการแพ้ (ผื่น บวม หายใจลำบาก)\n- อาจลดความดันโลหิต ระวังในผู้ที่ใช้ยาลดความดัน\n- อาจกระตุ้นภูมิคุ้มกัน ควรระวังในผู้ที่ใช้ยากดภูมิคุ้มกัน',

    labeledIndications: 'บรรเทาอาการของโรคหวัด เช่น เจ็บคอ และบรรเทาอาการท้องเสียชนิดที่ไม่เกิดจากการติดเชื้อ (ตามบัญชียาหลักแห่งชาติด้านสมุนไพร) [6]',
    offLabelAdult: [
      'การติดเชื้อทางเดินหายใจส่วนบน/เฉียบพลัน (URTI/ARTI): systematic review และ meta-analysis พบว่าฟ้าทะลายโจร (ใช้เดี่ยวหรือในตำรับผสม เช่น ร่วมกับ *Eleutherococcus senticosus* ในสูตร Kan Jang) อาจช่วยบรรเทาอาการ โดยเฉพาะ **ไอ** และ **เจ็บคอ** และอาจลดความรุนแรงและระยะเวลาของอาการ เมื่อเทียบกับยาหลอกหรือการดูแลตามปกติ [2,3,4]',
      { note: 'คุณภาพหลักฐานโดยรวมอยู่ในระดับ **ต่ำถึงปานกลาง** — งานวิจัยมีความแตกต่างกันสูง (heterogeneity) ขนาดตัวอย่างจำกัด และหลายการศึกษาใช้ตำรับผสมจึงแยกผลของฟ้าทะลายโจรเดี่ยวได้ยาก ควรตีความอย่างระมัดระวัง [4]' },
    ],

    drugInteractions: '- ยาต้านการแข็งตัวของเลือด: อาจเพิ่มความเสี่ยงเลือดออก\n- ยากดภูมิคุ้มกัน: อาจต้านฤทธิ์กัน (ฟ้าทะลายโจรกระตุ้นภูมิคุ้มกัน)\n- ยาลดความดันโลหิต/ยาลดน้ำตาล: อาจเสริมฤทธิ์',

    pregnancyConsiderations: 'ห้ามใช้ในหญิงตั้งครรภ์ เนื่องจากมีข้อมูลว่าอาจมีผลต่อการตั้งครรภ์',
    breastfeedingConsiderations: 'ไม่แนะนำให้ใช้ระหว่างให้นมบุตร เนื่องจากข้อมูลความปลอดภัยยังไม่เพียงพอ',

    mechanismOfAction: 'สารสำคัญคือ andrographolide (กลุ่ม diterpenoid lactone) มีฤทธิ์ต้านการอักเสบ กระตุ้นภูมิคุ้มกัน และต้านไวรัสในหลอดทดลอง [1]',

    counselingPoints: '- ใช้เพื่อบรรเทาอาการหวัดระยะสั้นเท่านั้น หากอาการไม่ดีขึ้นใน 3 วันหรือแย่ลง ควรพบแพทย์\n- หยุดใช้ทันทีและพบแพทย์หากมีผื่น บวม หรือหายใจลำบาก\n- ห้ามใช้หากตั้งครรภ์',

    brandInternational: 'ประเทศไทย: มีในบัญชียาหลักแห่งชาติด้านสมุนไพร; จำหน่ายทั่วไปในรูปแคปซูลและยาลูกกลอน',

    references: [
      'Hossain S, et al. Andrographis paniculata (Burm. f.) Wall. ex Nees: A Review of Ethnobotany, Phytochemistry, and Pharmacology. ScientificWorldJournal. 2014;2014:274905. doi:10.1155/2014/274905',
      'Poolsup N, et al. Andrographis paniculata in the symptomatic treatment of uncomplicated upper respiratory tract infection: systematic review of randomized controlled trials. J Clin Pharm Ther. 2004;29(1):37-45. doi:10.1046/j.1365-2710.2003.00534.x',
      'Coon JT, Ernst E. Andrographis paniculata in the treatment of upper respiratory tract infections: a systematic review of safety and efficacy. Planta Med. 2004;70(4):293-298. doi:10.1055/s-2004-818938',
      'Hu XY, et al. Andrographis paniculata (Chuān Xīn Lián) for symptomatic relief of acute respiratory tract infections in adults and children: a systematic review and meta-analysis. PLoS One. 2017;12(8):e0181780. doi:10.1371/journal.pone.0181780',
      'Safety of Andrographis paniculata: a systematic review and meta-analysis. Pharmacoepidemiol Drug Saf. doi:10.1002/pds.5190',
      'บัญชียาหลักแห่งชาติด้านสมุนไพร กระทรวงสาธารณสุข ประเทศไทย.',
    ],
  },
});
