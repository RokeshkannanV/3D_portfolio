import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { MyContextProvider } from './context/MyContext'; // Adjust as needed

const FooterWrapper = () => {
  const location = useLocation();
  // Only render Footer if not on the Home page
  return location.pathname !== '/' ? <Footer /> : null;
};

const App = () => {
  return (
    <MyContextProvider>
      <BrowserRouter basename="/3DPortfolio">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <FooterWrapper />  {/* Render the FooterWrapper here */}
      </BrowserRouter>
    </MyContextProvider>
  );
};

export default App;
