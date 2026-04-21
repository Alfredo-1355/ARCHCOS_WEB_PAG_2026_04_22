/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import SplashScreen from './components/SplashScreen';

const Home = lazy(() => import('./pages/Home'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Inquiry = lazy(() => import('./pages/Inquiry'));
const ServicePage = lazy(() => import('./pages/ServicePage'));

// A lighter, minimalist loader for route transitions
const PageLoader = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden"
  >
    <motion.div 
      initial={{ width: 0 }}
      animate={{ width: 40 }}
      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      className="h-px bg-[#1a1a1a]"
    />
    <motion.span 
      animate={{ opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="text-[8px] tracking-[0.5em] font-bold text-[#1a1a1a] uppercase mt-4 ml-[0.5em]"
    >
      Loading
    </motion.span>
  </motion.div>
);

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname as string}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/services/:serviceId" element={<ServicePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inquiry" element={<Inquiry />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Check if splash has already been shown in this session
    const splashShown = sessionStorage.getItem('archcos-splash-shown');
    if (splashShown) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    sessionStorage.setItem('archcos-splash-shown', 'true');
    setShowSplash(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>
      
      {!showSplash && (
        <Router>
          <Suspense fallback={<PageLoader />}>
            <AnimatedRoutes />
          </Suspense>
        </Router>
      )}
    </>
  );
}
