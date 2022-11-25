import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home';
import NotFound from './pages/404';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App
