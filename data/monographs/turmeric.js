/*
 * ขมิ้นชัน (Turmeric / Curcuma longa) — เนื้อหาสองภาษา (ไทย/อังกฤษ)
 * ข้อมูลเป็นตัวอย่างเพื่อการสาธิตโครงสร้าง — ตรวจทานกับแหล่งอ้างอิงทางการก่อนใช้งานจริง
 */
HERB_DB.register({
  id: 'turmeric',
  nameTh: 'ขมิ้นชัน',
  nameEn: 'Turmeric',
  scientificName: 'Curcuma longa L.',
  family: { th: 'Zingiberaceae (วงศ์ขิง)', en: 'Zingiberaceae (ginger family)' },
  partUsed: { th: 'เหง้า (Rhizome)', en: 'Rhizome' },
  category: 'herbal',
  status: 'review',
  updated: '2026-06-20',
  synonyms: ['Curcumin', 'เคอร์คูมิน', 'ขมิ้น', 'Indian saffron', 'Haldi'],
  alerts: [
    {
      th: 'อาจเพิ่มความเสี่ยงเลือดออกเมื่อใช้ร่วมกับยาต้านการแข็งตัวของเลือด (เช่น warfarin) หรือยาต้านเกล็ดเลือด',
      en: 'May increase bleeding risk when combined with anticoagulants (e.g. warfarin) or antiplatelet drugs.',
    },
    {
      th: 'มีรายงานภาวะตับอักเสบจากผลิตภัณฑ์เสริมอาหารขมิ้นชัน โดยเฉพาะสูตรที่เพิ่มการดูดซึม — ควรหยุดใช้และพบแพทย์หากมีอาการตับผิดปกติ',
      en: 'Hepatitis has been reported from turmeric supplements, especially high-absorption formulations — stop use and see a physician if signs of liver problems occur.',
    },
  ],

  sections: {
    pharmacologicCategory: {
      th: 'สมุนไพร (Herbal); ผลิตภัณฑ์เสริมอาหาร (Dietary Supplement); สารต้านอนุมูลอิสระ/ต้านการอักเสบ',
      en: 'Herbal; dietary supplement; antioxidant / anti-inflammatory',
    },

    adultDosing: [
      {
        th: 'ขนาดที่ใช้ในการศึกษาแตกต่างกันมากตามข้อบ่งใช้และสูตรตำรับ ตัวอย่างที่พบบ่อย:',
        en: 'Doses used in studies vary widely by indication and formulation. Common examples:',
      },
      {
        table: {
          headers: [
            { th: 'ข้อบ่งใช้', en: 'Indication' },
            { th: 'ขนาดโดยประมาณ', en: 'Approximate dose' },
            { th: 'หมายเหตุ', en: 'Notes' },
          ],
          rows: [
            [
              { th: 'อาการท้องอืด/อาหารไม่ย่อย (ตามบัญชียาหลักแห่งชาติด้านสมุนไพร)', en: 'Dyspepsia / indigestion (per the Thai National List of Herbal Medicinal Products)' },
              { th: 'ผงเหง้าขมิ้น 500 มก. ครั้งละ 2–4 แคปซูล วันละ 4 ครั้งหลังอาหารและก่อนนอน', en: 'Turmeric rhizome powder 500 mg, 2–4 capsules per dose, 4 times daily after meals and at bedtime' },
              { th: 'รูปแบบผงเหง้าแห้ง', en: 'Dried rhizome powder' },
            ],
            [
              { th: 'ข้อเข่าเสื่อม (การใช้นอกฉลาก)', en: 'Knee osteoarthritis (off-label)' },
              { th: 'สารสกัดเคอร์คูมิน 500 มก. วันละ 2 ครั้ง', en: 'Curcumin extract 500 mg twice daily' },
              { th: 'มักใช้สูตรที่เพิ่มการดูดซึม', en: 'Usually a high-absorption formulation' },
            ],
          ],
        },
      },
      {
        note: {
          th: 'เคอร์คูมินดูดซึมได้ต่ำมากในรูปอิสระ สูตรที่ผสม piperine หรือ phytosome จะเพิ่มระดับในเลือดได้หลายเท่า จึงเทียบขนาดกันโดยตรงไม่ได้ [1]',
          en: 'Curcumin has very low absorption in its free form; formulations with piperine or phytosome raise blood levels several-fold, so doses are not directly comparable [1]',
        },
      },
    ],
    adultKidney: {
      th: 'ไม่มีข้อมูลการปรับขนาดในผู้ที่ไตบกพร่อง; ใช้ด้วยความระมัดระวังเนื่องจากขมิ้นมีสารออกซาเลตซึ่งอาจเพิ่มความเสี่ยงนิ่วในผู้ที่มีประวัตินิ่วออกซาเลต [2]',
      en: 'No dose-adjustment data in renal impairment; use with caution because turmeric contains oxalate, which may increase stone risk in people with a history of oxalate stones [2]',
    },
    adultLiver: {
      th: 'มีรายงานภาวะตับอักเสบสัมพันธ์กับผลิตภัณฑ์เสริมอาหารขมิ้น ควรหลีกเลี่ยงในผู้ที่มีโรคตับ และหยุดใช้หากค่าเอนไซม์ตับสูงขึ้น [3]',
      en: 'Hepatitis has been reported in association with turmeric supplements; avoid in people with liver disease and stop use if liver enzymes rise [3]',
    },
    olderAdult: {
      th: 'ใช้ได้ตามขนาดผู้ใหญ่ ควรระวังอันตรกิริยากับยาที่ผู้สูงอายุมักได้รับ เช่น ยาต้านการแข็งตัวของเลือดและยาลดน้ำตาลในเลือด',
      en: 'Use standard adult doses; watch for interactions with drugs commonly used by older adults, such as anticoagulants and antidiabetic agents.',
    },

    pediatricDosing: {
      th: 'ยังไม่มีข้อมูลความปลอดภัยและขนาดที่เพียงพอสำหรับใช้เป็นผลิตภัณฑ์เสริมอาหารในเด็ก ไม่แนะนำให้ใช้ (นอกเหนือจากปริมาณที่พบในอาหารตามปกติ)',
      en: 'There are insufficient safety and dosing data for use as a supplement in children; not recommended (beyond amounts normally found in food).',
    },

    adrSignificant: [
      { th: '## ระบบทางเดินอาหาร', en: '## Gastrointestinal' },
      {
        th: 'อาการไม่พึงประสงค์ที่พบบ่อยที่สุด ได้แก่ คลื่นไส้ ท้องเสีย และระคายเคืองกระเพาะ โดยเฉพาะเมื่อรับประทานขนาดสูงขณะท้องว่าง',
        en: 'The most common adverse effects are nausea, diarrhea, and stomach irritation, especially with high doses on an empty stomach.',
      },
      { th: '## ตับ', en: '## Liver' },
      {
        th: 'มีรายงานภาวะตับอักเสบจากภูมิคุ้มกัน (autoimmune-like hepatitis) และตับเสียหายจากผลิตภัณฑ์เสริมอาหารขมิ้น กลไกยังไม่ชัดเจนแต่เชื่อว่าสัมพันธ์กับสูตรที่เพิ่มการดูดซึมและการปลอมปน [3]',
        en: 'Autoimmune-like hepatitis and liver injury have been reported from turmeric supplements; the mechanism is unclear but is thought to relate to high-absorption formulations and adulteration [3]',
      },
    ],
    adrList: [
      {
        table: {
          headers: [
            { th: 'ระบบ', en: 'System' },
            { th: 'อาการ', en: 'Reaction' },
            { th: 'ความถี่', en: 'Frequency' },
          ],
          rows: [
            [
              { th: 'ทางเดินอาหาร', en: 'Gastrointestinal' },
              { th: 'คลื่นไส้ ท้องเสีย ท้องอืด', en: 'Nausea, diarrhea, bloating' },
              { th: 'พบบ่อย (ขนาดสูง)', en: 'Common (high doses)' },
            ],
            [
              { th: 'ตับ', en: 'Liver' },
              { th: 'ค่าเอนไซม์ตับสูงขึ้น, ตับอักเสบ', en: 'Elevated liver enzymes, hepatitis' },
              { th: 'พบน้อย', en: 'Uncommon' },
            ],
            [
              { th: 'ผิวหนัง', en: 'Skin' },
              { th: 'ผื่นแพ้/ลมพิษ', en: 'Allergic rash / urticaria' },
              { th: 'พบน้อย', en: 'Uncommon' },
            ],
          ],
        },
      },
    ],

    contraindications: {
      th: '- แพ้ขมิ้นชันหรือพืชในวงศ์ขิง\n- ภาวะอุดกั้นทางเดินน้ำดีหรือนิ่วในถุงน้ำดี (ขมิ้นกระตุ้นการหลั่งน้ำดี)\n- ก่อนผ่าตัด ควรหยุดใช้อย่างน้อย 2 สัปดาห์',
      en: '- Allergy to turmeric or plants in the ginger family\n- Bile-duct obstruction or gallstones (turmeric stimulates bile secretion)\n- Stop at least 2 weeks before surgery',
    },
    warningsPrecautions: [
      { th: '## ความเสี่ยงเลือดออก', en: '## Bleeding risk' },
      {
        th: 'ยับยั้งการเกาะกลุ่มของเกล็ดเลือด อาจเพิ่มความเสี่ยงเลือดออกเมื่อใช้ร่วมกับยาต้านการแข็งตัวของเลือด/ยาต้านเกล็ดเลือด',
        en: 'Inhibits platelet aggregation; may increase bleeding risk when combined with anticoagulant/antiplatelet drugs.',
      },
      { th: '## นิ่วในไต', en: '## Kidney stones' },
      {
        th: 'มีปริมาณออกซาเลตสูง อาจเพิ่มความเสี่ยงนิ่วออกซาเลตในผู้ที่มีความเสี่ยง',
        en: 'High in oxalate; may increase the risk of oxalate stones in susceptible people.',
      },
      { th: '## การปลอมปน', en: '## Adulteration' },
      {
        th: 'มีรายงานการปลอมปนด้วยสีสังเคราะห์ (เช่น metanil yellow) และตะกั่ว ในผงขมิ้นบางแหล่ง ควรเลือกผลิตภัณฑ์ที่ผ่านการตรวจสอบคุณภาพ',
        en: 'Adulteration with synthetic dyes (e.g. metanil yellow) and lead has been reported in some turmeric powders; choose quality-tested products.',
      },
    ],

    dosageForms: [
      {
        table: {
          headers: [
            { th: 'รูปแบบ', en: 'Form' },
            { th: 'ความแรงตัวอย่าง', en: 'Example strength' },
          ],
          rows: [
            [
              { th: 'แคปซูลผงเหง้า', en: 'Rhizome-powder capsule' },
              { th: '250–500 มก.', en: '250–500 mg' },
            ],
            [
              { th: 'สารสกัดมาตรฐาน (curcuminoids ~95%)', en: 'Standardized extract (curcuminoids ~95%)' },
              { th: '500 มก.', en: '500 mg' },
            ],
            [
              { th: 'สูตร phytosome / ผสม piperine', en: 'Phytosome / piperine-combined formula' },
              { th: 'แตกต่างตามผลิตภัณฑ์', en: 'Varies by product' },
            ],
          ],
        },
      },
    ],
    genericAvailable: {
      th: 'มี — จำหน่ายหลายยี่ห้อในฐานะผลิตภัณฑ์เสริมอาหาร',
      en: 'Yes — sold under many brands as a dietary supplement',
    },
    pricing: {
      th: 'ราคาแตกต่างตามยี่ห้อและสูตรตำรับ (ข้อมูลราคาให้เพิ่มภายหลัง)',
      en: 'Price varies by brand and formulation (pricing to be added later).',
    },

    adminAdult: {
      th: 'รับประทานพร้อมอาหารที่มีไขมันเพื่อเพิ่มการดูดซึมและลดการระคายเคืองกระเพาะ',
      en: 'Take with a fat-containing meal to improve absorption and reduce stomach irritation.',
    },

    storageStability: {
      th: 'เก็บในภาชนะปิดสนิท พ้นความชื้นและแสงแดด ที่อุณหภูมิห้อง (ไม่เกิน 30°C)',
      en: 'Store in a tightly closed container, protected from moisture and sunlight, at room temperature (below 30°C).',
    },

    labeledIndications: {
      th: 'บรรเทาอาการท้องอืด ท้องเฟ้อ และอาหารไม่ย่อย (ตามบัญชียาหลักแห่งชาติด้านสมุนไพรของประเทศไทย)',
      en: 'Relief of bloating, flatulence, and indigestion (per the Thai National List of Herbal Medicinal Products).',
    },
    offLabelAdult: {
      th: '- ข้อเข่าเสื่อม: มีหลักฐานระดับปานกลางว่าอาจช่วยลดอาการปวด [1]\n- ภาวะลำไส้แปรปรวน (IBS) และการอักเสบเรื้อรัง: หลักฐานยังจำกัด',
      en: '- Knee osteoarthritis: moderate evidence that it may reduce pain [1]\n- Irritable bowel syndrome (IBS) and chronic inflammation: evidence still limited',
    },

    safetyIssues: {
      th: '- อาจสับสนกับ "ว่านชักมดลูก" (Curcuma comosa) หรือขมิ้นชนิดอื่นในวงศ์เดียวกัน\n- ระวังการปลอมปนด้วยสีและโลหะหนักในผงขมิ้นราคาถูก',
      en: '- May be confused with "wan chak mot luk" (Curcuma comosa) or other Curcuma species in the same family\n- Beware of dye and heavy-metal adulteration in cheap turmeric powders',
    },

    metabolismEffects: {
      th: 'ยับยั้ง CYP3A4, CYP2C9 และ P-glycoprotein ในหลอดทดลอง อาจเพิ่มระดับยาที่เป็น substrate ของเอนไซม์เหล่านี้ [4]',
      en: 'Inhibits CYP3A4, CYP2C9, and P-glycoprotein in vitro; may raise levels of drugs that are substrates of these enzymes [4]',
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
              { th: 'Warfarin, ยาต้านเกล็ดเลือด', en: 'Warfarin, antiplatelets' },
              { th: 'เพิ่มความเสี่ยงเลือดออก', en: 'Increased bleeding risk' },
              { th: 'หลีกเลี่ยงหรือติดตาม INR อย่างใกล้ชิด', en: 'Avoid or monitor INR closely' },
            ],
            [
              { th: 'ยาลดน้ำตาลในเลือด', en: 'Antidiabetic drugs' },
              { th: 'อาจเสริมฤทธิ์ลดน้ำตาล', en: 'May have additive glucose-lowering effect' },
              { th: 'ติดตามระดับน้ำตาลในเลือด', en: 'Monitor blood glucose' },
            ],
            [
              { th: 'ยาที่เป็น substrate ของ CYP3A4', en: 'CYP3A4 substrate drugs' },
              { th: 'อาจเพิ่มระดับยา', en: 'May increase drug levels' },
              { th: 'ระวังการใช้ร่วมกัน', en: 'Use caution when combined' },
            ],
          ],
        },
      },
    ],

    reproductiveConsiderations: {
      th: 'ปริมาณที่พบในอาหารถือว่าปลอดภัย ยังไม่มีข้อมูลเพียงพอเกี่ยวกับผลของขนาดเสริมอาหารต่อภาวะเจริญพันธุ์',
      en: 'Amounts found in food are considered safe; there are insufficient data on the effect of supplemental doses on fertility.',
    },
    pregnancyConsiderations: {
      th: 'ปริมาณจากอาหารปลอดภัย แต่ขนาดเสริมอาหาร (ยาระดับสูง) อาจกระตุ้นมดลูก จึงควรหลีกเลี่ยงในหญิงตั้งครรภ์ [2]',
      en: 'Dietary amounts are safe, but supplemental (high) doses may stimulate the uterus, so they should be avoided in pregnancy [2]',
    },
    breastfeedingConsiderations: {
      th: 'ปริมาณจากอาหารถือว่าปลอดภัยระหว่างให้นมบุตร ข้อมูลของขนาดเสริมอาหารยังจำกัด',
      en: 'Dietary amounts are considered safe during breastfeeding; data on supplemental doses are limited.',
    },

    monitoringParameters: {
      th: '- ค่าการทำงานของตับ (หากใช้ต่อเนื่องขนาดสูง)\n- INR ในผู้ที่ใช้ warfarin ร่วมด้วย\n- อาการเลือดออกผิดปกติ',
      en: '- Liver function (with sustained high-dose use)\n- INR in people also taking warfarin\n- Abnormal bleeding',
    },

    mechanismOfAction: {
      th: 'สารสำคัญคือกลุ่มเคอร์คูมินอยด์ (curcuminoids) โดยเฉพาะ curcumin ออกฤทธิ์ต้านการอักเสบผ่านการยับยั้ง NF-κB, COX-2 และ cytokine ที่ก่อการอักเสบ รวมทั้งมีฤทธิ์ต้านอนุมูลอิสระ [1]',
      en: 'The key constituents are curcuminoids, especially curcumin, which act as anti-inflammatories by inhibiting NF-κB, COX-2, and pro-inflammatory cytokines, and also have antioxidant activity [1]',
    },
    pharmacokinetics: {
      th: '- **การดูดซึม:** ต่ำมากในรูปอิสระ เนื่องจากละลายน้ำได้น้อยและถูกเมแทบอไลต์อย่างรวดเร็ว\n- **เมแทบอลิซึม:** ถูก glucuronidation และ sulfation ที่ตับและผนังลำไส้\n- **การขับออก:** ส่วนใหญ่ทางอุจจาระ',
      en: '- **Absorption:** very low in free form due to poor water solubility and rapid metabolism\n- **Metabolism:** glucuronidation and sulfation in the liver and gut wall\n- **Excretion:** mostly in the feces',
    },
    pkAdditional: {
      th: 'การรับประทานร่วมกับ piperine (สารในพริกไทยดำ) เพิ่มชีวปริมาณออกฤทธิ์ (bioavailability) ได้ถึงประมาณ 20 เท่า สูตร phytosome และ nanoparticle ก็เพิ่มการดูดซึมเช่นกัน [1]',
      en: 'Co-administration with piperine (a compound in black pepper) increases bioavailability by roughly 20-fold; phytosome and nanoparticle formulations also enhance absorption [1]',
    },

    counselingPoints: {
      th: '- รับประทานพร้อมอาหารเพื่อลดการระคายเคืองกระเพาะ\n- หยุดใช้และพบแพทย์หากมีอาการตัวเหลือง ตาเหลือง ปัสสาวะสีเข้ม หรืออ่อนเพลียผิดปกติ (สัญญาณตับผิดปกติ)\n- แจ้งแพทย์/เภสัชกรหากใช้ยาต้านการแข็งตัวของเลือด\n- หยุดใช้ก่อนผ่าตัดอย่างน้อย 2 สัปดาห์',
      en: '- Take with food to reduce stomach irritation\n- Stop use and see a physician if you develop yellow skin, yellow eyes, dark urine, or unusual fatigue (signs of liver problems)\n- Tell your physician/pharmacist if you take anticoagulants\n- Stop at least 2 weeks before surgery',
    },

    brandInternational: {
      th: 'ประเทศไทย: จำหน่ายในรูปแคปซูลขมิ้นชันหลายยี่ห้อ; อินเดีย: ใช้แพร่หลายในตำรับอายุรเวท',
      en: 'Thailand: sold as turmeric capsules under many brands; India: widely used in Ayurvedic preparations.',
    },

    references: [
      'Hewlings SJ, Kalman DS. Curcumin: A Review of Its Effects on Human Health. Foods. 2017;6(10):92.',
      'National Center for Complementary and Integrative Health (NCCIH). Turmeric. (consumer information)',
      'LiverTox: Clinical and Research Information on Drug-Induced Liver Injury — Turmeric. NIDDK.',
      'Bahramsoltani R, et al. Pharmacokinetic interactions of curcuminoids with conventional drugs. J Ethnopharmacol. 2017;209:1-12.',
    ],
  },
});
