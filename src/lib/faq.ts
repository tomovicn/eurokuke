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
      'Uz ugradnju dobijate kompletnu dokumentaciju sa kojom se atest vadi. Sam atest možemo da izvadimo umesto vas, po dogovoru, i košta 15.000 dinara.',
  },
  {
    question: 'Koliko traje montaža auto kuke?',
    answer: 'Ugradnja traje 3-4 sata, zavisno od modela i tipa elektro-instalacije.',
  },
  {
    question: 'Koje kuke ugrađujete?',
    answer:
      'Ugrađujemo kuke proizvođača Bosal, AutoHak, Oris, Steinhof i Galia. Sve se skidaju, a razlikuju se po načinu: na dva šrafa, na ručicu ili brzopotezne na ključ.',
  },
  {
    // Prema radionici, ovo je ubedljivo najčešća pogrešna pretpostavka s kojom
    // ljudi dolaze: da branik ostaje netaknut.
    question: 'Da li se seče branik?',
    answer:
      'Kod većine vozila da. Rez ide nisko na zadnjem delu branika, tamo gde vrat kuke i utičnica izlaze. To je standardan deo posla, a pre ugradnje vam kažemo tačno šta vas čeka na vašem modelu.',
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
    answer: 'Da. Vozilo preuzimate isti dan, po završetku montaže i predaji papira.',
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
      'Kompletna kuka sa ugradnjom počinje od 200 evra. Cena zavisi od vozila, načina skidanja kuke i toga da li vozilo prima univerzalnu instalaciju ili traži CAN modul. Elektro-instalacija i garancija ulaze u cenu.',
  },
  {
    // Jedno od četiri pitanja koja telefon najčešće dobija.
    question: 'Da li atestirate kuku koju je ugradio neko drugi?',
    answer:
      'Ne. Atest vadimo samo za kuke koje smo sami ugradili, jer atest potvrđuje upravo ugradnju.',
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
    question: 'Za koliko dana stiže kuka?',
    answer:
      'Za 1 do 5 radnih dana. Duži rok znači da se tip poručuje, jer se sve varijante ne drže na stanju. Plaća se pouzećem, prilikom preuzimanja.',
  },
  {
    question: 'Šta ako kuka ne odgovara mom vozilu?',
    answer:
      'Povraćaj je moguć, a uslove dogovaramo telefonom. Najbolje je ipak javiti marku, model, godinu i tip karoserije pre porudžbine, pa da tip proverimo zajedno.',
  },
  {
    question: 'Mogu li kuku da ugradim kod svog majstora?',
    answer:
      'Možete. Uz kuku ide detaljno uputstvo sa grafičkim prikazom, kao i papiri potrebni za atest. Za sam atest se onda obraćate onome ko radi ugradnju.'
  },
];
