import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <main>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Project/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  )
}

export default App
