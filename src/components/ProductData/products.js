import product1 from '../../assets/images/Products/123.jpg';
import product2 from '../../assets/images/Products/1234.jpg';
import product3 from '../../assets/images/Products/product-1.jpg';
import product4 from '../../assets/images/Products/product-2.jpg';
import product5 from '../../assets/images/Products/product-3.jpg';
import product6 from '../../assets/images/Products/product-4.jpg';
import product7 from '../../assets/images/Products/product-5.jpg';
import product8 from '../../assets/images/Products/product-6.jpg';


export const products = [
  {
    id: 1,
    name: "Moisturizing Cream",
    category: "face-cream",
    price: 29.99,
    image: product1,
    description: "Luxurious face cream for deep hydration",
    ingredients: ["Water", "Glycerin", "Shea Butter", "Vitamin E"] // Add ingredients here
  },
  {
    id: 2,
    name: "Anti-Aging Cream",
    category: "face-cream",
    price: 19.99,
    image: product2,
    description: "Rich hand moisturizer",
    ingredients: ["Retinol", "Vitamin C", "Hyaluronic Acid", "Jojoba Oil"]
  },
  {
    id: 3,
    name: "Nourishing Cream",
    category: "face-cream",
    price: 29.99,
    image: product3,
    description: "Luxurious face cream for deep hydration",
    ingredients: ["Coconut Oil", "Almond Oil", "Vitamin E", "Honey"]
  },
  {
    id: 4,
    name: "Hydrating Face Cream",
    category: "face-cream",
    price: 29.99,
    image: product4,
    description: "Luxurious face cream for deep hydration",
    ingredients: ["Aloe Vera", "Hyaluronic Acid", "Rose Water", "Green Tea"]
  },
  {
    id: 5,
    name: "Moisturizing Hand Cream",
    category: "hand-cream",
    price: 29.99,
    image: product5,
    description: "Luxurious hand cream for soft hands",
    ingredients: ["Shea Butter", "Vitamin E", "Almond Oil", "Cocoa Butter"]
  },
  {
    id: 6,
    name: "Repairing Hand Cream",
    category: "hand-cream",
    price: 29.99,
    image: product6,
    description: "Restores and repairs dry hands",
    ingredients: ["Olive Oil", "Glycerin", "Tea Tree Oil", "Aloe Vera"]
  },
  {
    id: 7,
    name: "Rosehip Oil",
    category: "face-oils",
    price: 29.99,
    image: product7,
    description: "Natural oil for glowing skin",
    ingredients: ["Rosehip Oil", "Vitamin C", "Omega-3 Fatty Acids", "Linoleic Acid"]
  },
  {
    id: 8,
    name: "Argan Oil",
    category: "face-oils",
    price: 29.99,
    image: product8,
    description: "Luxurious face oil for nourishment",
    ingredients: ["Argan Oil", "Vitamin E", "Linoleic Acid", "Oleic Acid"]
  },
];


export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'face-cream', name: 'Face Cream' },
  { id: 'hand-cream', name: 'Hand Cream' },
  { id: 'face-oils', name: 'Face Oils' },
];

export const sortOptions = [
  { value: 'default', label: 'Default sorting' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A to Z' },
  { value: 'name-desc', label: 'Name: Z to A' },
];