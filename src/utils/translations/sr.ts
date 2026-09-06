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
    tagline: 'Euro kuke i ugradnja',
    area: 'Beograd i okolina',
    areaLong: 'Novi Beograd. Vozilo možete ostaviti i vratiti se po njega. U krugu Beograda izlazimo i na teren.',
    areaNote: 'Tačnu adresu i termin dogovaramo telefonom.',
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
    sales: 'Prodaja',
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
    blurb: 'Ugradnja i prodaja euro kuka, Novi Beograd. Bosal, AutoHak, Oris, Steinhof, Galia.',
    pagesLabel: 'Strane',
    contactLabel: 'Kontakt',
    copyright: '© {year} Ugradnja Euro Kuka · ugradnjaeurokuka.com',
  },

  home: {
    hero: {
      eyebrow: 'Beograd · Sve marke vozila',
      title: 'Ugradnja euro kuke u Beogradu',
      description:
        'Montaža traje 3-4 sata, termin dobijate u roku od 24 sata. Originalni delovi, papiri za atest i garancija od dve godine.',
      chips: ['Papiri za atest', 'Garancija 2 godine', 'Originalni delovi', 'Termin do 24 sata'],
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
        { title: 'Papiri i predaja', description: 'Dobijate dokumentaciju za atest i vozilo je gotovo.' },
      ],
      note: 'Ceo posao traje 3-4 sata.',
      link: 'Detaljno o ugradnji',
    },

    price: {
      eyebrow: 'Bez obaveze',
      title: 'Koliko košta ugradnja?',
      description:
        'Kompletna kuka sa ugradnjom počinje od 200 evra, a odatle zavisi od vozila. Recite nam tri stvari i tačnu cenu za vaš auto čujete u istom razgovoru.',
      inputs: [
        { title: 'Vozilo', description: 'Marka, model, godina.' },
        { title: 'Način skidanja', description: 'Šrafovi, ručica ili brzopotezna.' },
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
      photoAlt: 'Nosač euro kuke i utičnica za prikolicu ispod zadnjeg branika',
    },

    finalCta: {
      title: 'Spremni da montirate euro kuku?',
      description:
        'Jedan poziv i imate cenu, termin i odgovor da li radimo vaš model. Pon-Pet 08:00-20:00, Sub 10:00-16:00.',
    },
  },

  installation: {
    title: 'Montaža auto kuke, od pregleda do papira',
    description:
      'Radimo ugradnju euro kuke na sve marke vozila, na Novom Beogradu. Posao traje 3-4 sata, obuhvata kuku i elektro-instalaciju, i pokriven je garancijom od dve godine. Uz vozilo dobijate dokumentaciju potrebnu za atest.',
    descriptionShort:
      'Ugradnja euro kuke na sve marke vozila, Novi Beograd. Posao traje 3-4 sata i obuhvata kuku i elektro-instalaciju.',

    summary: {
      label: 'Ukratko',
      rows: [
        { label: 'Trajanje', value: '3-4 sata' },
        { label: 'Termin', value: 'u roku od 24 sata' },
        { label: 'Za atest', value: 'papiri uz ugradnju' },
        { label: 'Garancija', value: '2 godine' },
        { label: 'Kuke', value: 'Bosal, AutoHak, Oris, Steinhof, Galia' },
        { label: 'Lokacija', value: 'Novi Beograd' },
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
          title: 'Papiri za atest',
          description:
            'Kompletna dokumentacija sa kojom se vadi atest. Sam atest, ako hoćete, vadimo mi po dogovoru.',
        },
        {
          title: 'Garancija 2 godine',
          description: 'Pokriva i kuku i ugrađenu instalaciju.',
        },
      ],
    },

    types: {
      title: 'Tri načina skidanja kuke',
      description:
        'Sve kuke koje ugrađujemo se skidaju. Razlikuju se po tome kako, i to je jedini izbor koji imate. Fiksnu kuku, onu koja ostaje na vozilu stalno, ne radimo.',
      items: [
        {
          title: 'Na dva šrafa',
          description:
            'Kugla se skida odvrtanjem dva šrafa, alatom. Najjednostavnija varijanta, za onoga ko kuku skida retko.',
        },
        {
          title: 'Na ručicu',
          description:
            'Vrat se otpušta ručicom i izvlači horizontalno, bez alata. Skidanje traje nekoliko sekundi kada se uhoda.',
        },
        {
          title: 'Brzopotezna, na ključ',
          description:
            'Otključa se i vadi vertikalno naniže, na klik. Najbrža varijanta i najskuplja od tri.',
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
        'Radimo kuke pet evropskih proizvođača: Bosal, AutoHak, Oris, Steinhof i Galia. Zajedničko im je ono što je za vas najbitnije: homologacija i dokumentacija po tipu kuke, bez koje se atest ne izdaje ma koliko ugradnja bila uredna. Koji od njih dolazi na vaše vozilo ne bira se po ukusu, nego po tome za koji model, godište i tip karoserije uopšte postoji odobren tip.',
      // Lista je potvrđena. Ove četiri rečenice su namerno opšte i ne tvrde
      // ništa o zalihama ili o tome koja marka pokriva koji model; to su
      // podaci iz radionice, ne sa interneta. Zamenite ih čim stignu.
      items: [
        {
          title: 'Bosal',
          description: 'Najčešći izbor kod nas i jedan od najvećih evropskih proizvođača.',
        },
        {
          title: 'AutoHak',
          description: 'Široka pokrivenost putničkih vozila, u sva tri načina skidanja.',
        },
        {
          title: 'Oris',
          description: 'Poznat po brzopoteznim kukama, sa mehanizmom koji se zaključava.',
        },
        {
          title: 'Steinhof',
          description: 'Dobra pokrivenost starijih modela i karavana.',
        },
        {
          title: 'Galia',
          description: 'Više varijanti skidanja, sa dokumentacijom po tipu kuke.',
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
          title: 'Način skidanja',
          description:
            'Na dva šrafa je najjednostavnije i najpovoljnije. Ručica i brzopotezna nose mehanizam, pa su skuplje.',
        },
        {
          title: 'Instalacija',
          description:
            'Sedam ili trinaest pinova, i da li vozilo prima univerzalnu instalaciju ili traži CAN modul koji se povezuje na fabričku elektroniku. Instalacija ulazi u cenu.',
        },
        {
          title: 'Marka, model i godište',
          description:
            'Od toga zavisi koji tipovi kuke uopšte postoje za vaše vozilo i koliko posla treba da se dođe do fabričkih tačaka za pričvršćivanje.',
        },
        {
          title: 'Priprema branika',
          description:
            'Kod većine modela branik mora da se skine, a najčešće i da se seče na mestu gde kuka izlazi. Koliko je to posla zavisi od vozila.',
        },
      ],
      note: 'Kompletna kuka sa ugradnjom počinje od 200 evra, sa uračunatom elektro-instalacijom i garancijom od dve godine. Atest, ako ga vadimo mi, košta 15.000 dinara i dogovara se posebno. Tačan iznos dobijate na telefonu, čim kažete marku, model i godinu vozila.',
    },

    // Cela ova usluga do sada nije postojala nigde na sajtu, iako se godinama
    // radi. Sajt je bio pisan kao da je jedini posao ugradnja u Beogradu.
    // Kratko, i vodi na /prodaja-auto-kuka. Dve stranice koje pišu isto o
    // slanju bi se takmičile za isti upit i podelile rangiranje.
    shipping: {
      title: 'Van Beograda',
      description:
        'Ugradnju radimo u Beogradu, ali kuka ne mora da se preuzima na licu mesta. Kupcima van Beograda šaljemo kuku pouzećem na adresu, sa dokumentacijom proizvođača i uputstvom za ugradnju.',
      linkLabel: 'Prodaja i slanje kuka',
    },

    atest: {
      title: 'Atest i registracija',
      description:
        'Atest za euro kuku je potvrda da je kuka ugrađena u skladu sa propisima i da vozilo sa njom može na tehnički pregled. Bez atesta kuka se ne upisuje u saobraćajnu dozvolu. Uz ugradnju dobijate kompletnu dokumentaciju sa kojom se atest vadi. Sam atest možemo da izvadimo umesto vas, po dogovoru, i košta 15.000 dinara.',
      orderLabel: 'Redosled',
      order: [
        { title: 'Ugradnja i papiri', description: 'Kod nas, istog dana.' },
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
    locationLabel: 'Gde smo',
    locationItems: [
      {
        title: 'Novi Beograd',
        description: 'Tačnu adresu dobijate na telefonu, zajedno sa terminom.',
      },
      {
        title: 'Ostavite vozilo',
        description: 'Ne morate da čekate. Vozilo možete ostaviti i vratiti se po njega.',
      },
      {
        title: 'Izlazak na teren',
        description: 'U krugu Beograda izlazimo i na teren, po dogovoru.',
      },
    ],
  },

  /*
   * The sales page. The rest of the site is written as though installing in
   * Belgrade were the whole business, but hooks are sold and shipped across
   * Serbia, which is a different service answering different searches. Every
   * claim here comes from what the business has confirmed: four makers, new
   * hooks with type approval, cash on delivery anywhere in Serbia, the
   * manufacturer's paperwork and fitting instructions in the box, and fitting
   * itself only in Belgrade.
   *
   * Deliberately absent, because they are not known yet: price, how long
   * delivery takes, and whether a hook can be returned if it does not fit.
   * Each of those is a section, and none of them can be guessed.
   */
  sales: {
    title: 'Prodaja auto kuka, sa slanjem po celoj Srbiji',
    description:
      'Prodajemo nove kuke sa homologacijom, proizvođača Bosal, AutoHak, Oris, Steinhof i Galia, za sve marke putničkih vozila. Kupcima van Beograda šaljemo pouzećem na adresu. Ugradnju radimo na Novom Beogradu.',
    descriptionShort:
      'Nove kuke sa homologacijom, za sve marke putničkih vozila. Šaljemo pouzećem po celoj Srbiji.',

    summary: {
      label: 'Ukratko',
      rows: [
        { label: 'Proizvođači', value: 'Bosal, AutoHak, Oris, Steinhof, Galia' },
        { label: 'Kuke', value: 'nove, sa homologacijom' },
        { label: 'Slanje', value: 'cela Srbija, pouzećem' },
        { label: 'Uz kuku', value: 'papiri za atest i uputstvo' },
        { label: 'Ugradnja', value: 'Novi Beograd' },
        { label: 'Takođe', value: 'nosači bicikala' },
      ],
    },

    includes: {
      title: 'Šta dobijate uz kuku',
      items: [
        {
          title: 'Kuka odobrenog tipa',
          description:
            'Nova kuka sa homologacijom i oznakom tipa proizvođača. To je uslov bez kojeg atest ne može da se uradi.',
        },
        {
          title: 'Dokumentacija proizvođača',
          description:
            'Papiri koji povezuju taj tip kuke sa vašim modelom vozila, i sa kojima se vadi atest. Bez njih ugradnja može biti uredna, a atest i dalje nemoguć.',
        },
        {
          title: 'Uputstvo za ugradnju',
          description:
            'Detaljno uputstvo sa grafičkim prikazom, po kojem posao može da odradi i vaš majstor.',
        },
        {
          title: 'Elektro-instalacija',
          description:
            'Instalaciju sa 7 ili 13 pinova biramo zajedno sa kukom, prema tome šta vučete.',
        },
      ],
    },

    choose: {
      title: 'Kako se bira kuka za vaše vozilo',
      description:
        'Kuka se ne bira po ceni nego po vozilu. Za jedan isti model često postoji više odobrenih tipova, a ponekad nijedan, u zavisnosti od godišta i tipa karoserije. Zato pre porudžbine treba da znamo četiri stvari.',
      items: ['Marka', 'Model', 'Godište', 'Tip karoserije'],
      note: 'Novija vozila traže instalaciju koja se povezuje na fabričku elektroniku, takozvanu smart konekciju. I to se bira unapred, jer se ne rešava kablom nakalemljenim negde usput.',
      warning:
        'Najskuplja kuka je ona kupljena naslepo. Fizički stane, vijci ulaze, prikolica se kači, a onda se ispostavi da za taj tip nema dokumentacije za vaš model i ceo posao ide iz početka.',
    },

    order: {
      title: 'Kako se poručuje',
      steps: [
        {
          title: 'Javite podatke o vozilu',
          description:
            'Marka, model, godina i tip karoserije. Slika zadnjeg dela vozila pomaže, pošaljite je na Viber ili WhatsApp.',
        },
        {
          title: 'Proveravamo tip',
          description: 'Koji odobreni tipovi kuke postoje za to vozilo i koja mu instalacija treba.',
        },
        {
          title: 'Šaljemo pouzećem',
          description: 'Kuka stiže na vašu adresu, bilo gde u Srbiji, sa papirima i uputstvom.',
        },
      ],
    },

    install: {
      title: 'Ugradnja u Beogradu',
      description:
        'Ako ste u Beogradu, kuku ne morate nigde da nosite. Ugradnju kuke i elektro-instalacije radimo sami na Novom Beogradu, posao traje 3-4 sata, vozilo možete ostaviti i vratiti se po njega. Uz ugradnju dobijate papire za atest, a na kuku i instalaciju garanciju od dve godine.',
      linkLabel: 'Kako teče ugradnja',
    },

    photoAlt: 'Odvojiva euro kuka sa zaštitnom kapom na kugli',
    photoBadge: 'Naša ugradnja',

    faq: {
      title: 'Česta pitanja o kupovini',
    },

    cta: {
      title: 'Recite koje vozilo imate',
      description: 'Provera koji tip kuke postoji za vaš model traje minut. Poziv ne obavezuje.',
    },
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
      title: 'Radimo ugradnju euro kuka na Novom Beogradu',
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
