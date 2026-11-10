// PRIX MANUELS — compléments à prix-omni.js, saisis à la main (Claude, à la demande de Mounir)
// Ce fichier est publié sur GitHub (dépôt omni-prix, à côté de prix-omni.js) et lu par Simultoo et le Simulateur smartphones.
// Il contient ce qu'OMNI ne trouve pas sur boutique.orange.fr : bonus reprise accessoires et grilles spéciales, ODR sans lien
// sur le site (Black Friday, iPhone + objets connectés…), ODR Orange des accessoires, bundles (prix d'un accessoire acheté avec
// un mobile), accessoires vendus en boutique mais absents du site, corrections de prix.
// Toutes les dates sont au format AAAA-MM-JJ, incluses. Une ligne dont la date de fin est passée est ignorée automatiquement.
// « modeles » / « declencheur » / « match » = expressions régulières testées sur « Marque Modèle » (ex. « Google Pixel 11 Pro XL 5G+ »).
// odrArchive : ODR terminées à garder dans l'historique de l'outil « ODR » de Simultoo (nom, type, montant, debut, fin, lien, cibles, conditions).
// lien: null = formulaire pas encore connu → la ligne s'affiche sans lien « formulaire ».
window.PRIX_MANUEL = {
 "format": 1,
 "majLe": "2026-11-10",
 "auteur": "Mounir (ajouts manuels, saisis par Claude)",
 "sources": [
  "Kit de com équipements Black Friday 2026 (DCGP, 06/11/2026) et ses 2 feuilles de calcul",
  "Bonus Black Friday 1re partie (10 au 18/11)",
  "Formulaires ODR Objets connectés Orange, iPhone neuf et objets connectés Orange, Black Friday mobile Orange"
 ],
 "bonusReprise": {
  "seuils": {
   "Apple": 10,
   "Samsung": 1,
   "autres": 0,
   "reconditionne": 0
  },
  "maxParPanier": 2,
  "regle": "1 bonus « smartphone » maximum par mobile acheté et mobile repris. Bonus accessoires et objets connectés : en boutique uniquement, seuls ou cumulables avec un bonus smartphone. Référence : le bonus reprise affiché sur orange.fr (prix-omni.js) ; les lignes « mobiles » ci-dessous ne servent que pour les mobiles sans bonus sur le site.",
  "mobiles": [
   {
    "nom": "Bonus reprise Black Friday — reconditionnés",
    "montant": 50,
    "reconditionne": true,
    "debut": "2026-11-10",
    "fin": "2026-11-18",
    "modeles": [
     "^Apple iPhone 13 mini\\b",
     "^Apple iPhone 13 Pro Max\\b",
     "^Apple iPhone 14( |$)(?!Pro|Plus)",
     "^Apple iPhone 14 Pro( |$)(?!Max)",
     "^Apple iPhone 14 Pro Max\\b",
     "^Apple iPhone 15 Pro( |$)(?!Max)",
     "^Apple iPhone 16( |$)(?!Pro|Plus|e)",
     "^Samsung Galaxy S23\\b(?! FE| Ultra| Plus)"
    ]
   }
  ],
  "sunset": {
   "nom": "Bonus reprise opération Sunset (mobile 2G repris)",
   "montant": 50,
   "debut": "2026-11-10",
   "fin": "2026-11-18",
   "condition": "Le mobile repris est un mobile 2G : pas de condition de valeur de reprise",
   "modeles": [
    "^MobiWire Hinto 2\\b",
    "^Doro Leva L30\\b",
    "^Doro Aurora A30\\b",
    "^Xiaomi Redmi A5\\b",
    "^Xiaomi Redmi A7 Pro\\b",
    "^TCL Onetouch 4043\\b",
    "^HONOR X5c Plus\\b",
    "^Motorola moto g67\\b",
    "^Samsung Galaxy A17 4G\\b"
   ]
  },
  "accessoires": [
   {
    "nom": "Galaxy Watch Ultra (2025) / Ultra2",
    "montant": 100,
    "debut": "2026-11-10",
    "fin": "2026-11-18",
    "ids": [
     "acc-samsung-galaxy-watch-ultra-4g",
     "acc-samsung-galaxy-watch-ultra2-4g"
    ],
    "match": "^Samsung Galaxy Watch Ultra"
   },
   {
    "nom": "Galaxy Watch8 Classic",
    "montant": 80,
    "debut": "2026-11-10",
    "fin": "2026-11-18",
    "ids": [
     "acc-samsung-galaxy-watch8-classic-4g"
    ],
    "match": "^Samsung Galaxy Watch\\s?8 Classic"
   },
   {
    "nom": "Galaxy Watch8 / Watch9",
    "montant": 50,
    "debut": "2026-11-10",
    "fin": "2026-11-18",
    "ids": [
     "acc-samsung-galaxy-watch8-4g",
     "acc-samsung-galaxy-watch8-bluetooth",
     "acc-samsung-galaxy-watch9-4g-40mm-creme",
     "acc-samsung-galaxy-watch9-4g-44mm-graphite",
     "acc-samsung-galaxy-watch9-bluetooth"
    ],
    "match": "^Samsung Galaxy Watch\\s?(8|9)(?!\\s*Classic)"
   },
   {
    "nom": "Huawei Watch GT 7 Pro 46 mm",
    "montant": 50,
    "debut": "2026-11-10",
    "fin": "2026-11-18",
    "ids": [
     "acc-huawei-watch-gt-7-pro-bluetooth"
    ],
    "match": "^Huawei Watch GT ?7 Pro"
   },
   {
    "nom": "Huawei Watch Fit 5 Pro / GT7 41 mm",
    "montant": 30,
    "debut": "2026-11-10",
    "fin": "2026-11-18",
    "ids": [
     "acc-huawei-watch-fit-5-pro-bluetooth",
     "acc-huawei-watch-gt7-bluetooth"
    ],
    "match": "^Huawei Watch (Fit 5 Pro|GT ?7(?! Pro))"
   },
   {
    "nom": "Galaxy Buds4 Pro / Buds4 / Buds3 FE",
    "montant": 30,
    "debut": "2026-11-10",
    "fin": "2026-11-18",
    "ids": [
     "acc-ecouteurs-samsung-galaxy-buds4-pro",
     "acc-ecouteurs-samsung-galaxy-buds4",
     "acc-ecouteurs-samsung-galaxy-buds3-fe"
    ],
    "match": "Samsung Galaxy Buds\\s?(4 Pro|4|3 FE)\\b"
   }
  ]
 },
 "odrMobiles": [
  {
   "id": "odr-bf-mobile",
   "nom": "ODR Black Friday mobile Orange",
   "orange": true,
   "client": "clients mobile Orange",
   "debut": "2026-11-10",
   "fin": "2026-11-18",
   "finDemande": "2026-12-18",
   "lien": "https://formulaires.odr.orange.fr/19672",
   "conditions": "Particuliers clients mobile Orange (France métropolitaine) : achat en boutique ou service clients entre le 10 et le 18/11/2026, demande par internet avant le 18/12/2026 minuit (courrier refusé). Non cumulable avec une autre ODR Orange sur le mobile ni avec un code promo ; cumulable avec un bonus reprise. Mobiles vendus par un tiers sur orange.fr exclus. Remboursement sous forme d'avoir sur facture à partir de la 2e ou 3e facture ; arrêté en cas de résiliation ou de rétractation. Un remboursement par mobile (IMEI) et par forfait.",
   "paliers": [
    {
     "montant": 100,
     "modeles": [
      "^Google Pixel 11( |$)(?!Pro)",
      "^Google Pixel 11 Pro( |$)(?!XL|Fold)",
      "^Google Pixel 11 Pro XL\\b"
     ]
    },
    {
     "montant": 50,
     "reconditionne": true,
     "modeles": [
      "^Apple iPhone 13 Pro Max\\b",
      "^Apple iPhone 14 Pro( |$)(?!Max)",
      "^Apple iPhone 14 Pro Max\\b",
      "^Apple iPhone 15 Pro( |$)(?!Max)",
      "^Apple iPhone 16( |$)(?!Pro|Plus|e)"
     ]
    },
    {
     "montant": 50,
     "reconditionne": false,
     "modeles": [
      "^Google Pixel 10( |$)(?!Pro|a)",
      "^Motorola edge 70 fusion\\b",
      "^Xiaomi 17T( |$)(?!Pro)",
      "^Xiaomi REDMI Note 17 Pro Max\\b",
      "^HONOR 600 5G",
      "^Samsung Galaxy S26( 5G|$)(?! FE| Plus| Ultra)",
      "^Samsung Galaxy Z Fold8( 5G|$)(?! Ultra)"
     ]
    },
    {
     "montant": 30,
     "reconditionne": false,
     "modeles": [
      "^Crosscall CORE-M6\\b",
      "^Crosscall STELLAR-M6\\b",
      "^Fairphone (\\(Gen )?6",
      "^HONOR 600 Lite\\b",
      "^Samsung Galaxy A37\\b"
     ]
    },
    {
     "montant": 30,
     "reconditionne": true,
     "modeles": [
      "^Apple iPhone 14( |$)(?!Pro|Plus)",
      "^Apple iPhone 13 mini\\b",
      "^Samsung Galaxy S23\\b(?! FE| Ultra| Plus)",
      "^Samsung Galaxy A56\\b",
      "^Samsung Galaxy A53\\b",
      "^Samsung Galaxy A23\\b"
     ]
    }
   ]
  }
 ],
 "odrIphone": {
  "id": "odr-iphone-objets",
  "nom": "ODR iPhone neuf + objets connectés Apple",
  "orange": true,
  "debut": "2026-11-10",
  "fin": "2027-01-05",
  "finDemande": "2027-02-05",
  "lien": null,
  "conditions": "Clients mobile Orange : iPhone neuf + accessoire(s) Apple achetés chez Orange. Une seule demande par mobile. Non cumulable avec une autre ODR Orange sur le mobile. Pas avec un iPhone reconditionné.",
  "iphones": [
   "iPhone 15",
   "iPhone 16",
   "iPhone 16e",
   "iPhone 16 Plus",
   "iPhone 17",
   "iPhone 17e",
   "iPhone 17 Pro",
   "iPhone 17 Pro Max",
   "iPhone 18 Pro",
   "iPhone 18 Pro Max",
   "iPhone Air",
   "iPhone Duo"
  ],
  "montres": "^Apple Watch (Ultra (3|4)|Series (11|12)|SE 3)\\b",
  "paliers": [
   {
    "montant": 158,
    "watch": true,
    "airpodsPro3": true
   },
   {
    "montant": 100,
    "watch": true
   },
   {
    "montant": 100,
    "airpodsPro3": true
   },
   {
    "montant": 50,
    "airpods45": true
   }
  ]
 },
 "odrAccessoires": [
  {
   "id": "odr-objets-connectes",
   "nom": "ODR Objets connectés Orange",
   "montant": 50,
   "orange": true,
   "debut": "2026-11-10",
   "fin": "2027-01-05",
   "finDemande": "2027-02-05",
   "lien": "https://formulaires.orange.fr/20058",
   "lienSosh": "https://formulaires.sosh.fr/20067",
   "client": "clients mobile Orange ou Sosh",
   "marques": [
    "Even Realities",
    "Google",
    "Meta",
    "Samsung",
    "Xiaomi"
   ],
   "categories": [
    "montres",
    "ecouteurs",
    "lunettes"
   ],
   "prixStrictementSuperieurA": 100,
   "conditions": "Objet connecté de plus de 100 € (Even Realities, Google, Meta, Samsung, Xiaomi) acheté du 10/11/2026 au 05/01/2027, formulaire avant le 05/02/2027. Cumulable avec les ODR constructeurs, les prix remisés et un bonus reprise ; non cumulable avec une autre ODR Orange sur un objet connecté."
  }
 ],
 "bundles": [
  {
   "id": "bundle-honor-600",
   "nom": "Bundle HONOR 600",
   "declencheur": "^HONOR 600 5G",
   "debut": "2026-10-19",
   "fin": "2026-12-02",
   "unSeul": true,
   "note": "Achat en même temps qu'un HONOR 600 ; les deux bundles ne sont pas cumulables entre eux",
   "articles": [
    {
     "ids": [
      "acc-ecouteurs-honor-choice-earbuds-s8"
     ],
     "prix": 19.99
    },
    {
     "ids": [
      "acc-honor-choice-watch-2-pro"
     ],
     "prix": 49.99
    }
   ]
  },
  {
   "id": "bundle-redmi-note-17-pro",
   "nom": "Bundle Redmi Note 17 Pro",
   "declencheur": "^Xiaomi REDMI Note 17 Pro",
   "debut": "2026-10-08",
   "fin": "2026-11-18",
   "note": "Achat en même temps qu'un Redmi Note 17 Pro 5G (kit de com : aussi présenté avec le Pro Max)",
   "articles": [
    {
     "ids": [
      "man-xiaomi-redmi-watch-6-active"
     ],
     "prix": 19
    }
   ]
  }
 ],
 "prixAccessoires": [
  {
   "ids": [
    "acc-huawei-watch-gt7-bluetooth"
   ],
   "prix": 249.99,
   "debut": "2026-11-10",
   "fin": "2026-12-02",
   "note": "Huawei GT7 41 mm rose : 249,99 € au Black Friday (le site affichait encore 299,99 €)"
  }
 ],
 "accessoires": [
  {
   "id": "man-shokz-openrun-mini",
   "categorie": "ecouteurs",
   "nom": "Casque à conduction osseuse Shokz OpenRun Mini",
   "marque": "Shokz",
   "prix": 99.99,
   "cat": 139.99,
   "remise": 40.0,
   "promoFin": "2026-12-02",
   "variantes": [
    {
     "ean": "0810092679868",
     "couleur": "noir",
     "nom": "Casque à conduction osseuse Shokz OpenRun Mini noir",
     "dispo": true
    }
   ],
   "source": "Kit de com Black Friday 2026"
  },
  {
   "id": "man-shokz-openrun",
   "categorie": "ecouteurs",
   "nom": "Casque à conduction osseuse Shokz OpenRun",
   "marque": "Shokz",
   "prix": 99.99,
   "cat": 139.99,
   "remise": 40.0,
   "promoFin": "2026-12-02",
   "variantes": [
    {
     "ean": "0810092679837",
     "couleur": "noir",
     "nom": "Casque à conduction osseuse Shokz OpenRun noir",
     "dispo": true
    }
   ],
   "source": "Kit de com Black Friday 2026"
  },
  {
   "id": "man-lexibook-casque-chat",
   "categorie": "ecouteurs",
   "nom": "Casque sans fil lumineux oreilles de chat Lexibook",
   "marque": "Lexibook",
   "prix": 24.99,
   "cat": 29.99,
   "remise": 5.0,
   "promoFin": "2026-12-02",
   "variantes": [
    {
     "ean": "3380743099224",
     "couleur": "",
     "nom": "Casque sans fil lumineux oreilles de chat Lexibook",
     "dispo": true
    }
   ],
   "source": "Kit de com Black Friday 2026"
  },
  {
   "id": "man-sound-origin-anc",
   "categorie": "ecouteurs",
   "nom": "Casque Sound Origin ANC",
   "marque": "Sound Origin",
   "prix": 19.99,
   "cat": 29.99,
   "remise": 10.0,
   "promoFin": "2026-12-02",
   "variantes": [
    {
     "ean": "3499550391008",
     "couleur": "noir",
     "nom": "Casque Sound Origin ANC noir",
     "dispo": true
    },
    {
     "ean": "3499550391022",
     "couleur": "blanc",
     "nom": "Casque Sound Origin ANC blanc",
     "dispo": true
    },
    {
     "ean": "3499550391046",
     "couleur": "vert",
     "nom": "Casque Sound Origin ANC vert",
     "dispo": true
    }
   ],
   "source": "Kit de com Black Friday 2026"
  },
  {
   "id": "man-noise-master-buds-max",
   "categorie": "ecouteurs",
   "nom": "Casque Noise Master Buds Max",
   "marque": "Noise",
   "prix": 59,
   "cat": 159,
   "remise": 100,
   "promoFin": "2026-12-02",
   "variantes": [
    {
     "ean": "8906174626478",
     "couleur": "noir",
     "nom": "Casque Noise Master Buds Max noir",
     "dispo": true
    }
   ],
   "source": "Kit de com Black Friday 2026"
  },
  {
   "id": "man-marshall-monitor-3",
   "categorie": "ecouteurs",
   "nom": "Casque Marshall Monitor 3",
   "marque": "Marshall",
   "prix": 199.99,
   "cat": 349.99,
   "remise": 150.0,
   "promoFin": "2026-12-02",
   "variantes": [
    {
     "ean": "7340055401777",
     "couleur": "noir",
     "nom": "Casque Marshall Monitor 3 noir",
     "dispo": true
    }
   ],
   "source": "Kit de com Black Friday 2026"
  },
  {
   "id": "man-marshall-major-4",
   "categorie": "ecouteurs",
   "nom": "Casque Marshall Major 4",
   "marque": "Marshall",
   "prix": 79.99,
   "cat": 129.99,
   "remise": 50.0,
   "promoFin": "2026-12-02",
   "variantes": [
    {
     "ean": "7340055379458",
     "couleur": "noir",
     "nom": "Casque Marshall Major 4 noir",
     "dispo": true
    }
   ],
   "source": "Kit de com Black Friday 2026"
  },
  {
   "id": "man-motorola-buds-2-plus",
   "categorie": "ecouteurs",
   "nom": "Ecouteurs Motorola Buds 2 Plus",
   "marque": "Motorola",
   "prix": 49.99,
   "cat": 149.99,
   "remise": 100.0,
   "promoFin": "2026-12-02",
   "variantes": [
    {
     "ean": "0840493609485",
     "couleur": "noir",
     "nom": "Ecouteurs Motorola Buds 2 Plus noir",
     "dispo": true
    }
   ],
   "source": "Kit de com Black Friday 2026"
  },
  {
   "id": "man-hisense-hs2000",
   "categorie": "enceintes",
   "nom": "Barre de son Hisense HS2000",
   "marque": "Hisense",
   "prix": 59.99,
   "cat": 99.99,
   "remise": 40.0,
   "promoFin": "2026-12-02",
   "variantes": [
    {
     "ean": "6942351411514",
     "couleur": "",
     "nom": "Barre de son Hisense HS2000",
     "dispo": true
    }
   ],
   "source": "Kit de com Black Friday 2026"
  },
  {
   "id": "man-veilleuse-echo-lapin",
   "categorie": "autres",
   "nom": "Veilleuse Echo Lapin",
   "marque": "Echo",
   "prix": 14.99,
   "cat": 19.99,
   "remise": 5.0,
   "promoFin": "2026-12-02",
   "variantes": [
    {
     "ean": "3662515088392",
     "couleur": "assis",
     "nom": "Veilleuse Echo Lapin assis",
     "dispo": true
    },
    {
     "ean": "3662515088408",
     "couleur": "couché",
     "nom": "Veilleuse Echo Lapin couché",
     "dispo": true
    }
   ],
   "source": "Kit de com Black Friday 2026"
  },
  {
   "id": "man-lexibook-talkie-walkie",
   "categorie": "autres",
   "nom": "Talkie-walkie avec appel vidéo Lexibook",
   "marque": "Lexibook",
   "prix": 34.99,
   "cat": 49.99,
   "remise": 15.0,
   "promoFin": "2026-12-02",
   "variantes": [
    {
     "ean": "3380743130224",
     "couleur": "bleu",
     "nom": "Talkie-walkie avec appel vidéo Lexibook bleu",
     "dispo": true
    }
   ],
   "source": "Kit de com Black Friday 2026"
  },
  {
   "id": "man-weconnect-cable-usbc-aimante",
   "categorie": "chargeurs",
   "nom": "Câble USB-C aimanté 3A 60W WECONNECT 1 m",
   "marque": "WECONNECT",
   "prix": 9.99,
   "cat": 19.99,
   "remise": 10.0,
   "promoFin": "2026-12-02",
   "variantes": [
    {
     "ean": "3304490438686",
     "couleur": "noir",
     "nom": "Câble USB-C aimanté 3A 60W WECONNECT 1 m noir",
     "dispo": true
    },
    {
     "ean": "3304490438860",
     "couleur": "blanc",
     "nom": "Câble USB-C aimanté 3A 60W WECONNECT 1 m blanc",
     "dispo": true
    },
    {
     "ean": "3304490438709",
     "couleur": "rose",
     "nom": "Câble USB-C aimanté 3A 60W WECONNECT 1 m rose",
     "dispo": true
    },
    {
     "ean": "3304490438693",
     "couleur": "vert",
     "nom": "Câble USB-C aimanté 3A 60W WECONNECT 1 m vert",
     "dispo": true
    }
   ],
   "source": "Kit de com Black Friday 2026"
  },
  {
   "id": "man-xiaomi-redmi-watch-6-active",
   "categorie": "montres",
   "nom": "Xiaomi Redmi Watch 6 Active",
   "marque": "Xiaomi",
   "prix": 59,
   "cat": 59,
   "remise": 0,
   "promoFin": null,
   "variantes": [
    {
     "ean": "6932554406103",
     "couleur": "",
     "nom": "Xiaomi Redmi Watch 6 Active",
     "dispo": true
    }
   ],
   "promos": [
    {
     "prix": 39,
     "debut": "2026-11-19",
     "fin": "2026-12-02"
    }
   ],
   "source": "Kit de com Black Friday 2026"
  }
 ],
 "odrArchive": []
};
