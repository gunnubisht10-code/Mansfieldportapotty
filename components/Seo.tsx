
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BUSINESS_INFO } from '../constants';

interface SeoProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  imageUrl?: string;
  children?: React.ReactNode;
}

const Seo: React.FC<SeoProps> = ({ title, description, canonicalUrl, imageUrl, children }) => {
  const siteTitle = `${title} | ${BUSINESS_INFO.name}`;
  const effectiveUrl = `${BUSINESS_INFO.baseUrl}${canonicalUrl ? `/${canonicalUrl}` : ''}`;
  const effectiveImageUrl = imageUrl || `${BUSINESS_INFO.baseUrl}/og-image.jpg`; // A default OG image is recommended

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={effectiveUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={effectiveUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={effectiveImageUrl} />
      <meta property="og:site_name" content={BUSINESS_INFO.name} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={effectiveUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={effectiveImageUrl} />

      {/* Render additional head elements like JSON-LD schemas */}
      {children}
    </Helmet>
  );
};

export default Seo;
