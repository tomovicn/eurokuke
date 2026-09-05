/**
 * Every user-facing string on the site, in one place.
 *
 * Imported directly (`sr.home.hero.title`) rather than looked up through a
 * dotted-path helper. The helper returned the key itself when a path did not
 * exist, so a typo shipped silently: /contact rendered the literal text
 * "contact.email" as its mailto link for as long as that key was missing.
 * Property access makes the same mistake a build error.
 *
 * Dash convention: plain hyphen everywhere, including ranges (3-4 sata,
 * 08:00-20:00, Ponedeljak - Petak). No em or en dashes.
 */

export const sr = {
  common: {
    companyName: 'Ugradnja Euro Kuka',
    companyShort: 'Euro Kuka',
    /*
     * The logotype. Lower case on `euro kuka` because that is how the name is
     * set in Serbian, and because it is drawn, not written: `companyName` above
     * stays title case, since that is the business name the schema, the page
     * titles and the share card all carry.
     */
    wordmark: 'Ugradnja euro kuka',
    wordmarkCity: 'Beograd',
    tagline: 'Ugradnja sa atestom',
    area: 'Beograd i okolina',
    areaLong: 'Beograd i okolina. Termin i tačnu lokaciju dogovaramo telefonom.',
    areaLabel: 'Područje rada',
    hours: {
      label: 'Radno vreme',
      rows: [
        { day: 'Ponedeljak - Petak', dayShort: 'Pon - Pet', time: '08:00-20:00', closed: false },
        { day: 'Subota', dayShort: 'Subota', time: '10:00-16:00', closed: false },
        { day: 'Nedelja', dayShort: 'Nedelja', time: 'zatvoreno', closed: true },
      ],
      inline: 'Pon-Pet 08:00-20:00 · Sub 10:00-16:00 · Ned zatvoreno',
    },
  },

  navigation: {
    home: 'Početna',
    installation: 'Ugradnja',
    blog: 'Blog',
    contact: 'Kontakt',
    privacy: 'Politika privatnosti',
    menu: 'Meni',
  },

  actions: {
    // The phone number is never the label of a button. The button says what
    // happens; the number lives in the tel: href, in the JSON-LD and in the
    // footer, where it reads as a fact rather than as a call to action.
    call: 'Pozovite nas',
    callAppointment: 'Pozovite za termin',
    callAppointmentShort: 'Pozovi za termin',
    callPrice: 'Pozovite i pitajte cenu',
    callEyebrow: 'Termin u roku od 24 sata',
    viber: 'Viber',
    whatsapp: 'WhatsApp',
    openMenu: 'Otvori meni',
    closeMenu: 'Zatvori meni',
  },

  footer: {
    blurb: 'Ugradnja euro kuke sa atestom, Beograd i okolina. Bosal, Oris, Steinhof.',
    pagesLabel: 'Strane',
    contactLabel: 'Kontakt',
    copyright: '© {year} Ugradnja Euro Kuka · ugradnjaeurokuka.com',
  },

  home: {
    hero: {
      eyebrow: 'Beograd · Sve marke vozila',
      title: 'Ugradnja euro kuke sa atestom',
      description:
        'Montaža traje 3-4 sata, termin dobijate u roku od 24 sata. Originalni delovi, atest i garancija - sve na jednom mestu.',
      chips: ['Atest uključen', 'Garancija 2 godine', 'Originalni delovi', 'Termin do 24 sata'],
      imageAlt: 'Nosač euro kuke ispod zadnjeg branika, sa elektro-instalacijom',
    },

    /*
     * Three frames from one job. The caption on each says what the picture
     * shows, not how good the work is: the pictures are the claim, the words
     * under them only point at it.
     */
    proof: {
      title: 'Naše ugradnje',
      label: 'Beograd · sve marke vozila',
      badge: 'Naša ugradnja',
      items: [
        {
          key: 'detachable',
          caption: 'Kugla sa zaštitnom kapom, kuka spuštena.',
          alt: 'Odvojiva Oris euro kuka sa zaštitnom kapom na kugli',
        },
        {
          key: 'mount',
          caption: 'Nosač i utičnica ispod branika.',
          alt: 'Nosač euro kuke i utičnica za prikolicu ispod zadnjeg branika',
        },
        {
          key: 'boot',
          caption: 'Kuka ne smeta gepeku ni braniku.',
          alt: 'Zadnji deo vozila sa ugrađenom euro kukom i otvorenim gepekom',
        },
      ],
    },

    brands: {
      label: 'Ugrađujemo kuke proizvođača',
    },

    process: {
      title: 'Kako izgleda ugradnja',
      steps: [
        { title: 'Pregled vozila', description: 'Proveravamo model i biramo odgovarajuću kuku.' },
        { title: 'Priprema', description: 'Skidanje branika i priprema tačaka nosača.' },
        { title: 'Montaža', description: 'Kuka i elektro-instalacija, 7 ili 13 pinova.' },
        { title: 'Atest i predaja', description: 'Dobijate atest za registraciju i vozilo je gotovo.' },
      ],
      note: 'Ceo posao traje 3-4 sata.',
      link: 'Detaljno o ugradnji',
    },

    price: {
      eyebrow: 'Bez obaveze',
      title: 'Koliko košta ugradnja?',
      description:
        'Jedna cena za sva vozila ne postoji, pa je ne objavljujemo - svaki broj na sajtu bio bi netačan za nekoga. Recite nam tri stvari i tačnu cenu za vaš auto čujete u istom razgovoru.',
      inputs: [
        { title: 'Vozilo', description: 'Marka, model, godina.' },
        { title: 'Tip kuke', description: 'Fiksna ili odvojiva.' },
        { title: 'Instalacija', description: '7 ili 13 pinova.' },
      ],
      cardTitle: 'Cena na telefonu, odmah',
      cardNote: 'Poziv ne obavezuje na zakazivanje. Ako vam se cena ne uklapa, nema problema.',
    },

    guarantees: {
      title: 'Šta dobijate',
      items: [
        {
          title: 'Atest i registracija',
          description: 'Atest za euro kuku dobijate uz vozilo, spremno za tehnički pregled.',
        },
        {
          title: 'Garancija 2 godine',
          description: 'Na kuku i na elektro-instalaciju, ne samo na deo.',
        },
        {
          title: 'Originalni delovi',
          description: 'Kuke proizvođača Bosal, Oris i Steinhof, prema modelu vozila.',
        },
        {
          title: 'Termin u roku od 24 sata',
          description: 'Zovete danas, montaža je najčešće već sutra.',
        },
      ],
    },

    vehicles: {
      title: 'Kuka za vuču za sve marke vozila',
      label: 'Najčešće ugradnje',
      noteBefore: 'Ne vidite svoje vozilo? ',
      noteLink: 'Pozovite',
      noteAfter: ', radimo i sa markama koje nisu na listi.',
    },

    faq: {
      title: 'Česta pitanja',
      introBefore: 'Detaljnije o atestu i zakonu na strani ',
      introLink: 'Ugradnja',
      introAfter: '.',
      moreLink: 'Sve o ugradnji i atestu',
    },

    visit: {
      title: 'Radno vreme i lokacija',
      mapTitle: 'Lokacija na mapi',
    },

    finalCta: {
      title: 'Spremni da montirate euro kuku?',
      description:
        'Jedan poziv i imate cenu, termin i odgovor da li radimo vaš model. Pon-Pet 08:00-20:00, Sub 10:00-16:00.',
    },
  },

  installation: {
    title: 'Montaža auto kuke, od pregleda do atesta',
    description:
      'Radimo ugradnju euro kuke na sve marke vozila u Beogradu. Posao traje 3-4 sata, obuhvata kuku, elektro-instalaciju i atest, i pokriven je garancijom od dve godine.',
    descriptionShort:
      'Ugradnja euro kuke na sve marke vozila u Beogradu. Posao traje 3-4 sata i obuhvata kuku, elektro-instalaciju i atest.',

    summary: {
      label: 'Ukratko',
      rows: [
        { label: 'Trajanje', value: '3-4 sata' },
        { label: 'Termin', value: 'u roku od 24 sata' },
        { label: 'Atest', value: 'uključen' },
        { label: 'Garancija', value: '2 godine' },
        { label: 'Kuke', value: 'Bosal · Oris · Steinhof' },
      ],
    },

    includes: {
      title: 'Šta ulazi u ugradnju',
      items: [
        {
          title: 'Kuka za vuču',
          description: 'Model kuke biramo prema marki, modelu i godini vozila.',
        },
        {
          title: 'Elektro-instalacija',
          description: '7 ili 13 pinova, sa proverom svetala na prikolici.',
        },
        {
          title: 'Atest',
          description: 'Dokument sa kojim kuku upisujete u saobraćajnu dozvolu.',
        },
        {
          title: 'Garancija 2 godine',
          description: 'Pokriva i kuku i ugrađenu instalaciju.',
        },
      ],
    },

    types: {
      title: 'Fiksna ili odvojiva kuka',
      items: [
        {
          title: 'Fiksna',
          description:
            'Kugla je stalno na vozilu. Jednostavnija i najčešće pristupačnija varijanta, pogodna ako prikolicu vučete redovno.',
        },
        {
          title: 'Odvojiva',
          description:
            'Kugla se skida kada nije u upotrebi, pa zadnji deo vozila ostaje čist. Bira se kada je izgled ili parking senzor važan.',
        },
      ],
      note: 'Koja varijanta postoji za vaše vozilo, proveravamo na poziv.',
    },

    // Search Console, six months to 2026-09-05: `bosal kuke`, `oris kuke`,
    // `bosal auto kuke`, `oris auto kuke` and `oris kuka` together drew about
    // twenty impressions at positions 7 to 12 with no clicks. The site named
    // all three makers in a single sentence and had nothing else to show.
    brands: {
      title: 'Kuke koje ugrađujemo',
      description:
        'Radimo kuke tri evropska proizvođača. Zajedničko im je ono što je za vas najbitnije: homologacija i dokumentacija po tipu kuke, bez koje se atest ne izdaje ma koliko ugradnja bila uredna. Koji od njih dolazi na vaše vozilo ne bira se po ukusu, nego po tome za koji model, godište i tip karoserije uopšte postoji odobren tip.',
      items: [
        // TREBA POTVRDA PRE MERGE-A: ova lista je prepisana iz postojećeg
        // teksta na sajtu. Oglas na KupujemProdajem navodi Bosal i AutoHak,
        // ne Oris i Steinhof. Opisi zato drže samo poreklo proizvođača, što je
        // tačno u svakom slučaju, i ne tvrde ništa o tome šta se drži na
        // stanju. Kada se lista potvrdi, ovde idu i pokrivenost i varijante.
        {
          title: 'Bosal',
          description: 'Holandski proizvođač i jedan od najvećih u Evropi.',
        },
        {
          title: 'Oris',
          description: 'Nemački proizvođač, fiksne i odvojive varijante.',
        },
        {
          title: 'Steinhof',
          description: 'Poljski proizvođač, sa dokumentacijom po tipu kuke.',
        },
      ],
      note: 'Ako ste kuku već kupili negde drugde, recite oznaku tipa pre nego što dođete. Bez dokumentacije proizvođača atest se ne radi.',
    },

    // Same source: `ugradnja kuke sa atestom cena`, `ugradnja euro kuke cena`,
    // `ugradnja kuke na auto cena`, `ugradnja auto kuke cena` and
    // `cena ugradnje kuke za auto` drew impressions at positions 15 to 41 and
    // no clicks, because the site did not carry the word `cena` anywhere near
    // an explanation. This is the version without numbers; the day there are
    // published prices, they go here.
    price: {
      title: 'Od čega zavisi cena',
      description:
        'Cena ugradnje nije ista za svako vozilo i zato je ne objavljujemo kao jedan broj. Ovo je sve što je pomera, da biste znali šta vas čeka pre nego što pozovete.',
      items: [
        {
          title: 'Tip kuke',
          description:
            'Fiksna ima manje delova i po pravilu je povoljnija. Odvojiva nosi mehanizam koji se otključava, pa je skuplja.',
        },
        {
          title: 'Broj pinova',
          description:
            'Instalacija sa 13 pinova ima više strujnih kola od one sa 7 i košta više. Bira se prema tome šta vučete, ne prema ceni.',
        },
        {
          title: 'Marka, model i godište',
          description:
            'Od toga zavisi koji tipovi kuke uopšte postoje za vaše vozilo i koliko posla treba da se dođe do fabričkih tačaka za pričvršćivanje.',
        },
        {
          title: 'Priprema na vozilu',
          description:
            'Kod nekih modela branik mora da se skine ili doradi. Neka vozila, opet, imaju fabričku pripremu za instalaciju, što skraćuje posao.',
        },
      ],
      note: 'Atest i garancija od dve godine ulaze u cenu i ne naplaćuju se posebno. Tačan iznos dobijate na telefonu, čim kažete marku, model i godinu vozila.',
    },

    atest: {
      title: 'Atest i registracija',
      description:
        'Atest za euro kuku je potvrda da je kuka ugrađena u skladu sa propisima i da vozilo sa njom može na tehnički pregled. Bez atesta kuka se ne upisuje u saobraćajnu dozvolu. Atest izdajemo uz svaku ugradnju i predajemo ga sa vozilom.',
      orderLabel: 'Redosled',
      order: [
        { title: 'Ugradnja i atest', description: 'Kod nas, istog dana.' },
        { title: 'Tehnički pregled', description: 'Sa atestom i saobraćajnom.' },
        { title: 'Upis u dozvolu', description: 'Kuka je zvanično na vozilu.' },
      ],
    },

    faq: {
      title: 'Česta pitanja o ugradnji',
    },

    aside: {
      photoAlt: 'Zadnji deo vozila sa ugrađenom euro kukom i otvorenim gepekom',
      photoBadge: 'Naša ugradnja',
      title: 'Cena zavisi od vozila',
      description:
        'Recite marku, model i godinu i tip kuke - tačnu cenu dobijate na telefonu, bez obaveze.',
      descriptionShort: 'Tačnu cenu dobijate na telefonu, bez obaveze.',
    },

    cta: {
      title: 'Zakažite montažu euro kuke',
    },
  },

  contact: {
    title: 'Kontakt',
    description:
      'Najbrže je telefonom - na poziv odmah znate da li radimo vaš model, koliko košta i kada možete da dođete. Viber i WhatsApp koristimo za slike i kada ne možete da zovete.',
    phoneLabel: 'Telefon',
    mapTitle: 'Lokacija na mapi',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.893371443454!2d20.457972776266095!3d44.81350437107897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7a9609031735%3A0x9c75611af2d66583!2sEuro%20Kuka%20Beograd!5e0!3m2!1sen!2srs!4v1709766543210!5m2!1sen!2srs',
  },

  blog: {
    title: 'Atest, zakon i vuča prikolice',
    description:
      'Tekstovi koje pišemo iz radionice: šta propis traži, šta se u praksi dešava i kako da ne izgubite dan na tehničkom pregledu.',
    allLabel: 'Sve',
    backButton: 'Svi tekstovi',
    authorLabel: 'Autor',
    publishedLabel: 'Objavljeno',
    updatedLabel: 'Dopunjeno',
    relatedTitle: 'Pročitajte i ovo',
    cta: {
      title: 'Imate pitanje o atestu za vaše vozilo?',
      description: 'Kraće je pitati telefonom nego čitati pet tekstova.',
    },
    categories: {
      legal: {
        title: 'Pravne informacije',
        description:
          'Atest, upis u saobraćajnu dozvolu, dozvoljena masa i sve što propis traži pre nego što zakačite prikolicu.',
      },
      guide: {
        title: 'Vodiči',
        description:
          'Kako izabrati tip kuke i elektro-instalaciju za svoje vozilo, objašnjeno bez tehničkog žargona.',
      },
      safety: {
        title: 'Bezbednost',
        description:
          'Provera pre polaska, raspored tereta i vožnja sa prikolicom bez neprijatnih iznenađenja.',
      },
    },
    inArticleCta: {
      title: 'Radimo ugradnju sa atestom u Beogradu',
      description:
        'Recite marku, model i godinu vozila i odmah znate cenu i prvi slobodan termin. Poziv ne obavezuje.',
    },
  },

  notFound: {
    title: 'Stranica nije pronađena',
    description:
      'Tražena stranica ne postoji ili je premeštena. Odavde možete nazad na početnu ili pravo na telefon.',
    homeButton: 'Nazad na početnu',
  },

  privacy: {
    title: 'Politika privatnosti',
    updatedLabel: 'Poslednja izmena',
    updated: 'mart 2026.',
    sections: [
      {
        title: 'Ko smo',
        body: 'Sajt ugradnjaeurokuka.com predstavlja delatnost ugradnje euro kuka na području Beograda i okoline. Na sajtu nema korisničkih naloga, nema forme za poručivanje i nema prodavnice.',
      },
      {
        title: 'Koje podatke prikupljamo',
        body: 'Sajt ne sadrži formu za kontakt i ne traži od vas ime, adresu ni broj telefona. Kontakt se odvija isključivo preko telefona, Vibera ili WhatsAppa, na vašu inicijativu. Podaci koje nam tom prilikom sami saopštite, kao što su marka i model vozila, koriste se samo da bismo vam dali cenu i zakazali termin.',
      },
      {
        title: 'Tehnički podaci',
        body: 'Kao i svaki sajt, i ovaj beleži osnovne tehničke podatke o poseti na nivou servera, na primer IP adresu i tip pregledača. Ti podaci se koriste za bezbednost i ispravan rad sajta.',
      },
      {
        title: 'Kolačići i ugrađeni sadržaj',
        body: 'Sajt ne postavlja sopstvene kolačiće za praćenje. Strane Početna i Kontakt sadrže ugrađenu Google Maps mapu. Kada se mapa učita, Google može postaviti svoje kolačiće i obraditi podatke prema sopstvenoj politici privatnosti, na koju nemamo uticaj.',
      },
      {
        title: 'Deljenje podataka',
        body: 'Podatke koje nam saopštite telefonom ili porukom ne prodajemo, ne ustupamo i ne prosleđujemo trećim licima.',
      },
      {
        title: 'Vaša prava',
        body: 'U skladu sa Zakonom o zaštiti podataka o ličnosti imate pravo da tražite uvid u podatke koje o vama imamo, njihovu ispravku ili brisanje. Zahtev možete uputiti telefonom, na broj naveden na sajtu.',
      },
      {
        title: 'Izmene ove politike',
        body: 'Ako se način rada sajta promeni, izmenićemo i ovaj tekst i ažurirati datum poslednje izmene na vrhu strane.',
      },
    ],
    contactTitle: 'Kontakt',
    contactBody: 'Za sva pitanja u vezi sa ovom politikom pozovite nas na broj:',
  },
} as const;
