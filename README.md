# BudgetAPP_vanilaJS

Aplikacija za izračunavanje stanja mesečnog bužeta

Specifikacije:

Postoji forma kojom se ubacuju informacije o prihodu/rashodu i ona sadrži:
    - Dropdown kojim se bira prihod/rashod
    - Polje za unos tekstualnog opisa transakcije (ne može biti prazan)
    - Polje za unos iznosa transakcije (ne mogu da se unose negativni brojevi, niti 0)
    - Dugme za potvrdu, kojim se ubacuju elementi u odgovarajuću listu
Postoje dve liste (jedna za prihode, jedna za rashode)
    - Elementima liste se na hover pojavljuje dugme za uklanjanje tog elementa
    - Svaki element sadrži opis i iznos, dok elementi sa liste za rashode sadrže i dodatnu informaciju o tome koliki procenat od ukupnih prihoda čine
Postoje informacije o ukupnom prihodu, ukupnom rashodu, i unupnom stanju, koji se menjaju svaki put kada se neka od lista promeni. Ukupni rashod takođe ima i informaciju koliki procenat od ukupnog prihoda čini. 

Pokretanje projekta:
npm start
