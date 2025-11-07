
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';

import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesHubPage from './pages/ServicesHubPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ServiceAreaHubPage from './pages/ServiceAreaHubPage';
import ServiceAreaPage from './pages/ServiceAreaPage';
import LocalAttractionsHubPage from './pages/LocalAttractionsHubPage';
import LocalAttractionPage from './pages/LocalAttractionPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import DisclaimerPage from './pages/DisclaimerPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <HelmetProvider>
      <HashRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesHubPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/service-areas" element={<ServiceAreaHubPage />} />
            <Route path="/service-areas/:slug" element={<ServiceAreaPage />} />
            <Route path="/local-attractions" element={<LocalAttractionsHubPage />} />
            <Route path="/local-attractions/:slug" element={<LocalAttractionPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
        <Toaster position="bottom-right" />
      </HashRouter>
    </HelmetProvider>
  );
}

export default App;
