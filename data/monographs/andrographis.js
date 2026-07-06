/*
 * ฟ้าทะลายโจร (Andrographis paniculata) — เนื้อหาสองภาษา (ไทย/อังกฤษ)
 * อ้างอิงจาก systematic review / meta-analysis ด้านการติดเชื้อทางเดินหายใจส่วนบนและความปลอดภัย
 * หมายเหตุ: ยังอยู่ระหว่างพัฒนาเนื้อหา ไม่ใช้แทนคำแนะนำของแพทย์/เภสัชกร
 */
HERB_DB.register({
  id: 'andrographis',
  nameTh: 'ฟ้าทะลายโจร',
  nameEn: 'Andrographis',
  scientificName: 'Andrographis paniculata (Burm.f.) Nees',
  family: { th: 'Acanthaceae (วงศ์เหงือกปลาหมอ)', en: 'Acanthaceae' },
  partUsed: { th: 'ส่วนเหนือดิน (ใบและลำต้น)', en: 'Aerial parts (leaves and stems)' },
  category: 'herbal',
  status: 'review',
  updated: '2026-07-06',
  synonyms: ['Andrographolide', 'แอนโดรกราโฟไลด์', 'King of Bitters', 'Kalmegh', 'หญ้ากันงู'],
  alerts: [
    {
      th: 'มีรายงานปฏิกิริยาภูมิแพ้รุนแรง (anaphylaxis) และผื่นแพ้ — ควรหยุดใช้ทันทีหากมีอาการแพ้',
      en: 'Serious allergic reactions (anaphylaxis) and rash have been reported — stop use immediately if allergic symptoms occur.',
    },
  ],

  sections: {
    pharmacologicCategory: {
      th: 'สมุนไพร (Herbal); ผลิตภัณฑ์เสริมอาหาร; สารกระตุ้นภูมิคุ้มกัน/ต้านการอักเสบ สารสำคัญหลักคือ andrographolide (กลุ่ม diterpenoid lactone) [1]',
      en: 'Herbal; dietary supplement; immunostimulant/anti-inflammatory. The principal active constituent is andrographolide (a diterpenoid lactone) [1]',
    },

    adultDosing: [
      {
        th: 'ขนาดที่ใช้แตกต่างกันตามสูตรตำรับ โดยมักคิดจากปริมาณ **andrographolide รวมต่อวัน** จากข้อมูล RCT / systematic review / meta-analysis ในการรักษาการติดเชื้อทางเดินหายใจส่วนบน (URTI) andrographolide รวมอยู่ในช่วงประมาณ **48–360 มก./วัน** และขนาดที่แนะนำจาก review เภสัชจลนศาสตร์คือประมาณ **60 มก./วัน** [4,7]',
        en: 'Doses vary by formulation and are usually based on **total daily andrographolide**. Across RCTs / systematic reviews / meta-analyses for upper respiratory tract infection (URTI), total andrographolide has ranged from about **48–360 mg/day**, with a pharmacokinetics-review-recommended dose of about **60 mg/day** [4,7]',
      },
      {
        table: {
          headers: [
            { th: 'รูปแบบ / แหล่งข้อมูล', en: 'Form / source' },
            { th: 'ขนาดในผู้ใหญ่', en: 'Adult dose' },
          ],
          rows: [
            [
              { th: 'สารสกัดมาตรฐาน (URTI ตาม RCT/meta-analysis)', en: 'Standardized extract (URTI, per RCT / meta-analysis)' },
              { th: 'andrographolide รวม ~60 มก./วัน แบ่งวันละ 2–3 ครั้ง นาน 5–10 วัน', en: 'Total andrographolide ~60 mg/day, divided 2–3 times daily, for 5–10 days' },
            ],
            [
              { th: 'ผงเหง้าแห้ง (herba Andrographidis, ตาม WHO monograph)', en: 'Dried crude powder (herba Andrographidis, per WHO monograph)' },
              { th: '2–6 กรัม/วัน (ขึ้นกับสูตรตำรับ)', en: '2–6 g/day (depending on the preparation)' },
            ],
            [
              { th: 'บัญชียาหลักแห่งชาติด้านสมุนไพร (หวัด/เจ็บคอ)', en: 'Thai National List of Herbal Medicinal Products (cold / sore throat)' },
              { th: 'andrographolide รวม 60–120 มก./วัน แบ่งวันละ 3–4 ครั้ง', en: 'Total andrographolide 60–120 mg/day, divided 3–4 times daily' },
            ],
          ],
        },
      },
      {
        note: {
          th: 'ตัวอย่างผลิตภัณฑ์ที่ใช้ใน RCT: **Kan Jang®** (สารสกัดฟ้าทะลายโจร + *Eleutherococcus senticosus*) ให้ andrographolide ~60–85 มก./วัน; **KalmCold®** ให้ andrographolide รวม ~60 มก./วัน',
          en: 'Examples of products used in RCTs: **Kan Jang®** (andrographis extract + *Eleutherococcus senticosus*) providing andrographolide ~60–85 mg/day; **KalmCold®** providing total andrographolide ~60 mg/day',
        },
      },
      {
        note: {
          th: 'ระยะเวลาการใช้เพื่อบรรเทาหวัดโดยทั่วไป 5–10 วัน หากอาการไม่ดีขึ้นควรพบแพทย์',
          en: 'Typical duration for cold relief is 5–10 days; if symptoms do not improve, consult a physician.',
        },
      },
    ],
    adultKidney: {
      th: 'ยังไม่มีการศึกษาเภสัชจลนศาสตร์หรือการปรับขนาดในผู้ป่วยไตบกพร่อง [7] ควรหลีกเลี่ยงหรือใช้ด้วยความระมัดระวังสูงในผู้ที่ไตบกพร่องระดับปานกลางถึงรุนแรง และติดตามการทำงานของไต โดยเฉพาะเมื่อใช้ขนาดสูงหรือใช้ต่อเนื่องเกิน 5–10 วัน [9]',
      en: 'There are no pharmacokinetic or dose-adjustment studies in renal impairment [7]. Avoid or use with great caution in moderate-to-severe renal impairment, and monitor renal function, especially with high doses or use beyond 5–10 days [9]',
    },
    adultLiver: {
      th: 'andrographolide ถูกเมแทบอไลต์ที่ตับ (phase I/II) และขับออกทางน้ำดีและปัสสาวะ แต่ยังไม่มีการศึกษาเภสัชจลนศาสตร์ในผู้ป่วยตับบกพร่อง [7] มีรายงานภาวะตับอักเสบ/พิษต่อตับสัมพันธ์กับการใช้ (เช่น รายงานความปลอดภัยของ TGA ออสเตรเลีย) จึงควรหลีกเลี่ยงในผู้ที่มีโรคตับระดับปานกลางถึงรุนแรง หรือใช้ภายใต้การดูแลของแพทย์พร้อมติดตามค่าการทำงานของตับ และหยุดใช้หากค่าเอนไซม์ตับสูงขึ้น [7,9]',
      en: 'Andrographolide is hepatically metabolized (phase I/II) and excreted in bile and urine, but there are no pharmacokinetic studies in hepatic impairment [7]. Hepatitis/hepatotoxicity has been reported in association with use (e.g. the TGA Australia safety review); avoid in moderate-to-severe liver disease or use under medical supervision with liver-function monitoring, and stop if liver enzymes rise [7,9]',
    },

    pediatricDosing: {
      th: 'หลักฐานขนาดใช้ในเด็ก**จำกัด** และส่วนใหญ่มาจากสูตรผสม review เภสัชจลนศาสตร์เสนอขนาด andrographolide ประมาณ **30 มก./วัน** ในการรักษา URTI แต่ยัง**ไม่มี consensus ที่ชัดเจน** [7] แหล่งข้อมูลทางคลินิก (เช่น MSKCC) ระบุว่ายังไม่มีข้อมูลขนาด/ความปลอดภัยในเด็กที่เพียงพอ **ไม่แนะนำให้ผู้ปกครองใช้ในเด็กเองโดยไม่อยู่ภายใต้การดูแลของแพทย์/เภสัชกร** [9]',
      en: 'Pediatric dosing evidence is **limited** and mostly derived from combination products. A pharmacokinetics review suggests total andrographolide about **30 mg/day** for URTI, but there is **no clear consensus** [7]. Clinical resources (e.g. MSKCC) note insufficient standardized dosing/safety data in children — **children should use it only under physician/pharmacist supervision** [9]',
    },

    adrSignificant: {
      th: 'โดยรวมฟ้าทะลายโจรมัก**ทนได้ดี** อาการไม่พึงประสงค์ส่วนใหญ่ไม่รุนแรง (ระบบทางเดินอาหาร เช่น คลื่นไส้ ท้องเสีย เบื่ออาหาร) การทบทวนอย่างเป็นระบบและ meta-analysis ด้านความปลอดภัยไม่พบสัญญาณความปลอดภัยร้ายแรงที่ชัดเจน แต่พบรายงาน**ปฏิกิริยาภูมิแพ้** (ผื่น ลมพิษ และในบางรายรุนแรงถึงขั้น anaphylaxis) จึงควรเฝ้าระวังอาการแพ้ [3,5]',
      en: 'Andrographis is generally **well tolerated**; most adverse effects are mild (gastrointestinal, e.g. nausea, diarrhea, anorexia). Safety systematic reviews and meta-analyses found no clear serious safety signal, but **allergic reactions** (rash, urticaria, and in some cases severe anaphylaxis) have been reported — watch for allergic symptoms [3,5]',
    },
    adrList: {
      th: '- ผื่นแพ้ ลมพิษ (พบบ่อยที่สุด)\n- ปฏิกิริยาภูมิแพ้รุนแรง (anaphylaxis) — พบน้อยแต่รุนแรง\n- คลื่นไส้ เบื่ออาหาร วิงเวียน',
      en: '- Rash, urticaria (most common)\n- Severe allergic reaction (anaphylaxis) — rare but serious\n- Nausea, anorexia, dizziness',
    },

    contraindications: {
      th: '- แพ้ฟ้าทะลายโจรหรือพืชในวงศ์ Acanthaceae\n- หญิงตั้งครรภ์และให้นมบุตร\n- ผู้ที่มีภาวะตับหรือไตบกพร่องรุนแรง',
      en: '- Allergy to andrographis or plants in the Acanthaceae family\n- Pregnancy and breastfeeding\n- Severe hepatic or renal impairment',
    },
    warningsPrecautions: {
      th: '- หยุดใช้ทันทีหากมีอาการแพ้ (ผื่น บวม หายใจลำบาก)\n- อาจลดความดันโลหิต ระวังในผู้ที่ใช้ยาลดความดัน\n- อาจกระตุ้นภูมิคุ้มกัน ควรระวังในผู้ที่ใช้ยากดภูมิคุ้มกัน',
      en: '- Stop immediately if allergic symptoms occur (rash, swelling, difficulty breathing)\n- May lower blood pressure; use caution with antihypertensive drugs\n- May stimulate the immune system; use caution in people taking immunosuppressants',
    },

    labeledIndications: {
      th: 'บรรเทาอาการของโรคหวัด เช่น เจ็บคอ และบรรเทาอาการท้องเสียชนิดที่ไม่เกิดจากการติดเชื้อ (ตามบัญชียาหลักแห่งชาติด้านสมุนไพร) [6]',
      en: 'Relief of common cold symptoms such as sore throat, and relief of non-infectious diarrhea (per the Thai National List of Herbal Medicinal Products) [6]',
    },
    offLabelAdult: [
      {
        th: 'การติดเชื้อทางเดินหายใจส่วนบน/เฉียบพลัน (URTI/ARTI): systematic review และ meta-analysis พบว่าฟ้าทะลายโจร (ใช้เดี่ยวหรือในตำรับผสม เช่น ร่วมกับ *Eleutherococcus senticosus* ในสูตร Kan Jang) อาจช่วยบรรเทาอาการ โดยเฉพาะ **ไอ** และ **เจ็บคอ** และอาจลดความรุนแรงและระยะเวลาของอาการ เมื่อเทียบกับยาหลอกหรือการดูแลตามปกติ [2,3,4]',
        en: 'Upper/acute respiratory tract infection (URTI/ARTI): systematic reviews and meta-analyses suggest that andrographis (alone or in combination formulas, e.g. with *Eleutherococcus senticosus* in the Kan Jang product) may relieve symptoms — particularly **cough** and **sore throat** — and may reduce symptom severity and duration compared with placebo or usual care [2,3,4]',
      },
      {
        note: {
          th: 'คุณภาพหลักฐานโดยรวมอยู่ในระดับ **ต่ำถึงปานกลาง** — งานวิจัยมีความแตกต่างกันสูง (heterogeneity) ขนาดตัวอย่างจำกัด และหลายการศึกษาใช้ตำรับผสมจึงแยกผลของฟ้าทะลายโจรเดี่ยวได้ยาก ควรตีความอย่างระมัดระวัง [4]',
          en: 'Overall evidence quality is **low to moderate** — studies are highly heterogeneous, sample sizes are limited, and many used combination formulas, making it hard to isolate the effect of andrographis alone; interpret with caution [4]',
        },
      },
    ],

    drugInteractions: {
      th: '- ยาต้านการแข็งตัวของเลือด: อาจเพิ่มความเสี่ยงเลือดออก\n- ยากดภูมิคุ้มกัน: อาจต้านฤทธิ์กัน (ฟ้าทะลายโจรกระตุ้นภูมิคุ้มกัน)\n- ยาลดความดันโลหิต/ยาลดน้ำตาล: อาจเสริมฤทธิ์',
      en: '- Anticoagulants: may increase bleeding risk\n- Immunosuppressants: may be antagonistic (andrographis stimulates immunity)\n- Antihypertensive / antidiabetic drugs: may have additive effects',
    },

    pregnancyConsiderations: {
      th: 'ห้ามใช้ในหญิงตั้งครรภ์ เนื่องจากมีข้อมูลว่าอาจมีผลต่อการตั้งครรภ์',
      en: 'Contraindicated in pregnancy, as there are data suggesting it may affect pregnancy.',
    },
    breastfeedingConsiderations: {
      th: 'ไม่แนะนำให้ใช้ระหว่างให้นมบุตร เนื่องจากข้อมูลความปลอดภัยยังไม่เพียงพอ',
      en: 'Not recommended during breastfeeding due to insufficient safety data.',
    },

    mechanismOfAction: {
      th: 'สารสำคัญคือ andrographolide (กลุ่ม diterpenoid lactone) มีฤทธิ์ต้านการอักเสบ กระตุ้นภูมิคุ้มกัน และต้านไวรัสในหลอดทดลอง [1]',
      en: 'The key constituent is andrographolide (a diterpenoid lactone), which has anti-inflammatory, immunostimulant, and antiviral activity in vitro [1]',
    },

    counselingPoints: {
      th: '- ใช้เพื่อบรรเทาอาการหวัดระยะสั้นเท่านั้น หากอาการไม่ดีขึ้นใน 3 วันหรือแย่ลง ควรพบแพทย์\n- หยุดใช้ทันทีและพบแพทย์หากมีผื่น บวม หรือหายใจลำบาก\n- ห้ามใช้หากตั้งครรภ์',
      en: '- Use only for short-term relief of cold symptoms; if symptoms do not improve within 3 days or worsen, see a physician\n- Stop immediately and see a physician if rash, swelling, or difficulty breathing occurs\n- Do not use if pregnant',
    },

    brandInternational: {
      th: 'ประเทศไทย: มีในบัญชียาหลักแห่งชาติด้านสมุนไพร; จำหน่ายทั่วไปในรูปแคปซูลและยาลูกกลอน',
      en: 'Thailand: included in the National List of Herbal Medicinal Products; widely sold as capsules and herbal pills.',
    },

    // เอกสารอ้างอิงเป็นบรรณานุกรม (ภาษาต้นฉบับ) แสดงเหมือนกันทั้งสองภาษา
    references: [
      'Hossain S, et al. Andrographis paniculata (Burm. f.) Wall. ex Nees: A Review of Ethnobotany, Phytochemistry, and Pharmacology. ScientificWorldJournal. 2014;2014:274905. doi:10.1155/2014/274905',
      'Poolsup N, et al. Andrographis paniculata in the symptomatic treatment of uncomplicated upper respiratory tract infection: systematic review of randomized controlled trials. J Clin Pharm Ther. 2004;29(1):37-45. doi:10.1046/j.1365-2710.2003.00534.x',
      'Coon JT, Ernst E. Andrographis paniculata in the treatment of upper respiratory tract infections: a systematic review of safety and efficacy. Planta Med. 2004;70(4):293-298. doi:10.1055/s-2004-818938',
      'Hu XY, et al. Andrographis paniculata (Chuān Xīn Lián) for symptomatic relief of acute respiratory tract infections in adults and children: a systematic review and meta-analysis. PLoS One. 2017;12(8):e0181780. doi:10.1371/journal.pone.0181780',
      'Safety of Andrographis paniculata: a systematic review and meta-analysis. Pharmacoepidemiol Drug Saf. doi:10.1002/pds.5190',
      'บัญชียาหลักแห่งชาติด้านสมุนไพร กระทรวงสาธารณสุข ประเทศไทย. / National List of Herbal Medicinal Products, Ministry of Public Health, Thailand.',
      'A comprehensive review on disposition kinetics and dosage of oral administration of Andrographis paniculata. Front Pharmacol. 2022.',
      'World Health Organization. WHO monographs on selected medicinal plants, Vol. 2: Herba Andrographidis. Geneva: WHO; 2002.',
      'Memorial Sloan Kettering Cancer Center (MSKCC). Andrographis. Integrative Medicine — About Herbs.',
    ],
  },
});
