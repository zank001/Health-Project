/*
 * น้ำมันปลา (Fish Oil / Omega-3) — เนื้อหาสองภาษา (ไทย/อังกฤษ)
 * ข้อมูลเป็นตัวอย่างเพื่อการสาธิตโครงสร้าง — ตรวจทานกับแหล่งอ้างอิงทางการก่อนใช้งานจริง
 */
HERB_DB.register({
  id: 'fish-oil',
  nameTh: 'น้ำมันปลา (โอเมกา-3)',
  nameEn: 'Fish Oil (Omega-3 Fatty Acids)',
  scientificName: '',
  family: '',
  partUsed: { th: 'น้ำมันจากเนื้อเยื่อปลาทะเลน้ำลึก', en: 'Oil from the tissue of deep-sea fish' },
  category: 'fatty-acid',
  status: 'review',
  updated: '2026-06-25',
  synonyms: ['Omega-3', 'โอเมกา-3', 'EPA', 'DHA', 'n-3 PUFA', 'Fish oil'],
  alerts: [
    {
      th: 'ขนาดสูง (>3 กรัม/วัน) อาจเพิ่มความเสี่ยงเลือดออกและภาวะหัวใจเต้นผิดจังหวะ (atrial fibrillation)',
      en: 'High doses (>3 g/day) may increase the risk of bleeding and atrial fibrillation.',
    },
  ],

  sections: {
    pharmacologicCategory: {
      th: 'ผลิตภัณฑ์เสริมอาหาร (Dietary Supplement); กรดไขมันไม่อิ่มตัวเชิงซ้อนโอเมกา-3',
      en: 'Dietary supplement; omega-3 polyunsaturated fatty acids',
    },

    adultDosing: [
      {
        th: 'ขนาดขึ้นกับข้อบ่งใช้ โดยคิดจากปริมาณ EPA+DHA รวม (ไม่ใช่ปริมาณน้ำมันปลารวม):',
        en: 'Dose depends on the indication and is based on the combined EPA+DHA content (not total fish-oil weight):',
      },
      {
        table: {
          headers: [
            { th: 'วัตถุประสงค์', en: 'Purpose' },
            { th: 'ขนาด EPA+DHA', en: 'EPA+DHA dose' },
          ],
          rows: [
            [
              { th: 'สุขภาพทั่วไป', en: 'General health' },
              { th: '250–500 มก./วัน', en: '250–500 mg/day' },
            ],
            [
              { th: 'ลดไตรกลีเซอไรด์ในเลือด', en: 'Lowering blood triglycerides' },
              { th: '2–4 กรัม/วัน (ภายใต้การดูแลของแพทย์)', en: '2–4 g/day (under medical supervision)' },
            ],
          ],
        },
      },
      {
        note: {
          th: 'ฉลากผลิตภัณฑ์มักระบุ "น้ำมันปลา 1,000 มก." ซึ่งมี EPA+DHA เพียงประมาณ 300 มก. ควรอ่านปริมาณ EPA+DHA ที่แท้จริง',
          en: 'Labels often state "fish oil 1,000 mg," which contains only about 300 mg of EPA+DHA — check the actual EPA+DHA amount.',
        },
      },
    ],
    adultKidney: { th: 'ไม่จำเป็นต้องปรับขนาดเป็นพิเศษ', en: 'No specific dose adjustment needed.' },
    adultLiver: { th: 'ไม่จำเป็นต้องปรับขนาดเป็นพิเศษ', en: 'No specific dose adjustment needed.' },
    olderAdult: {
      th: 'ใช้ได้ตามขนาดผู้ใหญ่ ระวังความเสี่ยงเลือดออกหากใช้ร่วมกับยาต้านการแข็งตัวของเลือด',
      en: 'Use standard adult doses; watch for bleeding risk if combined with anticoagulants.',
    },

    pediatricDosing: {
      th: 'ใช้ในเด็กควรอยู่ภายใต้คำแนะนำของแพทย์ ขนาดขึ้นกับอายุ น้ำหนัก และข้อบ่งใช้',
      en: 'Use in children should be under a physician’s guidance; dose depends on age, weight, and indication.',
    },

    adrList: [
      {
        table: {
          headers: [
            { th: 'ระบบ', en: 'System' },
            { th: 'อาการ', en: 'Reaction' },
          ],
          rows: [
            [
              { th: 'ทางเดินอาหาร', en: 'Gastrointestinal' },
              { th: 'เรอกลิ่นคาวปลา คลื่นไส้ ท้องเสีย', en: 'Fishy burps, nausea, diarrhea' },
            ],
            [
              { th: 'เลือด', en: 'Hematologic' },
              { th: 'เพิ่มระยะเวลาเลือดออก (ขนาดสูง)', en: 'Prolonged bleeding time (high doses)' },
            ],
            [
              { th: 'หัวใจ', en: 'Cardiac' },
              { th: 'ภาวะหัวใจเต้นผิดจังหวะชนิด AF (ขนาดสูง)', en: 'Atrial fibrillation (high doses)' },
            ],
          ],
        },
      },
    ],

    contraindications: {
      th: 'แพ้ปลาหรือส่วนประกอบของผลิตภัณฑ์',
      en: 'Allergy to fish or to any component of the product.',
    },
    warningsPrecautions: {
      th: '- ขนาดสูง (>3 กรัม/วัน) เพิ่มความเสี่ยงเลือดออก\n- มีรายงานความเสี่ยง atrial fibrillation เพิ่มขึ้นเมื่อใช้ขนาดสูงต่อเนื่อง [1]\n- ระวังการปนเปื้อนโลหะหนัก (ปรอท) และสารมลพิษในผลิตภัณฑ์คุณภาพต่ำ',
      en: '- High doses (>3 g/day) increase bleeding risk\n- Increased risk of atrial fibrillation has been reported with sustained high-dose use [1]\n- Beware of heavy-metal (mercury) and pollutant contamination in low-quality products',
    },

    dosageForms: {
      th: 'ซอฟต์เจล, น้ำมันชนิดน้ำ, รูปแบบ triglyceride และ ethyl ester',
      en: 'Softgels, liquid oil, triglyceride and ethyl-ester forms',
    },
    genericAvailable: { th: 'มี — จำหน่ายหลากหลายยี่ห้อ', en: 'Yes — sold under many brands' },

    adminAdult: {
      th: 'รับประทานพร้อมอาหารที่มีไขมันเพื่อเพิ่มการดูดซึมและลดอาการเรอกลิ่นคาว; การแช่เย็นแคปซูลอาจช่วยลดอาการเรอ',
      en: 'Take with a fat-containing meal to improve absorption and reduce fishy burps; refrigerating the capsules may also reduce burping.',
    },

    storageStability: {
      th: 'เก็บในที่เย็นและพ้นแสง เพื่อป้องกันการเหม็นหืน (oxidation) หลังเปิดใช้ควรเก็บในตู้เย็น',
      en: 'Store in a cool, dark place to prevent rancidity (oxidation); refrigerate after opening.',
    },

    labeledIndications: {
      th: 'เสริมกรดไขมันโอเมกา-3 เพื่อสุขภาพทั่วไป',
      en: 'Omega-3 fatty acid supplementation for general health.',
    },
    offLabelAdult: {
      th: '- ลดระดับไตรกลีเซอไรด์ในเลือดสูง (หลักฐานชัดเจน)\n- สนับสนุนสุขภาพหัวใจและหลอดเลือด (หลักฐานหลากหลาย)',
      en: '- Lowering high blood triglycerides (strong evidence)\n- Supporting cardiovascular health (mixed evidence)',
    },

    safetyIssues: {
      th: 'ระวังความสับสนระหว่าง "น้ำมันปลา (fish oil)" กับ "น้ำมันตับปลา (cod liver oil)" ซึ่งมีวิตามิน A และ D สูง อาจเกิดพิษจากวิตามินหากใช้ขนาดสูง',
      en: 'Do not confuse "fish oil" with "cod liver oil," which is high in vitamins A and D and can cause vitamin toxicity at high doses.',
    },

    metabolismEffects: {
      th: 'ผลต่อเอนไซม์ CYP น้อย; ออกฤทธิ์หลักผ่านการเปลี่ยนแปลงองค์ประกอบไขมันและสารสื่อการอักเสบ',
      en: 'Minimal effect on CYP enzymes; acts mainly by altering lipid composition and inflammatory mediators.',
    },
    drugInteractions: [
      {
        table: {
          headers: [
            { th: 'ยา/กลุ่มยา', en: 'Drug / class' },
            { th: 'ผล', en: 'Effect' },
            { th: 'คำแนะนำ', en: 'Recommendation' },
          ],
          rows: [
            [
              { th: 'ยาต้านการแข็งตัวของเลือด / ยาต้านเกล็ดเลือด', en: 'Anticoagulants / antiplatelets' },
              { th: 'เพิ่มความเสี่ยงเลือดออก (ขนาดสูง)', en: 'Increased bleeding risk (high doses)' },
              { th: 'ติดตามอาการเลือดออก', en: 'Monitor for bleeding' },
            ],
            [
              { th: 'ยาลดความดันโลหิต', en: 'Antihypertensives' },
              { th: 'อาจเสริมฤทธิ์ลดความดัน', en: 'May have additive blood-pressure-lowering effect' },
              { th: 'ติดตามความดันโลหิต', en: 'Monitor blood pressure' },
            ],
          ],
        },
      },
    ],

    pregnancyConsiderations: {
      th: 'โดยทั่วไปถือว่าปลอดภัยและมีประโยชน์ต่อพัฒนาการทารก แต่ควรเลือกผลิตภัณฑ์ที่ผ่านการตรวจสอบการปนเปื้อนปรอท',
      en: 'Generally considered safe and beneficial for fetal development, but choose products tested for mercury contamination.',
    },
    breastfeedingConsiderations: {
      th: 'DHA มีความสำคัญต่อพัฒนาการทารก ถือว่าปลอดภัยระหว่างให้นมบุตร',
      en: 'DHA is important for infant development; considered safe during breastfeeding.',
    },

    monitoringParameters: {
      th: '- ระดับไตรกลีเซอไรด์ (หากใช้เพื่อวัตถุประสงค์นี้)\n- อาการเลือดออกผิดปกติในผู้ที่ใช้ยาต้านการแข็งตัวของเลือด',
      en: '- Triglyceride level (if used for this purpose)\n- Abnormal bleeding in people taking anticoagulants',
    },

    mechanismOfAction: {
      th: 'EPA และ DHA ลดการสร้างไตรกลีเซอไรด์ที่ตับ เปลี่ยนสารสื่อการอักเสบ (eicosanoids) ไปเป็นชนิดที่ก่อการอักเสบน้อยลง และมีฤทธิ์ต้านการเกาะกลุ่มของเกล็ดเลือด [2]',
      en: 'EPA and DHA reduce hepatic triglyceride production, shift inflammatory mediators (eicosanoids) toward less inflammatory types, and have antiplatelet activity [2]',
    },
    pharmacokinetics: {
      th: '- **การดูดซึม:** ดีขึ้นเมื่อรับประทานพร้อมอาหารที่มีไขมัน; รูปแบบ triglyceride ดูดซึมดีกว่ารูปแบบ ethyl ester\n- **การกระจายตัว:** รวมเข้าไปในเยื่อหุ้มเซลล์ทั่วร่างกาย',
      en: '- **Absorption:** improved when taken with a fatty meal; the triglyceride form is better absorbed than the ethyl-ester form\n- **Distribution:** incorporated into cell membranes throughout the body',
    },

    counselingPoints: {
      th: '- รับประทานพร้อมอาหารเพื่อลดอาการเรอกลิ่นคาว\n- ปรึกษาแพทย์ก่อนใช้ขนาดสูงหากมีโรคหัวใจหรือใช้ยาต้านการแข็งตัวของเลือด\n- เลือกผลิตภัณฑ์ที่ระบุการตรวจสอบการปนเปื้อนปรอท',
      en: '- Take with food to reduce fishy burps\n- Consult a physician before high-dose use if you have heart disease or take anticoagulants\n- Choose products that state they are tested for mercury contamination',
    },

    brandInternational: {
      th: 'จำหน่ายทั่วโลกในฐานะผลิตภัณฑ์เสริมอาหาร',
      en: 'Sold worldwide as a dietary supplement.',
    },

    references: [
      'Curfman G. Omega-3 Fatty Acids and Atrial Fibrillation. JAMA. 2021.',
      'Bäck M, Hansson GK. Omega-3 fatty acids, cardiovascular risk, and the resolution of inflammation. FASEB J. 2019.',
      'National Institutes of Health, Office of Dietary Supplements. Omega-3 Fatty Acids Fact Sheet.',
    ],
  },
});
