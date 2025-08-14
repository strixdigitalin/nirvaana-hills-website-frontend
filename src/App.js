import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <>
    <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
