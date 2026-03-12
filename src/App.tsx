import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CleaningHome from './pages/cleaning/CleaningHome';
import FurnitureHome from './pages/furniture/FurnitureHome';
import CleanHomePage from './pages/clean/CleanHomePage';
import FloatingWhatsApp from './components/shared/FloatingWhatsApp';

function AppContent() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/clean" replace />} />
        <Route path="/clean" element={<CleanHomePage />} />
        <Route path="/about" element={<CleanHomePage />} />
        <Route path="/services" element={<CleanHomePage />} />
        <Route path="/contact" element={<CleanHomePage />} />
        <Route path="/cleanz" element={<CleaningHome />} />
        <Route path="/furnitures" element={<FurnitureHome />} />
        <Route path="*" element={<Navigate to="/clean" replace />} />
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
          <Route path="*" element={<AppContent />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

