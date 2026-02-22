import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageTransition from './components/PageTransition/PageTransition';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import FloatingElements from './components/FloatingElements/FloatingElements';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import './App.css';

const Home = lazy(() => import('./pages/Home/Home'));
const Solutions = lazy(() => import('./pages/Solutions/Solutions'));
const Hardware = lazy(() => import('./pages/Hardware/Hardware'));
const Products = lazy(() => import('./pages/Products/Products'));
const Pricing = lazy(() => import('./pages/Pricing/Pricing'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const HelpCenter = lazy(() => import('./pages/HelpCenter/HelpCenter'));
const Documentation = lazy(() => import('./pages/Documentation/Documentation'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService/TermsOfService'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <div className="App min-h-screen flex flex-col relative bg-black">
        <ParticleBackground />
        <FloatingElements />
        <Header />
        <main className="flex-grow relative z-10">
          <Suspense fallback={<LoadingSpinner />}>
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/products" element={<Products />} />
                <Route path="/hardware" element={<Hardware />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/help-center" element={<HelpCenter />} />
                <Route path="/documentation" element={<Documentation />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
              </Routes>
            </PageTransition>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
