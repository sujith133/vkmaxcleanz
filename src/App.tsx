import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CleaningHome from './pages/cleaning/CleaningHome';
import ServicesPage from './pages/cleaning/ServicesPage';
import AboutPage from './pages/cleaning/AboutPage';
import ContactPage from './pages/cleaning/ContactPage';
import FurnitureHome from './pages/furniture/FurnitureHome';
import CleanHomePage from './pages/clean/CleanHomePage';
import FloatingWhatsApp from './components/shared/FloatingWhatsApp';
import ManPowerHome from './pages/man power/ManPowerHome';

function AppContent() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleManpowerClick = () => {
      navigate('/manpower');
    };

    // Inject Desktop Button
    const navbarRight = document.querySelector('.navbar-right');
    const existingDesktopBtn = document.getElementById('manpower-nav-btn');

    if (navbarRight && !existingDesktopBtn) {
      const btn = document.createElement('button');
      btn.id = 'manpower-nav-btn';
      btn.className = 'brand-cta-btn green';
      btn.innerText = 'Manpower';
      btn.onclick = handleManpowerClick;

      const hamburger = document.querySelector('.hamburger');
      if (hamburger) {
        navbarRight.insertBefore(btn, hamburger);
      } else {
        navbarRight.appendChild(btn);
      }
    }

    // Inject Mobile Button
    const mobileMenu = document.querySelector('.mobile-menu');
    const existingMobileBtn = document.getElementById('manpower-mobile-btn');

    if (mobileMenu && !existingMobileBtn) {
      const btn = document.createElement('button');
      btn.id = 'manpower-mobile-btn';
      btn.className = 'brand-cta-btn green mobile-cta';
      btn.innerText = 'Manpower';
      btn.onclick = () => {
        const hamburger = document.querySelector('.hamburger') as HTMLElement;
        if (hamburger && mobileMenu.classList.contains('open')) {
          hamburger.click(); // Close menu
        }
        handleManpowerClick();
      };
      mobileMenu.appendChild(btn);
    }

    return () => {
      existingDesktopBtn?.remove();
      existingMobileBtn?.remove();
    };
  }, [navigate]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/cleanz" replace />} />
        <Route path="/cleanz" element={<CleaningHome />} />
        <Route path="/cleanz/services" element={<ServicesPage />} />
        <Route path="/cleanz/about" element={<AboutPage />} />
        <Route path="/cleanz/contact" element={<ContactPage />} />
        <Route path="/furnitures" element={<FurnitureHome />} />
        <Route path="/manpower" element={<ManPowerHome />} />
        <Route path="*" element={<Navigate to="/cleanz" replace />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/clean" element={<CleanHomePage />} />
          <Route path="*" element={<AppContent />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

