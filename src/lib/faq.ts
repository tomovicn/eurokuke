export type FaqEntry = { question: string; answer: string };

/**
 * Two separate question sets, deliberately.
 *
 * The homepage and /installation used to render the same four questions, which
 * meant two URLs competing for the same query and two FAQPage blocks carrying
 * identical `mainEntity` text. The homepage now answers the questions someone
 * asks before calling; /installation answers the ones that come up once they
 * have decided. No question appears on both pages.
 *
 * Each page's visible list and its FAQPage JSON-LD read from the same constant
 * here. Structured data that does not match the copy on the page is a
 * structured-data violation, so there is only ever one source per page.
 */

export const HOME_FAQ: FaqEntry[] = [
  {
    question: 'Da li dobijam atest za euro kuku?',
    answer:
      'Da. Atest izdajemo uz svaku ugradnju i sa njim kuku upisujete u saobraćajnu dozvolu.',
  },
  {
    question: 'Koliko traje montaža auto kuke?',
    answer: 'Ugradnja traje 3-4 sata, zavisno od modela i tipa elektro-instalacije.',
  },
  {
    question: 'Koje kuke ugrađujete?',
    answer:
      'Ugrađujemo kuke proizvođača Bosal, AutoHak, Oris, Steinhof i Galia, u fiksnoj i odvojivoj varijanti.',
  },
  {
    question: 'Kada mogu da dođem?',
    answer: 'Termin dogovaramo telefonom, najčešće u roku od 24 sata od poziva.',
  },
];

export const INSTALLATION_FAQ: FaqEntry[] = [
  {
    question: 'Da li euro kuka utiče na garanciju vozila?',
    answer:
      'Ugradnja se radi na predviđenim fabričkim tačkama, bez varenja i bez presecanja fabričke instalacije.',
  },
  {
    question: 'Mogu li da vozim istog dana?',
    answer: 'Da. Vozilo preuzimate isti dan, po završetku montaže i predaji atesta.',
  },
  {
    question: 'Šta ako moj model nije na listi marki?',
    answer:
      'Lista je samo najčešće ugradnje. Pozovite i proverimo da li postoji kuka za vaš model.',
  },
  {
    question: 'Koliko unapred treba zakazati?',
    answer: 'Termin najčešće dobijate u roku od 24 sata od poziva.',
  },
  {
    question: 'Koliko košta ugradnja auto kuke?',
    answer:
      'Ugradnja počinje od 15.000 dinara. Cena zavisi od marke i godišta vozila, tipa kuke i toga da li vozilo traži smart konekciju. Elektro-instalacija i garancija ulaze u cenu, atest se plaća posebno.',
  },
  {
    // Jedno od četiri pitanja koja telefon najčešće dobija.
    question: 'Da li atestirate kuku koju je ugradio neko drugi?',
    answer:
      'Ne. Atest izdajemo samo za kuke koje smo sami ugradili, jer atest potvrđuje upravo ugradnju.',
  },
];

export const SALES_FAQ: FaqEntry[] = [
  {
    question: 'Da li šaljete kuke van Beograda?',
    answer:
      'Da. Kuku šaljemo pouzećem na adresu bilo gde u Srbiji, a uz nju idu dokumentacija proizvođača i uputstvo za ugradnju.',
  },
  {
    question: 'Da li su kuke nove?',
    answer: 'Da. Prodajemo nove kuke sa homologacijom i oznakom tipa proizvođača.',
  },
  {
    question: 'Kako da znam koja kuka odgovara mom vozilu?',
    answer:
      'Javite marku, model, godinu i tip karoserije, pa proveravamo koji odobreni tip postoji za to vozilo. Kuka kupljena naslepo često ne može da se atestira.',
  },
  {
    question: 'Mogu li kuku da ugradim kod svog majstora?',
    answer:
      'Možete. Uz kuku ide detaljno uputstvo sa grafičkim prikazom. Za atest se onda obraćate onome ko radi ugradnju.',
  },
];
