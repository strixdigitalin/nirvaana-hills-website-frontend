import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import ScrollToTop from './Components/ScrollToTop';
import TheProject from './Pages/TheProject';
import Features from './Pages/Features';
import ContactUs from './Pages/ContactUs';
import Gallery from './Pages/Gallery';
import LifeAtNirvaana from './Pages/LifeAtNirvaana';

function App() {
  return (
    <>
    <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theproject" element={<TheProject />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/LifeAtNirvaana" element={<LifeAtNirvaana />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
