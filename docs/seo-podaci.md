# Podaci potrebni za SEO

Sve što je moglo da se uradi u kodu bez vaših podataka je urađeno. Ono što je
ostalo traži informacije koje samo vi imate: šta ljudi već traže, gde firma
fizički stoji, koliko posao košta i gde firma već postoji na internetu.

Ovaj dokument je lista tih podataka. Uz svaki stoji zašto ga tražim i šta ću sa
njim uraditi, da biste mogli da procenite šta vredi vremena a šta ne.

Ako nemate vremena za sve, preskočite na poslednji odeljak.

---

## 1. Google Search Console

Ovo je najvažnija stavka na listi. Bez nje su svi predlozi za sadržaj obrazovana
pretpostavka. Sa njom tačno vidimo po kojim rečima nas Google već prikazuje,
gde smo blizu prve strane i koje stranice dobijaju prikaze bez klikova.

### 1.1 Prvo: da li je domen uopšte verifikovan

Otvorite [search.google.com/search-console](https://search.google.com/search-console)
i pogledajte da li u padajućem meniju gore levo postoji `ugradnjaeurokuka.com`.

**Ako ne postoji**, dodajte ga:

1. Kliknite na padajući meni gore levo, pa `Add property`.
2. Izaberite levu opciju, **Domain**, ne `URL prefix`. Domain varijanta pokriva
   i `www` i verziju bez `www`, i http i https, u jednoj stavci. `URL prefix` bi
   pokrio samo jednu od te četiri i podaci bi bili nepotpuni.
3. Upišite `ugradnjaeurokuka.com`, bez `https://` i bez `www`.
4. Google će tražiti TXT zapis u DNS-u. Ako je domen na Vercelu, taj zapis se
   dodaje u Vercel dashboard, `Settings` pa `Domains`, na `ugradnjaeurokuka.com`,
   dugme `Edit` pa `Add record`, tip `TXT`, naziv prazan ili `@`, vrednost je
   ono što je Google dao.
5. Vratite se na Google i kliknite `Verify`. Ume da potraje do sat vremena.

Ako ne znate gde je DNS, pošaljite mi TXT vrednost koju Google traži i reći ću
vam tačno gde ide, ili je dodajte zajedno sa onim ko vam drži domen.

**Napomena:** podaci u Search Console počinju da se skupljaju tek od trenutka
verifikacije. Nema istorije unazad. Zato ovo vredi uraditi danas čak i ako
nemamo vremena da gledamo brojeve još mesec dana.

### 1.2 Šta mi treba iz Search Console

Ako je verifikacija starija od par nedelja, treba mi ovih pet stvari. Za svaku
je dovoljan screenshot, osim za prvu gde je izvoz mnogo korisniji.

**a) Performance, upiti i stranice**

1. Levi meni, `Performance` pa `Search results`.
2. Gore, kliknite na `Date` i izaberite `Last 6 months` ako postoji, inače
   `Last 3 months`.
3. Kliknite `+ New` pa `Country` pa `Serbia`. Ovo je bitno: bez filtera se
   mešaju prikazi iz celog sveta i prosečna pozicija je besmislena.
4. Uključite sva četiri dugmeta iznad grafikona: `Total clicks`,
   `Total impressions`, `Average CTR`, `Average position`. Podrazumevano su
   uključena samo prva dva.
5. Ispod grafikona su kartice. Treba mi `QUERIES` i `PAGES`.
6. Gore desno je dugme `Export` pa `Download CSV`. Uzmite izvoz, ne screenshot,
   ako je ikako moguće. Screenshot pokazuje deset redova, izvoz pokazuje sve.

**b) Indeksiranje**

1. Levi meni, `Indexing` pa `Pages`.
2. Screenshot celog ekrana, i gornjeg dela sa brojevima i donje tabele
   `Why pages aren't indexed`.

Ovde konkretno gledam da li se negde pojavljuje `Crawled - currently not
indexed` ili `Discovered - currently not indexed` i koje su to stranice.

**c) Core Web Vitals**

1. Levi meni, `Experience` pa `Core Web Vitals`.
2. Screenshot i za `Mobile` i za `Desktop`.

Ovo su terenski podaci od stvarnih posetilaca, za razliku od Lighthouse ocene
koja meri laboratorijski i uvek izgleda lepše nego što jeste.

**d) Linkovi**

1. Levi meni, `Links`.
2. Screenshot cele stranice, posebno kolone `Top linking sites`.

Slutim da je ovde skoro prazno. Ako jeste, to je najverovatnije pravi plafon
celog sajta i to menja prioritete, jer nijedna izmena u kodu ne rešava
nedostatak linkova.

**e) Ručne akcije**

1. Levi meni, `Security & Manual Actions` pa `Manual actions`.
2. Screenshot čak i ako piše da nema problema. Bitno je da to znam sigurno.

---

## 2. Google Business Profile

Za pretragu `auto kuka Beograd`, tri rezultata sa mapom iznad organskih bira
Google Business Profile, ne sajt. Sajt može biti savršen i i dalje gubiti taj
prostor. Ovo je, uz cenu, najveći pojedinačni uticaj na broj poziva.

**Pitanje broj jedan: da li profil postoji i da li je verifikovan?**

Proverite tako što ćete u Google mapama potražiti ime firme. Ako se pojavljuje
sa karticom sa strane, profil postoji.

### Ako profil postoji, treba mi:

- Link na profil. U mapama otvorite karticu firme, `Share` pa kopirajte link.
- **Tačan naziv** kako je upisan u profilu, slovo po slovo. Mora da se poklapa
  sa onim što piše na sajtu, inače Google ne poveže to dvoje kao istu firmu.
- Kategorija koju ste izabrali u profilu, na primer `Auto repair shop` ili
  `Trailer supply store`.
- Adresa iz profila, ili, ako je profil podešen kao uslužno područje, spisak
  opština koje pokriva.
- Telefon iz profila.
- Radno vreme iz profila.
- Broj recenzija i prosečna ocena.
- Iz `Performance` dela profila: screenshot izveštaja koji pokazuje po kojim
  rečima ljudi nalaze profil, i koliko je bilo poziva sa njega.

### Ako profil ne postoji

Onda je otvaranje profila jedini posao koji vredi više od svega ostalog na ovoj
listi zajedno, i vredi ga uraditi pre bilo koje izmene na sajtu. Javite ako
treba da napišem korake.

---

## 3. Cena

Ovo je najveća rupa u sadržaju sajta. Prvi rezultat za našu glavnu pretragu je
konkurent koji rangira preko svoje stranice sa cenovnikom. Pretrage tipa
`auto kuka cena` i `ugradnja kuke cena Beograd` su najkomercijalnije u ovoj
niši, a mi o ceni nemamo ni jednu reč.

Ne mora tačan cenovnik po modelu vozila. Dovoljan je raspon.

Treba mi:

- Okvirna cena ugradnje **fiksne** kuke, od koliko do koliko.
- Okvirna cena ugradnje **odvojive** kuke, od koliko do koliko.
- Da li je elektro-instalacija uračunata ili se plaća posebno, i koliko je
  razlika između **7 i 13 pinova**.
- Da li se atest plaća posebno.
- Šta konkretno pomera cenu gore ili dole. Marka vozila, godište, da li se seče
  branik, da li je potrebna posebna instalacija.
- **Najniža cena** koju uopšte možete da izgovorite, u formatu
  `ugradnja od X dinara`.
- Da li smem to da objavim na sajtu, i da li smem da napišem da su cene
  okvirne i da se potvrđuju telefonom.

Ako ne želite brojeve na sajtu, recite i to. Onda pravim stranicu koja
objašnjava od čega cena zavisi bez iznosa. To je slabije, ali i dalje neuporedivo
bolje od trenutnog stanja, gde te pretrage uopšte ne igramo.

---

## 4. Adresa

U strukturiranim podacima sajta trenutno stoji samo `Beograd`, bez ulice i broja.
To je bila ispravna odluka jer izmišljena adresa je gora od nikakve, ali ima
konkretnu cenu: bez adrese praktično ne ulazimo u lokalni paket za pretrage koje
ne sadrže ime firme.

Treba mi jedno od ovoga:

- **Ako postoji fiksna lokacija:** ulica, broj, poštanski broj, opština. Uz to i
  potvrda da smem da je objavim.
- **Ako se radi kod klijenta ili sa promenljive lokacije:** spisak opština ili
  gradova koje pokrivate. Onda se i profil na Google-u i sajt podešavaju kao
  uslužno područje, što je legitimna varijanta i ne traži objavljivanje adrese.

---

## 5. Nalozi i profili na drugim mestima

Ovo su linkovi koje upisujem u strukturirane podatke kao `sameAs`. Njima Google
povezuje sajt, profil na mapama i sve ostalo u jednu firmu umesto u nekoliko
nepovezanih pojava sa sličnim imenom.

Pošaljite linkove na sve što postoji:

- Facebook stranica
- Instagram profil
- Google Maps kartica
- Profil na oglasnim sajtovima, `Kupujem Prodajem`, `Polovni automobili`,
  `Halo oglasi` i slično
- Bilo koji imenik ili katalog radionica u kojem se firma pojavljuje
- YouTube ili TikTok ako postoje

Ako nečega nema, napišite da nema. I to je podatak.

---

## 6. Recenzije

- Da li imate recenzije, i gde? Google, Facebook, negde treće.
- Koliko ih ima i kolika je prosečna ocena.

Napomena da ne bude nesporazuma: ocene koje sajt sam o sebi upiše u
strukturirane podatke Google više ne prikazuje u rezultatima. Recenzije su i
dalje jako bitne, ali kroz Google Business Profile, ne kroz kod sajta. Zato
tražim podatke, a ne planiram da ih ubacim u markup.

---

## 7. Analitika

Na sajtu trenutno nema nikakve analitike. To znači da ne znamo koliko ljudi
klikne na dugme za poziv, koja stranica ih dovede do njega, i da li Viber ili
WhatsApp iko koristi.

Odluka je vaša, dve razumne opcije:

- **Vercel Analytics.** Uključuje se u Vercel dashboardu, jedan paket u kodu,
  bez kolačića i bez potrebe za pristankom posetioca.
- **Google Analytics 4.** Više podataka i povezuje se sa Search Console, ali
  traži baner za pristanak na kolačiće, što je dodatni element na svakoj
  stranici.

Ako izaberete GA4, treba mi `Measurement ID`, u formatu `G-XXXXXXXXXX`.

Moja preporuka za ovaj sajt je Vercel Analytics, jer je jedino pitanje koje nas
zanima koliko poziva dolazi sa koje stranice, a to meri i bez banera.

---

## 8. Fotografije

Sajt trenutno ima tri fotografije i sve tri su iskorišćene. Za sve dalje treba
materijal.

Korisno je, po redu važnosti:

- **Fotografije po marki vozila.** Ako se skupi materijal, otvara se mogućnost
  za stranicu po marki, tipa `kuka za Golf`, `kuka za Octaviu`. To su tačno one
  pretrage koje ljudi kucaju. Za svaku takvu stranicu treba bar jedna prava
  fotografija te marke, inače stranice izgledaju kao šablon i Google ih tako i
  tretira.
- **Fotografije za tekstove na blogu.** Nijedan od četiri teksta trenutno nema
  sliku u telu.
- **Fotografija radionice ili tima**, ako postoji fiksna lokacija. Ide na
  Google Business Profile, gde profili sa fotografijama dobijaju osetno više
  poziva.

Format nije bitan, šaljite kako vam je najlakše. Ja ću obraditi.

---

## Šta radim sa svakim podatkom

| Podatak | Šta menjam |
|---|---|
| Search Console, upiti | Prepravljam naslove i opise stranica koje imaju prikaze bez klikova, i biram teme za nove tekstove prema pretragama na pozicijama 8 do 20 |
| Search Console, indeksiranje | Rešavam stranice koje Google vidi a ne indeksira |
| Search Console, linkovi | Utvrđujemo da li je pravi problem uopšte na sajtu |
| Business Profile | Usklađujem naziv, telefon i radno vreme na sajtu sa profilom, dodajem `sameAs` i `hasMap` |
| Cene | Nova stranica sa cenama, `priceRange` u strukturiranim podacima, izmene naslova i opisa |
| Adresa | `streetAddress` i `postalCode` u strukturirane podatke, čime sajt ulazi u konkurenciju za lokalni paket |
| Linkovi na profile | `sameAs` u strukturiranim podacima |
| Analitika | Ugradnja i merenje klikova na poziv, Viber i WhatsApp |
| Fotografije | Stranice po marki vozila, slike u tekstovima |

---

## Ako nemate vremena za sve

Tri stvari, ovim redom. Sve ostalo može da čeka.

1. **Verifikujte Search Console.** Deset minuta posla, i sat vremena čekanja na
   DNS. Podaci počinju da se skupljaju od tog trenutka, pa svaki dan odlaganja
   je izgubljen dan istorije.
2. **Recite mi da li Google Business Profile postoji.** Jedna rečenica.
3. **Pošaljite okvirne cene**, makar samo `od koliko`. To otključava
   najkomercijalnije pretrage u celoj niši.
