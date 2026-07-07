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
              { th: '2–6 กรัม/วัน (ขึ้นกับสูตรตำรับ) [8]', en: '2–6 g/day (depending on the preparation) [8]' },
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
      th: 'andrographolide ถูกเมแทบอไลต์ที่ตับ (phase I/II) และขับออกทางน้ำดีและปัสสาวะ แต่ยังไม่มีการศึกษาเภสัชจลนศาสตร์ในผู้ป่วยตับบกพร่อง [7] มีรายงานภาวะตับอักเสบ/พิษต่อตับสัมพันธ์กับการใช้ (เช่น รายงานความปลอดภัยของ TGA ออสเตรเลีย) จึงควรหลีกเลี่ยงในผู้ที่มีโรคตับระดับปานกลางถึงรุนแรง หรือใช้ภายใต้การดูแลของแพทย์พร้อมติดตามค่าการทำงานของตับ และหยุดใช้หากค่าเอนไซม์ตับสูงขึ้น [7,9,13]',
      en: 'Andrographolide is hepatically metabolized (phase I/II) and excreted in bile and urine, but there are no pharmacokinetic studies in hepatic impairment [7]. Hepatitis/hepatotoxicity has been reported in association with use (e.g. the TGA Australia safety review); avoid in moderate-to-severe liver disease or use under medical supervision with liver-function monitoring, and stop if liver enzymes rise [7,9,13]',
    },

    pediatricDosing: {
      th: 'หลักฐานขนาดใช้ในเด็ก**จำกัด** และส่วนใหญ่มาจากสูตรผสม review เภสัชจลนศาสตร์เสนอขนาด andrographolide ประมาณ **30 มก./วัน** ในการรักษา URTI แต่ยัง**ไม่มี consensus ที่ชัดเจน** [7] แหล่งข้อมูลทางคลินิก (เช่น MSKCC) ระบุว่ายังไม่มีข้อมูลขนาด/ความปลอดภัยในเด็กที่เพียงพอ **ไม่แนะนำให้ผู้ปกครองใช้ในเด็กเองโดยไม่อยู่ภายใต้การดูแลของแพทย์/เภสัชกร** [9]',
      en: 'Pediatric dosing evidence is **limited** and mostly derived from combination products. A pharmacokinetics review suggests total andrographolide about **30 mg/day** for URTI, but there is **no clear consensus** [7]. Clinical resources (e.g. MSKCC) note insufficient standardized dosing/safety data in children — **children should use it only under physician/pharmacist supervision** [9]',
    },

    adrSignificant: [
      {
        th: 'จาก systematic review และ meta-analysis ด้านความปลอดภัย (แบบรับประทานเดี่ยว): อาการไม่พึงประสงค์รุนแรง (SAEs) **พบได้น้อยมาก** — อุบัติการณ์รวมจาก RCT ประมาณ **0.02 ต่อ 1,000 ผู้ป่วย** (95% CI 0.0–0.5) ส่วนอาการไม่พึงประสงค์ที่ไม่รุนแรงพบได้บ่อย (~102.6 ต่อ 1,000 ใน RCT; ~34.2 ต่อ 1,000 จากการเฝ้าระวังเชิงรุก) โดยกลุ่มที่พบบ่อยที่สุดคือ**ระบบทางเดินอาหาร**และ**ผิวหนัง** [5]',
        en: 'From safety systematic reviews and meta-analyses (oral monotherapy): serious adverse events (SAEs) are **very rare** — pooled RCT incidence about **0.02 per 1,000 patients** (95% CI 0.0–0.5). Non-serious adverse events are common (~102.6 per 1,000 in RCTs; ~34.2 per 1,000 from intensive monitoring), most often **gastrointestinal** and **skin** disorders [5]',
      },
      { th: '## ปฏิกิริยาภูมิแพ้และ anaphylaxis (รุนแรง — สำคัญที่สุด)', en: '## Hypersensitivity and anaphylaxis (serious — most important)' },
      {
        th: 'หน่วยงานกำกับ เช่น TGA (ออสเตรเลีย) และ Medsafe (นิวซีแลนด์) ออกคำเตือนว่าผลิตภัณฑ์ฟ้าทะลายโจรอาจก่อ**ปฏิกิริยาภูมิแพ้รุนแรงรวมถึง anaphylaxis** รายงานทบทวนความปลอดภัยของ TGA (2026) พบเคส anaphylaxis ที่เชื่อมโยงกับผลิตภัณฑ์ฟ้าทะลายโจรรวม **287 เคส**ในออสเตรเลีย (ถึง 31 ธ.ค. 2025) และมีผู้เสียชีวิตอย่างน้อย 1 ราย อาการมักเริ่มภายใน **5–30 นาที**หลังรับประทาน ประกอบด้วยผื่น ลมพิษ คัน แน่น/บวมคอ หายใจมีเสียงหวีด ความดันตก และหมดสติ [13,14]',
        en: 'Regulators such as the TGA (Australia) and Medsafe (New Zealand) have warned that andrographis products can cause **severe allergic reactions including anaphylaxis**. The TGA safety review (2026) identified **287 anaphylaxis cases** linked to andrographis products in Australia (to 31 Dec 2025), with at least one death. Onset is typically within **5–30 minutes** of ingestion and may include rash, urticaria, pruritus, throat tightness/swelling, wheeze, hypotension, and loss of consciousness [13,14]',
      },
      {
        th: 'ข้อมูลในไทย (ฐานข้อมูล HPVC) พบปฏิกิริยาภูมิไวเกินตั้งแต่ผื่นเล็กน้อยจนถึง anaphylactic shock และ angioedema โดยมี 13 เคสที่จัดว่าวิกฤต (anaphylactic shock 5 ราย, anaphylactic reaction 4 ราย, angioedema 4 ราย) [12]',
        en: 'Thai data (HPVC database) documented hypersensitivity reactions from mild rash to anaphylactic shock and angioedema, including 13 critical cases (anaphylactic shock n=5, anaphylactic reaction n=4, angioedema n=4) [12]',
      },
      { th: '## พิษต่อตับและอวัยวะ', en: '## Hepatotoxicity and organ toxicity' },
      {
        th: 'การทบทวนอย่างเป็นระบบของฟ้าทะลายโจรแบบรับประทานเดี่ยว**ไม่พบอุบัติการณ์สูง**ของพิษต่อตับ แต่มี case report ของการบาดเจ็บที่ตับที่สงสัยว่าเกี่ยวข้อง ประกอบกับข้อมูลใน safety review ของ TGA จึงแนะนำให้ระวังในผู้มีโรคตับ [5,13] การศึกษาในสัตว์ (หนู) พบว่า andrographolide ขนาดสูงซ้ำ ๆ อาจก่อพิษหลายอวัยวะ (ตับ ไต) ผ่านกลไก PANoptosis [15] อย่างไรก็ตาม ในการศึกษาผู้ป่วย COVID-19 อาการน้อยที่ให้ andrographolide 90 มก./วัน นาน 5 วัน **ไม่พบการเพิ่มขึ้นของ AST/ALT อย่างมีนัยสำคัญในระยะสั้น** สนับสนุนความปลอดภัยด้านตับของการใช้ระยะสั้นในขนาดตาม RCT [10,16]',
        en: 'Safety systematic reviews of oral AP monotherapy found **no high incidence** of hepatotoxicity, but there are case reports of suspected liver injury; together with the TGA safety review, caution is advised in people with liver disease [5,13]. Animal (mouse) studies show that repeated high-dose andrographolide can cause multi-organ toxicity (liver, kidney) via PANoptosis [15]. However, in a mild-COVID-19 study giving andrographolide 90 mg/day for 5 days, there was **no significant short-term rise in AST/ALT**, supporting the hepatic safety of short-term use at RCT-consistent doses [10,16]',
      },
    ],
    adrList: [
      {
        th: 'อาการไม่พึงประสงค์ที่ไม่รุนแรงพบได้บ่อย ส่วนใหญ่ระดับเล็กน้อย กลุ่มที่พบบ่อยที่สุดคือระบบทางเดินอาหารและผิวหนัง [5]',
        en: 'Non-serious adverse reactions are common and mostly mild; the most frequent involve the gastrointestinal tract and the skin [5]',
      },
      {
        table: {
          headers: [
            { th: 'ระบบ', en: 'System' },
            { th: 'อาการ', en: 'Reactions' },
            { th: 'ความถี่ / ความรุนแรง', en: 'Frequency / severity' },
          ],
          rows: [
            [
              { th: 'ทางเดินอาหาร', en: 'Gastrointestinal' },
              { th: 'คลื่นไส้, ปวด/แสบท้อง, ถ่ายเหลว/ท้องเสีย, เบื่ออาหาร', en: 'Nausea, abdominal discomfort/burning, loose stool/diarrhea, anorexia' },
              { th: 'พบบ่อยที่สุด (~8–9% ในการศึกษา andrographolide 90 มก./วัน)', en: 'Most common (~8–9% in a 90 mg/day andrographolide study)' },
            ],
            [
              { th: 'ผิวหนังและชั้นใต้ผิวหนัง', en: 'Skin and subcutaneous tissue' },
              { th: 'ผื่น, คัน, ลมพิษ', en: 'Rash, pruritus, urticaria' },
              { th: 'พบบ่อย', en: 'Common' },
            ],
            [
              { th: 'ระบบประสาท', en: 'Nervous system' },
              { th: 'เวียนศีรษะ, ปวดศีรษะ', en: 'Dizziness, headache' },
              { th: 'พบน้อยกว่า มักเล็กน้อย', en: 'Less common, usually mild' },
            ],
            [
              { th: 'รุนแรง (พบน้อย)', en: 'Serious (rare)' },
              { th: 'anaphylaxis, angioedema', en: 'Anaphylaxis, angioedema' },
              { th: 'พบน้อยมากแต่รุนแรง — หยุดใช้ทันที', en: 'Very rare but serious — stop use immediately' },
            ],
          ],
        },
      },
      {
        note: {
          th: 'ข้อสังเกต: การทบทวนพบว่า **ยาฉีดอนุพันธ์ andrographolide** มีอาการไม่พึงประสงค์รุนแรงกว่า (รวม anaphylactic shock และมีผู้เสียชีวิตบางราย) ขณะที่**ตำรับสมุนไพรฟ้าทะลายโจรชนิดรับประทาน**ในขนาดตาม RCT ส่วนใหญ่มีอาการไม่รุนแรง (ทางเดินอาหาร/ภูมิไวเกิน) และถูกสรุปว่า “ปลอดภัยโดยพื้นฐาน” เมื่อใช้ในขนาดและระยะเวลาที่มีหลักฐาน [11]',
          en: 'Note: reviews found that **andrographolide-derivative injections** have a more severe adverse-effect profile (including anaphylactic shock and some deaths), whereas **oral herbal AP preparations** at RCT-consistent doses are mostly mild (GI/hypersensitivity) and were concluded to be “essentially safe” when used at evidence-based doses and durations [11]',
        },
      },
    ],

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
      'Khaing SL, et al. Safety of Andrographis paniculata: a systematic review and meta-analysis. Pharmacoepidemiol Drug Saf. 2021;30(6):727-739. doi:10.1002/pds.5190',
      'บัญชียาหลักแห่งชาติด้านสมุนไพร กระทรวงสาธารณสุข ประเทศไทย. / National List of Herbal Medicinal Products, Ministry of Public Health, Thailand.',
      'A comprehensive review on disposition kinetics and dosage of oral administration of Andrographis paniculata. Front Pharmacol. 2022.',
      'World Health Organization. WHO monographs on selected medicinal plants, Vol. 2: Herba Andrographidis. Geneva: WHO; 2002.',
      'Memorial Sloan Kettering Cancer Center (MSKCC). Andrographis. Integrative Medicine — About Herbs.',
      'Chaiyakunapruk N, et al. Comparative pharmacokinetics and safety evaluation of Andrographis paniculata formulations in mild COVID-19 patients. Front Pharmacol. 2023.',
      'Yang Y, et al. Adverse Effects of Andrographolide Derivative Medications Compared to the Safe Use of Herbal Preparations of Andrographis paniculata: A Systematic Review and Meta-Analysis of Clinical Studies. Front Pharmacol. 2022;13:773282. doi:10.3389/fphar.2022.773282',
      'Suwankesawong W, et al. Characterization of hypersensitivity reactions reported among Andrographis paniculata users in Thailand using the Health Product Vigilance Center (HPVC) database. BMC Complement Altern Med. 2014;14:515. doi:10.1186/1472-6882-14-515',
      'Therapeutic Goods Administration (TGA). Andrographis paniculata (Andrographis) and anaphylaxis — updated safety review and supplementary report. TGA; 2026.',
      'Medsafe. Reminder: Allergic reactions with Andrographis paniculata. Prescriber Update; 2025.',
      'Zhang, et al. Andrographolide-induced PANoptosis underlies its multiple organ toxicity in mice. 2025. PMID:41371369.',
      'Li, et al. Andrographolide: a review of its pharmacology, pharmacokinetics, toxicity and clinical trials and pharmaceutical researches. Phytother Res. 2023. doi:10.1002/ptr.7324',
    ],
  },
});
