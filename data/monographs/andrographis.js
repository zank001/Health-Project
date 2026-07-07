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
      th: '- **ประวัติภูมิไวเกิน/แพ้รุนแรง (hypersensitivity/anaphylaxis) ต่อฟ้าทะลายโจร** หรือพืชในวงศ์ Acanthaceae — ห้ามใช้ซ้ำ (ฐานข้อมูลเภสัชระวังของไทยพบปฏิกิริยาตั้งแต่ผื่นเล็กน้อยจนถึง anaphylactic shock และ angioedema) [12]\n- **หญิงตั้งครรภ์** — ยังไม่สามารถยืนยันความปลอดภัยได้ (ดูข้อพิจารณาในหัวข้อการตั้งครรภ์) [17]\n- หญิงให้นมบุตร (ข้อมูลไม่เพียงพอ)\n- ผู้ที่มีภาวะตับหรือไตบกพร่องรุนแรง',
      en: '- **History of hypersensitivity / severe allergy (anaphylaxis) to andrographis** or plants in the Acanthaceae family — do not re-expose (the Thai pharmacovigilance database documented reactions from mild rash to anaphylactic shock and angioedema) [12]\n- **Pregnancy** — safety cannot be confirmed (see the pregnancy section) [17]\n- Breastfeeding (insufficient data)\n- Severe hepatic or renal impairment',
    },
    warningsPrecautions: [
      { th: '## หยุดใช้ทันทีหากมีอาการแพ้', en: '## Stop immediately if allergic symptoms occur' },
      {
        th: 'หยุดใช้ทันทีและไปพบแพทย์หากมีผื่น บวม แน่นคอ หรือหายใจลำบาก (เสี่ยง anaphylaxis) และห้ามใช้ซ้ำหากเคยมีอาการแพ้',
        en: 'Stop immediately and seek medical care if rash, swelling, throat tightness, or difficulty breathing occurs (risk of anaphylaxis); do not re-use if you have had an allergic reaction.',
      },
      { th: '## อันตรกิริยากับยาที่เมแทบอไลซ์ผ่าน CYP450', en: '## Interactions with drugs metabolized by CYP450' },
      {
        th: 'การศึกษาในหลอดทดลองและสัตว์พบว่าสารสกัดฟ้าทะลายโจรและ andrographolide **ยับยั้ง CYP2C9 และ CYP3A4** (ทั้งใน rat และ human hepatocytes; Ki < 20 μg/mL) และอาจยับยั้ง CYP2D6 ด้วย [18,19,21] นอกจากนี้ในหนูยังพบว่า**เพิ่ม clearance ของ theophylline** (substrate ของ CYP1A2) ซึ่งอาจลดประสิทธิภาพยาที่ผ่าน CYP1A2 (เช่น theophylline, caffeine) [20]',
        en: 'In vitro and animal studies show that andrographis extract and andrographolide **inhibit CYP2C9 and CYP3A4** (in both rat and human hepatocytes; Ki < 20 μg/mL) and may also inhibit CYP2D6 [18,19,21]. In rats it also **increased theophylline clearance** (a CYP1A2 substrate), which could reduce the efficacy of CYP1A2-metabolized drugs (e.g. theophylline, caffeine) [20]',
      },
      {
        note: {
          th: 'อย่างไรก็ตาม systematic review สรุปว่าหลักฐานในมนุษย์**ยังไม่เพียงพอ**ที่จะยืนยันว่าฟ้าทะลายโจรเป็น CYP inhibitor ที่มีนัยสำคัญทางคลินิก จึงควรระวังไว้ก่อนเมื่อใช้ร่วมกับยาที่มีช่วงการรักษาแคบ จนกว่าจะมีข้อมูลเพิ่มเติม [22]',
          en: 'However, a systematic review concluded that human evidence is **insufficient** to confirm andrographis as a clinically significant CYP inhibitor; nonetheless, use caution with narrow-therapeutic-index drugs until more data are available [22]',
        },
      },
      { th: '## ความเสี่ยงเลือดออก (ฤทธิ์ต้านเกล็ดเลือด)', en: '## Bleeding risk (antiplatelet effect)' },
      {
        th: 'andrographolide และ 14-deoxy-11,12-didehydroandrographolide ยับยั้งการเกาะกลุ่มของเกล็ดเลือด (thrombin-/ADP-induced) แบบขึ้นกับขนาดและเวลา และการศึกษาทางคลินิกในผู้ป่วยโรคหัวใจ/หลอดเลือดสมอง 63 รายพบการยับยั้ง ADP-induced platelet aggregation อย่างมีนัยสำคัญ [23,24] จึงควรใช้ด้วยความระมัดระวังในผู้ที่มีภาวะเลือดออกผิดปกติ ผู้ที่ใช้ยาต้านการแข็งตัวของเลือด/ยาต้านเกล็ดเลือด และก่อนการผ่าตัด',
        en: 'Andrographolide and 14-deoxy-11,12-didehydroandrographolide inhibit platelet aggregation (thrombin-/ADP-induced) in a dose- and time-dependent manner, and a clinical study in 63 cardiovascular/cerebrovascular patients found significant inhibition of ADP-induced platelet aggregation [23,24]. Use caution in people with bleeding disorders, those on anticoagulant/antiplatelet drugs, and before surgery.',
      },
      {
        note: {
          th: 'อย่างไรก็ตาม การศึกษาในอาสาสมัครไทยสุขภาพดี 10 รายที่ได้รับฟ้าทะลายโจร 2 กรัม วันละ 3 ครั้ง (ภายใน 1 วัน) ไม่พบการเปลี่ยนแปลงของ platelet aggregation อย่างมีนัยสำคัญทางสถิติ (แม้มีแนวโน้มลดลง) ผลจึงอาจขึ้นกับขนาดและระยะเวลาที่ใช้ [25]',
          en: 'However, a study in 10 healthy Thai volunteers given andrographis 2 g three times within one day found no statistically significant change in platelet aggregation (though a downward trend was seen); the effect may depend on dose and duration [25]',
        },
      },
      { th: '## โรคภูมิต้านตนเองและการปรับภูมิคุ้มกัน', en: '## Autoimmune disease and immunomodulation' },
      {
        th: 'ฟ้าทะลายโจรมีฤทธิ์**ปรับภูมิคุ้มกันที่ขึ้นกับบริบท**: บางการศึกษาพบว่า andrographolide **กดภูมิคุ้มกัน** (ยับยั้ง T cell activation, ลด IL-2, ลดความรุนแรงของ EAE ซึ่งเป็นโมเดลของ multiple sclerosis) [26] ขณะที่บางการศึกษาพบฤทธิ์**กระตุ้นภูมิคุ้มกัน** (เพิ่ม IL-2, IFN-γ, กระตุ้น cytotoxic T lymphocyte) [27] ความไม่สอดคล้องนี้ทำให้ควรใช้ด้วยความระมัดระวังในผู้ป่วยโรคภูมิต้านตนเองหรือผู้ที่ใช้ยากดภูมิคุ้มกัน จนกว่าจะมีข้อมูลทางคลินิกชัดเจนกว่านี้',
        en: 'Andrographis has **context-dependent immunomodulatory** activity: some studies show andrographolide is **immunosuppressive** (inhibits T-cell activation, lowers IL-2, reduces severity of EAE — a multiple sclerosis model) [26], while others show **immunostimulant** effects (increased IL-2, IFN-γ, activation of cytotoxic T lymphocytes) [27]. Because of this inconsistency, use caution in people with autoimmune disease or on immunosuppressants until clearer clinical data are available.',
      },
      { th: '## อื่น ๆ', en: '## Other' },
      {
        th: 'อาจลดความดันโลหิต — ควรระวังในผู้ที่ใช้ยาลดความดันโลหิต',
        en: 'May lower blood pressure — use caution in people taking antihypertensive drugs.',
      },
    ],

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

    metabolismEffects: [
      {
        th: 'กลไกหลักของอันตรกิริยาระหว่างฟ้าทะลายโจรกับยา (herb-drug interaction) คือการมีผลต่อเอนไซม์ **cytochrome P450 (CYP)** ทั้งการยับยั้งและเหนี่ยวนำ ซึ่งกระทบเภสัชจลนศาสตร์ของยาหลายกลุ่ม รวมทั้งพบฤทธิ์เสริมกันเชิงเภสัชพลศาสตร์กับยาต้านการอักเสบและยาต้านเบาหวานบางชนิด [28]',
        en: 'The main mechanism of andrographis herb-drug interactions is an effect on **cytochrome P450 (CYP)** enzymes — both inhibition and induction — altering the pharmacokinetics of several drug classes, along with pharmacodynamic synergy with some anti-inflammatory and antidiabetic drugs [28]',
      },
      {
        th: '- การศึกษาในหลอดทดลองด้วยเอนไซม์ CYP ของมนุษย์ยืนยันว่าสารสกัดฟ้าทะลายโจรและ andrographolide **ยับยั้ง CYP2C9, CYP2D6 และ CYP3A4** อย่างมีนัยสำคัญ (ความรุนแรงต่างกันตามชนิดสารสกัด) [21]\n- การศึกษาใน rat และ human hepatocyte พบ **CYP mRNA และ monooxygenase activity ลดลง** ทั้ง in vivo และ in vitro [18] และพบการยับยั้งที่แตกต่างกันต่อ CYP1A2, CYP2C9 และ CYP3A4 [19]',
        en: '- In vitro studies with human CYP enzymes confirm that andrographis extract and andrographolide **significantly inhibit CYP2C9, CYP2D6, and CYP3A4** (extent varies by extract type) [21]\n- Rat and human hepatocyte studies show **reduced CYP mRNA and monooxygenase activity** both in vivo and in vitro [18], with differential inhibition of CYP1A2, CYP2C9, and CYP3A4 [19]',
      },
      {
        note: {
          th: 'systematic review ที่ทบทวนผลต่อ CYP450 สรุปว่าหลักฐานในมนุษย์**ยังไม่เพียงพอ**ที่จะยืนยันความเสี่ยงอันตรกิริยาอย่างชัดเจน แต่แนะนำให้ระวังเชิงคลินิกไว้ก่อน โดยเฉพาะยาที่มีช่วงการรักษาแคบ (narrow therapeutic index) [22]',
          en: 'A systematic review of CYP450 effects concluded that human evidence is **insufficient** to firmly establish the interaction risk, but advised clinical caution, especially with narrow-therapeutic-index drugs [22]',
        },
      },
    ],
    drugInteractions: [
      {
        th: 'สรุปอันตรกิริยาที่ควรระวัง (ส่วนใหญ่จากข้อมูลในสัตว์/หลอดทดลอง — ความสำคัญทางคลินิกในมนุษย์ยังต้องการข้อมูลเพิ่มเติม):',
        en: 'Interactions to watch for (mostly from animal/in-vitro data — clinical significance in humans needs further evidence):',
      },
      {
        table: {
          headers: [
            { th: 'ยา / กลุ่มยา', en: 'Drug / class' },
            { th: 'กลไกและผล', en: 'Mechanism & effect' },
            { th: 'คำแนะนำ', en: 'Recommendation' },
          ],
          rows: [
            [
              { th: 'Theophylline / aminophylline / doxofylline', en: 'Theophylline / aminophylline / doxofylline' },
              { th: 'PK (CYP1A2): เพิ่ม clearance/ลด AUC ในขนาดต่ำ, สะสมในขนาดสูง', en: 'PK (CYP1A2): ↑clearance/↓AUC at low doses, accumulation at high doses' },
              { th: 'ติดตามอาการ/ระดับยา อาจกระทบประสิทธิภาพหรือความเป็นพิษ [20,28]', en: 'Monitor response/levels; may affect efficacy or toxicity [20,28]' },
            ],
            [
              { th: 'NSAIDs: etoricoxib, nabumetone, naproxen', en: 'NSAIDs: etoricoxib, nabumetone, naproxen' },
              { th: 'PK (CYP2C9): เหนี่ยวนำ metabolism → ลดระดับยา', en: 'PK (CYP2C9): induced metabolism → lower drug levels' },
              { th: 'อาจลดประสิทธิภาพ ติดตามการตอบสนอง [28]', en: 'May reduce efficacy; monitor response [28]' },
            ],
            [
              { th: 'ยาต้านเบาหวาน: tolbutamide, glibenclamide, glimepiride, metformin, gliclazide', en: 'Antidiabetics: tolbutamide, glibenclamide, glimepiride, metformin, gliclazide' },
              { th: 'PD: เสริมฤทธิ์ลดน้ำตาล', en: 'PD: additive glucose-lowering' },
              { th: 'เสี่ยง hypoglycemia — ติดตามระดับน้ำตาล [28]', en: 'Hypoglycemia risk — monitor blood glucose [28]' },
            ],
            [
              { th: 'Warfarin', en: 'Warfarin' },
              { th: 'PK: เพิ่มระดับ warfarin', en: 'PK: increased warfarin levels' },
              { th: 'เสี่ยง INR สูง/เลือดออก — ติดตาม INR [28]', en: 'Risk of high INR/bleeding — monitor INR [28]' },
            ],
            [
              { th: 'Midazolam', en: 'Midazolam' },
              { th: 'PK (CYP3A4): เปลี่ยนแปลง PK', en: 'PK (CYP3A4): altered pharmacokinetics' },
              { th: 'ระวังยาที่ผ่าน CYP3A4 [28]', en: 'Caution with CYP3A4 substrates [28]' },
            ],
            [
              { th: 'ยาต้านการแข็งตัวของเลือด/ต้านเกล็ดเลือด (aspirin, clopidogrel, warfarin)', en: 'Anticoagulants/antiplatelets (aspirin, clopidogrel, warfarin)' },
              { th: 'PD: เสริมฤทธิ์ต้านเกล็ดเลือด', en: 'PD: additive antiplatelet effect' },
              { th: 'เสี่ยงเลือดออก — ระวัง/ติดตาม [23,24]', en: 'Bleeding risk — caution/monitor [23,24]' },
            ],
            [
              { th: 'ยาลดความดันโลหิต', en: 'Antihypertensives' },
              { th: 'PD: เสริมฤทธิ์ลดความดัน', en: 'PD: additive blood-pressure lowering' },
              { th: 'เสี่ยงความดันต่ำ — ติดตามความดัน [29]', en: 'Hypotension risk — monitor blood pressure [29]' },
            ],
            [
              { th: 'ยากดภูมิคุ้มกัน', en: 'Immunosuppressants' },
              { th: 'PD: ฤทธิ์ปรับภูมิคุ้มกัน (กระตุ้น/กด ขึ้นกับบริบท)', en: 'PD: immunomodulatory (stimulating/suppressing, context-dependent)' },
              { th: 'อาจกระทบประสิทธิภาพ — ระวัง [26,27]', en: 'May affect efficacy — caution [26,27]' },
            ],
            [
              { th: 'ยาต้านไวรัส (รวม HIV)', en: 'Antivirals (including HIV)' },
              { th: 'PK (CYP) + ตับ: อาจเปลี่ยน metabolism และเพิ่มเสี่ยงพิษต่อตับ', en: 'PK (CYP) + hepatic: may alter metabolism and add to hepatotoxicity risk' },
              { th: 'ระวังหากยามีพิษต่อตับ — ติดตาม LFT [18]', en: 'Caution with hepatotoxic agents — monitor LFT [18]' },
            ],
            [
              { th: 'ยาต้านมะเร็ง: 5-fluorouracil, cisplatin, paclitaxel', en: 'Anticancer: 5-fluorouracil, cisplatin, paclitaxel' },
              { th: 'PD: synergism', en: 'PD: synergism' },
              { th: 'อาจเพิ่มฤทธิ์/ความเป็นพิษ — ระวัง [28]', en: 'May increase effect/toxicity — caution [28]' },
            ],
          ],
        },
      },
    ],

    reproductiveConsiderations: [
      { th: '## เพศเมีย (ฤทธิ์ต้านการฝังตัว)', en: '## Female (anti-implantation effect)' },
      {
        th: 'การศึกษาในหนูพบว่า ethanol extract ของฟ้าทะลายโจรขนาด 200 มก./กก. มีฤทธิ์ต้านการฝังตัว (anti-implantation) สูงถึง 83.3% เมื่อให้ในระยะก่อนการฝังตัว แต่ในหนูที่ตั้งครรภ์ต่อ ลูกที่คลอดออกมาไม่มีความผิดปกติชัดเจน [30]',
        en: 'In rats, an ethanol extract of andrographis 200 mg/kg had anti-implantation activity of up to 83.3% when given in the pre-implantation period; in rats that remained pregnant, the offspring showed no clear abnormalities [30]',
      },
      { th: '## เพศผู้ (ฤทธิ์ต้านการสร้างอสุจิ)', en: '## Male (antispermatogenic effect)' },
      {
        th: 'หนูขาวเพศผู้ที่ได้รับผงใบแห้ง 20 มก./วัน นาน 60 วัน พบการหยุดสร้างอสุจิ (cessation of spermatogenesis), การเสื่อมของ seminiferous tubules, การถดถอยของ Leydig cells และการเปลี่ยนแปลงเสื่อมของ epididymis/seminal vesicle/prostate บ่งชี้ฤทธิ์ antispermatogenic และ/หรือ antiandrogenic [31] และการศึกษาในหนู Sprague-Dawley พบว่าฤทธิ์ spermatoxic นี้**กลับคืนสภาพได้ (reversible)** หลังหยุดให้สาร [32]',
        en: 'Male albino rats given dry leaf powder 20 mg/day for 60 days showed cessation of spermatogenesis, degeneration of the seminiferous tubules, regression of Leydig cells, and degenerative changes in the epididymis/seminal vesicle/prostate, indicating antispermatogenic and/or antiandrogenic activity [31]. In Sprague-Dawley rats this spermatoxic effect was **reversible** after stopping the extract [32]',
      },
      {
        note: {
          th: 'อย่างไรก็ตาม การศึกษาในหนู Wistar เพศผู้ที่ได้รับสารสกัดมาตรฐาน (andrographolide ≥10%) ในขนาดที่ใช้ทางคลินิก **ไม่พบผลกระทบอย่างมีนัยสำคัญ**ต่อจำนวน/การเคลื่อนที่ของอสุจิและ fertility index — ผลลบต่อระบบสืบพันธุ์เพศผู้จึงอาจสัมพันธ์กับขนาดยาที่สูงกว่าขนาดทางคลินิก [33]',
          en: 'However, male Wistar rats given a standardized extract (≥10% andrographolide) at clinically relevant doses showed **no significant effect** on sperm count/motility or fertility index — the adverse reproductive effects may therefore be associated with doses higher than clinical ones [33]',
        },
      },
    ],
    pregnancyConsiderations: [
      { th: 'ไม่แนะนำ/ห้ามใช้ในหญิงตั้งครรภ์ (ตามหลักป้องกันไว้ก่อน)', en: 'Not recommended / contraindicated in pregnancy (as a precaution)' },
      { th: '## กลไก progesterone', en: '## Progesterone mechanism' },
      {
        th: 'การศึกษาที่มักถูกอ้างถึงให้สารสกัดฟ้าทะลายโจรขนาด 200, 600 และ 2,000 มก./กก. (สูงกว่าขนาดรักษาในมนุษย์ ~30, 90 และ 300 เท่า) ใน 19 วันแรกของการตั้งครรภ์หนู **ไม่พบผลต่อระดับ progesterone** ผู้วิจัยสรุปว่าในขนาดที่ใช้ทางการรักษา ฟ้าทะลายโจรไม่น่าก่อการยุติการตั้งครรภ์ผ่านกลไก progesterone [34]',
        en: 'A frequently cited study gave andrographis extract 200, 600, and 2,000 mg/kg (~30, 90, and 300× the human therapeutic dose) during the first 19 days of rat pregnancy and found **no effect on progesterone levels**; the authors concluded that at therapeutic doses andrographis is unlikely to cause progesterone-mediated termination of pregnancy [34]',
      },
      { th: '## Developmental toxicity', en: '## Developmental toxicity' },
      {
        th: 'การศึกษา developmental toxicity ในหนู Wistar (สารสกัด 30–300 มก./กก. วันตั้งครรภ์ที่ 7–17) ไม่พบความพิการที่ชัดเจน แต่พบ **delayed ossification** (sternebrae/ischium) และความผิดปกติของจำนวนซี่โครงในกลุ่มขนาดสูง ตีความว่าเป็นพัฒนาการช้าชั่วคราว [17]',
        en: 'A developmental toxicity study in Wistar rats (extract 30–300 mg/kg on gestation days 7–17) found no clear malformations but showed **delayed ossification** (sternebrae/ischium) and rib-number anomalies at high doses, interpreted as transient developmental delay [17]',
      },
      {
        note: {
          th: 'ข้อมูลยังไม่สอดคล้องกัน: พบฤทธิ์ต้านการฝังตัวในขนาดสูง (200 มก./กก.) ขณะที่การศึกษา progesterone ในขนาดสูงกว่านั้นมากกลับไม่พบผล กลไกที่ทำให้ถูกจัดเป็น potential abortifacient จึงยังไม่ได้รับการพิสูจน์ชัดเจน ควรตีความด้วยความระมัดระวัง และข้อมูลทั้งหมดมาจากสัตว์ทดลอง [30,34]',
          en: 'Evidence is inconsistent: anti-implantation activity is seen at high doses (200 mg/kg), whereas a progesterone study at much higher doses found no effect. The mechanism behind its "potential abortifacient" label is not clearly established; interpret with caution — and all data are from animals [30,34]',
        },
      },
    ],
    breastfeedingConsiderations: {
      th: 'ยังไม่มีงานวิจัยปฐมภูมิที่ศึกษาการขับ andrographolide หรือสารออกฤทธิ์อื่นผ่านน้ำนมมนุษย์ หรือประเมินความปลอดภัยในทารกที่ดื่มนมแม่ซึ่งได้รับฟ้าทะลายโจรโดยตรง จึงเป็น**ช่องว่างความรู้ (research gap)** ที่ชัดเจน คำแนะนำให้หยุดให้นม 48 ชั่วโมงหรือ 2–3 วันที่พบในสื่อและประกาศของกระทรวงสาธารณสุขจึงเป็น**มาตรการป้องกันไว้ก่อน** มากกว่าจะมีข้อมูลเภสัชจลนศาสตร์ในน้ำนมรองรับโดยตรง — โดยรวมยังไม่แนะนำให้ใช้ระหว่างให้นมบุตร',
      en: 'No primary research has examined excretion of andrographolide or other active constituents into human milk, or the safety of infants breastfed by mothers taking andrographis — a clear **research gap**. Advice to interrupt breastfeeding for 48 hours or 2–3 days (seen in media and Ministry of Public Health notices) is therefore **precautionary** rather than based on human-milk pharmacokinetic data. Overall, use during breastfeeding is not recommended.',
    },

    mechanismOfAction: [
      { th: '## สารออกฤทธิ์หลัก (Active constituents)', en: '## Active constituents' },
      {
        th: 'สารออกฤทธิ์สำคัญคือกลุ่ม **diterpenoid lactones** โดย **andrographolide (AND)** เป็นสารหลักที่พบมากที่สุดในใบและลำต้น (สูตรเคมี C20H30O5, น้ำหนักโมเลกุล 350.4; ชื่อทางเคมี 3α,14,15,18-tetrahydroxy-5βH,9βH,10α-labda-8,12-dien-16-oic acid γ-lactone) ร่วมกับ 14-deoxy-11,12-didehydroandrographolide, neoandrographolide และ 14-deoxyandrographolide [35]',
        en: 'The key active constituents are **diterpenoid lactones**, with **andrographolide (AND)** the most abundant in leaves and stems (C20H30O5, MW 350.4; chemically 3α,14,15,18-tetrahydroxy-5βH,9βH,10α-labda-8,12-dien-16-oic acid γ-lactone), together with 14-deoxy-11,12-didehydroandrographolide, neoandrographolide, and 14-deoxyandrographolide [35]',
      },
      { th: '## ต้านการอักเสบ (ผ่าน NF-κB)', en: '## Anti-inflammatory (via NF-κB)' },
      {
        th: 'andrographolide ยับยั้ง **NF-κB** โดยจับกับ Cys62 ของ p50 subunit แบบ covalent ทำให้ NF-κB จับกับ DNA ไม่ได้ ส่งผลลดการแสดงออกของ E-selectin, COX-2 และ iNOS — เป็นกลไกหลักของฤทธิ์ต้านการอักเสบ [35]',
        en: 'Andrographolide inhibits **NF-κB** by covalently binding Cys62 of the p50 subunit, preventing NF-κB from binding DNA and reducing expression of E-selectin, COX-2, and iNOS — the main anti-inflammatory mechanism [35]',
      },
      { th: '## ต้านการเกาะกลุ่มของเกล็ดเลือด', en: '## Antiplatelet aggregation' },
      {
        th: 'ออกฤทธิ์ผ่านการกระตุ้น eNOS-NO/cyclic GMP และยับยั้ง PLCγ2-PKC และ PI3K/Akt-MAPK (p38) ใน washed human platelets [35]',
        en: 'Acts by activating the eNOS-NO/cyclic GMP pathway and inhibiting PLCγ2-PKC and PI3K/Akt-MAPK (p38) cascades in washed human platelets [35]',
      },
      { th: '## ปรับภูมิคุ้มกัน (สองทิศทาง)', en: '## Immunomodulation (dual-direction)' },
      {
        th: 'ในขนาดต่ำกระตุ้นการสร้างแอนติบอดีและ delayed-type hypersensitivity (เพิ่ม macrophage migration, phagocytosis, splenic lymphocyte) แต่ในบางบริบทยับยั้ง NF-κB ใน dendritic cells ทำให้เป็น tolerogenic มากขึ้น จึงมีฤทธิ์ทั้งกระตุ้นและกดภูมิคุ้มกันขึ้นกับบริบทและขนาด [35]',
        en: 'At low doses it stimulates antibody production and delayed-type hypersensitivity (enhancing macrophage migration, phagocytosis, and splenic lymphocytes), but in some settings it inhibits NF-κB in dendritic cells, making them more tolerogenic — hence both stimulatory and suppressive effects depending on context and dose [35]',
      },
      { th: '## ต้านมะเร็ง', en: '## Anticancer' },
      {
        th: 'ยับยั้ง JAK-STAT, PI3K และ NF-κB signaling, กด HSP90, cyclins/CDKs และ metalloproteinases และกระตุ้น tumor suppressor p53 และ p21 นำไปสู่การยับยั้งการแบ่งตัว การรอดชีวิต การแพร่กระจาย และการสร้างหลอดเลือดใหม่ของเซลล์มะเร็ง [35]',
        en: 'Inhibits JAK-STAT, PI3K, and NF-κB signaling; suppresses HSP90, cyclins/CDKs, and metalloproteinases; and activates the tumor suppressors p53 and p21, leading to inhibition of cancer-cell proliferation, survival, metastasis, and angiogenesis [35]',
      },
      { th: '## ลดน้ำตาลในเลือด', en: '## Antihyperglycemic' },
      {
        th: 'กระตุ้นการหลั่งอินซูลินผ่าน ATP-sensitive potassium channels, ยับยั้ง alpha-glucosidase และ alpha-amylase และเพิ่ม mRNA/โปรตีนของ glucose transporter ในกล้ามเนื้อ soleus ของหนูเบาหวาน ทำให้เพิ่มการนำกลูโคสเข้าเซลล์ [35]',
        en: 'Stimulates insulin secretion via ATP-sensitive potassium channels, inhibits alpha-glucosidase and alpha-amylase, and increases glucose-transporter mRNA/protein in the soleus muscle of diabetic rats, enhancing cellular glucose uptake [35]',
      },
    ],
    pharmacokinetics: [
      {
        th: 'การศึกษา phase I PK (แบบครั้งเดียวและหลายครั้ง) ในอาสาสมัครไทยสุขภาพดี 24 ราย ที่ได้รับสารสกัดน้ำของฟ้าทะลายโจร เทียบเท่า andrographolide 60 หรือ 120 มก. (ครั้งเดียว) และ 180 หรือ 360 มก./วัน (หลายครั้ง) [36]',
        en: 'A phase I PK study (single- and multiple-dose) in 24 healthy Thai participants given an aqueous andrographis extract equivalent to andrographolide 60 or 120 mg (single dose) and 180 or 360 mg/day (multiple dose) [36]',
      },
      {
        table: {
          headers: [
            { th: 'พารามิเตอร์ (andrographolide, ครั้งเดียว)', en: 'Parameter (andrographolide, single dose)' },
            { th: '60 มก.', en: '60 mg' },
            { th: '120 มก.', en: '120 mg' },
          ],
          rows: [
            [{ th: 'Cmax (ng/mL)', en: 'Cmax (ng/mL)' }, { th: '72.1 ± 28.7', en: '72.1 ± 28.7' }, { th: '112 ± 33.4', en: '112 ± 33.4' }],
            [{ th: 'Tmax (ชม.)', en: 'Tmax (h)' }, { th: '0.80', en: '0.80' }, { th: '0.80', en: '0.80' }],
            [{ th: 'AUC(0–24) (ng·h/mL)', en: 'AUC(0–24) (ng·h/mL)' }, { th: '210 ± 25.4', en: '210 ± 25.4' }, { th: '345 ± 63.5', en: '345 ± 63.5' }],
            [{ th: 'ครึ่งชีวิต (ชม.)', en: 'Half-life (h)' }, { th: '1.3', en: '1.3' }, { th: '1.2', en: '1.2' }],
            [{ th: 'Vd/F (L/kg)', en: 'Vd/F (L/kg)' }, { th: '9.0 ± 1.66', en: '9.0 ± 1.66' }, { th: '10.8 ± 1.6', en: '10.8 ± 1.6' }],
            [{ th: 'Cl/F (L/h/kg)', en: 'Cl/F (L/h/kg)' }, { th: '4.9 ± 0.84', en: '4.9 ± 0.84' }, { th: '6.0 ± 0.91', en: '6.0 ± 0.91' }],
          ],
        },
      },
      {
        th: '- **การดูดซึม:** เร็ว (Tmax ~0.8 ชม.)\n- **ครึ่งชีวิต:** สั้น (~1.2–2.3 ชม. สำหรับ andrographolide) จึงต้องให้หลายครั้งต่อวันเพื่อคงระดับยา\n- **เมแทบอลิซึม:** ผ่าน phase II conjugation เป็น glucuronide และ sulfate เป็นหลัก (เปลี่ยนรูปที่ตับอย่างรวดเร็ว)\n- **การขับออก:** ทาง hepatobiliary และปัสสาวะเป็นหลัก [36]',
        en: '- **Absorption:** rapid (Tmax ~0.8 h)\n- **Half-life:** short (~1.2–2.3 h for andrographolide), requiring multiple daily doses to maintain levels\n- **Metabolism:** mainly phase II conjugation to glucuronide and sulfate (rapid hepatic transformation)\n- **Excretion:** primarily hepatobiliary and urinary [36]',
      },
    ],
    pkAdditional: [
      {
        th: '- **Dose proportionality:** ระดับยาในเลือดเพิ่มแบบขึ้นกับขนาด — เมื่อเพิ่มขนาด 2 เท่า Cmax และ AUC ของสาร parent ทั้ง 4 ชนิดเพิ่มขึ้น ~2 เท่า (dose-proportional ในช่วงที่ศึกษา) [36]\n- **สาร conjugated เด่นกว่า parent มาก:** เช่น AUC ของ glucuronide conjugate สูงกว่า parent ~40–50 เท่า สะท้อนการเมแทบอไลซ์อย่างรวดเร็ว [36]',
        en: '- **Dose proportionality:** blood levels rose dose-dependently — doubling the dose roughly doubled Cmax and AUC of all four parent compounds (dose-proportional over the studied range) [36]\n- **Conjugated metabolites dominate over parent:** e.g. glucuronide-conjugate AUC ~40–50× that of the parent, reflecting rapid metabolism [36]',
      },
      {
        note: {
          th: 'ความปลอดภัยในการศึกษา PK: อาการไม่พึงประสงค์ส่วนใหญ่ระดับเล็กน้อย พบไม่บ่อย และกลับสู่ปกติได้ แต่ผู้วิจัยแนะนำให้ระวังเป็นพิเศษในผู้ที่มีความผิดปกติของตับหรือไต [36]',
          en: 'Safety in the PK study: adverse events were mostly mild, infrequent, and reversible, but the authors advised particular caution in people with hepatic or renal impairment [36]',
        },
      },
    ],

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
      'Exploratory developmental toxicity study of Andrographis paniculata extract in pregnant Wistar rats. Indian J Tradit Knowl. 2025.',
      'Pekthong D, et al. Effects of Andrographis paniculata extract and andrographolide on hepatic cytochrome P450 mRNA expression and monooxygenase activities after in vivo administration to rats and in vitro in rat and human hepatocyte cultures. Chem Biol Interact. 2009;179(2-3):247-255. doi:10.1016/j.cbi.2008.10.054',
      'Pekthong D, et al. Differential inhibition of rat and human hepatic cytochrome P450 by Andrographis paniculata extract and andrographolide. J Ethnopharmacol. 2008;115(3):432-440. doi:10.1016/j.jep.2007.10.013',
      'Chien CF, et al. Herb-drug interaction of Andrographis paniculata extract and andrographolide on the pharmacokinetics of theophylline in rats. Chem Biol Interact. 2010;184(3):458-465. doi:10.1016/j.cbi.2010.01.036',
      'Pekthong D, et al. In vitro determination of the effect of Andrographis paniculata extracts and andrographolide on human hepatic cytochrome P450 activities. J Nat Med. 2011;65(3-4):440-447. doi:10.1007/s11418-011-0516-z',
      'Pholphana N, et al. The effects of Andrographis paniculata (Burm.f.) Nees extract and diterpenoids on CYP450 isoform activities: a review of possible herb-drug interaction risks. Phytother Res. 2016. doi:10.1002/ptr.5679',
      'Zhang CY, et al. [Study of Andrographis paniculata extracts on antiplatelet aggregation and release reaction and its mechanism]. Zhongguo Zhong Xi Yi Jie He Za Zhi. 1994;14(1):28-30.',
      'Thisoda P, et al. Inhibitory effect of Andrographis paniculata extract and its active diterpenoids on platelet aggregation. Eur J Pharmacol. 2006;553(1-3):39-45. doi:10.1016/j.ejphar.2006.09.052',
      'Sattayasai J, et al. The Effects of Andrographis paniculata on Platelet Activity in Healthy Thai Volunteers. Evid Based Complement Alternat Med. 2018;2018:2458281. doi:10.1155/2018/2458281',
      'Iruretagoyena MI, et al. Andrographolide interferes with T cell activation and reduces experimental autoimmune encephalomyelitis in the mouse. J Pharmacol Exp Ther. 2005;312(1):366-372. doi:10.1124/jpet.104.072512',
      'Rajagopal S, et al. Activation of cytotoxic T lymphocyte responses and attenuation of tumor growth in vivo by Andrographis paniculata extract and andrographolide. Immunopharmacol Immunotoxicol. 2007;29(1):81-93. doi:10.1080/08923970701282726',
      'Yuandani, et al. Potential pharmacokinetic and pharmacodynamic herb-drug interactions of Andrographis paniculata: a systematic review. J Herbmed Pharmacol. 2022;11(2). doi:10.34172/jhp.2022.24',
      'WebMD. Andrographis. Ingredient monograph (based on pharmacological interaction data).',
      'Antifertility studies of curcumin and andrographolide combination in female rats. J Coast Life Med. (ScienceDirect S2305050015000160).',
      'Antifertility effect of Andrographis paniculata (Nees) in male albino rat. PMID:2401516.',
      'Reversible spermatoxic effect of Andrographis paniculata methanol extract in Sprague-Dawley rats. 2016.',
      'Allan JJ, et al. Reproductive and Fertility Effects of an Extract of Andrographis paniculata in Male Wistar Rats. Int J Toxicol. 2009;28(4):308-317. doi:10.1177/1091581809339631',
      'Panossian A, et al. Effect of Andrographis paniculata extract on progesterone in blood plasma of pregnant rats. Phytomedicine. 1999;6(3):157-161. doi:10.1016/S0944-7113(99)80003-8',
      'Jayakumar T, et al. Experimental and Clinical Pharmacology of Andrographis paniculata and Its Major Bioactive Phytoconstituent Andrographolide. Evid Based Complement Alternat Med. 2013;2013:846740. doi:10.1155/2013/846740',
      'Songvut P, et al. Comparative pharmacokinetics and safety evaluation of high dosage regimens of Andrographis paniculata aqueous extract after single and multiple oral administration in healthy participants. Front Pharmacol. 2023;14:1230401. doi:10.3389/fphar.2023.1230401',
    ],
  },
});
