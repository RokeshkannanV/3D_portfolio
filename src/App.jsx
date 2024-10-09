import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { MyContextProvider } from './context/MyContext';

// Lazy load the page components
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Project = React.lazy(() => import('./pages/Project'));

// Footer Wrapper to conditionally render the footer (not on the Home page)
const FooterWrapper = () => {
  const location = useLocation();
  return location.pathname !== '/' ? <Footer /> : null;
};

const App = () => {
  return (
    <MyContextProvider>
      <BrowserRouter basename="/3DPortfolio">
        <Navbar />
        {/* Suspense fallback to display while lazy-loaded components are loading */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <FooterWrapper />  {/* Render the FooterWrapper here */}
      </BrowserRouter>
    </MyContextProvider>
  );
};

export default App;
