/**
 * Blog article bodies. Rendered into a Tailwind `prose` container, so the HTML
 * here carries no classes and no inline styles.
 */
export type PostContent = {
  title: string;
  description: string;
  date: string;
  datetime: string;
  /**
   * ISO date of the last substantive revision, when there has been one.
   * Absent means the text has not been touched since publication, and
   * `dateModified` in the markup then equals `datePublished` rather than
   * claiming a freshness that did not happen.
   */
  updated?: string;
  readingTime: string;
  category: { title: string; href: string };
  author: { name: string };
  content: string;
};

export const POSTS: Record<string, PostContent> = {
  'atest-euro-kuke': {
    /*
     * `atest za kuku` is the single biggest query the site has: 112 impressions
     * over six months at average position 7.47, and a click-through rate of
     * 1.79%, which is roughly half of what that position normally returns. The
     * old title spent its first three words on `Atest za euro kuku`, so the
     * exact phrase people type never appeared, and at 60 characters the useful
     * half was cut off in results anyway. The related queries `atest kuke`,
     * `atest kuke za auto` and `atest za kuku na autu` all match the new one.
     */
    title: 'Atest za kuku: šta je, ko ga izdaje i kako se upisuje',
    description:
      'Atest za kuku je potvrda da je kuka ugrađena po propisu. Šta sadrži, ko ga izdaje i kojim redom idu ugradnja, tehnički pregled i upis u saobraćajnu dozvolu.',
    date: '12. mart 2026.',
    datetime: '2026-03-12',
    updated: '2026-09-06',
    readingTime: '8 min čitanja',
    category: { title: 'Pravne informacije', href: '/blog/category/legal' },
    author: { name: 'Ugradnja Euro Kuka' },
    content: `
      <p>Atest je papir zbog kojeg se ljudi najčešće vraćaju u radionicu po drugi put. Kuka je ugrađena, elektrika radi, prikolica se kači, a onda na tehničkom pregledu ispadne da za tu kuku nema dokumentacije i ceo posao ide iz početka. Ovde je sve što treba da znate: šta atest zapravo jeste, u kojim situacijama vam treba, kojim redom se koraci rade i gde ljudi najčešće pogreše.</p>

      <h2>Šta je atest za euro kuku</h2>

      <p>Atest je dokument kojim se potvrđuje da je vučna kuka ugrađena u skladu sa propisima i da vozilo sa tako ugrađenom kukom ispunjava tehničke uslove. Nije garancija, nije račun i nije uputstvo proizvođača. To je posebna potvrda o ispravnosti ugradnje.</p>

      <p>Ključna stvar koju treba razumeti: atest se vezuje za tačno jedno vozilo i tačno jedan tip kuke. Zato na njemu stoje marka, model i broj šasije vozila, kao i oznaka tipa kuke. To nije formalnost, to je suština dokumenta.</p>

      <p>Iz toga slede dve posledice koje ljudi obično previde:</p>

      <ul>
        <li><strong>Atest nije prenosiv.</strong> Ako skinete kuku sa jednog automobila i prebacite je na drugi, stari atest ne vredi ništa. Za novo vozilo ide nova ugradnja i novi atest.</li>
        <li><strong>Kvalitet ugradnje sam po sebi nije dovoljan.</strong> Atest se ne izdaje zato što kuka lepo stoji, nego zato što za taj tip kuke postoji dokumentacija baš za taj model vozila.</li>
      </ul>

      <h2>Kada vam atest treba</h2>

      <p>Tri situacije, i sve tri dolaze ranije nego što ljudi očekuju.</p>

      <h3>Upis kuke u saobraćajnu dozvolu</h3>

      <p>Naknadno ugrađena vučna kuka je izmena na vozilu i mora da se evidentira. Bez atesta nema osnova za upis, jer je potreban dokument koji potvrđuje da je izmena urađena po propisu.</p>

      <h3>Tehnički pregled</h3>

      <p>Kuka koja stoji na vozilu, a nije upisana u saobraćajnu dozvolu, biće primećena. Kontrolor gleda vozilo, ne samo papire. Ako kuke ima na autu, a nema je u dokumentima, to je nalaz koji morate da rešite pre nego što nastavite dalje.</p>

      <h3>Prodaja vozila</h3>

      <p>Ovo je situacija koju ljudi najčešće ne predvide. Kupac uzme saobraćajnu dozvolu, vidi da kuka nije upisana, i taj problem sada prelazi na njega. U najboljem slučaju to je cenkanje, u gorem prodaja stane ili vi vadite papire pod pritiskom roka.</p>

      <h2>Kojim redom se radi</h2>

      <p>Redosled nije proizvoljan. Svaki korak zavisi od prethodnog.</p>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Korak</th>
            <th>Gde</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ugradnja kuke i elektro-instalacije</td>
            <td>Radionica</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Izdavanje atesta</td>
            <td>Uz predaju vozila, iz radionice</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Tehnički pregled sa atestom</td>
            <td>Tehnički centar</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Upis kuke u saobraćajnu dozvolu</td>
            <td>MUP</td>
          </tr>
        </tbody>
      </table>

      <p>Najvažnije pravilo iz ove tabele: <strong>ne idite na tehnički pregled dok atest nije kod vas.</strong> Bez njega pregled nema šta da potvrdi, a vi ste izgubili termin i put.</p>

      <h2>Najčešća greška: kuka kupljena sa oglasa</h2>

      <p>Scenario izgleda dobro sve dok se ne dođe do papira. Neko nađe polovnu kuku po povoljnoj ceni, kupi je i donese na ugradnju, ili je da nekome da je brzo namesti. Kuka fizički stane, vijci ulaze, prikolica se kači. Mehanički gledano, posao može biti sasvim u redu.</p>

      <p>Problem je u tome što za tu konkretnu kuku ne postoji dokumentacija koja je povezuje sa vašim modelom vozila. Nema oznake tipa, nema podataka proizvođača, ne zna se ni sa kog je vozila skinuta. Ugradnja je tehnički moguća, atest nije.</p>

      <p>Šta onda sledi: skidanje te kuke, nabavka odgovarajućeg tipa, nova ugradnja, pa tek onda atest. Posao se plaća dva puta, a između se izgubi nedelju dana i najmanje jedan propušten termin na tehničkom pregledu.</p>

      <p>Ista greška postoji i u blažoj varijanti: nova kuka, ali kupljena odoka zato što je bila jeftina, bez provere da li za vaš model i godište uopšte postoji odgovarajući tip.</p>

      <h2>Šta proveriti pre nego što bilo šta kupite</h2>

      <ul>
        <li>Da za vašu marku, model, godište i tip karoserije postoji odgovarajući tip kuke. Isti model u limuzini i u karavanu ne mora da nosi istu kuku.</li>
        <li>Da uz kuku ide dokumentacija proizvođača, sa oznakom tipa. Bez toga se atest ne radi.</li>
        <li>Da se elektro-instalacija radi zajedno sa kukom, sa <a href="/blog/izbor-pravog-modela-euro-kuke">7 ili 13 pinova</a>, u zavisnosti od toga šta vučete.</li>
        <li>Ako je kuka polovna, da se tačno zna sa kog je vozila skinuta i da za nju postoje papiri.</li>
      </ul>

      <p>Najjednostavnije je da pre kupovine pozovete i kažete marku, model i godište. Provera traje minut, a sprečava da platite kuku koja vam ne odgovara.</p>

      <h2>Kako to izgleda u praksi kod nas</h2>

      <p><a href="/installation">Ugradnja kuke i elektro-instalacije</a> traje 3-4 sata, pa vozilo preuzimate istog dana. Uz vozilo dobijate kompletnu dokumentaciju sa kojom se atest vadi. Sam atest košta 15.000 dinara i nije u ceni ugradnje. Možemo da ga izvadimo umesto vas, po dogovoru. Na kuku i na elektro-instalaciju ide garancija od 2 godine.</p>

      <p>Radimo kuke proizvođača Bosal, AutoHak, Oris, Steinhof i Galia, za sve popularne marke automobila. Termin se obično dobija u roku od 24 sata od poziva.</p>

      <p>Ako niste sigurni koji tip kuke odgovara vašem vozilu, <a href="/contact">pozovite</a> pre nego što bilo šta kupite.</p>
    `,
  },
  'izbor-pravog-modela-euro-kuke': {
    /*
     * Rewritten on 2026-09-06. The article was built on a choice between a
     * fixed and a detachable hook, and that choice does not exist here: every
     * euro kuka this shop fits comes off, and the only decision is how. The
     * three mechanisms below are the ones actually sold.
     */
    title: 'Vrste euro kuka: na šrafove, na ručicu i brzopotezna',
    description:
      'Tri načina na koja se euro kuka skida, koliko se razlikuju u ceni i upotrebi, i kako da izaberete elektro-instalaciju sa 7 ili 13 pinova.',
    date: '9. april 2026.',
    datetime: '2026-04-09',
    updated: '2026-09-06',
    readingTime: '7 min čitanja',
    category: { title: 'Vodiči', href: '/blog/category/guide' },
    author: { name: 'Ugradnja Euro Kuka' },
    content: `
      <p>Kada čovek dođe u radionicu, prvo pitanje posle cene skoro uvek je isto: koja kuka. Odgovor je jednostavniji nego što ljudi očekuju, jer izbor nije toliko širok koliko se misli. Sve euro kuke se skidaju. Razlikuju se samo po tome kako, i po tome koliko taj mehanizam košta.</p>

      <h2>Fiksna kuka i euro kuka nisu isto</h2>

      <p>Ovo je nesporazum koji vredi raščistiti odmah. Fiksna kuka je ona kod koje kugla ostaje na vozilu stalno i skida se samo alatom, ako uopšte. Euro kuka je standard kod kojeg se vrat sa kuglom vadi iz ležišta, pa iza branika ostaje samo nosač koji je kod većine modela jedva primetan.</p>

      <p>Mi radimo euro kuke. To znači da kugla ne mora da stoji napolju kada je ne koristite, i da se skinuti deo drži u gepeku, obično u torbici koja ide uz kuku.</p>

      <h2>Tri načina skidanja</h2>

      <p>Mehanički, sve tri nose <a href="/blog/vuca-prikolice-masa-i-kategorija">ono za šta su odobrene</a>. Nijedna nije slabija zato što se brže skida. Bitno je samo da se pravilno vrati u ležište i osigura.</p>

      <h3>Na dva šrafa</h3>

      <p>Vrat se pričvršćuje sa dva šrafa i skida se ključem. Najjednostavnija konstrukcija, najmanje pokretnih delova i najpovoljnija varijanta. Ima smisla ako kuku skidate retko, na primer nekoliko puta godišnje, jer skidanje traži alat i par minuta.</p>

      <h3>Na ručicu</h3>

      <p>Vrat se otpušta ručicom i izvlači horizontalno, bez alata. Kada se uhoda, skidanje i vraćanje traju nekoliko sekundi. Sredina po ceni i po udobnosti, i najčešći izbor za nekoga ko kuku skida svakih par nedelja.</p>

      <h3>Brzopotezna, na ključ</h3>

      <p>Otključa se i vadi vertikalno naniže, na klik. Najbrža varijanta, sa najčistijim zadnjim delom kada je kugla skinuta, i najskuplja od tri. Bira se kada se kuka skida često ili kada je izgled vozila važan.</p>

      <h2>Kada se isplati platiti brži mehanizam</h2>

      <ul>
        <li><strong>Izgled.</strong> Ako vam smeta kugla na inače čistom braniku, a skidate je često, brži mehanizam je jedina stvar koja to zaista rešava u praksi.</li>
        <li><strong>Parking senzori.</strong> Kod nekih vozila kugla ulazi u zonu koju senzori vide, pa sistem javlja prepreku iako je nema. Skidanjem kugle problem nestaje, ali samo ako vam skidanje nije naporno.</li>
        <li><strong>Kamera za vožnju unazad.</strong> Kod pojedinih postavki kugla ulazi u donji deo slike i smeta pri manevrisanju.</li>
        <li><strong>Gradsko parkiranje.</strong> Kugla je nekoliko centimetara dužine vozila koje ne vidite. Pri parkiranju u nizu to je razlika između dodira i mirne noći.</li>
        <li><strong>Retka upotreba.</strong> Ako vučete par puta godišnje, dva šrafa su sasvim dovoljna i nema razloga da plaćate mehanizam.</li>
      </ul>

      <h2>Šta se ne razlikuje</h2>

      <p>Ovde ljudi često očekuju neku kvaku, pa da raščistimo odmah.</p>

      <ul>
        <li><strong>Papiri.</strong> Svaka naknadno ugrađena kuka je izmena na vozilu, bez obzira na mehanizam, i za sve se <a href="/blog/atest-euro-kuke">vadi atest</a> i sve se upisuju u saobraćajnu dozvolu. Brzopotezna se ne prijavljuje manje zato što se lakše skida.</li>
        <li><strong>Garancija.</strong> Kod nas je ista, 2 godine, i na kuku i na elektro-instalaciju, bez obzira na tip.</li>
        <li><strong>Elektro-instalacija.</strong> Sve varijante je zahtevaju. Prikolica mora da ima svetla, a svetla se napajaju iz vozila.</li>
        <li><strong>Vreme ugradnje.</strong> Posao traje 3-4 sata u sva tri slučaja.</li>
      </ul>

      <h2>Nema svaki model sve tri varijante</h2>

      <p>Ovo je deo koji ruši dosta planova. Izbor mehanizma nije uvek vaš. Za neke modele i godišta proizvođači kao što su Bosal, AutoHak, Oris, Steinhof i Galia rade sve tri varijante, za neke samo jednu, a ponekad se određena varijanta radi samo za određeni tip karoserije.</p>

      <p>Zato redosled treba da bude obrnut od onog na koji su ljudi navikli. Prvo se proveri šta uopšte postoji za vaš model, godište i karoseriju, pa se onda bira. Poziv pre kupovine traje minut i uštedi mnogo.</p>

      <h2>Sedam ili trinaest pinova</h2>

      <p><a href="/installation">Elektro-instalacija</a> je drugi deo posla i tu je izbor jednostavniji nego što zvuči. Razlika je u tome koliko strujnih kola ide u prikolicu.</p>

      <p><strong>Sedam pinova</strong> pokriva osnovno: pozicione lampe levo i desno, levi i desni žmigavac, stop svetla, zadnju maglenku i masu. To je sve što treba običnoj teretnoj prikolici ili nosaču bicikala sa svetlima.</p>

      <p><strong>Trinaest pinova</strong> ima ista ta kola plus dodatna: svetlo za vožnju unazad, stalno napajanje i napajanje koje radi dok je motor upaljen, sa odvojenim masama. To služi kamp prikolicama i svemu što ima potrošače unutra, rasvetu, frižider ili punjenje akumulatora prikolice.</p>

      <p>Pravilo je jednostavno. Ako vučete običnu prikolicu ili nosač, sedam pinova je dovoljno. Ako imate ili planirate kamp prikolicu, idite odmah na trinaest. Postoje i adapteri između dva standarda, ali adapter dodaje još jedan spoj na mestu koje je stalno izloženo vlazi i vibracijama, pa je bolje odmah uraditi ono što vam stvarno treba.</p>

      <h2>Univerzalna instalacija ili CAN modul</h2>

      <p>Drugo pitanje kod instalacije nije koliko pinova, nego kako se ona povezuje na vozilo. Starija vozila primaju univerzalnu instalaciju, koja se veže direktno na svetla. Novija imaju elektroniku koja to ne dozvoljava i traže CAN modul, koji komunicira sa fabričkim računarom vozila umesto da se kalemi na kablove.</p>

      <p>Nije stvar izbora nego vozila, i utiče na cenu. Zato se proverava unapred, zajedno sa tipom kuke, a ne na dan ugradnje.</p>

      <h2>Odluka u dva pitanja</h2>

      <ol>
        <li>Koliko često skidate kuku? Retko znači dva šrafa. Često znači ručica ili brzopotezna.</li>
        <li>Šta imate pozadi? Senzori, kamera, usko parkiranje ili vam jednostavno smeta kugla, sve to gura ka bržem mehanizmu.</li>
      </ol>

      <p>Kada na to dodate proveru šta uopšte postoji za vaš model, odluka se sama napravi.</p>

      <p>Ako niste sigurni koje varijante uopšte postoje za vaš model i godište, <a href="/contact">pozovite</a> pre kupovine.</p>
    `,
  },
  'vuca-prikolice-masa-i-kategorija': {
    title: 'Vuča prikolice: dozvoljena masa i kategorija vozačke dozvole',
    description:
      'Gde u saobraćajnoj dozvoli piše koliku prikolicu smete da vučete, šta pokriva B kategorija, kada treba BE i zašto je vertikalno opterećenje bitno.',
    date: '21. maj 2026.',
    datetime: '2026-05-21',
    readingTime: '8 min čitanja',
    category: { title: 'Pravne informacije', href: '/blog/category/legal' },
    author: { name: 'Ugradnja Euro Kuka' },
    content: `
      <p>Kuka na vozilu ne znači da smete da vučete šta hoćete. Postoje tri broja koja moraju da se poklope: koliko sme vozilo, koliko sme kuka i šta pokriva vaša vozačka dozvola. Ako bilo koji od ta tri ne pokriva prikolicu koju kačite, vozite nepropisno, bez obzira na to što sve fizički stoji na svom mestu.</p>

      <h2>Gde piše koliko vaše vozilo sme da vuče</h2>

      <p>Taj podatak nije na kuki i nije stvar procene. Nalazi se u dokumentaciji vozila, u delu sa tehničkim podacima. Tamo stoje dva odvojena podatka o priključnom vozilu:</p>

      <ul>
        <li><strong>Najveća dozvoljena masa prikolice sa kočnicom.</strong> Odnosi se na prikolicu koja ima sopstveni kočni sistem.</li>
        <li><strong>Najveća dozvoljena masa prikolice bez kočnice.</strong> Ta vrednost je uvek znatno manja.</li>
      </ul>

      <p>Kod dokumenata u evropskom formatu polja su označena kodovima, pa se ta dva podatka često nalaze kao O.1 i O.2. Ako ih ne pronalazite ili niste sigurni kako da ih pročitate, pitajte na tehničkom pregledu ili proverite u uputstvu za vozilo. Nemojte da se oslanjate na to koliko taj model navodno vuče prema forumima, jer se granica menja sa motorom, menjačem i pogonom, čak i unutar istog modela i godišta.</p>

      <p>I još nešto što se stalno previdi: gleda se <strong>ukupna masa prikolice sa teretom</strong>, ne prazna prikolica. Prazna prikolica od tristo kilograma natovarena peskom više nije prikolica od tristo kilograma.</p>

      <h2>B kategorija i kada vam treba BE</h2>

      <p>Vozačka dozvola je posebno ograničenje i mnogi ga otkriju prekasno, najčešće kada su prikolicu već kupili.</p>

      <p>B kategorija pokriva putničko vozilo i laku prikolicu. Kada prikolica pređe tu laku granicu, gleda se ukupna masa skupa, dakle vozilo i prikolica zajedno, i tu se ulazi u opseg u kojem može biti potrebna BE kategorija. Prevedeno na praksu: mala teretna prikolica ili nosač skoro nikada nisu problem, a veća kamp prikolica ili prikolica za čamac vrlo lako jesu.</p>

      <p>Tačne granice u kilogramima nemojte da prepisujete sa interneta, ni iz ovog teksta. Pre nego što kupite veću prikolicu, proverite kod MUP-a ili u auto-školi šta vaša kategorija tačno pokriva u odnosu na vozilo koje imate. To je jedan poziv, a razlika je između legalne vožnje i prekršaja.</p>

      <h2>Nosivost vozila i nosivost kuke su dva različita broja</h2>

      <p>Ovo je najčešći nesporazum u radionici. Kuka ima svoju deklarisanu nosivost, koja stoji na pločici na samoj kuki i u dokumentaciji proizvođača. Vozilo ima svoju, iz saobraćajne dozvole. To nisu isti brojevi i ne moraju da se poklope.</p>

      <p>Pravilo je jednostavno: <strong>važi manji od ta dva broja.</strong> Ako vozilo sme više nego što je kuka odobrena da nosi, važi ono što piše na kuki. Ako je obrnuto, važi ono što piše za vozilo. Kuka veće nosivosti ne podiže sposobnost vozila, jer vozilo ne ograničava samo tačka kačenja, nego i kočnice, hlađenje, menjač i konstrukcija zadnjeg dela.</p>

      <p>Zato ne postoji jača kuka kao rešenje za prikolicu koja je preteška za vaš automobil.</p>

      <h2>Vertikalno opterećenje na kugli</h2>

      <p>Treći broj koji se stalno zaboravlja. Vertikalno opterećenje je sila kojom vučna glava prikolice pritiska kuglu nadole. U praksi je to težina prednjeg dela prikolice koju nosi vaš automobil. Ima svoju gornju granicu, propisanu i za kuku i za vozilo, i ponovo važi manja vrednost.</p>

      <p>Bitno je iz dva razloga:</p>

      <ul>
        <li><strong>Previše opterećenja.</strong> Zadnji deo vozila se spušta, prednji se rasterećuje, upravljanje postaje neprecizno, a kuka i nosač trpe silu za koju nisu odobreni.</li>
        <li><strong>Premalo opterećenja.</strong> Ako je teret u prikolici pomeren unazad, opterećenje na kugli pada i prikolica počinje da se njiše levo-desno na većim brzinama. To je opasnije nego što zvuči.</li>
      </ul>

      <p>Praktično, to znači da <a href="/blog/kacenje-prikolice-provera">raspored tereta u prikolici</a> nije stvar ukusa. Teži deo tereta ide napred, ispred osovine, ali ne toliko napred da se probije gornja granica opterećenja na kugli.</p>

      <h2>Šta se dešava na tehničkom pregledu</h2>

      <p>Na pregledu se gleda i kuka i papirologija oko nje. Tri tipične situacije završe loše:</p>

      <ol>
        <li><strong>Kuka je na vozilu, a nije upisana u saobraćajnu dozvolu.</strong> Nema <a href="/blog/atest-euro-kuke">atesta</a>, nema upisa, nalaz je tu.</li>
        <li><strong>Ugrađena je kuka za koju ne postoji dokumentacija za taj model vozila.</strong> Fizički stoji, ali nema šta da se potvrdi.</li>
        <li><strong>Podaci se ne slažu.</strong> Tip kuke na vozilu nije onaj iz papira, ili se deklarisane vrednosti ne poklapaju sa onim što je odobreno za to vozilo.</li>
      </ol>

      <p>Sve tri se rešavaju istim redosledom: uredna <a href="/installation">ugradnja odgovarajućeg tipa kuke</a>, atest, pa tehnički pregled, pa upis u saobraćajnu dozvolu. Ako se preskoči korak, vraća se na početak.</p>

      <h2>Kratka lista pre kupovine prikolice</h2>

      <ol>
        <li>Pročitajte dozvoljenu masu prikolice sa kočnicom i bez kočnice iz dokumentacije vašeg vozila.</li>
        <li>Uporedite to sa deklarisanom nosivošću kuke. Važi manji broj.</li>
        <li>Proverite da li vaša kategorija vozačke dozvole pokriva skup koji planirate.</li>
        <li>Proverite dozvoljeno vertikalno opterećenje na kugli i unapred isplanirajte raspored tereta.</li>
        <li>Tek onda birajte prikolicu.</li>
      </ol>

      <p>Ako niste sigurni koji tip kuke odgovara vašem vozilu i koliko je odobren da nosi, <a href="/contact">pozovite</a> pre nego što kupite prikolicu.</p>
    `,
  },
  'kacenje-prikolice-provera': {
    title: 'Kačenje prikolice bez greške: provera u pet koraka pre puta',
    description:
      'Kugla, sigurnosno uže, svetla, gume i raspored tereta. Pet kratkih provera pre svakog polaska i osnovna pravila vožnje sa prikolicom u saobraćaju.',
    date: '18. jun 2026.',
    datetime: '2026-06-18',
    readingTime: '8 min čitanja',
    category: { title: 'Bezbednost', href: '/blog/category/safety' },
    author: { name: 'Ugradnja Euro Kuka' },
    content: `
      <p>Prikolica se retko otkači zbog lošeg materijala. Otkači se zato što neko nije čuo da kugla nije sela do kraja, ili je sigurnosno uže zakačio na pogrešno mesto. Ovih pet provera traje manje od dva minuta i radi se pre svakog polaska, ne samo prvi put.</p>

      <h2>1. Kugla i vučna glava</h2>

      <p>Vučna glava prikolice mora da nalegne na kuglu do kraja i da se zaključa. Nije dovoljno da je spuštena preko kugle, mora da je sela.</p>

      <ul>
        <li>Spustite vučnu glavu na kuglu i pustite mehanizam da uhvati. Kod većine vučnih glava postoji indikator na poklopcu, obično zeleno i crveno polje ili oznaka koja pokazuje da je glava zatvorena. Zeleno ne znači automatski da je sve u redu, ali crveno uvek znači da nije.</li>
        <li>Podignite potpornu nogu i pokušajte rukom da podignete vučnu glavu nagore. Ako se odvaja od kugle, nije sela.</li>
        <li>Bolja provera je da potpornom nogom malo podignete prikolicu na spoju. Ako zadnji deo vozila krene naviše zajedno sa njom, spoj drži.</li>
        <li>Pogledajte samu kuglu. Ako je masna od stare masti pomešane sa peskom, obrišite je. Ako ima vidljivo istrošenu ravan ili je primetno smanjenog prečnika, ide na proveru.</li>
        <li>Ako se kuka skida na ručicu ili na ključ, proverite i da je vrat seo u ležište i da je zaključan. Ključ vadite tek kada je zaključavanje potvrđeno.</li>
      </ul>

      <p>Na kraju potpornu nogu podignite do kraja i osigurajte. Zaboravljena spuštena noga je česta i skupa greška.</p>

      <h2>2. Sigurnosno uže ili lanac</h2>

      <p>Sigurnosno uže, kod težih prikolica lanac, postoji zbog jednog jedinog scenarija: da prikolica ostane vezana za vozilo ako spoj popusti. Kod prikolica sa kočnicom uže je povezano sa polugom ručne kočnice prikolice, pa u tom slučaju aktivira kočenje.</p>

      <p>Dve greške koje se stalno viđaju:</p>

      <ul>
        <li><strong>Uže zakačeno za kuglu ili omotano oko vrata kuke.</strong> Ako spoj popusti, popustiće i tu, pa uže nije uradilo ništa. Uže ide na predviđenu tačku, ušicu ili otvor na nosaču kuke koji je za to napravljen. Ako na vašoj kuki postoji ušica, ona je tu sa razlogom.</li>
        <li><strong>Uže prekratko ili predugačko.</strong> Prekratko se zateže u oštrijoj krivini i može da povuče kočnicu prikolice. Predugačko vuče po asfaltu i pregori. Provucite ga tako da ima blagi luk, ali da ne dodiruje put.</li>
      </ul>

      <p>Proverite i sam materijal. Uže sa prekinutim strukovima ili karabin koji ne zatvara do kraja nisu za upotrebu.</p>

      <h2>3. Svetla</h2>

      <p>Svetla su provera za dvoje ljudi ili za jedan zid iza prikolice u mraku. Uključite redom i proverite svako:</p>

      <ul>
        <li>Pozicione lampe levo i desno.</li>
        <li>Levi žmigavac, pa desni. Ako u vozilu žmigavac počne da kuca brže nego obično, to najčešće znači da nešto u prikolici ne radi.</li>
        <li>Stop svetla, obe strane.</li>
        <li>Zadnja maglenka.</li>
        <li>Svetlo za vožnju unazad, ako ga prikolica ima.</li>
        <li>Osvetljenje registarske tablice prikolice.</li>
      </ul>

      <p><a href="/blog/izbor-pravog-modela-euro-kuke">Sedmopinski konektor</a> nosi pozicione lampe, oba žmigavca, stop svetla, zadnju maglenku i masu. Trinaestopinski nosi sve to plus svetlo za vožnju unazad i napajanja za potrošače u prikolici, sa odvojenim masama, što je bitno kamp prikolicama. Ako koristite adapter između dva standarda, njega proverite prvog, jer je najčešći uzrok kvara.</p>

      <p>Pre kačenja pogledajte i kontakte u utičnici. Zelenkasta naslaga i voda u utičnici su razlog zašto svetla rade dok stojite u dvorištu, a otkažu posle pola sata vožnje po kiši.</p>

      <h2>4. Gume na prikolici</h2>

      <p>Gume na prikolici su najzanemareniji deo skupa. Prikolica stoji mesecima na jednom mestu, pa se gume troše od stajanja, ne od kilometraže.</p>

      <ul>
        <li><strong>Pritisak.</strong> Proverava se na hladnim gumama, prema podatku iz uputstva prikolice ili sa nalepnice na njoj. Pritisak za prikolicu obično nije isti kao za automobil, pa nemojte da prepisujete vrednost sa svog auta.</li>
        <li><strong>Starost.</strong> Na boku gume stoji četvorocifrena oznaka nedelje i godine proizvodnje. Guma stara više godina može da izgleda kao nova, a da je guma zapravo već otvrdla.</li>
        <li><strong>Pukotine.</strong> Sitne pukotine po boku i u dnu šara su znak sušenja. Takva guma ne ide na dug put pod teretom.</li>
        <li><strong>Šara i trošenje.</strong> Trošenje samo sa jedne strane ukazuje na problem sa osovinom ili ležajem, a ne na gumu.</li>
        <li><strong>Rezervna guma i alat.</strong> Ako prikolica ima rezervnu, proverite i njen pritisak, i da imate čime da je zamenite pored puta.</li>
      </ul>

      <h2>5. Raspored tereta</h2>

      <p>Loše natovarena prikolica je opasnija od teške prikolice. Pravila su tri.</p>

      <ol>
        <li><strong>Teži deo tereta ide napred, ispred osovine.</strong> Ne sve napred, ali težište mora da bude ispred osovine da bi na kugli ostalo pozitivno opterećenje.</li>
        <li><strong>Teret ide što niže.</strong> Visoko složen teret podiže težište, pa se prikolica ljulja u bočnom vetru i pri preticanju.</li>
        <li><strong>Sve mora da bude vezano.</strong> Teret koji se pomeri u vožnji menja raspored mase u sekundi. Kaiševi, a ne procena da se neće pomeriti.</li>
      </ol>

      <p>Ako je težište iza osovine, prikolica ima premalo <a href="/blog/vuca-prikolice-masa-i-kategorija">opterećenja na kugli</a> i na brzini počinje da se njiše levo-desno. To njihanje se pojačava samo od sebe. Prvo se oseti kao lagano povlačenje volana, pa postaje sve izraženije.</p>

      <p><strong>Ako se prikolica zanjiše u vožnji:</strong> ne kočite naglo i ne trzajte volanom. Skinite nogu sa gasa, držite volan pravo i pustite da skup uspori sam. Kada se smiri, stanite na bezbednom mestu i preraspodelite teret. Naglo kočenje u trenutku njihanja je najčešći način da se prikolica potpuno izgubi.</p>

      <h2>Vožnja sa prikolicom</h2>

      <p>Skup se ponaša drugačije od automobila u skoro svemu.</p>

      <ul>
        <li><strong>Zaustavni put.</strong> Znatno je duži, pogotovo kod prikolice bez kočnice. Povećajte razmak do vozila ispred i računajte na to na nizbrdici.</li>
        <li><strong>Preticanje.</strong> Traje mnogo duže nego što ste navikli, jer je skup teži i duži. Ako niste sigurni da imate prostora, nemojte.</li>
        <li><strong>Krivine.</strong> Prikolica seče krivinu unutrašnjom stranom. Ulazite šire, pogotovo na raskrsnicama i pored ivičnjaka.</li>
        <li><strong>Vožnja unazad.</strong> Prikolica ide na suprotnu stranu od one na koju okrenete volan. Vežbajte na praznom parkingu pre nego što vam zatreba. Uhvatite volan dole i pomerajte ruku na stranu na koju hoćete da ide prikolica, tako se najlakše navikne.</li>
        <li><strong>Brzina.</strong> Za vuču prikolice važe niža ograničenja nego za putničko vozilo bez prikolice. Proverite koje ograničenje važi za skup na putu kojim vozite i pridržavajte ga se, jer to nije stvar procene.</li>
        <li><strong>Bočni vetar i kamioni.</strong> Pri preticanju kamiona i na mostovima očekujte guranje u stranu. Držite volan čvršće i smanjite brzinu unapred, a ne u trenutku kada vas gurne.</li>
      </ul>

      <p>Posle prvih stotinak kilometara sa novom prikolicom stanite i proverite spoj, uže i vezivanje tereta. Tada se obično vidi šta se opustilo.</p>

      <p>Ako na proveri nešto ne štima na samoj kuki ili na <a href="/installation">elektro-instalaciji</a>, <a href="/contact">javite se</a> pre nego što krenete na put.</p>
    `,
  },
};
