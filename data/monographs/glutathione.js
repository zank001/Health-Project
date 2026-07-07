/*
 * กลูตาไธโอน (Glutathione) — เนื้อหาสองภาษา (ไทย/อังกฤษ)
 * เน้นประเด็นความปลอดภัย โดยเฉพาะชนิดฉีด (IV/IM) เพื่อความงาม
 * ข้อมูลจากรายงานผู้ป่วย/หน่วยงานกำกับดูแล — ไม่ใช้แทนคำแนะนำของแพทย์/เภสัชกร
 */
HERB_DB.register({
  id: 'glutathione',
  nameTh: 'กลูตาไธโอน',
  nameEn: 'Glutathione',
  scientificName: '',
  family: '',
  partUsed: '',
  category: 'amino-acid',
  status: 'review',
  updated: '2026-07-07',
  synonyms: ['GSH', 'L-glutathione', 'reduced glutathione', 'กลูต้า', 'กลูตาไธโอน'],
  alerts: [
    {
      th: 'การฉีดกลูตาไธโอน (IV/IM) ขนาดสูงเพื่อความงามมีรายงานปฏิกิริยารุนแรง: SIRS/ช็อก, Stevens-Johnson syndrome/TEN, anaphylaxis และตับอักเสบ — Philippine FDA และ US FDA ออกคำเตือน',
      en: 'High-dose injectable glutathione (IV/IM) for skin whitening has caused serious reactions: SIRS/shock, Stevens-Johnson syndrome/TEN, anaphylaxis, and liver injury — the Philippine FDA and US FDA have issued warnings.',
    },
    {
      th: 'ความเสี่ยงหลักของผลิตภัณฑ์ฉีดที่ไม่ได้มาตรฐานคือการปนเปื้อน **endotoxin** (มีรายงานผู้ป่วยหลายราย) มากกว่าตัวโมเลกุลกลูตาไธโอนเอง',
      en: 'The main risk of unregulated injectable products is **endotoxin contamination** (multiple reported cases) rather than the glutathione molecule itself.',
    },
    {
      th: 'ยังไม่มีข้อมูล clinical trial รองรับความปลอดภัยระยะยาวของการฉีดกลูตาไธโอนเพื่อความงาม',
      en: 'There is no clinical-trial evidence supporting the long-term safety of injectable glutathione for cosmetic use.',
    },
    {
      th: 'กลูตาไธโอนชนิดรับประทานถูกย่อยเป็นกรดอะมิโนที่ลำไส้ ทำให้ระดับในเซลล์ไม่เพิ่มขึ้นอย่างมีนัยสำคัญ (ชีวปริมาณออกฤทธิ์ต่ำ)',
      en: 'Oral glutathione is broken down into amino acids in the gut, so it does not significantly raise intracellular glutathione (low bioavailability).',
    },
  ],

  sections: {
    pharmacologicCategory: {
      th: 'ผลิตภัณฑ์เสริมอาหาร; สารต้านอนุมูลอิสระ (tripeptide: glutamate–cysteine–glycine)',
      en: 'Dietary supplement; antioxidant (a tripeptide: glutamate–cysteine–glycine)',
    },

    adrSignificant: [
      { th: '## ชนิดฉีด (IV/IM) เพื่อความงาม — ความเสี่ยงร้ายแรง', en: '## Injectable (IV/IM) for cosmetic use — serious risks' },
      {
        th: '- **SIRS/ช็อก:** รายงานผู้ป่วยหญิง 30 ปี หลังได้รับ IV glutathione ขนาดสูง — ช็อก (SBP 50–60 mmHg), ไข้ >41°C, ตับวายเฉียบพลัน (ALT 311), coagulopathy; สงสัย endotoxin contamination [1]\n- **SJS/TEN:** รายงานผู้ป่วยหญิง 33 ปี หลัง IV glutathione + vitamin C/D — ผิวลอก 6.5% ของพื้นผิวกาย ต้องรักษาใน burn center; Philippine FDA เตือนความเชื่อมโยงตั้งแต่ปี 2019 [2]\n- **Endotoxin contamination:** ผู้ป่วย 7 ราย เกิด probable endotoxin poisoning จาก infusion ที่ปนเปื้อน — ชี้ว่าความเสี่ยงหลักคือการปนเปื้อน [3]\n- **Anaphylaxis/ตับ:** การศึกษา placebo-controlled หญิง 32 ราย (IV glutathione + vitamin C) พบผลไม่พึงประสงค์ทุกราย, ตับผิดปกติ 8 ราย, anaphylactic shock 1 ราย [4]',
        en: '- **SIRS/shock:** a 30-year-old woman developed severe SIRS after high-dose IV glutathione — shock (SBP 50–60 mmHg), fever >41°C, acute liver injury (ALT 311), coagulopathy; suspected endotoxin contamination [1]\n- **SJS/TEN:** a 33-year-old woman developed SJS/TEN after IV glutathione + vitamin C/D — 6.5% total body surface sloughing, treated in a burn center; the Philippine FDA has warned of this link since 2019 [2]\n- **Endotoxin contamination:** 7 patients had probable endotoxin poisoning from contaminated infusions — indicating contamination is the main risk [3]\n- **Anaphylaxis/liver:** a placebo-controlled study in 32 women (IV glutathione + vitamin C) found adverse effects in all, deranged liver function in 8, and anaphylactic shock in 1 [4]',
      },
      {
        note: {
          th: '**คำเตือนจากหน่วยงานกำกับ:** US FDA เตือนเรื่องความปลอดโปร่ง (sterility) ของการนำกลูตาไธโอนมาผสมเป็นยาฉีด (compounded sterile injectable) และระบุว่ายังไม่มีข้อมูลรองรับความปลอดภัยระยะยาว [5] การศึกษาในสัตว์พบว่าการฉีด IM ขนาดสูงในหนูเพิ่ม MDA และลด GSH ในรังไข่ พร้อมพยาธิสภาพ (อาจออกฤทธิ์เป็น pro-oxidant) [6]',
          en: '**Regulatory warnings:** the US FDA has flagged sterility concerns for compounding glutathione into sterile injectables and notes no data supporting long-term safety [5]. Animal studies show high-dose IM glutathione in rats increased MDA and lowered ovarian GSH with pathological changes (possibly acting as a pro-oxidant) [6]',
        },
      },
      { th: '## ชนิดรับประทาน (oral)', en: '## Oral form' },
      {
        th: 'กลูตาไธโอนที่รับประทานถูกย่อยเป็น cysteine, glycine และ glutamate ที่ jejunum จึงไม่เพิ่มระดับกลูตาไธโอนในเซลล์อย่างมีนัยสำคัญ — เป็นข้อจำกัดสำคัญที่ควรแจ้งผู้ใช้ก่อนแนะนำผลิตภัณฑ์ชนิดรับประทาน [7]',
        en: 'Oral glutathione is degraded into cysteine, glycine, and glutamate in the jejunum, so it does not significantly raise intracellular glutathione — an important limitation to communicate before recommending oral products [7]',
      },
    ],

    warningsPrecautions: {
      th: '- หลีกเลี่ยงการฉีดกลูตาไธโอนเพื่อความงามจากแหล่งที่ไม่ได้มาตรฐาน (เสี่ยง endotoxin/ปนเปื้อนและปฏิกิริยารุนแรง)\n- หยุดใช้ทันทีและพบแพทย์หากมีผื่นรุนแรง ผิวลอก ไข้สูง หรืออาการช็อก\n- ยังไม่มีข้อมูลความปลอดภัยระยะยาวของการฉีด',
      en: '- Avoid injectable glutathione for cosmetic use from unregulated sources (risk of endotoxin/contamination and severe reactions)\n- Stop immediately and seek care if severe rash, skin peeling, high fever, or shock occurs\n- No long-term safety data exist for injection',
    },

    counselingPoints: {
      th: '- ชนิดรับประทานมีชีวปริมาณออกฤทธิ์ต่ำ (ถูกย่อยที่ลำไส้)\n- การฉีดเพื่อความงามมีความเสี่ยงร้ายแรงและไม่มีหลักฐานความปลอดภัยระยะยาว\n- เลือกผลิตภัณฑ์ที่ได้มาตรฐาน และหลีกเลี่ยงบริการฉีดที่ไม่ได้อยู่ภายใต้การดูแลของแพทย์',
      en: '- Oral forms have low bioavailability (degraded in the gut)\n- Cosmetic injections carry serious risks and lack long-term safety evidence\n- Choose quality-assured products and avoid injection services not supervised by a physician',
    },

    references: [
      'Sharma D, et al. Systemic Inflammatory Response Syndrome Following High-Dose Intravenous Glutathione-Containing Revitalising Solution in a Patient on Tirzepatide: A Case Report. Cureus. 2025;17(5):e84736. doi:10.7759/cureus.84736',
      'Johnson JS, et al. Intravenous Glutathione and Vitamin Supplementation Causing Stevens-Johnson Syndrome: A Case Report. J Burn Care Res. 2025;46(3):652-655. doi:10.1093/jbcr/iraf027',
      'Johnstone T, et al. Seven cases of probable endotoxin poisoning related to contaminated glutathione infusions. Epidemiol Infect. 2018;146(8):931-934. doi:10.1017/S0950268818000420',
      'Zubair R, et al. Efficacy of intravenous glutathione vs. placebo for skin tone lightening. J Pak Assoc Dermatol. 2016;26(2):177-181.',
      'US Food and Drug Administration. FDA highlights concerns with using the dietary ingredient glutathione to compound sterile injectable drugs. 2019.',
      'The Possible Toxic Effects of Glutathione Intramuscular Injection on Ovarian Tissue in Female Albino Rats. Menoufia Med J. 2023.',
      'Oral glutathione bioavailability limitation (jejunal degradation to constituent amino acids) — cited in Johnson JS, et al. J Burn Care Res. 2025;46(3):652-655.',
    ],
  },
});
