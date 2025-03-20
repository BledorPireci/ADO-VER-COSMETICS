import tinktureEukalipti from '../../assets/images/Products/tinkturat/tinkture-eukalipti.jpg';
import tinktureHithres from '../../assets/images/Products/tinkturat/tinkture-hithres.jpg';
import tinktureKarafil from '../../assets/images/Products/tinkturat/tinkture-karafil.jpg';
import tinktureKumakut from '../../assets/images/Products/tinkturat/tinkture-kumakut.jpg';
import tinktureNenexhiku from '../../assets/images/Products/tinkturat/tinkture-nenexhiku.jpg';
import tinktureSherebeles from '../../assets/images/Products/tinkturat/tinkture-sherebeles.jpg';

import vajChamomileLips from '../../assets/images/Products/vajrat/vaj-chamomileLips.jpg';
import vajEukalipti from '../../assets/images/Products/vajrat/vaj-eukaliptus.png';
import vajImmortelle from '../../assets/images/Products/vajrat/vaj-immortelle.jpg';
import vajKarafili from '../../assets/images/Products/vajrat/vaj-karafili.jpg';
import vajKumakut from '../../assets/images/Products/vajrat/vaj-kumaku.png';
import vajNenexhiku from '../../assets/images/Products/vajrat/vaj-nenexhiku.png';
import vajSherebeles from '../../assets/images/Products/vajrat/vaj-sherebele.jpg';
import vajWort from '../../assets/images/Products/vajrat/vaj-wort.jpg';

import sprayHairLoss from '../../assets/images/Products/spray/spray-hairloss.jpg';
import sprayHairLossMen from '../../assets/images/Products/spray/spray-hairlossmen.jpg';
import sprayLotion from '../../assets/images/Products/spray/spray-lotion.jpg';
import sprayMuscles from '../../assets/images/Products/spray/spray-muscles.jpg';
import spraySunTan from '../../assets/images/Products/spray/spray-suntan.jpg';
import sprayVeno from '../../assets/images/Products/spray/spray-veno.jpg';
import sprayWort from '../../assets/images/Products/spray/spray-wort.jpg';

import creamAntiAcneP from '../../assets/images/Products/cream/cream-antiacne-p.jpg';
import creamAntiAcne from '../../assets/images/Products/cream/cream-antiacne.jpg';
import creamAntiAgingP from '../../assets/images/Products/cream/cream-antiage-p.jpg';
import creamAntiAging from '../../assets/images/Products/cream/cream-antiage.jpg';
import creamBioColagen from '../../assets/images/Products/cream/cream-biocolagen.jpg';
import creamDarkSpot from '../../assets/images/Products/cream/cream-darkspot.jpg';
import creamExternalHemorroide from '../../assets/images/Products/cream/cream-externalH.jpg';
import creamHand from '../../assets/images/Products/cream/cream-hand.jpg';
import creamInternalHemorroide from '../../assets/images/Products/cream/cream-internalH.jpg';
import creamWort from '../../assets/images/Products/cream/cream-wort.jpg';


export const products = [
  {
    id: 1,
    name: "Cream Anti Acne ",
    category: "creams",
    price: 24.99,
    image: creamAntiAcneP,
    description: "Cream for acne prevention and skin clearing",
    ingredients: ["Salicylic Acid", "Tea Tree Oil", "Aloe Vera"]
  },
  {
    id: 2,
    name: "Cream Anti Acne",
    category: "creams",
    price: 19.99,
    image: creamAntiAcne,
    description: "Cream for acne treatment and skin soothing",
    ingredients: ["Benzoyl Peroxide", "Aloe Vera", "Vitamin E"]
  },
  {
    id: 3,
    name: "Cream Anti Aging ",
    category: "creams",
    price: 29.99,
    image: creamAntiAgingP,
    description: "Cream for anti-aging and skin rejuvenation",
    ingredients: ["Retinol", "Hyaluronic Acid", "Vitamin C"]
  },
  {
    id: 4,
    name: "Cream Anti Aging",
    category: "creams",
    price: 24.99,
    image: creamAntiAging,
    description: "Cream for anti-aging and skin firming",
    ingredients: ["Peptides", "Hyaluronic Acid", "Glycerin"]
  },
  {
    id: 5,
    name: "Cream Bio Colagen",
    category: "creams",
    price: 34.99,
    image: creamBioColagen,
    description: "Cream for collagen production and skin elasticity",
    ingredients: ["Collagen Peptides", "Hyaluronic Acid", "Vitamin E"]
  },
  {
    id: 6,
    name: "Cream Dark Spot",
    category: "creams",
    price: 29.99,
    image: creamDarkSpot,
    description: "Cream for dark spot correction and skin brightening",
    ingredients: ["Niacinamide", "Vitamin C", "Licorice Extract"]
  },
  {
    id: 7,
    name: "Cream External Hemorroide",
    category: "creams",
    price: 19.99,
    image: creamExternalHemorroide,
    description: "Cream for external hemorrhoid relief",
    ingredients: ["Witch Hazel", "Aloe Vera", "Tea Tree Oil"]
  },
  {
    id: 8,
    name: "Cream Hand",
    category: "creams",
    price: 14.99,
    image: creamHand,
    description: "Moisturizing cream for dry hands",
    ingredients: ["Shea Butter", "Coconut Oil", "Vitamin E"]
  },
  {
    id: 9,
    name: "Cream Internal Hemorroide",
    category: "creams",
    price: 24.99,
    image: creamInternalHemorroide,
    description: "Cream for internal hemorrhoid relief",
    ingredients: ["Witch Hazel", "Aloe Vera", "Horse Chestnut"]
  },
  {
    id: 10,
    name: "Cream Wort",
    category: "creams",
    price: 19.99,
    image: creamWort,
    description: "Cream for skin hydration and moisturizing",
    ingredients: ["Wort Oil", "Aloe Vera", "Glycerin"]
  },
  {
    id: 11,
    name: "Vaj Chamomile Lips",
    category: "oils",
    price: 14.99,
    image: vajChamomileLips,
    description: "Soothing lip balm for dry lips",
    ingredients: ["Chamomile Oil", "Beeswax", "Coconut Oil"]
  },
  {
    id: 12,
    name: "Vaj Immortelle",
    category: "oils",
    price: 39.99,
    image: vajImmortelle,
    description: "Face oil for anti-aging and skin rejuvenation",
    ingredients: ["Immortelle Oil", "Jojoba Oil", "Vitamin E"]
  },
  {
    id: 13,
    name: "Vaj Karafili",
    category: "oils",
    price: 24.99,
    image: vajKarafili,
    description: "Moisturizing face cream for all skin types",
    ingredients: ["Karafili Extract", "Shea Butter", "Glycerin"]
  },
  {
    id: 14,
    name: "Vaj Kumakut",
    category: "oils",
    price: 12.99,
    image: vajKumakut,
    description: "Nourishing hand cream for dry hands",
    ingredients: ["Kumakut Oil", "Coconut Oil", "Beeswax"]
  },
  {
    id: 15,
    name: "Vaj Nenexhiku",
    category: "oils",
    price: 34.99,
    image: vajNenexhiku,
    description: "Face oil for stress relief and relaxation",
    ingredients: ["Nenexhiku Oil", "Argan Oil", "Lavender Oil"]
  },
  {
    id: 16,
    name: "Vaj Sherebeles",
    category: "oils",
    price: 10.99,
    image: vajSherebeles,
    description: "Lip balm for chapped lips",
    ingredients: ["Sherebeles Oil", "Beeswax", "Vitamin E"]
  },
  {
    id: 17,
    name: "Vaj Wort",
    category: "oils",
    price: 14.99,
    image: vajWort,
    description: "Moisturizing hand cream for dry skin",
    ingredients: ["Wort Oil", "Shea Butter", "Glycerin"]
  },
  {
    id: 18,
    name: "Vaj Eukalipti",
    category: "oils",
    price: 39.99,
    image: vajEukalipti,
    description: "Face oil for anti-aging and skin rejuvenation",
    ingredients: ["Eukalipti Oil", "Jojoba Oil", "Vitamin E"]
  },
  {
    id: 19,
    name: "Spray Hair Loss",
    category: "spray",
    price: 29.99,
    image: sprayHairLoss,
    description: "Spray for hair loss prevention and growth",
    ingredients: ["Biotin", "Keratin", "Vitamin B"]
  },
  {
    id: 20,
    name: "Spray Hair Loss Men",
    category: "spray",
    price: 29.99,
    image: sprayHairLossMen,
    description: "Spray for hair loss prevention and growth for men",
    ingredients: ["Biotin", "Keratin", "Vitamin B"]
  },
  {
    id: 21,
    name: "Spray Lotion",
    category: "spray",
    price: 19.99,
    image: sprayLotion,
    description: "Moisturizing spray lotion for dry skin",
    ingredients: ["Aloe Vera", "Coconut Oil", "Glycerin"]
  },
  {
    id: 22,
    name: "Spray Muscles",
    category: "spray",
    price: 24.99,
    image: sprayMuscles,
    description: "Spray for muscle relaxation and pain relief",
    ingredients: ["Arnica Oil", "Peppermint Oil", "Eucalyptus Oil"]
  },
  {
    id: 23,
    name: "Spray Sun Tan",
    category: "spray",
    price: 14.99,
    image: spraySunTan,
    description: "Spray for sunless tanning and skin hydration",
    ingredients: ["DHA", "Aloe Vera", "Glycerin"]
  },
  {
    id: 24,
    name: "Spray Veno",
    category: "spray",
    price: 29.99,
    image: sprayVeno,
    description: "Spray for vein health and circulation improvement",
    ingredients: ["Horse Chestnut", "Ginkgo Biloba", "Vitamin C"]
  },
  {
    id: 25,
    name: "Spray Wort",
    category: "spray",
    price: 19.99,
    image: sprayWort,
    description: "Spray for skin hydration and moisturizing",
    ingredients: ["Wort Oil", "Aloe Vera", "Glycerin"]
  },
  {
    id: 26,
    name: "Tincture of Eucalyptus",
    category: "tinctures",
    price: 29.99,
    image: tinktureEukalipti,
    description: "Natural tincture for respiratory health",
    ingredients: ["Eucalyptus Leaves", "Alcohol", "Water"] 
  },
  {
    id: 27,
    name: "Tincture of Hithres",
    category: "tinctures",
    price: 19.99,
    image: tinktureHithres,
    description: "Tincture for digestive health",
    ingredients: ["Hithres Root", "Alcohol", "Water"]
  },
  {
    id: 28,
    name: "Tincture of Karafil",
    category: "tinctures",
    price: 29.99,
    image: tinktureKarafil,
    description: "Tincture for immune system support",
    ingredients: ["Karafil Fruit", "Alcohol", "Water"]
  },
  {
    id: 29,
    name: "Tincture of Kumakut",
    category: "tinctures",
    price: 29.99,
    image: tinktureKumakut,
    description: "Tincture for skin health",
    ingredients: ["Kumakut Leaves", "Alcohol", "Water"]
  },
  {
    id: 30,
    name: "Tincture of Nenexhiku",
    category: "tinctures",
    price: 29.99,
    image: tinktureNenexhiku,
    description: "Tincture for stress relief",
    ingredients: ["Nenexhiku Flowers", "Alcohol", "Water"]
  },
  {
    id: 31,
    name: "Tincture of Sherebeles",
    category: "tinctures",
    price: 29.99,
    image: tinktureSherebeles,
    description: "Tincture for cardiovascular health",
    ingredients: ["Sherebeles Berries", "Alcohol", "Water"]
  },
];


export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'creams', name: 'Creams' },
  { id: 'oils', name: 'Essential Oils' },
  { id: 'spray', name: 'Sprays' },
  { id: 'tinctures', name: 'Tinctures' },
];

export const sortOptions = [
  { value: 'default', label: 'Default sorting' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A to Z' },
  { value: 'name-desc', label: 'Name: Z to A' },
];