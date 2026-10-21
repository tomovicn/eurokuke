import type { FaqEntry } from '@/lib/faq';

/**
 * One page per car model, under /kuka-za-auto.
 *
 * Per-model searches (`kuka za golf 7`, `euro kuka za dacia duster`,
 * `kuka za passat b8 karavan`) are the largest group the site had nothing for.
 * The five models are the ones with both autocomplete demand and impressions
 * already in Search Console, as of 2026-10-21.
 *
 * What these pages may and may not say, deliberately:
 *
 * - Towing limits, wiring and which mechanisms exist come from published
 *   sources, listed under each page. Official manufacturer data is preferred;
 *   where only third-party figures exist they are given as a range and the
 *   reader is sent to the registration document, never to a single number.
 * - The mechanism lists are AutoHak's catalogue (10.2026), the only maker's
 *   catalogue that could be read directly. They say what exists for the car,
 *   never what is in stock here.
 * - Nothing about the shop that the rest of the site does not already say: the
 *   floor price, the atest price, the warranty. No per-model price, no "we fit
 *   these all the time", no per-model fitting time. Those wait for the
 *   workshop, see docs/seo-podaci.md section 9.
 * - AutoHak's bumper-cut columns are left out. They are symbol-font glyphs and
 *   could not be read reliably.
 */

export type VehicleSource = { label: string; url: string };

export type VehicleVariant = {
  /** Body and years, as the catalogue lists them. */
  fitment: string;
  /** Which of the three mechanisms exist for it. */
  types: string;
};

export type VehicleTable = {
  caption: string;
  head: string[];
  rows: string[][];
};

export type VehiclePage = {
  slug: string;
  /** Full name, for headings and schema. */
  name: string;
  /** What the hub card and the breadcrumb show. */
  shortName: string;
  years: string;
  title: string;
  description: string;
  intro: string;
  summary: { label: string; value: string }[];
  towing: { paragraphs: string[]; table?: VehicleTable };
  variants: { intro: string; items: VehicleVariant[]; note: string };
  wiring: string[];
  notes: { title: string; items: string[] };
  faq: FaqEntry[];
  sources: VehicleSource[];
  /** When the facts on the page were last checked against the sources. */
  checked: string;
};

const ALL_THREE = 'Na šrafove, na ručicu, brzopotezna';

const AUTOHAK_CATALOGUE: VehicleSource = {
  label: 'AutoHak, katalog kuka (10.2026)',
  url: 'https://autohak.com.pl/downloads/oferta-pdf-pl',
};

export const VEHICLES: VehiclePage[] = [
  {
    slug: 'vw-golf-7',
    name: 'Volkswagen Golf 7',
    shortName: 'Golf 7',
    years: '2012-2020',
    title: 'Kuka za Golf 7: ugradnja euro kuke, Beograd',
    description:
      'Euro kuka za VW Golf 7 i Golf 7 Variant: koje varijante postoje, koliko sme da vuče i zašto traži namensku instalaciju. Ugradnja na Novom Beogradu, od 200 evra.',
    intro:
      'Golf 7 se proizvodio od 2012. do 2020, kao hečbek i kao karavan (Variant). Za oba postoje sve tri vrste euro kuke, ali ne za svako godište, a karavan ima svoje kuke, drugačije od hečbeka. Ovde je sve što vredi znati pre nego što pozovete.',
    summary: [
      { label: 'Godišta', value: '2012-2020' },
      { label: 'Karoserije', value: 'hečbek, Variant' },
      { label: 'Opterećenje na kugli', value: '80 kg' },
      { label: 'Instalacija', value: 'namenska, CAN' },
      { label: 'Cena', value: 'od 200 evra' },
    ],
    towing: {
      paragraphs: [
        'Zavisi od motora. Prema javno dostupnim tehničkim podacima, prikolica sa kočnicom ide okvirno od 1.100 kg kod najslabijih benzinaca do 2.000 kg kod nekih dizel karavana, a prikolica bez kočnice od 600 do 750 kg. Na primer, Golf 7 1.6 TDI od 115 KS sme 1.500 kg sa kočnicom i 650 kg bez nje.',
        'Dozvoljeno opterećenje na kugli je 80 kg, i za hečbek i za Variant, prema Volkswagenovom uputstvu za originalnu kuku. Kod hibridnih i električnih verzija granice su drugačije.',
      ],
    },
    variants: {
      intro: 'Prema katalogu proizvođača AutoHak, za Golf 7 postoje ove varijante:',
      items: [
        { fitment: 'Hečbek, 2012-2016, osim R-Line', types: ALL_THREE },
        { fitment: 'Hečbek posle faceliftinga (7.5), 2016-2019, osim R-Line', types: 'Na šrafove, brzopotezna' },
        { fitment: 'Variant (karavan), od 2013.', types: ALL_THREE },
      ],
      note: 'R-Line ima drugačiji zadnji branik i ove kuke ga ne obuhvataju, pa se za njega kuka bira posebno. Kuka za hečbek ne odgovara karavanu.',
    },
    wiring: [
      'Golf 7 je napravljen na Volkswagenovoj MQB platformi, kod koje svetlima upravlja elektronika vozila. Zato se za njega koristi instalacija pravljena baš za taj model, a ne univerzalna koja se kači na kablove svetala.',
      'Originalna Volkswagen instalacija posle ugradnje traži i kodiranje vozila, da bi auto prepoznao prikolicu. Neki namenski kompleti drugih proizvođača rade i bez kodiranja, ali kodiranje je ono što omogućava da se, kada je prikolica zakačena, isključe zadnji senzori za parkiranje.',
    ],
    notes: {
      title: 'Branik i zadnji deo',
      items: [
        'Kod Golfa 7 pre faceliftinga na donjoj ivici branika se po uputstvu jednog proizvođača iseca otvor od oko 65 x 120 mm. Kod Golfa 7.5 po istom uputstvu sečenje nije potrebno. Zavisi i od kuke.',
        'Vozilo ima fabrički predviđene tačke za nosač kuke i fabrički otvor u podu gepeka za kabl instalacije.',
        'Kod GTI i R verzija zadnji difuzor ume da smeta, pa se ponekad menja delom koji ima otvor za kuku.',
      ],
    },
    faq: [
      {
        question: 'Da li Golf 7 posle ugradnje kuke mora da se kodira?',
        answer:
          'Uz originalnu Volkswagen instalaciju da, kodiranje je deo postupka. Neki namenski kompleti rade i bez kodiranja, ali tada vozilo ne zna da je prikolica zakačena i senzori za parkiranje ostaju uključeni. Šta vaš primerak traži proverava se pre ugradnje.',
      },
      {
        question: 'Da li je kuka za Golf 7 karavan ista kao za hečbek?',
        answer:
          'Nije. Golf 7 Variant ima sopstvene kuke, drugačije od hečbeka, i za njega postoje sve tri varijante: na šrafove, na ručicu i brzopotezna.',
      },
      {
        question: 'Koliko košta kuka za Golf 7 sa ugradnjom?',
        answer:
          'Kompletna kuka sa ugradnjom i elektro-instalacijom počinje od 200 evra. Konačna cena zavisi od varijante kuke i instalacije koju vozilo traži. Atest od 15.000 dinara plaća se posebno. Tačan iznos dobijate telefonom, čim kažete godište i karoseriju.',
      },
    ],
    sources: [
      AUTOHAK_CATALOGUE,
      {
        label: 'Volkswagen, uputstvo za originalnu kuku, Golf 7',
        url: 'https://assets.volkswagen.com/is/content/cso/0580c93de2878ca56ed90e3abff60f46_20240609155618428pdf',
      },
      {
        label: 'Volkswagen, uputstvo za originalnu kuku, Golf 7 Variant',
        url: 'https://assets.volkswagen.com/is/content/cso/10f8527481705cd999c6b782223a18b8_20240609015148482pdf',
      },
      { label: 'carwiki.de, Golf 7 Anhängelast', url: 'https://carwiki.de/golf-7-anhaengelast' },
      {
        label: 'auto-data.net, Golf 7 1.6 TDI 115 KS',
        url: 'https://www.auto-data.net/en/volkswagen-golf-vii-5-door-facelift-2017-1.6-tdi-115hp-27633',
      },
      {
        label: 'Tow-Trust, uputstvo za ugradnju, Golf 7',
        url: 'https://cdn.shopify.com/s/files/1/0274/4103/7384/files/TVW623.pdf',
      },
    ],
    checked: '2026-10-21',
  },
  {
    slug: 'skoda-octavia-3',
    name: 'Škoda Octavia 3',
    shortName: 'Octavia 3',
    years: '2013-2020',
    title: 'Kuka za Škoda Octavia 3: euro kuka i ugradnja',
    description:
      'Euro kuka za Škoda Octaviju 3, limuzinu i karavan: zvanični podaci o vuči, koje varijante postoje i koje verzije nemaju naknadnu kuku. Ugradnja u Beogradu.',
    intro:
      'Octavia 3 se proizvodila od 2013. do 2020, kao limuzina (liftback) i karavan (Combi), uz posebne verzije Scout i RS. Za nju postoje sve tri vrste euro kuke, a Škoda objavljuje i precizne podatke o vuči po motoru, pa ovde nema nagađanja.',
    summary: [
      { label: 'Godišta', value: '2013-2020' },
      { label: 'Karoserije', value: 'limuzina, Combi' },
      { label: 'Opterećenje na kugli', value: '75 kg, 4x4: 80 kg' },
      { label: 'Instalacija', value: 'namenska, CAN' },
      { label: 'Cena', value: 'od 200 evra' },
    ],
    towing: {
      paragraphs: [
        'Škoda za Octaviju 3 Combi objavljuje zvanične podatke po motoru. Prikolica sa kočnicom ide od 1.300 do 2.000 kg, a dozvoljeno opterećenje na kugli je 75 kg kod prednjeg pogona i 80 kg kod 4x4.',
      ],
      table: {
        caption: 'Octavia 3 Combi, zvanični podaci Škode (2019)',
        head: ['Motor', 'Sa kočnicom', 'Bez kočnice', 'Na kugli'],
        rows: [
          ['1.0 TSI 85 kW', '1.300 kg', '630 kg', '75 kg'],
          ['1.5 TSI 110 kW', '1.500 kg', '650 kg', '75 kg'],
          ['1.6 TDI 85 kW', '1.500 kg', '680 kg', '75 kg'],
          ['2.0 TDI 110 kW', '1.600 kg', '690-700 kg', '75 kg'],
          ['1.5 G-TEC (CNG)', '1.400 kg', '690 kg', '56 kg'],
          ['2.0 TSI 4x4 140 kW', '1.700 kg', '740 kg', '80 kg'],
          ['2.0 TDI 4x4 135 kW', '2.000 kg', '750 kg', '80 kg'],
        ],
      },
    },
    variants: {
      intro: 'Prema katalogu proizvođača AutoHak, za Octaviju postoje ove varijante:',
      items: [
        { fitment: 'Octavia 3 limuzina i Combi, uključujući 4x4 i RS, 2013-2019', types: ALL_THREE },
        { fitment: 'Octavia 3 Scout', types: ALL_THREE },
        { fitment: 'Octavia 4 limuzina, od 2020.', types: ALL_THREE },
        { fitment: 'Octavia 4 Combi, od 2020.', types: ALL_THREE },
      ],
      note: 'Scout ima sopstvenu kuku, drugačiju od obične Octavije. Isto važi i za originalnu Škodinu kuku.',
    },
    wiring: [
      'Octavia 3 je, kao i Golf 7, na MQB platformi. Za nju se koristi instalacija pravljena za taj model, a Škodina originalna instalacija se posle ugradnje aktivira u računaru vozila. Koji komplet ide zavisi i od toga da li je vozilo iz fabrike pripremljeno za kuku, i od nedelje proizvodnje.',
      'Ako vozilo ima fabričke senzore za parkiranje, kodiranje je ono što ih isključuje kada je prikolica zakačena.',
    ],
    notes: {
      title: 'Izuzeci i branik',
      items: [
        'Škoda za Octaviju 3 G-TEC (na gas CNG) ne nudi naknadnu ugradnju kuke, iako za nju objavljuje podatke o vuči. Isto važi i za deo Greenline primeraka proizvedenih krajem 2013. i početkom 2014.',
        'Kod Octavije 4 Škodina naknadna kuka ne obuhvata iV (plug-in hibrid), G-TEC i Sportline.',
        'Na Octaviji 3 mesto za otvor na braniku je fabrički označeno sa unutrašnje strane, pa se iseca samo taj pravougaonik. Kod nekih odvojivih kuka otvor se spolja ne vidi.',
      ],
    },
    faq: [
      {
        question: 'Može li kuka na Octaviju 3 G-TEC?',
        answer:
          'Škoda za G-TEC verziju na CNG ne nudi naknadnu ugradnju kuke. Pre bilo kakve kupovine za takav primerak pozovite, da proverimo šta je uopšte moguće.',
      },
      {
        question: 'Da li Octavia Scout ima istu kuku kao obična Octavia?',
        answer:
          'Nema. Scout ima sopstvenu kuku, drugačiju od limuzine i Combi verzije, i za njega takođe postoje sve tri varijante: na šrafove, na ručicu i brzopotezna.',
      },
      {
        question: 'Koliko košta kuka za Octaviju 3 sa ugradnjom?',
        answer:
          'Kompletna kuka sa ugradnjom i elektro-instalacijom počinje od 200 evra. Konačna cena zavisi od varijante kuke i od toga koju instalaciju vozilo traži. Atest od 15.000 dinara plaća se posebno.',
      },
    ],
    sources: [
      {
        label: 'Škoda, tehnički podaci Octavia Combi (2019)',
        url: 'https://cdn.skoda-storyboard.com/2016/04/TD-OCTAVIA-COMBI-en.pdf',
      },
      { label: 'Škoda, originalna odvojiva kuka 5E0092155', url: 'https://eshop.skoda-auto.cz/en_CZ/p/5E0092155' },
      { label: 'Škoda, originalna kuka 5E0092101A', url: 'https://eshop.skoda-auto.sk/en_SK/p/5E0092101A' },
      { label: 'Škoda, kuka za Octavia Scout 5E9092155', url: 'https://eshop.skoda-auto.cz/en_CZ/p/5E9092155' },
      { label: 'Škoda, kuka za Octaviju 4 5E3092160', url: 'https://eshop.skoda-auto.sk/en_SK/p/5E3092160' },
      AUTOHAK_CATALOGUE,
      { label: 'carwiki.de, Octavia Anhängerkupplung', url: 'https://carwiki.de/skoda-octavia-anhaengerkupplung-nachruesten' },
    ],
    checked: '2026-10-21',
  },
  {
    slug: 'dacia-duster',
    name: 'Dacia Duster',
    shortName: 'Duster',
    years: '2010-danas',
    title: 'Kuka za Dacia Duster: euro kuka i ugradnja, Beograd',
    description:
      'Euro kuka za Dacia Duster, sve tri generacije: koje varijante postoje, koliko sme da vuče i zašto hibrid vuče manje. Ugradnja na Novom Beogradu, od 200 evra.',
    intro:
      'Duster ima tri generacije: prvu od 2010. do 2017, drugu od 2018. do 2023. i treću od 2024. Za svaku postoje sve tri vrste euro kuke, ali se kuke između generacija ne mešaju, a hibridna verzija nove generacije vuče znatno manje od ostalih.',
    summary: [
      { label: 'Generacije', value: '2010-2017, 2018-2023, od 2024.' },
      { label: 'Pogon', value: '4x2 i 4x4' },
      { label: 'Opterećenje na kugli', value: '75 kg' },
      { label: 'Instalacija', value: 'namenska, bez kodiranja' },
      { label: 'Cena', value: 'od 200 evra' },
    ],
    towing: {
      paragraphs: [
        'Druga generacija, prema javno dostupnim tehničkim podacima, sme okvirno 1.400 do 1.500 kg sa kočnicom i 630 do 750 kg bez nje, zavisno od motora i pogona. Kod verzija na plin podaci za prikolicu sa kočnicom se razlikuju od izvora do izvora, pa obavezno proverite saobraćajnu.',
        'Za treću generaciju Dacia u uputstvu navodi 675 kg bez kočnice kod 4x2 i 730 kg kod 4x4, i 75 kg na kugli. Masu sa kočnicom ne daje kao jedan broj, nego je računa iz podataka na fabričkoj pločici vozila, i navodi da vuča nije dozvoljena ako ta razlika nije upisana. Hybrid 140 prema dostupnim podacima sme samo 750 kg sa kočnicom.',
      ],
    },
    variants: {
      intro: 'Prema katalogu proizvođača AutoHak, za Duster postoje ove varijante:',
      items: [
        { fitment: 'Prva generacija, 2010-2013', types: ALL_THREE },
        { fitment: 'Prva generacija, 2013-2017', types: ALL_THREE },
        { fitment: 'Druga generacija, 2017-2024, 4x2 i 4x4, i sa AdBlue', types: ALL_THREE },
        { fitment: 'Treća generacija, od 2024, i na plin', types: ALL_THREE },
      ],
      note: 'Kuka jedne generacije ne odgovara drugoj, a prva generacija ima dve različite kuke, pre i posle kraja 2013.',
    },
    wiring: [
      'Za drugu i treću generaciju postoje namenske instalacije kojima, prema proizvođačima, nije potrebno kodiranje. Za treću generaciju to važi za vozila koja imaju fabrički pripremljen konektor za kuku.',
      'Kod treće generacije, kada vozilo prepozna kuku, isključuju se samo zadnji senzori za parkiranje, prema Dacijinom uputstvu.',
    ],
    notes: {
      title: 'Na šta da obratite pažnju',
      items: [
        'Hybrid 140 treće generacije sme da vuče daleko manje od ostalih verzija. Ako planirate veću prikolicu, to je bitnije od izbora kuke.',
        'Kod treće generacije masa prikolice sa kočnicom se čita sa fabričke pločice. Ako na pločici nema tog podatka, vuča nije dozvoljena.',
      ],
    },
    faq: [
      {
        question: 'Da li Duster hibrid može da vuče prikolicu?',
        answer:
          'Može, ali znatno manje od ostalih verzija: Hybrid 140 treće generacije prema dostupnim podacima sme 750 kg sa kočnicom. Tačan podatak za vaš primerak je u saobraćajnoj dozvoli.',
      },
      {
        question: 'Da li Duster posle ugradnje kuke mora da se kodira?',
        answer:
          'Za drugu i treću generaciju postoje namenske instalacije kojima kodiranje prema proizvođačima nije potrebno. Koja instalacija ide na vaš primerak proverava se pre ugradnje.',
      },
      {
        question: 'Koliko košta kuka za Duster sa ugradnjom?',
        answer:
          'Kompletna kuka sa ugradnjom i elektro-instalacijom počinje od 200 evra. Konačna cena zavisi od generacije i varijante kuke. Atest od 15.000 dinara plaća se posebno.',
      },
    ],
    sources: [
      AUTOHAK_CATALOGUE,
      { label: 'Dacia, uputstvo Duster (treća generacija), vuča', url: 'https://www.user-manual.dacia.com/en/node/1391' },
      {
        label: 'Dacia, uputstvo Duster, senzori za parkiranje',
        url: 'https://www.user-manual.dacia.com/en/parking-aids/parking-distance-control-2',
      },
      { label: 'autotijd.be, Duster 2018-2021', url: 'https://autotijd.be/en/weight/dacia/duster-2018-2021' },
      { label: 'autotijd.be, Duster 2022-2024', url: 'https://autotijd.be/en/weight/dacia/duster-2022-2024' },
      {
        label: 'Parkers, Duster Hybrid 140',
        url: 'https://www.parkers.co.uk/dacia/duster/suv-2024/16-hybrid-140-journey-5dr-auto/specs/',
      },
      {
        label: 'ECS Electronics, instalacija za Duster III',
        url: 'https://ecs-electronics.nl/Areas/Website/UploadData/25/TinyMce/Newsletters/EN/Product%20news%20BN%20-%202025%20Edition%207%20-%20DACIA%20DUSTER%20III.pdf',
      },
    ],
    checked: '2026-10-21',
  },
  {
    slug: 'vw-passat-b7-b8',
    name: 'Volkswagen Passat B7 i B8',
    shortName: 'Passat B7 i B8',
    years: '2010-2023',
    title: 'Kuka za Passat B7 i B8: euro kuka, limuzina i karavan',
    description:
      'Euro kuka za VW Passat B7 i B8, limuzinu i karavan: koliko sme da vuče, koje varijante postoje i zašto B8 traži kodiranje. Ugradnja na Novom Beogradu.',
    intro:
      'Passat B7 se proizvodio od 2010. do 2014, a B8 od 2014. do 2023, oba kao limuzina i karavan (Variant). Za obe generacije postoje sve tri vrste euro kuke. Najveća razlika između njih nije u kuki, nego u instalaciji.',
    summary: [
      { label: 'Godišta', value: 'B7: 2010-2014, B8: 2014-2023' },
      { label: 'Karoserije', value: 'limuzina, Variant' },
      { label: 'Opterećenje na kugli', value: '90 kg' },
      { label: 'Instalacija', value: 'namenska, uz kodiranje' },
      { label: 'Cena', value: 'od 200 evra' },
    ],
    towing: {
      paragraphs: [
        'Passat je jedan od jačih vučnih automobila u svojoj klasi. Prema javno dostupnim tehničkim podacima, B7 sme okvirno od 1.200 do 2.200 kg sa kočnicom, a B8 od 1.500 do 2.200 kg. Bez kočnice obe generacije sme 700 do 750 kg, a opterećenje na kugli je 90 kg.',
        'Najmanje vuku štedljive BlueMotion verzije: B7 1.6 TDI BlueMotion samo 1.200 kg sa kočnicom. Najviše vuku 4MOTION verzije. Plug-in hibrid B8 GTE sme 1.600 kg.',
      ],
    },
    variants: {
      intro: 'Prema katalogu proizvođača AutoHak, za Passat postoje ove varijante:',
      items: [
        { fitment: 'B7 limuzina i karavan, i 4MOTION, 2010-2014, osim Alltrack', types: ALL_THREE },
        { fitment: 'B8 limuzina i karavan, 2014-2024', types: ALL_THREE },
      ],
      note: 'Ista kuka se vodi i za limuzinu i za karavan, ali se ugradnja razlikuje. Alltrack B7 ove kuke ne obuhvataju.',
    },
    wiring: [
      'Obe generacije koriste namensku instalaciju i obe se posle ugradnje originalne Volkswagen instalacije kodiraju. Kod B7 to se radi servisnim testerom, a kodiranje obuhvata i senzore za parkiranje i kameru.',
      'Kod B8 Volkswagen traži onlajn kodiranje sa aktivacionim kodom vezanim za broj šasije tog vozila. Postoje namenski kompleti drugih proizvođača koji rade i bez kodiranja, ali bez njega vozilo ne usklađuje senzore i sisteme pomoći sa prikolicom.',
    ],
    notes: {
      title: 'Kako ide ugradnja na B8',
      items: [
        'Po Volkswagenovom uputstvu skidaju se zadnji branik i stop svetla, a originalni zadnji poprečni nosač se uklanja i umesto njega ide nosač kuke.',
        'Na donjem delu branika postoji fabrički označen panel koji se iseca, pa na lakiranom delu branika nema vidljivog reza.',
        'Kod karavana se nosač branika skraćuje za 15 mm ili menja originalnim delom predviđenim za kuku.',
      ],
    },
    faq: [
      {
        question: 'Da li je kuka za Passat karavan ista kao za limuzinu?',
        answer:
          'Kod B7 i B8 isti tip kuke se vodi i za limuzinu i za karavan, ali ugradnja nije ista: kod B8 karavana se prema Volkswagenovom uputstvu skraćuje ili menja nosač branika.',
      },
      {
        question: 'Zašto Passat B8 posle ugradnje kuke traži kodiranje?',
        answer:
          'Zato što prikolicu prepoznaje elektronika vozila. Uz originalnu Volkswagen instalaciju kodiranje je obavezno i radi se aktivacionim kodom vezanim za vaše vozilo. Bez njega se senzori za parkiranje ne isključuju kada je prikolica zakačena.',
      },
      {
        question: 'Koliko košta kuka za Passat sa ugradnjom?',
        answer:
          'Kompletna kuka sa ugradnjom i elektro-instalacijom počinje od 200 evra. Konačna cena zavisi od generacije, varijante kuke i instalacije. Atest od 15.000 dinara plaća se posebno.',
      },
    ],
    sources: [
      AUTOHAK_CATALOGUE,
      {
        label: 'Volkswagen, uputstvo za instalaciju Passat B7',
        url: 'https://assets.volkswagen.com/is/content/cso/728d6d310cff40b9544aa23300975617_20240610000538464pdf',
      },
      {
        label: 'Volkswagen, uputstvo za kuku i instalaciju Passat B8',
        url: 'https://shop.rosier.de/media/60/38/7f/1738580208/EW_EBA_3G0092150E_230227.pdf',
      },
      {
        label: 'Westfalia, kodiranje za rad sa prikolicom',
        url: 'https://westfalia-automotive.com/uk/workshop/coding-to-trailer-operation',
      },
      {
        label: 'auto-data.net, Passat B7 1.6 TDI BlueMotion',
        url: 'https://www.auto-data.net/en/volkswagen-passat-b7-1.6-tdi-105hp-bluemotion-44146',
      },
      {
        label: 'auto-data.net, Passat B8 GTE',
        url: 'https://www.auto-data.net/en/volkswagen-passat-b8-gte-1.4-tsi-218hp-plug-in-hybrid-dsg-28003',
      },
    ],
    checked: '2026-10-21',
  },
  {
    slug: 'dacia-sandero-logan',
    name: 'Dacia Sandero i Logan',
    shortName: 'Sandero i Logan',
    years: '2012-danas',
    title: 'Kuka za Dacia Sandero i Logan: euro kuka i ugradnja',
    description:
      'Euro kuka za Dacia Sandero, Stepway, Logan i Logan MCV: koje varijante postoje po generaciji, koliko sme da vuče i kuka na verzijama na plin. Ugradnja u Beogradu.',
    intro:
      'Sandero i Logan dele tehniku, ali ne i kuke. Za drugu generaciju (2012-2020) i treću (od 2020) izbor varijanti se razlikuje po karoseriji, i to je prva stvar koju treba proveriti, pre cene.',
    summary: [
      { label: 'Generacije', value: '2012-2020, od 2020.' },
      { label: 'Karoserije', value: 'Sandero, Stepway, Logan, MCV' },
      { label: 'Opterećenje na kugli', value: '75 kg' },
      { label: 'Instalacija', value: 'namenska' },
      { label: 'Cena', value: 'od 200 evra' },
    ],
    towing: {
      paragraphs: [
        'Ovo su laki automobili i vuku manje od većine. Za treću generaciju Dacia u uputstvu navodi 540 kg bez kočnice za Sandero i 545 kg za Logan, i 75 kg na kugli. Masu sa kočnicom računa iz podataka na fabričkoj pločici vozila, a prema javnim tehničkim podacima ona je okvirno 980 do 1.100 kg, zavisno od motora.',
        'Za drugu generaciju, prema javnim tehničkim podacima, Sandero sme oko 1.090 kg sa kočnicom, a Logan MCV oko 1.110 kg. Kod verzija na plin (ECO-G) podaci se razlikuju od izvora do izvora, pa obavezno proverite saobraćajnu.',
      ],
    },
    variants: {
      intro: 'Prema katalogu proizvođača AutoHak, varijante se ovako razlikuju po karoseriji:',
      items: [
        { fitment: 'Sandero II, i sa fabričkim plinom, 2013-2020', types: 'Na šrafove, na ručicu' },
        { fitment: 'Sandero Stepway II, 2013-2020', types: 'Na šrafove, na ručicu' },
        { fitment: 'Logan II limuzina, 2013-2020', types: 'Na šrafove, na ručicu' },
        { fitment: 'Logan MCV II, od 2013.', types: ALL_THREE },
        { fitment: 'Sandero III i Stepway, od 2020.', types: ALL_THREE },
        { fitment: 'Logan III, od 2020.', types: ALL_THREE },
      ],
      note: 'Za Sandero II, Stepway II i Logan II limuzinu brzopotezna kuka se u ovom katalogu ne vodi. Za MCV i treću generaciju postoje sve tri.',
    },
    wiring: [
      'Za obe generacije postoje namenske instalacije, posebno za vozila sa senzorima za parkiranje i bez njih. Za Sandero III proizvođači navode da kodiranje nije potrebno kod vozila koja imaju fabrički pripremljen konektor za kuku.',
      'Kod treće generacije, kada vozilo prepozna kuku, isključuju se samo zadnji senzori za parkiranje, prema Dacijinom uputstvu.',
    ],
    notes: {
      title: 'Na šta da obratite pažnju',
      items: [
        'Kuke za Sandero II važe i za verzije sa fabričkim plinom. Kod treće generacije na plin rezervoar je u udubljenju za rezervni točak.',
        'Dacijino uputstvo za treću generaciju upozorava da kugla koja nije predviđena za vozilo može da ometa senzore. Još jedan razlog da kuka bude namenska.',
        'Za Logan II limuzinu postoje kuke na šrafove kod kojih, prema prodavcu, branik ne mora ni da se skida ni da se seče.',
      ],
    },
    faq: [
      {
        question: 'Da li za Sandero postoji brzopotezna kuka?',
        answer:
          'Za Sandero III i Stepway od 2020. da. Za Sandero II, Stepway II i Logan II limuzinu katalog AutoHak vodi samo kuke na šrafove i na ručicu, dok za Logan MCV II postoje sve tri varijante.',
      },
      {
        question: 'Može li kuka na Sandero na plin?',
        answer:
          'Može. Kuke za Sandero II važe i za verzije sa fabričkim plinom. Kod verzija na plin proverite u saobraćajnoj koliko vozilo sme da vuče, jer se taj podatak razlikuje od benzinskih verzija.',
      },
      {
        question: 'Koliko košta kuka za Sandero ili Logan sa ugradnjom?',
        answer:
          'Kompletna kuka sa ugradnjom i elektro-instalacijom počinje od 200 evra. Konačna cena zavisi od karoserije, generacije i varijante kuke. Atest od 15.000 dinara plaća se posebno.',
      },
    ],
    sources: [
      AUTOHAK_CATALOGUE,
      { label: 'Dacia, uputstvo Sandero (treća generacija), vuča', url: 'https://www.user-manual.dacia.com/chapter/BJI/9.0/16007_BJI_001_1' },
      { label: 'Dacia, uputstvo Logan (treća generacija), vuča', url: 'https://www.user-manual.dacia.com/en/node/1902' },
      { label: 'Dacia, uputstvo Sandero, senzori i kuka', url: 'https://www.user-manual.dacia.com/en/node/2624' },
      { label: 'autotijd.be, Sandero 2016-2020', url: 'https://autotijd.be/en/weight/dacia/sandero-2016-2020' },
      { label: 'autotijd.be, Logan MCV 2016-2021', url: 'https://autotijd.be/en/weight/dacia/logan-mcv-2016-2021' },
      {
        label: 'Mick’s Garage, Steinhof kuka za Logan II',
        url: 'https://www.micksgarage.com/d/tow-bars-and-hitches/dacia/dacia-logan/logan-ii-2012-onwards/products/3396790-11138/steinhof-tow-bars-and-hitches-for-logan-ii-2012-onwards',
      },
      {
        label: 'ECS Electronics, instalacija za Sandero III',
        url: 'https://www.ecs-electronics.nl/Areas/Website/UploadData/25/TinyMce/Newsletters/Product%20news%20BN%20-%202021%20Edition%2014%20%20-%20Dacia%20Sandero,%20Sandero%20Stepway.pdf',
      },
    ],
    checked: '2026-10-21',
  },
];

export function getVehicle(slug: string): VehiclePage | undefined {
  return VEHICLES.find((vehicle) => vehicle.slug === slug);
}
