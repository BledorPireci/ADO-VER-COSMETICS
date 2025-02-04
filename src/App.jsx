import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import SocialGallery from "./components/SocialGallery/SocialGallery";
import PopularCategories from "./components/PopularCategories/PopularCategories";
import BestSeller from "./components/BestSellers/BestSeller";
import Products from "./components/Products/Products";
import About from "./components/About/About";
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection/>
            <PopularCategories/>
            <BestSeller/>
            <SocialGallery/>
          </>
        } />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
  )
}
export default App