
import React from 'react';
import { useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import SchemaInjector from '../components/SchemaInjector';
import PageLoader from '../components/PageLoader';
import MarkdownRenderer from '../components/MarkdownRenderer';
import Breadcrumbs from '../components/Breadcrumbs';
import { useGeminiContent } from '../hooks/useGeminiContent';
import { BUSINESS_INFO, SERVICE_AREAS } from '../constants';
import NotFoundPage from './NotFoundPage';

const ServiceAreaPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = SERVICE_AREAS.find(a => a.slug === slug);

  if (!area) {
    return <NotFoundPage />;
  }
  
  const prompt = `Generate unique and comprehensive SEO-optimized content for a service area page targeting "${area.city}, ${area.state}" for the porta potty rental company ${BUSINESS_INFO.name}.
  
  Use markdown format. The content must be unique to ${area.city} and not a generic copy.
  
  Please include the following sections:
  1.  **H1: Porta Potty Rental ${area.city}, ${area.state}**
  2.  **Introduction**: A warm welcome to ${area.city} residents and businesses, establishing ${BUSINESS_INFO.name} as the go-to provider in the area.
  3.  **H2: Your Local Portable Toilet Provider in ${area.city}**: Discuss the reliability and speed of service specifically for ${area.city}.
  4.  **H2: Complete Porta Potty Services in ${area.city}**: List the main services offered (e.g., standard, deluxe, ADA, trailers) and how they benefit clients in ${area.city}.
  5.  **Why Choose Us in ${area.city}?**: Highlight reasons specific to ${area.city} customers (e.g., "We understand the needs of events at [Local Park/Venue]" or "Fast delivery to construction sites across [County/Area]").
  6.  **About ${area.city}**: Write a unique paragraph about ${area.city}, mentioning specific neighborhoods, landmarks, or well-known ZIP codes to demonstrate local knowledge.
  7.  **"Different Types of Porta Potties Available in ${area.city}, ${area.state}"**: Briefly describe the main types available for rent.
  8.  **FAQs for ${area.city}**: Create 4-5 voice-search optimized questions and answers specific to renting porta potties in ${area.city}. Format them as:
      - **Question:** Do you deliver porta potties to all parts of ${area.city}?
      - **Answer:** Yes, we provide fast delivery...
      - **Question:** What are the regulations for placing a porta potty in ${area.city}?
      - **Answer:** While regulations can vary...
  
  Cross-link to other service area pages by listing 3-4 nearby cities we also serve.
  `;
  
  const { content, isLoading } = useGeminiContent(prompt, [area.slug]);

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${BUSINESS_INFO.name} - ${area.city}`,
    "image": `${BUSINESS_INFO.baseUrl}/logo.png`,
    "url": `${BUSINESS_INFO.baseUrl}/#/service-areas/${area.slug}`,
    "telephone": BUSINESS_INFO.phone,
    "priceRange": "$$",
    "address": BUSINESS_INFO.address, // Main business address
    "areaServed": {
      "@type": "City",
      "name": `${area.city}, ${area.state}`
    },
    "description": `Your top choice for porta potty and portable toilet rentals in ${area.city}, ${area.state}. Fast, reliable, and clean service.`
  };
  
  const faqContent = content.split(`**FAQs for ${area.city}**`)[1] || '';
  const faqItems = faqContent.split('**Question:**').slice(1).map(item => {
    const parts = item.split('**Answer:**');
    return {
      question: parts[0]?.trim(),
      answer: parts[1]?.trim()
    };
  });
  
  const faqSchema = {
     "@context": "https://schema.org",
     "@type": "FAQPage",
     "mainEntity": faqItems.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
        }
     }))
  };

  return (
    <>
      <Seo
        title={`Porta Potty Rental ${area.city}, ${area.state}`}
        description={`Need porta potty rentals in ${area.city}, ${area.state}? ${BUSINESS_INFO.name} offers fast, affordable service for construction sites and events.`}
        canonicalUrl={`service-areas/${area.slug}`}
      >
        <SchemaInjector schema={citySchema} />
        {faqItems.length > 0 && <SchemaInjector schema={faqSchema} />}
      </Seo>
      <Breadcrumbs crumbs={[{ name: 'Service Areas', path: '/service-areas' }, { name: area.city, path: `/service-areas/${area.slug}` }]} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {isLoading ? (
          <PageLoader />
        ) : (
          <div className="max-w-4xl mx-auto">
            <MarkdownRenderer content={content} />
          </div>
        )}
      </div>
    </>
  );
};

export default ServiceAreaPage;
