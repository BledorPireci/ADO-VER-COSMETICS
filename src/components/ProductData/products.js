import tinktureEukalipti from '../../assets/images/Products/tinkturat/tinkture-eukalipti.webp';
import tinktureHithres from '../../assets/images/Products/tinkturat/tinkture-hithres.webp';
import tinktureKarafil from '../../assets/images/Products/tinkturat/tinkture-karafil.webp';
import tinktureKumakut from '../../assets/images/Products/tinkturat/tinkture-kumakut.webp';
import tinktureNenexhiku from '../../assets/images/Products/tinkturat/tinkture-nenexhiku.webp';
import tinktureSherebeles from '../../assets/images/Products/tinkturat/tinkture-sherebeles.webp';

import vajChamomileLips from '../../assets/images/Products/vajrat/vaj-chamomileLips.webp';
import vajEukalipti from '../../assets/images/Products/vajrat/vaj-eukaliptus.webp';
import vajImmortelle from '../../assets/images/Products/vajrat/vaj-immortelle.webp';
import vajKarafili from '../../assets/images/Products/vajrat/vaj-karafili.webp';
import vajKumakut from '../../assets/images/Products/vajrat/vaj-kumaku.webp';
import vajNenexhiku from '../../assets/images/Products/vajrat/vaj-nenexhiku.webp';
import vajSherebeles from '../../assets/images/Products/vajrat/vaj-sherebele.webp';
import vajWort from '../../assets/images/Products/vajrat/vaj-wort.webp';

import sprayHairLoss from '../../assets/images/Products/spray/spray-hairloss.webp';
import sprayHairLossMen from '../../assets/images/Products/spray/spray-hairlossmen.webp';
import sprayLotion from '../../assets/images/Products/spray/spray-lotion.webp';
import sprayMuscles from '../../assets/images/Products/spray/spray-muscles.webp';
import spraySunTan from '../../assets/images/Products/spray/spray-suntan.webp';
import sprayVeno from '../../assets/images/Products/spray/spray-veno.webp';
import sprayWort from '../../assets/images/Products/spray/spray-wort.webp';

import creamAntiAcneP from '../../assets/images/Products/cream/cream-antiacne-p.webp';
import creamAntiAcne from '../../assets/images/Products/cream/cream-antiacne.webp';
import creamAntiAgingP from '../../assets/images/Products/cream/cream-antiage-p.webp';
import creamAntiAging from '../../assets/images/Products/cream/cream-antiage.webp';
import creamBioColagen from '../../assets/images/Products/cream/cream-biocolagen.webp';
import creamDarkSpot from '../../assets/images/Products/cream/cream-darkspot.webp';
import creamExternalHemorroide from '../../assets/images/Products/cream/cream-externalH.webp';
import creamHand from '../../assets/images/Products/cream/cream-hand.webp';
import creamInternalHemorroide from '../../assets/images/Products/cream/cream-internalH.webp';
import creamWort from '../../assets/images/Products/cream/cream-wort.webp';


export const products = [
  {
    id: 1,
    name: "Krem kundër akneve",
    category: "Kremrat",
    price: 4.99,
    image: creamAntiAcneP,
    description: "Krem për parandalimin e akneve dhe pastrimin e lëkurës",
    ingredients: ["Acidi Salicilik", "Shea Butter", "Cera Alba"]
  },
  {
    id: 2,
    name: "Krem kundër akneve",
    category: "Kremrat",
    price: 14.99,
    image: creamAntiAcne,
    description: "Krem për trajtimin e akneve dhe qetësimin e lëkurës",
    ingredients: ["Acidi Salicilik", "Shea Butter", "Cera Alba"]
  },
  {
    id: 3,
    name: "Krem kundër plakjes",
    category: "Kremrat",
    price: 4.99,
    image: creamAntiAgingP,
    description: "Krem kundër plakjes dhe rigjenerimit të lëkurës",
    ingredients: ["Vaj Kokosi", "Cetaryl Alkoholi", "Cetaceum"]
  },
  {
    id: 4,
    name: "Krem kundër plakjes",
    category: "Kremrat",
    price: 14.99,
    image: creamAntiAging,
    description: "Krem kundër plakjes dhe forcimit të lëkurës",
    ingredients: ["Vaj Kokosi", "Cetaryl Alkoholi", "Cetaceum"]
  },
  {
    id: 5,
    name: "Krem bio kolagjen",
    category: "Kremrat",
    price: 4.99,
    image: creamBioColagen,
    description: "Krem për prodhimin e kolagjenit dhe elasticitetin e lëkurës",
    ingredients: ["Kolagjen", "Shea Butter", "Retinol"]
  },
  {
    id: 6,
    name: "Krem bar pezmi",
    category: "Kremrat",
    price: 4.99,
    image: creamDarkSpot,
    description: "Krem për korrigjimin e njollave të errëta dhe ndriçimin e lëkurës",
    ingredients: ["Bar Pezmi", "Kamomil", "Dyll i Bletës"]
  },
  {
    id: 7,
    name: "Krem për hemorroide të jashtme",
    category: "Kremrat",
    price: 4.99,
    image: creamExternalHemorroide,
    description: "Krem për lehtësimin e hemorroideve të jashtme",
    ingredients: ["Kamomil", "Kalandula", "Dyll i Bletës"]
  },
  {
    id: 8,
    name: "Krem për duar",
    category: "Kremrat",
    price: 4.99,
    image: creamHand,
    description: "Krem hidratues për duar të thata",
    ingredients: ["Arome Dredhze", "Glicerin", "Teqpolimer Velvet"]
  },
  {
    id: 9,
    name: "Krem për hemorroide të brendshme",
    category: "Kremrat",
    price: 4.99,
    image: creamInternalHemorroide,
    description: "Krem për lehtësimin e hemorroideve të brendshme",
    ingredients: ["Kantarion", "Bar Pezmi", "Kamomil"]
  },
  {
    id: 10,
    name: "Krem Kantarion",
    category: "Kremrat",
    price: 7.99,
    image: creamWort,
    description: "Krem për hidratimin dhe lagështimin e lëkurës",
    ingredients: ["Cera Alba", "Vaj Kantarion", "Vaj Kokosi"]
  },
  {
    id: 11,
    name: "Vaj Kamomili për buzë",
    category: "Vajrat",
    price: 7.99,
    image: vajChamomileLips,
    description: "Balsam qetësues për buzë të thata",
    ingredients: ["Vaj Kamomili", "Vaj Argan", "Vaj Bademi"]
  },
  {
    id: 12,
    name: "Vaj kundër plakjes",
    category: "Vajrat",
    price: 7.99,
    image: vajImmortelle,
    description: "Vaj fytyre kundër plakjes dhe rigjenerimit të lëkurës",
    ingredients: ["Vaj Akja", "Vaj Argani", "Vaj Kungulli"]
  },
  {
    id: 13,
    name: "Vaj Karafili",
    category: "Vajrat",
    price: 4.99,
    image: vajKarafili,
    description: "Ushqen lëkurën, lufton aknet dhe likenin.",
    ingredients: ["Lule Karafili", "Vaj Ulliri"]
  },
  {
    id: 14,
    name: "Vaj Kumaku",
    category: "Vajrat",
    price: 4.99,
    image: vajKumakut,
    description: "Krem ushqyes për duar të thata",
    ingredients: ["Lule Kumaku", "Vaj Ulliri"]
  },
  {
    id: 15,
    name: "Vaj Nenexhiku",
    category: "Vajrat",
    price: 4.99,
    image: vajNenexhiku,
    description: "Ndalon rënien e flokëve, forcon rrënjët.",
    ingredients: ["Lule Nenexhiku", "Vaj Ulliri"]
  },
  {
    id: 16,
    name: "Vaj Sherebele",
    category: "Vajrat",
    price: 4.99,
    image: vajSherebeles,
    description: "Stimulon rritjen, parandalon rrudhat dhe zbokthin.",
    ingredients: ["Lule Sherebele", "Vaj Ulliri"]
  },
  {
    id: 18,
    name: "Vaj Eukalipti",
    category: "Vajrat",
    price: 4.99,
    image: vajEukalipti,
    description: "Mbron kundër infeksioneve dhe irritimeve.",
    ingredients: ["Gjethe Eukalipti", "Vaj Ulliri"]
  },
  {
    id: 19,
    name: "Sprej kundër rënies së flokëve",
    category: "Sprej",
    price: 7.99,
    image: sprayHairLoss,
    description: "Spray për parandalimin e rënies së flokëve dhe rritjen e tyre",
    ingredients: ["Hither", "Lule Sherebele", "Podiqja e Egër"]
  },
  {
    id: 20,
    name: "Sprej kundër rënies së flokëve për meshkuj",
    category: "Sprej",
    price: 7.99,
    image: sprayHairLossMen,
    description: "Sprej për parandalimin e rënies së flokëve dhe rritjen e tyre për meshkuj",
    ingredients: ["Hither", "Lule Sherebele", "Podiqja e Egër"]
  },
  {
    id: 21,
    name: "Sprej për kujdes intim",
    category: "Sprej",
    price: 4.99,
    image: sprayLotion,
    description: "Sprej losion hidratues për lëkurë të thatë",
    ingredients: ["Acid Salicilik", "Alantoin", "D-Pantenol"]
  },
  {
    id: 22,
    name: "Sprej për dhimbjet e muskujve dhe kyçeve",
    category: "Sprej",
    price: 4.99,
    image: sprayMuscles,
    description: "Sprej për relaksimin e muskujve dhe lehtësimin e dhimbjeve",
    ingredients: ["Lule Karafili", "Xhenxhefil", "Lule Mente"]
  },
  {
    id: 23,
    name: "Sprej për nxirje nga dielli",
    category: "Sprej",
    price: 7.99,
    image: spraySunTan,
    description: "Sprej për nxirje pa diell dhe hidratim të lëkurës",
    ingredients: ["Vaj Karrote", "Vaj Arre", "Vaj Argani"]
  },
  {
    id: 24,
    name: "Sprej për shëndetin e venave",
    category: "Sprej",
    price: 4.99,
    image: sprayVeno,
    description: "Sprej për shëndetin e venave dhe përmirësimin e qarkullimit",
    ingredients: ["Gështenjë e Egër", "Gjethe Eukaliptus", "Kalandula"]
  },
  {
    id: 25,
    name: "Vaj Kamomili", 
    category: "Vajrat",
    price: 7.99,
    image: sprayWort,
    description: "Sprej vaji për hidratimin dhe lagështimin e lëkurës",
    ingredients: ["Lule Kamomili", "Vaj Ulliri"]
  },
  {
    id: 26,
    name: "Tinktura e Eukaliptit",
    category: "Tinkturat",
    price: 4.99,
    image: tinktureEukalipti,
    description: "Tinkture natyrale për shëndetin e rrugëve të frymëmarrjes",
    ingredients: ["Gjethe Eukalipti", "Alkool Medicinal"] 
  },
  {
    id: 27,
    name: "Tinktura e Hithrës",
    category: "Tinkturat",
    price: 4.99,
    image: tinktureHithres,
    description: "Kundër rënies së flokëve dhe puçrrave.",
    ingredients: ["Gjethe Hithre", "Alkool Medicinal"]
  },
  {
    id: 28,
    name: "Tinktura e Karafilit",
    category: "Tinkturat",
    price: 4.99,
    image: tinktureKarafil,
    description: "Ushqen lëkurën, lufton aknet dhe likenin.",
    ingredients: ["Lule Karafili", "Alkool Medicinal"]
  },
  {
    id: 29,
    name: "Tinktura e Kumakut",
    category: "Tinkturat",
    price: 4.99,
    image: tinktureKumakut,
    description: "Tinkture për shëndetin e lëkurës",
    ingredients: ["Lule Kumaku", "Alkool Medicinal"]
  },
  {
    id: 30,
    name: "Tinktura e Nenexhikut",
    category: "Tinkturat",
    price: 4.99,
    image: tinktureNenexhiku,
    description: "Freskon, pastron dhe qetëson lëkurën.",
    ingredients: ["Lule Nenexhiku", "Alkool Medicinal"]
  },
  {
    id: 31,
    name: "Tinktura e Sherebelës",
    category: "Tinkturat",
    price: 4.99,
    image: tinktureSherebeles,
    description: "Pastron lëkurën, parandalon puçrrat dhe skuqjet.",
    ingredients: ["Lule Sherebele", "Alkool Medicinal"]
  },
];


export const categories = [
  { id: 'all', name: 'Të gjitha' },
  { id: 'Kremrat', name: 'Kremrat' },
  { id: 'Vajrat', name: 'Vajrat' },
  { id: 'Sprej', name: 'Sprej' },
  { id: 'Tinkturat', name: 'Tinkturat' },
];

export const sortOptions = [
  { value: 'default', label: 'Renditja' },
  { value: 'price-low', label: 'Çmimi: Ulët-Lartë' },
  { value: 'price-high', label: 'Çmimi: Lartë-Ulët' },
];