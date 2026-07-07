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

    adultDosing: [
      { th: '## ผิวขาว / ต้านอนุมูลอิสระ (ชนิดรับประทาน)', en: '## Skin-lightening / antioxidant (oral)' },
      {
        th: '- 500 มก./วัน (แบ่ง 250 มก. เช้า–เย็น) นาน 4 สัปดาห์ [8]\n- 250 มก./วัน (รูป reduced หรือ oxidized) นาน 12 สัปดาห์ [9]',
        en: '- 500 mg/day (250 mg twice daily) for 4 weeks [8]\n- 250 mg/day (reduced or oxidized form) for 12 weeks [9]',
      },
      { th: '## ป้องกันพิษต่อไต/เส้นประสาทจากเคมีบำบัด (ชนิดฉีด IV)', en: '## Chemotherapy-induced neuro/nephrotoxicity (IV)' },
      {
        th: '1,000–1,800 มก./วัน IV (ร่วมกับ oxaliplatin หรือ cisplatin) เพื่อป้องกันพิษต่อไตและเส้นประสาท [10]',
        en: '1,000–1,800 mg/day IV (with oxaliplatin or cisplatin) to prevent renal and nerve toxicity [10]',
      },
      {
        note: {
          th: '**ข้อจำกัดด้านชีวปริมาณออกฤทธิ์:** แม้ให้ชนิดรับประทานสูงถึง 3 กรัม ก็ไม่เพิ่มระดับ glutathione ในพลาสมาอย่างมีนัยสำคัญ (ถูกย่อยโดย gamma-glutamyltransferase ที่ลำไส้และตับ) จึงยังไม่มีข้อบ่งใช้ทางคลินิกที่ชัดเจนสำหรับชนิดรับประทานในผู้ใหญ่ทั่วไป [11]',
          en: '**Bioavailability limitation:** even oral doses up to 3 g do not significantly raise plasma glutathione (degraded by intestinal and hepatic gamma-glutamyltransferase); there is no established clinical indication for oral glutathione in the general adult population [11]',
        },
      },
    ],
    adultKidney: [
      { th: '## ผู้ป่วยฟอกเลือด (hemodialysis)', en: '## Hemodialysis patients' },
      {
        th: '- Reduced L-glutathione ชนิดรับประทาน 1,000 มก./วัน นาน 4 สัปดาห์ ลด TNF-α อย่างมีนัยสำคัญ (แต่ไม่ลด hs-CRP หรือ neutrophil–lymphocyte ratio) — ยังเป็น experimental/นอกแนวทาง [11]\n- Reduced glutathione ชนิดฉีด 1,200 มก. นาน 180 วัน เพิ่ม hematocrit/hemoglobin และลด reticulocyte (ผลสูงสุดวันที่ 120; ประโยชน์หายไปหลังหยุด) [11]',
        en: '- Oral reduced L-glutathione 1,000 mg/day for 4 weeks significantly lowered TNF-α (but not hs-CRP or the neutrophil–lymphocyte ratio) — still experimental/off-guideline [11]\n- Parenteral reduced glutathione 1,200 mg for 180 days increased hematocrit/hemoglobin and lowered reticulocyte count (peak at day 120; benefit lost after stopping) [11]',
      },
      { th: '## ผู้ป่วยล้างไตทางช่องท้อง (peritoneal dialysis)', en: '## Peritoneal dialysis patients' },
      {
        th: 'Glutathione prodrug OTZ ชนิดรับประทาน 0.5 กรัม วันละ 3 ครั้ง (พร้อมมื้ออาหาร) เพิ่มระดับ glutathione ในเลือดรวมที่วันที่ 7 และ 14 อย่างมีนัยสำคัญ ไม่พบเหตุการณ์ไม่พึงประสงค์ร้ายแรง (RCT n=20) [11]',
        en: 'Oral glutathione prodrug OTZ 0.5 g three times daily (with meals) significantly increased whole-blood glutathione at days 7 and 14, with no serious adverse events (RCT, n=20) [11]',
      },
      { th: '## CKD ที่ยังไม่ฟอกไต', en: '## Non-dialysis CKD' },
      {
        th: 'ไม่มีคำแนะนำขนาดยาที่ชัดเจน — แนวทาง KDIGO 2024 ไม่ระบุการเสริม glutathione ในการดูแล CKD มาตรฐาน จึงไม่แนะนำให้ใช้ตามปกติ [12]',
        en: 'No established dosing — the KDIGO 2024 guideline does not include glutathione supplementation in standard CKD care, so routine use is not recommended [12]',
      },
      {
        note: {
          th: '⚠️ **ข้อควรระวังการสับสน:** high-dose parenteral **glutamine** (คนละสารกับ glutathione) เป็นข้อห้ามเด็ดขาดในผู้ป่วย acute kidney injury หรือ CKD ที่มีไตวาย — ต้องแยกให้ชัดเมื่อทบทวนเวชระเบียน [13]',
          en: '⚠️ **Do not confuse:** high-dose parenteral **glutamine** (a different substance from glutathione) is an absolute contraindication in acute kidney injury or CKD with kidney failure — distinguish carefully when reviewing records [13]',
        },
      },
    ],
    adultLiver: [
      {
        th: 'โรคไขมันพอกตับเรื้อรัง: glutathione ชนิดฉีด IV 1,800 มก./วัน ให้ผลดีที่สุดในการปรับปรุงค่าการทำงานของตับ (bilirubin, AST, ALT, GGT) และลด malondialdehyde แม้หลังหยุดหลายเดือน [14]',
        en: 'Chronic fatty liver disease: IV glutathione 1,800 mg/day gave the best improvement in liver function tests (bilirubin, AST, ALT, GGT) and reduced malondialdehyde, persisting for months after stopping [14]',
      },
      {
        note: {
          th: '**ข้อจำกัด:** ข้อมูลเก่า (1994) และเป็นชนิดฉีด IV ซึ่งมีความเสี่ยงสูง (SIRS, SJS/TEN — ดูหัวข้อ Adverse Reactions) จึงต้องชั่งประโยชน์–ความเสี่ยงเป็นรายบุคคล และยังไม่มีขนาดยาที่ปรับตามความรุนแรงของตับ (เช่น Child-Pugh)',
          en: '**Limitations:** the data are old (1994) and use the high-risk IV route (SIRS, SJS/TEN — see Adverse Reactions); benefit vs. risk must be weighed individually, and no severity-adjusted (e.g. Child-Pugh) dosing exists',
        },
      },
    ],
    olderAdult: {
      th: 'ไม่พบ RCT ที่กำหนดขนาดยาเฉพาะสำหรับผู้สูงอายุ การศึกษาในผู้ใหญ่ทั้งหมดไม่ได้แบ่งกลุ่มอายุหรือปรับขนาดตามการทำงานของไต/ตับที่ลดลงตามวัย จึงยังไม่มีข้อมูลเชิงประจักษ์รองรับการปรับขนาดในกลุ่มนี้',
      en: 'No RCT has defined a specific dose for older adults. Adult studies did not stratify by age or adjust for age-related decline in renal/hepatic function, so there is no evidence to guide dose adjustment in this group.',
    },

    pediatricDosing: {
      th: 'ไม่มี RCT รองรับการใช้ glutathione เสริมในเด็กสำหรับข้อบ่งใช้ทั่วไป (ผิวขาว/ต้านอนุมูลอิสระ) มีเพียง case series ในบริบทออทิสซึม (ASD) ที่ใช้ภายใต้การดูแลของแพทย์เฉพาะทาง ไม่ใช่ขนาดเสริมอาหารทั่วไป และไม่พบข้อมูลการปรับขนาดในเด็กที่มีภาวะไตหรือตับบกพร่อง',
      en: 'No RCT supports glutathione supplementation in children for general indications (skin-lightening/antioxidant). Only case series in autism spectrum disorder (ASD), used under specialist supervision — not general supplement dosing — exist, and there are no data on dose adjustment in children with renal or hepatic impairment.',
    },

    adrSignificant: [
      {
        th: '**สำคัญที่สุด: ความเสี่ยงขึ้นกับรูปแบบ** — ชนิดรับประทานเสี่ยงต่ำ ส่วนชนิดฉีด (โดยเฉพาะ IV ที่ไม่ได้มาตรฐาน) เสี่ยงสูงกว่ามาก ควรเน้นย้ำกับผู้ที่ถามเรื่องฉีดเพื่อความงาม [11]',
        en: '**Most important: risk is route-dependent** — oral is low-risk, whereas injectable forms (especially unregulated IV) carry much higher risk; emphasize this to anyone asking about cosmetic injections [11]',
      },
      {
        th: '**ชนิดรับประทาน:** ทนได้ดี — RCT 6 เดือน (250–1,000 มก./วัน) ไม่พบ SAE; พบอาการ GI เล็กน้อยใน 4 สัปดาห์แรกและหายเอง ยังไม่มี toxic dose/overdose ที่ชัดเจน [11]',
        en: '**Oral:** well tolerated — a 6-month RCT (250–1,000 mg/day) found no SAEs; mild GI symptoms may occur in the first 4 weeks and resolve on their own; no defined toxic dose/overdose [11]',
      },
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
    adrList: [
      {
        th: '**ชนิดรับประทาน (oral):** คลื่นไส้ ท้องอืด ปวดเกร็งท้อง — ระดับเล็กน้อย พบใน 4 สัปดาห์แรก หายได้เอง [11]',
        en: '**Oral:** nausea, bloating, abdominal cramping — mild, in the first 4 weeks, self-resolving [11]',
      },
      {
        table: {
          headers: [
            { th: 'ชนิดฉีด: อาการ', en: 'Injectable: reaction' },
            { th: 'ความรุนแรง', en: 'Severity' },
          ],
          rows: [
            [{ th: 'Anaphylactic shock', en: 'Anaphylactic shock' }, { th: 'รุนแรงมาก (อันตรายถึงชีวิต) [4]', en: 'Very severe (life-threatening) [4]' }],
            [{ th: 'Stevens-Johnson syndrome / TEN', en: 'Stevens-Johnson syndrome / TEN' }, { th: 'รุนแรงมาก [2]', en: 'Very severe [2]' }],
            [{ th: 'SIRS', en: 'SIRS' }, { th: 'รุนแรงมาก [1]', en: 'Very severe [1]' }],
            [{ th: 'ตับทำงานผิดปกติ (deranged LFT)', en: 'Deranged liver function' }, { th: 'รุนแรง [4]', en: 'Severe [4]' }],
            [{ th: 'ผื่น/ลมพิษ, แน่นหน้าอก/หายใจลำบาก', en: 'Rash/urticaria, chest tightness/dyspnea' }, { th: 'ปานกลาง–รุนแรง [15]', en: 'Moderate–severe [15]' }],
            [{ th: 'ปฏิกิริยาตำแหน่งฉีด, ปวดศีรษะ, เวียนศีรษะ, คลื่นไส้', en: 'Injection-site reaction, headache, dizziness, nausea' }, { th: 'เล็กน้อย [15]', en: 'Mild [15]' }],
          ],
        },
      },
      {
        note: {
          th: 'อาการฉีดที่มีหลักฐานระดับ case report/series ผ่าน peer review: SIRS, SJS/TEN, anaphylaxis, ตับผิดปกติ [1,2,4]; อาการอื่นบางส่วนมาจาก clinical guide ที่ไม่ผ่าน peer review [15]',
          en: 'Peer-reviewed case-report/series evidence: SIRS, SJS/TEN, anaphylaxis, deranged LFT [1,2,4]; some other items are from a non-peer-reviewed clinical guide [15]',
        },
      },
    ],

    contraindications: {
      th: '- **แพ้/ภูมิไวเกิน (hypersensitivity)** ต่อ glutathione หรือส่วนประกอบ (รวมชื่อพ้อง: Gamma-L-glutamyl-L-cysteinyl glycine, GSH, L-glutathione) — ห้ามใช้ซ้ำ (มีรายงาน anaphylaxis, SJS/TEN) [16][1,2,4]\n- **โรคหืด (asthma) — เฉพาะรูปพ่น/สูดดม (inhaled/nebulized):** กระตุ้นหลอดลมหดเกร็ง (ในผู้ป่วยหืดเล็กน้อยลด FEV1 ~19%, เพิ่มแรงต้านทางเดินหายใจ ~61%) จากกลไกซัลไฟต์ [11]\n- หลีกเลี่ยงชนิดฉีดเพื่อความงามจากแหล่งที่ไม่ได้มาตรฐาน (US FDA ไม่รับรองความปลอดภัย/ความปลอดโปร่ง) [5]',
      en: '- **Hypersensitivity** to glutathione or any excipient (synonyms: Gamma-L-glutamyl-L-cysteinyl glycine, GSH, L-glutathione) — do not re-expose (anaphylaxis, SJS/TEN reported) [16][1,2,4]\n- **Asthma — inhaled/nebulized form only:** triggers bronchoconstriction (in mild asthma, FEV1 ↓ ~19%, airway resistance ↑ ~61%) via a sulfite mechanism [11]\n- Avoid injectable forms for cosmetic use from unregulated sources (US FDA does not assure their safety/sterility) [5]',
    },
    warningsPrecautions: {
      th: '- หลีกเลี่ยงการฉีดกลูตาไธโอนเพื่อความงามจากแหล่งที่ไม่ได้มาตรฐาน (เสี่ยง endotoxin/ปนเปื้อนและปฏิกิริยารุนแรง); หยุดใช้ทันทีและพบแพทย์หากมีผื่นรุนแรง ผิวลอก ไข้สูง หรือช็อก — ยังไม่มีข้อมูลความปลอดภัยระยะยาว\n- **ตั้งครรภ์/ให้นมบุตร:** ข้อมูลไม่เพียงพอ — แนะนำหลีกเลี่ยง [17]\n- **ภาวะไวต่อซัลไฟต์ (เฉพาะรูปสูดดม):** พิจารณาคัดกรอง sulfite ในปัสสาวะก่อนใช้ [18]\n- **โรคตับหรือไตบกพร่อง:** ควรปรึกษาแพทย์ก่อนใช้ (ยังไม่มีคำแนะนำการปรับขนาดที่ชัดเจน) [19]',
      en: '- Avoid injectable glutathione for cosmetic use from unregulated sources (risk of endotoxin/contamination and severe reactions); stop immediately and seek care if severe rash, skin peeling, high fever, or shock occurs — no long-term safety data\n- **Pregnancy/lactation:** insufficient data — avoid use [17]\n- **Sulfite sensitivity (inhaled form only):** consider urine sulfite screening before use [18]\n- **Hepatic or renal impairment:** consult a physician before use (no clear dose-adjustment guidance) [19]',
    },

    labeledIndications: [
      { th: '## สหรัฐอเมริกา (US FDA)', en: '## United States (US FDA)' },
      {
        th: 'ข้อบ่งใช้ที่ FDA รับรองมีเพียงเป็นส่วนประกอบใน **intraocular irrigating solution (BSS PLUS®)** สำหรับผ่าตัดตา (glutathione disulfide 0.184 มก./มล.) โดยระบุ **"NOT FOR INJECTION OR INTRAVENOUS INFUSION"** — FDA ยังไม่รับรอง glutathione แบบ systemic (IV/IM/oral) สำหรับข้อบ่งใช้ทางการแพทย์ใดๆ [20]',
        en: 'The only FDA-approved indication is as a component of an **intraocular irrigating solution (BSS PLUS®)** for eye surgery (glutathione disulfide 0.184 mg/mL), labeled **"NOT FOR INJECTION OR INTRAVENOUS INFUSION."** No systemic (IV/IM/oral) glutathione is FDA-approved for any medical indication [20]',
      },
      {
        th: '**Orphan drug designations (US):** liposomal glutathione สำหรับภาวะพร่อง glutathione ใน inborn errors of metabolism (IEMG); S-nitrosoglutathione สำหรับ cystic fibrosis; glutathione สำหรับภาวะปอดผิดปกติหลังปลูกถ่ายปอด [17]',
        en: '**Orphan drug designations (US):** liposomal glutathione for glutathione deficiency in inborn errors of metabolism (IEMG); S-nitrosoglutathione for cystic fibrosis; glutathione for post-lung-transplant lung dysfunction [17]',
      },
      { th: '## ฟิลิปปินส์ / ไทย', en: '## Philippines / Thailand' },
      {
        th: '- **ฟิลิปปินส์ (FDA):** รับรองเป็น adjunct ลด neurotoxicity จาก cisplatin ในการรักษามะเร็ง [21]\n- **ไทย (อย.):** ไม่พบข้อบ่งใช้ systemic ที่ขึ้นทะเบียนเป็นยา — ผลิตภัณฑ์ส่วนใหญ่จัดเป็นอาหารเสริม',
        en: '- **Philippines (FDA):** approved as an adjunct to reduce cisplatin-induced neurotoxicity in cancer treatment [21]\n- **Thailand (Thai FDA):** no registered systemic medical indication — most products are classified as dietary supplements, not drugs',
      },
    ],
    offLabelAdult: [
      { th: '## ผิวขาว / ฝ้า (Melasma) — หลักฐานมากที่สุด', en: '## Skin-lightening / melasma — best evidence' },
      {
        th: 'Systematic review: **oral 250–500 มก./วัน** และ **topical 2.0% oxidized glutathione** ลด melanin index บริเวณที่โดนแดดอย่างมีนัยสำคัญ ส่วน **IV** มี placebo-controlled เพียงชิ้นเดียวและผลไม่ถึงนัยสำคัญ (p=0.054) → **ไม่ควรใช้ IV** เพื่อข้อบ่งใช้นี้ (ขาดประสิทธิภาพ + เสี่ยงสูง) [22]',
        en: 'Systematic review: **oral 250–500 mg/day** and **topical 2.0% oxidized glutathione** significantly reduce the melanin index in sun-exposed areas; the only placebo-controlled **IV** study was not significant (p=0.054) → **IV is not recommended** for this use (lacks efficacy, high risk) [22]',
      },
      { th: '## ข้อบ่งใช้อื่น', en: '## Other uses' },
      {
        th: '- **ลดพิษจากเคมีบำบัด (adjunct):** ลด neuro/nephrotoxicity จาก platinum (cisplatin, oxaliplatin) — 1.5 ก./ตร.ม. IV ก่อนเคมีบำบัด หรือ 600 มก./วัน IM วันที่ 2–5 ของรอบ [17]\n- **ภาวะมีบุตรยากในเพศชาย:** IM 600 มก. วันเว้นวัน นาน 2 เดือน — หลักฐานระดับ "possibly effective" เท่านั้น [17]\n- **หลักฐานจำกัด (anecdotal/preliminary, ไม่มี RCT ใหญ่):** atherosclerosis, เบาหวาน, โรคตับ, โรคปอด (สูดดม), พาร์กินสัน, กระตุ้นภูมิคุ้มกัน, ความจำเสื่อม [17]',
        en: '- **Chemotherapy-toxicity adjunct:** reduce platinum (cisplatin, oxaliplatin) neuro/nephrotoxicity — 1.5 g/m² IV before chemotherapy, or 600 mg/day IM on days 2–5 of the cycle [17]\n- **Male infertility:** IM 600 mg every other day for 2 months — evidence only "possibly effective" [17]\n- **Limited evidence (anecdotal/preliminary, no large RCT):** atherosclerosis, diabetes, liver disease, lung disease (inhaled), Parkinson disease, immunostimulant, memory loss [17]',
      },
    ],

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
      'Arjinpathana N, Asawanonda P. Glutathione as an oral whitening agent: a randomized, double-blind, placebo-controlled study. J Dermatolog Treat. 2012;23(2):97-102.',
      'Weschawalit S, et al. Glutathione and its antiaging and antimelanogenic effects. Clin Cosmet Investig Dermatol. 2017;10:147-153.',
      'Vinmec. Glutathione: Uses, Dosage, Side Effects. 2024.',
      'droracle.ai clinical evidence summary — oral glutathione bioavailability and use in dialysis/CKD (citing healthy-volunteer, hemodialysis, and peritoneal dialysis studies). 2024–2026.',
      'KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease.',
      'ESPEN guideline — parenteral glutamine contraindication in acute kidney injury / kidney failure (cited in droracle.ai).',
      'Glutathione in the treatment of chronic fatty liver diseases. 1994. PMID:7569285.',
      'Apni Care clinical guide (non-peer-reviewed). 2025.',
      'RxList. Glutathione: uses, side effects, warnings. 2021.',
      'Medscape Reference. Glutathione (dosing, adverse effects, pregnancy/lactation). 2024.',
      'LoCoco Wellness Clinic. Inhaled/nebulized glutathione protocol and sulfite-sensitivity screening. 2018.',
      'Care Hospitals. Glutathione — uses, side effects, and precautions (hepatic/renal impairment). Patient-education resource.',
      'droracle.ai citing FDA labeling data — BSS PLUS® (balanced salt solution with glutathione) intraocular irrigating solution; "not for injection or intravenous infusion." 2026.',
      'Sonthalia S, et al. Glutathione as a skin-lightening agent: facts, myths, evidence and controversies. Clin Cosmet Investig Dermatol. 2018;11:XXX (PMC5808366).',
      'Glutathione as a skin-lightening agent and in melasma — systematic review. 2025. PMID:39444151.',
    ],
  },
});
