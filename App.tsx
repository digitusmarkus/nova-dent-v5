import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={currentPath} onNavigate={(path) => navigate(path)} />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onNavigate={(path) => navigate(path)} />} />
          <Route path="/o-nama" element={<About />} />
          <Route path="/usluge" element={<Services />} />
          <Route path="/kontakt" element={<Contact />} />
          {/* Catch-all route to redirect to home if a path doesn't match */}
          <Route path="*" element={<Home onNavigate={(path) => navigate(path)} />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;