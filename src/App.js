import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion'; // Import AnimatePresence dan motion
import Header from './components/Header';
import Footer from './components/Footer';
import Swap from './pages/Swap';
import Twap from './pages/Twap';
import Limit from './pages/Limit';
import Bridge from './pages/Bridge';
import Stake from './pages/Stake';

// Komponen buat handle animasi transisi
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  const location = useLocation(); // Dapetin lokasi saat ini

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Konten utama (flex-grow biar nge-isi sisa space) */}
      <main className="flex-grow">
        {/* Gunakan AnimatePresence buat handle animasi transisi */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Swap />
                </PageTransition>
              }
            />
            <Route
              path="/swap"
              element={
                <PageTransition>
                  <Swap />
                </PageTransition>
              }
            />
            <Route
              path="/twap"
              element={
                <PageTransition>
                  <Twap />
                </PageTransition>
              }
            />
            <Route
              path="/limit"
              element={
                <PageTransition>
                  <Limit />
                </PageTransition>
              }
            />
            <Route
              path="/bridge"
              element={
                <PageTransition>
                  <Bridge />
                </PageTransition>
              }
            />
            <Route
              path="/stake"
              element={
                <PageTransition>
                  <Stake />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      {/* Footer (flex-shrink-0 biar ga nyusut) */}
      <Footer />
    </div>
  );
};

// Wrap App dengan Router
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;