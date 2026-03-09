import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CleaningHome from './pages/cleaning/CleaningHome';
import ServicesPage from './pages/cleaning/ServicesPage';
import AboutPage from './pages/cleaning/AboutPage';
import ContactPage from './pages/cleaning/ContactPage';
import FurnitureHome from './pages/furniture/FurnitureHome';
import FurnitureAboutPage from './pages/furniture/FurnitureAboutPage';
import FurnitureContactPage from './pages/furniture/FurnitureContactPage';
import FurnitureProductsPage from './pages/furniture/FurnitureProductsPage';
import CleanHomePage from './pages/clean/CleanHomePage';
import FloatingWhatsApp from './components/shared/FloatingWhatsApp';
import ManPowerHome from './pages/man power/ManPowerHome';
import ManpowerServicesPage from './pages/man power/ManpowerServicesPage';
import ManpowerAboutPage from './pages/man power/ManpowerAboutPage';
import ManpowerContactPage from './pages/man power/ManpowerContactPage';

function AppContent() {
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
        <Route path="/furnitures/about" element={<FurnitureAboutPage />} />
        <Route path="/furnitures/contact" element={<FurnitureContactPage />} />
        <Route path="/furnitures/products" element={<FurnitureProductsPage />} />
        <Route path="/manpower" element={<ManPowerHome />} />
        <Route path="/manpower/services" element={<ManpowerServicesPage />} />
        <Route path="/manpower/about" element={<ManpowerAboutPage />} />
        <Route path="/manpower/contact" element={<ManpowerContactPage />} />
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
