/**
 * Site-wide EN / SQ (Albanian). Persisted in localStorage.
 */
(function (w) {
  'use strict';

  var STORAGE = 'evisaLang';

  var SQ = {
    doc_index: 'e-visa – Portali i Vizës Elektronike të Shqipërisë',
    doc_apply: 'Aplikoni – e-visa',
    doc_login: 'Hyrje – e-visa',
    doc_register: 'Regjistrim – e-visa',
    doc_track: 'Gjurmo – e-visa',
    doc_verify: 'Verifiko – e-visa',
    doc_profile: 'Profili – e-visa',
    doc_admin: 'Administratori – e-visa',
    doc_terms: 'Kushtet & Afatet – Vizë Elektronike Shqipëri',
    doc_privacy: 'Politika e privatësisë – Vizë Elektronike Shqipëri',
    doc_immigration: 'Rregullat e emigracionit – e-visa',
    doc_visa_policy: 'Politika e vizave – e-visa',
    doc_faq_gen: 'Pyetje të shpeshta – e-visa',
    doc_faq_visa: 'FAQ për viza – e-visa',
    doc_entry: 'Kërkesat e hyrjes – e-visa',
    doc_travel: 'Udhëtim & shëndet – e-visa',
    doc_cookies: 'Politika e cookies – e-visa',
    doc_legal: 'Njoftime ligjore – e-visa',
    doc_disclaimers: 'Mohime ligjore – e-visa',
    nav_login: 'Hyr',
    nav_register: 'Regjistrohu',
    nav_profile: 'Profili im',
    nav_apps: 'Aplikimet',
    nav_signout: 'Dilni',
    nav_notify: 'Nuk ka njoftime',
    nav_bell: 'Njoftime',
    lang_group: 'Gjuha',
    foot_app: 'Aplikim',
    foot_new: 'Aplikim i ri',
    foot_ongoing: 'Aplikime në vazhdim',
    foot_track: 'Gjurmo aplikimin',
    foot_verify: 'Verifiko',
    foot_info: 'Informacion',
    foot_terms: 'Kushtet & Afatet',
    foot_privacy: 'Privatësia',
    foot_immigration: 'Emigracioni',
    foot_visapol: 'Politika e vizave',
    foot_faq: 'Pyetje të shpeshta',
    foot_visafaq: 'FAQ viza',
    foot_entry: 'Kërkesat e hyrjes',
    foot_travel: 'Udhëtim & shëndet',
    foot_cookies: 'Cookies',
    foot_legal: 'Njoftime ligjore',
    foot_operator:
      'Demonstracion informativ. Jo portal zyrtar qeveritar.',
    hero_apply: 'Aplikoni tani',
    hero_track: 'Gjurmo',
    hero_verify: 'Verifiko',
    idx_how: 'Si funksionon',
    idx_s1h: 'Plotësoni aplikimin',
    idx_s1p: 'Plotësoni formularin online dhe ngarkoni dokumentet e kërkuara.',
    idx_s1l: 'Filloni aplikimin →',
    idx_s2h: 'Verifikoni aplikimin',
    idx_s2p: 'Kontrolloni të dhënat dhe paguani tarifën e vizës kur kërkohet.',
    idx_s2l: 'Verifiko →',
    idx_s3h: 'Pritni rezultatin',
    idx_s3p: 'Gjurmoni aplikimin dhe merrni e-Visën me email.',
    idx_s3l: 'Gjurmo statusin →',
    idx_why: 'Pse të përdorni e-Visa',
    idx_f1h: 'I sigurt dhe efikas',
    idx_f1p: 'Paraqitja e aplikimit është e sigurt dhe e thjeshtë.',
    idx_f2h: 'Miratim i shpejtë për vendet e përshtatshme',
    idx_f2p: 'Shihni listën e vendeve dhe regjimin e vizave më poshtë.',
    idx_f3h: 'I thjeshtë dhe miqësor me mjedisin',
    idx_f3p: 'Proces pa letër, formularë të thjeshtë.',
    idx_f4h: 'Turizëm, biznes, studim & tranzit',
    idx_f4p: 'Aplikoni për llojin e vizës që ju nevojitet.',
    idx_f5h: 'Aplikim online 24/7',
    idx_f5p: 'Formularë të thjeshtë, aplikoni kur të doni.',
    idx_cta_h: 'Gati të aplikoni?',
    idx_cta_btn: 'Plotësoni aplikimin',
    login_title: 'Hyni në llogarinë tuaj',
    login_email_ph: 'Adresa e email-it',
    login_pass_ph: 'Fjalëkalimi',
    login_remember: 'Më mbaj mend',
    login_forgot: 'Keni harruar fjalëkalimin?',
    login_submit: 'Hyr',
    login_ok: 'Llogaria u krijua. Ju lutemi hyni.',
    reg_title: 'Krijo llogari të re',
    reg_submit: 'Regjistrohu',
    reg_have: 'Keni tashmë llogari?',
    reg_signin: 'Hyr',
    track_h1: 'Gjurmoni aplikimin',
    track_sub: 'Përdorni kodin e aplikimit për të parë statusin e e-Visës.',
    track_h2: 'Shkruani kodin e aplikimit',
    track_p: 'Kodi u dërgua me email pasi të dorëzoni formularin (p.sh. ROM-2XXXXXXX3XXXX).',
    track_label: 'Kodi i aplikimit *',
    track_ph: 'p.sh. ROM-2XXXXXXX3XXXX',
    track_btn: 'Gjurmo aplikimin',
    track_nf_h: 'Aplikimi nuk u gjet',
    track_nf_p: 'Asnjë aplikim nuk përputhet me kodin. Kontrolloni dhe riprovoni.',
    track_res_h: 'Detajet e aplikimit',
    track_th_pass: 'Numri i pasaportës',
    track_th_visa: 'Numri i vizës',
    track_th_code: 'Kodi i aplikimit',
    track_th_stat: 'Statusi',
    track_pdf_lbl: 'Dokumenti i bashkangjitur',
    track_pdf_view: 'Shiko PDF',
    track_pdf_print: 'Shtyp PDF',
    track_pdf_title: 'Dokument PDF',
    track_pdf_tab: 'Hap në skedë të re',
    track_pdf_close: 'Mbyll',
    verify_h1: 'Verifiko',
    verify_submit: 'Verifiko',
    apply_title: 'Aplikoni',
    apply_dd_head: 'Kategoritë e vizave & kërkesat',
    apply_dd_sub:
      'Tema të lidhura me Elektronike, Vulë, Tipin A, C, D dhe vizën në kufi. Hapni çdo rresht për detaje.',
    apply_dd_hint: 'Kaloni mbi kartat më sipër për të zgjedhur llojin e vizës',
    apply_sel: 'Zgjidh',
    apply_h2_intro:
      'e-Visa është sistem aplikimesh online i zhvilluar nga qeveria shqiptare për paraskanimin e udhëtarëve që dëshirojnë të vizitojnë Shqipërinë.',
    apply_p_intro:
      'Aplikantët kanë akses të plotë në sistem. Ata duhet të përfundojnë procesin para se të udhëtojnë drejt Shqipërisë me ajër, tokë ose det.',
    apply_h2_imp: 'INFORMACION I RËNDËSISHËM PARA APLIKIMIT',
    apply_imp_1:
      'Pagesa e vizës nuk kthehet në rast refuzimi të aplikimit.',
    apply_imp_2:
      'Marrja e vizës nuk garanton hyrjen në Republikën e Shqipërisë.',
    apply_imp_3:
      'Aplikimet duhet të plotësohen online dhe aplikanti duhet të jetë jashtë territorit të Shqipërisë pas pagesës së tarifës.',
    apply_imp_4:
      'Gjatë verifikimit, është rreptësisht e ndaluar komunikimi me institucionet përveç kur kontaktoheni nga misioni diplomatik përkatës.',
    apply_imp_5:
      'Vlerësimi pas pagesës zgjat minimum 15 ditë pune dhe në raste përjashtuese deri në 30 ditë pune.',
    apply_imp_6:
      'Në mungesë pagese brenda 15 ditëve, aplikimi kalon në statusin «E papaguar» dhe refuzohet automatikisht.',
    apply_imp_7:
      'Me dy shtetësi, zgjidhni kombësinë e pasaportës që do të përdorni për udhëtim. Mospërputhja e bën e-Visën të pavlefshme.',
    apply_imp_8:
      'Të gjitha dokumentet duhet të përkthehen në shqip ose anglisht dhe të jenë PDF të skanuara.',
    apply_photo_h2:
      'NDIQNI UDHËZIMET MË POSHTËM KUR NGARKONI DOKUMENTET:',
    apply_photo_p1:
      'Fotografia duhet të plotësojë 47 mm × 36 mm ose 555 px (lartësi) × 425 px (gjerësi) × 300 DPI',
    apply_photo_p2:
      'Fotokopjet duhet të skanohen sipas udhëzimeve më poshtë:',
    apply_card_ok_h: 'KUR APLIKIMI PËRFUNDON ME SUKSES',
    apply_card_pay_h: 'KERKOHET PAGESA PËR VIZË',
    apply_card_irr_h: 'PARREGULLSI NË APLIKIM',
    apply_card_ref_h: 'NJOFTIM PËR REFUZIM VIZE',
    apply_visa_types: 'Llojet e vizave',
    apply_stamped: 'Vizë me vulë',
    apply_electronic: 'Vizë elektronike',
    apply_border: 'Vizë në kufi',
    apply_type_a: 'Viza e tipit A',
    apply_type_c: 'Viza e tipit C',
    apply_type_d: 'Viza e tipit D',
    apply_dd1_t: 'Viza elektronike – qëllimi dhe dorëzimi',
    apply_dd1_b:
      '<p class="space-y-2"><strong>Viza elektronike</strong> shpesh lëshohet pa ngjitëse fizike; vendimi komunikohet me email. Përshtatet për qëndrime të shkurtra kur kanali online është i hapur—si karta «Elektronike» më sipër.</p><p>Duhet të paraqisni vizën (print ose digital sipas udhëzimit) në kufi.</p>',
    apply_dd2_t: 'Viza elektronike – dokumente mbështetëse',
    apply_dd2_b:
      '<p>Zakonisht kërkohen: pasaportë e vlefshme, fotografi sipas specifikimeve, sigurim shëndetësor udhëtimi kur aplikohet, dëshmi akomodimi, biletë kthimi dhe mjete financiare. Ngarkimet duhet të jenë <strong>PDF</strong> në <strong>shqip ose anglisht</strong> (ose të përkthyera).</p>',
    apply_dd3_t: 'Vizë me vulë – kur ta zgjidhni',
    apply_dd3_b:
      '<p>Zgjidhni <strong>vizë me vulë</strong> kur ju duhet ngjitëse fizike në pasaportë ose marrje në ambasadë/konsullatë. Përdorni <strong>ZGJIDH</strong> në kartën përkatëse.</p>',
    apply_dd4_t: 'Marrja në mision diplomatik',
    apply_dd4_b:
      '<p>Pas miratimit, paraqiteni në mision me pasaportë dhe udhëzimet e dërguara me email. Mund të kërkohen biometri ose intervistë.</p>',
    apply_dd5_t: 'Viza tranzit në aeroport (A) – zona ndërkombëtare',
    apply_dd5_b:
      '<p>Tipi <strong>A</strong> lejon qëndrimin në <strong>zonën e tranzitit ndërkombëtar</strong> të aeroportit deri në fluturimin lidhës. Mund të lëshohet me një, dy ose hyrje të shumëfishta.</p>',
    apply_dd6_t: 'Tipi A – formular online & Aplikoni',
    apply_dd6_b:
      '<p class="space-y-4 mb-4">Formulari plotësohet online pa pagesë, gjenerohet dhe shkarkohet nga sistemi pas dërgesës.</p><button type="button" class="button button-secondary w-full sm:w-auto px-10 py-2.5 font-bold rounded-md shadow-sm hover:shadow-md transition-shadow" onclick="window.open(\'https://e-visa.al/sign-in?redirect=%2Fcreate-application%3FvisaTypeId%3D34\',\'_blank\')">Aplikoni për tipin A</button>',
    apply_dd7_t: 'Viza qëndrim i shkurtër (C) – rregulli 90/180',
    apply_dd7_b:
      '<p>Tipi <strong>C</strong> ju lejon deri në <strong>90 ditë në çdo 180 ditë</strong>, nga hyrja e parë. Përdorni opsionin <strong>ZGJIDH</strong> në kartën e tipit C.</p>',
    apply_dd8_t: 'Tipi C – një, dy ose shumë hyrje',
    apply_dd8_b:
      '<p>Autoriteti konsullor mund të lëshojë tipin C me një, dy ose më shumë hyrje sipas qëllimit dhe dokumentacionit.</p>',
    apply_dd9_t: 'Qëndrim i gjatë (D) – mbi 90 ditë',
    apply_dd9_b:
      '<p>Tipi <strong>D</strong> është për qëndrime <strong>më të gjata se 90 ditë brenda 180 ditëve</strong>, shpesh si hap drejt lejes së qëndrimit.</p>',
    apply_dd10_t: 'Tipi D – lidhja me e-Albania',
    apply_dd10_b:
      '<p class="mb-2">Disa aplikime për qëndrim të gjatë paraqiten përmes portalit kombëtar të shërbimeve elektronike.</p><a href="https://e-albania.al/eAlbaniaServices/DPPSH/15388/DPPSH_15388_n4_s1_web.aspx?service_code=15388" target="_blank" rel="noopener" class="link-preview-text break-all">Hap shërbimin e-Albania (kodi 15388)</a>',
    apply_dd11_t: 'Viza në kufi – ekuipazhet e lundrimit',
    apply_dd11_b:
      '<p>Kategoria vlen për <strong>ekuipazhet e anijeve</strong> shqiptare ose të huaja që duhet të hipin, rihipin ose kthehen në Shqipëri.</p>',
    apply_dd12_t: 'Viza kufi – 1 hyrje, 1–5 ditë',
    apply_dd12_b:
      '<p>Viza në kufi kufizohet në <strong>një hyrje</strong> dhe qëndrim <strong>1–5 ditë</strong>.</p>',
    apply_dd13_t: 'Vlefshmëria e pasaportës',
    apply_dd13_b:
      '<p>Dokumenti i udhëtimit duhet të jetë i vlefshëm për gjithë qëndrimin dhe shpesh tre muaj pas largimit të planifikuar.</p>',
    apply_dd14_t: 'Përkthime & format PDF',
    apply_dd14_b:
      '<p>Dokumentet jo në shqip ose anglisht duhet të përkthehen. Ngarkimet duhet të jenë <strong>PDF të skanuara</strong>.</p>',
    apply_dd15_t: 'Madhësia e fotos (47×36 mm)',
    apply_dd15_b:
      '<p>Fotografia sipas stilit ICAO, zakonisht <strong>47×36 mm</strong> ose ekuivalenti dixhital në <strong>300 DPI</strong>.</p>',
    apply_dd16_t: 'Faturë bankare & dëshmi pagese',
    apply_dd16_b:
      '<p>Fatura duhet të tregojë emrin, kodin e aplikimit, përshkrimin e pagesës, vulën dhe nënshkrimin e bankës. Pamjet e ekranit të telefonit nuk pranohen.</p>',
    apply_dd17_t: 'Përpunimi: 15–30 ditë pune',
    apply_dd17_b:
      '<p>Pas pagesës, vlerësimi zgjat <strong>minimum 15 ditë pune</strong>; dosjet komplekse deri në <strong>30 ditë pune</strong>.</p>',
    apply_dd18_t: 'Mbajtësit e vizës Schengen & lejes',
    apply_dd18_b:
      '<p>Disa të huaj mund të hyjnë <strong>pa vizë deri në 90 ditë në 180 ditë</strong> nëse kanë vizë Schengen të shumëfishtë të përdorur në zonën Schengen ose leje qëndrimi—sipas listës zyrtare.</p>',
    apply_dd19_t: 'Të mitur & përfaqësues ligjorë',
    apply_dd19_b:
      '<p>Për fëmijët kërkohet pëlqimi prindëror dhe certifikata lindjeje. Tarifat për 6–12 vjeç zakonisht janë gjysma.</p>',
    apply_dd20_t: 'Dy shtetësi – dokument udhëtimi',
    apply_dd20_b:
      '<p>Regjistroni kombësinë e <strong>pasaportës që do të përdorni</strong>. Mospërputhja me të dhënat e e-Visës mund të çojë në refuzim hyrjeje.</p>',
    apply_dd21_t: 'Kontakti gjatë përpunimit',
    apply_dd21_b:
      '<p>Gjatë verifikimit, aplikantët dhe ftesat <strong>nuk duhet</strong> të kontaktojnë institucionet përveç kur kërkohet zyrtarisht.</p>',
    apply_dd22_t: 'Refuzimi, anulimi & ankesa',
    apply_dd22_b:
      '<p>Brenda <strong>5 ditëve pune</strong> nga refuzimi mund të ankoheni me arsye dhe prova te <a href="mailto:visa@mfa.gov.al" class="text-secondary-500 font-semibold hover:underline">visa@mfa.gov.al</a>. Lëshimi i vizës nuk garanton hyrjen.</p>',
    apply_type_a_btn: 'Aplikoni për tipin A',
    apply_visa_pick: 'Zgjidhni llojin e vizës së dëshiruar',
    apply_selected: 'E ZGJEDHUR',
    apply_evisa_title: 'Vizë elektronike',
    apply_evisa_sub: 'Vizë elektronike',
    apply_evisa_p:
      'Është një autorizim i printuar në formë elektronike, me vulë elektronike dhe i dërguar me email, pa nevojë për paraqitje fizike në përfaqësi diplomatike/konsullore.',
    apply_stamp_title: 'Vizë me vulë',
    apply_stamp_sub: 'Vizë me vulë',
    apply_stamp_p:
      'Autorizim në formë vulë në pasaportë. Në rast miratimi, aplikanti paraqitet fizikisht për marrjen e vizës.',
    apply_va_h2: 'Viza e tipit «A»',
    apply_va_h3: 'Viza tranziti në aeroport',
    apply_va_p1:
      'Lëshohet si vulë ose elektronike; lejon hyrjen dhe qëndrimin në zonën ndërkombëtare të aeroportit deri në tranzit.',
    apply_va_p2: 'Viza e tipit «A» mund të lëshohet me një, dy ose shumë hyrje.',
    apply_vc_h2: 'Viza e tipit «C»',
    apply_vc_h3: 'Vizë qëndrim i shkurtër',
    apply_vc_p1:
      'Lejon hyrjen dhe qëndrimin deri në 90 ditë brenda 180 ditëve nga hyrja e parë.',
    apply_vc_p2: 'Mund të lëshohet me një, dy ose më shumë hyrje.',
    apply_vd_h2: 'Viza e tipit «D»',
    apply_vd_h3: 'Vizë qëndrim i gjatë',
    apply_vd_p:
      'Për qëndrim mbi 90 ditë brenda 180 ditëve kur për leje qëndrimi kërkohet vizë.',
    apply_vd_link: 'LIDHJA PËR APLIKIM:',
    apply_vb_h2: 'Viza «Në kufi»',
    apply_vb_h3: 'Për ekuipazhet e mjeteve të lundrimit',
    apply_vb_p1:
      'Për ekuipazhet e anijeve shqiptare ose të huaja që kërkojnë leje për të hipur ose kthyer në Shqipëri.',
    apply_vb_p2:
      'Lëshohet me një hyrje dhe qëndrim 1 deri në 5 ditë.',
    admin_exit: 'Dilni nga admini',
    admin_label: 'Administratori',
    terms_h1: 'Kushtet & Afatet',
    terms_hero_p:
      'Përdorimi i portalit e-Visa të Republikës së Shqipërisë nënkupton këto kushte. Duke paraqitur aplikimin pranoni rregullat e shërbimeve konsullore online.',
    terms_nav_priv: 'Privatësia',
    terms_nav_imm: 'Rregullat e emigracionit',
    terms_nav_leg: 'Njoftime ligjore',
    terms_nav_faq: 'Pyetje të shpeshta',
    terms_c1h: '1. Shtrirja e shërbimit',
    terms_c1p:
      'Sistemi e-Visa u lejon të huajve të përshtatshëm të aplikojnë online për vizë shqiptare ku ky kanal ekziston. Nuk zëvendëson të gjitha kategoritë; disa raste kërkojnë mision diplomatik.',
    terms_c2h: '2. Informacion i saktë',
    terms_c2p:
      'Aplikantët duhet të japin të dhëna të vërteta dhe dokumente origjinale. Deklarata të rreme ose dokumente të falsifikuara mund të çojnë në refuzim, anulim vizë dhe pasoja ligjore.',
    terms_c3h: '3. Tarifat dhe moskthimi',
    terms_c3p:
      'Tarifat përcaktohen nga vendimet e Këshillit të Ministrave. Pagesa nuk garanton lëshimin. Zakonisht nuk kthehen në rast refuzimi, përveç kur ligji parashikon ndryshe.',
    terms_c4h: '4. Disponueshmëria teknike',
    terms_c4p:
      'Ministria synon të mbajë portalin të disponueshëm. Mirëmbajtja ose forca madhore mund të ndërpresë aksesin pa përgjësi për dëme indirekte.',
    terms_c5h: '5. Ndryshimet',
    terms_c5p:
      'Këto kushte mund të përditësohen. Vazhdimi i përdorimit pas publikimit nënkupton pranim. Konsultoni faqen rregullisht.',
    privacy_h1: 'Politika e privatësisë',
    privacy_hero_p:
      'Kjo faqe përshkruan si trajtohen të dhënat personale në kuadër të portalit e-Visa të Republikës së Shqipërisë.',
    imm_h1: 'Rregullat e emigracionit',
    imm_hero_p:
      'Përmbledhje e kornizës ligjore për të huajt, hyrjen dhe qëndrimin në Republikën e Shqipërisë.',
    visa_pol_h1: 'Politika e vizave',
    visa_pol_hero_p:
      'Informacion mbi regjimin e vizave, kategoritë dhe kanalet e aplikimit për Shqipërinë.',
    faq_gen_h1: 'Pyetje të shpeshta',
    faq_gen_hero_p:
      'Përgjigje të shpeshta mbi portalin e-Visa, aplikimin dhe përdorimin e sistemit.',
    faq_visa_h1: 'FAQ për viza',
    faq_visa_hero_p:
      'Pyetje të zakonshme mbi llojet e vizave, dokumentacionin dhe procedurat.',
    entry_h1: 'Kërkesat e hyrjes',
    entry_hero_p:
      'Çfarë duhet të dini para se të udhëtoni drejt Shqipërisë: dokumente, viza dhe përjashtime.',
    travel_h1: 'Udhëtim & njoftime shëndetësore',
    travel_hero_p:
      'Udhëzime dhe njoftime për udhëtarët lidhur me shëndetin dhe udhëtimin.',
    cookies_h1: 'Politika e cookies',
    cookies_hero_p:
      'Si përdorim cookies dhe teknologji të ngjashme në portalin e-Visa.',
    legal_h1: 'Njoftime ligjore',
    legal_hero_p:
      'Kufizime përgjegësie dhe informacion ligjor lidhur me përdorimin e portalit.',
    admin_h1: 'Regjistrat e aplikimeve për vizë',
    admin_p:
      'Aplikantët i shohin këto regjistra përmes <strong>Gjurmo</strong> (kodi) ose <strong>Verifiko</strong> (pasaportë dhe numër vizë).',
    profile_title: 'Profili im',
    verify_card_title: 'Verifikoni vizën tuaj',
    verify_pass_lbl: 'Numri i pasaportës',
    verify_visa_lbl: 'Numri i vizës',
    verify_ph_visa: 'Numri i vizës',
    verify_ph_pass: 'Numri i pasaportës',
    verify_nf: 'Nuk u gjet aplikim për kombinimin e pasaportës dhe vizës.',
    verify_detail_h2: 'Detajet e aplikimit',
    verify_th1: 'Numri i pasaportës',
    verify_th2: 'Numri i vizës',
    verify_th3: 'Kodi i aplikimit *',
    verify_th4: 'Statusi',
    login_submit_btn: 'Hyr',
    reg_title1: 'Krijo',
    reg_title2: ' llogarinë tuaj e-Visa',
    reg_personal: 'Të dhënat personale',
    reg_login_sec: 'Të dhënat e hyrjes',
    reg_fname: 'Emri',
    reg_mname: 'Emri i dytë',
    reg_lname: 'Mbiemri',
    reg_nat: 'Kombësia',
    reg_nat_ph: 'Zgjidhni kombësinë',
    reg_email: 'Email',
    reg_pass: 'Fjalëkalimi',
    reg_pass2: 'Përsërit fjalëkalimin',
    reg_consent: 'Pranoj kushtet dhe privatësinë.'
  };

  function getLang() {
    try {
      return localStorage.getItem(STORAGE) === 'sq' ? 'sq' : 'en';
    } catch (e) {
      return 'en';
    }
  }

  function setLang(lang) {
    try {
      localStorage.setItem(STORAGE, lang === 'sq' ? 'sq' : 'en');
    } catch (e) {}
    document.documentElement.lang = lang === 'sq' ? 'sq' : 'en';
    applyAll();
    if (typeof w.renderNavbarAuth === 'function') w.renderNavbarAuth();
  }

  function t(key) {
    var lang = getLang();
    if (lang === 'sq' && SQ[key]) return SQ[key];
    return null;
  }

  var APPLY_DD_KEYS = [
    ['apply_dd1_t', 'apply_dd1_b'],
    ['apply_dd2_t', 'apply_dd2_b'],
    ['apply_dd3_t', 'apply_dd3_b'],
    ['apply_dd4_t', 'apply_dd4_b'],
    ['apply_dd5_t', 'apply_dd5_b'],
    ['apply_dd6_t', 'apply_dd6_b'],
    ['apply_dd7_t', 'apply_dd7_b'],
    ['apply_dd8_t', 'apply_dd8_b'],
    ['apply_dd9_t', 'apply_dd9_b'],
    ['apply_dd10_t', 'apply_dd10_b'],
    ['apply_dd11_t', 'apply_dd11_b'],
    ['apply_dd12_t', 'apply_dd12_b'],
    ['apply_dd13_t', 'apply_dd13_b'],
    ['apply_dd14_t', 'apply_dd14_b'],
    ['apply_dd15_t', 'apply_dd15_b'],
    ['apply_dd16_t', 'apply_dd16_b'],
    ['apply_dd17_t', 'apply_dd17_b'],
    ['apply_dd18_t', 'apply_dd18_b'],
    ['apply_dd19_t', 'apply_dd19_b'],
    ['apply_dd20_t', 'apply_dd20_b'],
    ['apply_dd21_t', 'apply_dd21_b'],
    ['apply_dd22_t', 'apply_dd22_b']
  ];

  function translateApplyPageChrome() {
    if (document.body.getAttribute('data-i18n-page') !== 'apply') return;
    var lang = getLang();
    function sw(el, key) {
      if (!el || !SQ[key]) return;
      if (!el.dataset.apEn) el.dataset.apEn = el.textContent.trim();
      el.textContent = lang === 'sq' ? SQ[key] : el.dataset.apEn;
    }
    sw(document.querySelector('#page-title section'), 'apply_title');
    var inner = document.querySelector(
      '.bg-gray-200 section.max-w-screen-xl.flex.flex-wrap.justify-center.gap-6'
    );
    if (inner) {
      var kids = inner.querySelectorAll(':scope > div.apply-card');
      if (kids[0]) {
        sw(kids[0].querySelector('h2'), 'apply_h2_intro');
        sw(kids[0].querySelector('p'), 'apply_p_intro');
      }
      if (kids[1]) {
        sw(kids[1].querySelector('h2'), 'apply_h2_imp');
        kids[1].querySelectorAll('ol li').forEach(function (li, j) {
          sw(li, 'apply_imp_' + (j + 1));
        });
      }
      if (kids[2]) {
        sw(kids[2].querySelector('h2'), 'apply_photo_h2');
        var ps = kids[2].querySelectorAll('p.text-sm');
        sw(ps[0], 'apply_photo_p1');
        sw(ps[1], 'apply_photo_p2');
      }
    }
    var vh = document.querySelector('#visa-type-list .text-center.my-6');
    if (vh) {
      sw(vh.querySelector('h2'), 'apply_dd_head');
      sw(vh.querySelector('p'), 'apply_dd_sub');
      var badges = vh.querySelectorAll('.rounded-full');
      sw(badges[0], 'apply_sel');
      sw(badges[1], 'apply_dd_hint');
    }
    document.querySelectorAll('#visa-types h2').forEach(function (h2) {
      if (/Select the desired/i.test(h2.textContent)) sw(h2, 'apply_visa_pick');
    });
    document.querySelectorAll('#visa-types section span').forEach(function (s) {
      if (s.textContent.trim() === 'SELECTED' && s.closest('.border-solid'))
        sw(s, 'apply_selected');
      if (s.textContent.trim() === 'SELECT' && s.classList.contains('font-bold'))
        sw(s, 'apply_sel');
    });
    var rows = document.querySelectorAll('#visa-types > div > div.w-full.flex.flex-wrap');
    if (rows[0]) {
      var r0 = rows[0].querySelectorAll('section');
      if (r0[0]) {
        sw(r0[0].querySelector('h2'), 'apply_evisa_title');
        sw(r0[0].querySelector('h3'), 'apply_evisa_sub');
        sw(r0[0].querySelector('p'), 'apply_evisa_p');
      }
      if (r0[1]) {
        sw(r0[1].querySelector('h2'), 'apply_stamp_title');
        sw(r0[1].querySelector('h3'), 'apply_stamp_sub');
        sw(r0[1].querySelector('p'), 'apply_stamp_p');
      }
    }
    if (rows[1]) {
      var r2 = rows[1].querySelectorAll('section');
      if (r2[0]) {
        sw(r2[0].querySelector('h2'), 'apply_va_h2');
        sw(r2[0].querySelector('h3'), 'apply_va_h3');
        var ap = r2[0].querySelectorAll('p');
        sw(ap[0], 'apply_va_p1');
        sw(ap[1], 'apply_va_p2');
      }
      if (r2[1]) {
        sw(r2[1].querySelector('h2'), 'apply_vc_h2');
        sw(r2[1].querySelector('h3'), 'apply_vc_h3');
        var cp = r2[1].querySelectorAll('p');
        sw(cp[0], 'apply_vc_p1');
        sw(cp[1], 'apply_vc_p2');
      }
      if (r2[2]) {
        sw(r2[2].querySelector('h2'), 'apply_vd_h2');
        sw(r2[2].querySelector('h3'), 'apply_vd_h3');
        sw(r2[2].querySelector('p'), 'apply_vd_p');
        var lk = r2[2].querySelector('div p');
        sw(lk, 'apply_vd_link');
      }
      if (r2[3]) {
        sw(r2[3].querySelector('h2'), 'apply_vb_h2');
        sw(r2[3].querySelector('h3'), 'apply_vb_h3');
        var bp = r2[3].querySelectorAll('p');
        sw(bp[0], 'apply_vb_p1');
        sw(bp[1], 'apply_vb_p2');
      }
    }
  }

  function translateApplyAccordions() {
    var list = document.getElementById('visa-type-list');
    if (!list) return;
    var lang = getLang();
    var items = list.querySelectorAll('.visa-dd-item');
    items.forEach(function (li, i) {
      var pair = APPLY_DD_KEYS[i];
      if (!pair) return;
      var spans = li.querySelectorAll('.visa-dd-btn > span');
      var titleSpan = spans.length >= 2 ? spans[1] : null;
      var wrap = li.querySelector('.visa-dd-panel > div');
      if (!titleSpan || !wrap) return;
      if (!titleSpan.dataset.i18nDdEn) {
        titleSpan.dataset.i18nDdEn = titleSpan.textContent;
      }
      if (!wrap.dataset.i18nDdEn) {
        wrap.dataset.i18nDdEn = wrap.innerHTML;
      }
      if (lang === 'sq' && SQ[pair[0]]) {
        titleSpan.textContent = SQ[pair[0]];
      } else {
        titleSpan.textContent = titleSpan.dataset.i18nDdEn;
      }
      if (lang === 'sq' && SQ[pair[1]]) {
        wrap.innerHTML = SQ[pair[1]];
      } else {
        wrap.innerHTML = wrap.dataset.i18nDdEn;
      }
    });
  }

  function applyAll() {
    var lang = getLang();

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!key) return;
      if (!el.dataset.i18nEn) el.dataset.i18nEn = el.textContent;
      el.textContent = lang === 'sq' && SQ[key] ? SQ[key] : el.dataset.i18nEn;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (!key) return;
      if (!el.dataset.i18nEnPh) el.dataset.i18nEnPh = el.placeholder || '';
      el.placeholder =
        lang === 'sq' && SQ[key] ? SQ[key] : el.dataset.i18nEnPh;
    });

    document.querySelectorAll('[data-i18n-key]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-key');
      var mode = el.getAttribute('data-i18n-mode') || 'text';
      if (!key || !SQ[key]) {
        if (lang === 'en' && el.dataset.i18nBackup) {
          if (mode === 'html') el.innerHTML = el.dataset.i18nBackup;
          else el.textContent = el.dataset.i18nBackup;
        }
        return;
      }
      if (!el.dataset.i18nBackup) {
        el.dataset.i18nBackup = mode === 'html' ? el.innerHTML : el.textContent;
      }
      if (lang === 'sq') {
        if (mode === 'html') el.innerHTML = SQ[key];
        else el.textContent = SQ[key];
      } else {
        if (mode === 'html') el.innerHTML = el.dataset.i18nBackup;
        else el.textContent = el.dataset.i18nBackup;
      }
    });

    var page = document.body && document.body.getAttribute('data-i18n-page');
    if (page && SQ['doc_' + page]) {
      document.title =
        lang === 'sq' ? SQ['doc_' + page] : w.__evisaPageTitleEn || document.title;
    }

    document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
      var active = btn.getAttribute('data-set-lang') === lang;
      btn.classList.toggle('lang-switch-btn--active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    translateApplyAccordions();
    translateApplyPageChrome();
    translateFooterChrome();
    translateInfoHeroBlocks();
    translateTermsCardsIfAny();
    translateFormPages();
  }

  function translateFormPages() {
    var page = document.body && document.body.getAttribute('data-i18n-page');
    if (!page) return;
    var lang = getLang();
    function swT(el, key) {
      if (!el || !SQ[key]) return;
      if (!el.dataset.fmEn) el.dataset.fmEn = el.textContent.trim();
      el.textContent = lang === 'sq' ? SQ[key] : el.dataset.fmEn;
    }
    function swP(el, key) {
      if (!el || !SQ[key]) return;
      if (!el.dataset.fmEnPh) el.dataset.fmEnPh = el.placeholder || '';
      el.placeholder = lang === 'sq' ? SQ[key] : el.dataset.fmEnPh;
    }
    if (page === 'login') {
      swT(document.querySelector('article h2'), 'login_title');
      swP(document.getElementById('email-address'), 'login_email_ph');
      swP(document.getElementById('password'), 'login_pass_ph');
      var rm = document.querySelector('label[for="remember_me"]');
      if (rm) swT(rm, 'login_remember');
      var fg = document.querySelector('a[href*="forgot"]');
      if (fg) swT(fg, 'login_forgot');
      var sb = document.querySelector('#login-form button[type="submit"]');
      if (sb) swT(sb, 'login_submit_btn');
      var ok = document.getElementById('reg-success');
      if (ok) swT(ok, 'login_ok');
    }
    if (page === 'track') {
      swT(document.querySelector('.page-header h1'), 'track_h1');
      swT(document.querySelector('.page-header p'), 'track_sub');
      swT(document.querySelector('.card h2'), 'track_h2');
      swT(document.querySelector('.card > p'), 'track_p');
      var lb = document.querySelector('label[for="trackingNumber"]');
      if (lb) swT(lb, 'track_label');
      swP(document.getElementById('trackingNumber'), 'track_ph');
      var tb = document.querySelector('#track-form button[type="submit"]');
      if (tb) swT(tb, 'track_btn');
      swT(document.querySelector('#track-not-found h3'), 'track_nf_h');
      swT(document.querySelector('#track-not-found p'), 'track_nf_p');
      swT(document.querySelector('#track-result h3'), 'track_res_h');
      var ths = document.querySelectorAll('#track-result thead th');
      if (ths[0]) swT(ths[0], 'track_th_pass');
      if (ths[1]) swT(ths[1], 'track_th_visa');
      if (ths[2]) swT(ths[2], 'track_th_code');
      if (ths[3]) swT(ths[3], 'track_th_stat');
      swT(document.querySelector('#track-pdf-actions p'), 'track_pdf_lbl');
      var vb = document.getElementById('track-view-pdf');
      if (vb) swT(vb, 'track_pdf_view');
      var pr = document.getElementById('track-print-pdf');
      if (pr) swT(pr, 'track_pdf_print');
      var mt = document.querySelector('#track-pdf-modal .font-semibold');
      if (mt) swT(mt, 'track_pdf_title');
      var ot = document.getElementById('track-pdf-open-tab');
      if (ot) swT(ot, 'track_pdf_tab');
      var cl = document.getElementById('track-pdf-modal-close');
      if (cl) swT(cl, 'track_pdf_close');
    }
    if (page === 'verify') {
      swT(document.querySelector('#page-title h1'), 'verify_h1');
      swT(document.querySelector('label[for="serial-number"]'), 'verify_visa_lbl');
      swT(document.querySelector('label[for="passport-number"]'), 'verify_pass_lbl');
      swP(document.getElementById('serial-number'), 'verify_ph_visa');
      swP(document.getElementById('passport-number'), 'verify_ph_pass');
      var vsb = document.querySelector('#verify-form button[type="submit"]');
      if (vsb) swT(vsb, 'verify_btn');
      swT(document.querySelector('#verify-not-found'), 'verify_nf');
      swT(document.querySelector('#verify-result h2'), 'verify_detail_h2');
      var vth = document.querySelectorAll('.verify-result-table thead th');
      if (vth[0]) swT(vth[0], 'verify_th1');
      if (vth[1]) swT(vth[1], 'verify_th2');
      if (vth[2]) swT(vth[2], 'verify_th3');
      if (vth[3]) swT(vth[3], 'verify_th4');
    }
    if (page === 'register') {
      var t1 = document.querySelector('.title-line-1');
      var t2 = document.querySelector('.title-line-2');
      if (t1) swT(t1, 'reg_title1');
      if (t2) swT(t2, 'reg_title2');
      swT(document.querySelector('#register-form h3'), 'reg_personal');
      var h3s = document.querySelectorAll('#register-form section header h3');
      if (h3s[1]) swT(h3s[1], 'reg_login_sec');
      swT(document.querySelector('label[for="first-name"]'), 'reg_fname');
      swP(document.getElementById('first-name'), 'reg_fname');
      swT(document.querySelector('label[for="middle-name"]'), 'reg_mname');
      swP(document.getElementById('middle-name'), 'reg_mname');
      swT(document.querySelector('label[for="last-name"]'), 'reg_lname');
      swP(document.getElementById('last-name'), 'reg_lname');
      swT(document.querySelector('label[for="nationality"]'), 'reg_nat');
      var nat = document.getElementById('nationality');
      if (nat && nat.options[0]) {
        if (!nat.options[0].dataset.fmEn) nat.options[0].dataset.fmEn = nat.options[0].textContent;
        nat.options[0].textContent =
          lang === 'sq' ? SQ.reg_nat_ph : nat.options[0].dataset.fmEn;
      }
      swT(document.querySelector('label[for="email"]'), 'reg_email');
      swP(document.getElementById('email'), 'reg_email');
      swT(document.querySelector('label[for="password"]'), 'reg_pass');
      swP(document.getElementById('password'), 'reg_pass');
      swT(document.querySelector('label[for="password-confirmation"]'), 'reg_pass2');
      swP(document.getElementById('password-confirmation'), 'reg_pass2');
      var cl = document.querySelector('label[for="consent"]');
      if (cl) swT(cl, 'reg_consent');
      var rsb = document.querySelector('#register-form button[type="submit"]');
      if (rsb) swT(rsb, 'reg_submit');
      var ha = document.querySelector('a[href="login.html"]');
      if (ha && ha.textContent.includes('Sign')) swT(ha, 'reg_signin');
    }
    if (page === 'profile') {
      swT(document.querySelector('#profile-form section header h3'), 'reg_personal');
      swT(document.querySelector('label[for="first-name"]'), 'reg_fname');
      swP(document.getElementById('first-name'), 'reg_fname');
      swT(document.querySelector('label[for="middle-name"]'), 'reg_mname');
      swP(document.getElementById('middle-name'), 'reg_mname');
      swT(document.querySelector('label[for="last-name"]'), 'reg_lname');
      swP(document.getElementById('last-name'), 'reg_lname');
    }
  }

  var INFO_HERO_KEYS = {
    terms: ['terms_h1', 'terms_hero_p'],
    privacy: ['privacy_h1', 'privacy_hero_p'],
    immigration: ['imm_h1', 'imm_hero_p'],
    visa_pol: ['visa_pol_h1', 'visa_pol_hero_p'],
    faq_gen: ['faq_gen_h1', 'faq_gen_hero_p'],
    faq_visa: ['faq_visa_h1', 'faq_visa_hero_p'],
    entry: ['entry_h1', 'entry_hero_p'],
    travel: ['travel_h1', 'travel_hero_p'],
    cookies: ['cookies_h1', 'cookies_hero_p'],
    legal: ['legal_h1', 'legal_hero_p'],
    disclaimers: ['legal_h1', 'legal_hero_p']
  };

  function translateInfoHeroBlocks() {
    var hero = document.querySelector('.info-hero');
    if (!hero) return;
    var page = document.body && document.body.getAttribute('data-i18n-page');
    var cfg = page && INFO_HERO_KEYS[page];
    if (!cfg) return;
    var lang = getLang();
    var h1 = hero.querySelector('h1');
    var p = hero.querySelector('.info-hero__inner > p');
    if (h1 && SQ[cfg[0]]) {
      if (!h1.dataset.i18nHeroEn) h1.dataset.i18nHeroEn = h1.textContent.trim();
      h1.textContent = lang === 'sq' ? SQ[cfg[0]] : h1.dataset.i18nHeroEn;
    }
    if (p && SQ[cfg[1]]) {
      if (!p.dataset.i18nHeroEn) p.dataset.i18nHeroEn = p.textContent.trim();
      p.textContent = lang === 'sq' ? SQ[cfg[1]] : p.dataset.i18nHeroEn;
    }
    if (page === 'terms') {
      hero.querySelectorAll('.info-nav-strip a').forEach(function (a, i) {
        var keys = ['terms_nav_priv', 'terms_nav_imm', 'terms_nav_leg', 'terms_nav_faq'];
        var k = keys[i];
        if (!k || !SQ[k]) return;
        if (!a.dataset.i18nHeroEn) a.dataset.i18nHeroEn = a.textContent.trim();
        a.textContent = lang === 'sq' ? SQ[k] : a.dataset.i18nHeroEn;
      });
    }
  }

  function translateTermsCardsIfAny() {
    if (
      document.body.getAttribute('data-i18n-page') !== 'terms' ||
      !document.querySelector('.info-card')
    ) {
      return;
    }
    var lang = getLang();
    document.querySelectorAll('.info-wrap .info-card').forEach(function (card, i) {
      var n = i + 1;
      var kh = 'terms_c' + n + 'h';
      var kp = 'terms_c' + n + 'p';
      var h2 = card.querySelector('h2');
      var p = card.querySelector('p');
      if (h2 && SQ[kh]) {
        if (!h2.dataset.i18nTcEn) h2.dataset.i18nTcEn = h2.textContent.trim();
        h2.textContent = lang === 'sq' ? SQ[kh] : h2.dataset.i18nTcEn;
      }
      if (p && SQ[kp]) {
        if (!p.dataset.i18nTcEn) p.dataset.i18nTcEn = p.textContent.trim();
        p.textContent = lang === 'sq' ? SQ[kp] : p.dataset.i18nTcEn;
      }
    });
  }

  var FOOT_HREF = {
    'apply.html#visa-types': 'foot_new',
    'https://e-visa.al/applications': 'foot_ongoing',
    'track.html': 'foot_track',
    'verify.html': 'foot_verify',
    'terms-conditions.html': 'foot_terms',
    'privacy-policy.html': 'foot_privacy',
    'immigration-rules.html': 'foot_immigration',
    'visa-policy.html': 'foot_visapol',
    'faq-general.html': 'foot_faq',
    'faq-visas.html': 'foot_visafaq',
    'entry-requirements.html': 'foot_entry',
    'travel-health-notices.html': 'foot_travel',
    'cookies-policy.html': 'foot_cookies',
    'legal-disclaimers.html': 'foot_legal'
  };

  function footKeyForHref(href) {
    if (!href) return null;
    var h = String(href).split('?')[0];
    if (FOOT_HREF[h]) return FOOT_HREF[h];
    if (h.indexOf('track.html') !== -1) return 'foot_track';
    if (h.indexOf('verify.html') !== -1) return 'foot_verify';
    return null;
  }

  function translateFooterChrome() {
    var lang = getLang();
    document.querySelectorAll('footer a[href]').forEach(function (a) {
      var key = footKeyForHref(a.getAttribute('href'));
      if (!key || !SQ[key]) return;
      if (!a.dataset.i18nFootEn) a.dataset.i18nFootEn = a.textContent.trim();
      a.textContent = lang === 'sq' ? SQ[key] : a.dataset.i18nFootEn;
    });
    document
      .querySelectorAll('footer section.max-w-screen-xl > section > header > h3')
      .forEach(function (h3, i) {
        var keys = ['foot_app', 'foot_info'];
        if (i > 1) return;
        var key = keys[i];
        if (!key || !SQ[key]) return;
        if (!h3.dataset.i18nFootEn) h3.dataset.i18nFootEn = h3.textContent.trim();
        h3.textContent = lang === 'sq' ? SQ[key] : h3.dataset.i18nFootEn;
      });
    document.querySelectorAll('footer section.mt-6 p, footer .mt-6.w-full p').forEach(function (p) {
      if (
        !/Unofficial information|economic operator|Kreatx|Demonstracion|jo zyrtar|government portal/i.test(
          p.textContent
        )
      )
        return;
      if (!SQ.foot_operator) return;
      if (!p.dataset.i18nFootEn) p.dataset.i18nFootEn = p.textContent.trim();
      p.textContent = lang === 'sq' ? SQ.foot_operator : p.dataset.i18nFootEn;
    });
  }

  function bindLang() {
    document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
      if (btn.dataset.i18nBound) return;
      btn.dataset.i18nBound = '1';
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-set-lang'));
      });
    });
  }

  function init() {
    w.__evisaPageTitleEn = document.title;
    var lang = getLang();
    document.documentElement.lang = lang === 'sq' ? 'sq' : 'en';
    bindLang();
    applyAll();
  }

  w.EvisaI18n = { getLang: getLang, setLang: setLang, t: t, apply: applyAll, init: init };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(window);
