
import React from 'react';
import { useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import SchemaInjector from '../components/SchemaInjector';
import PageLoader from '../components/PageLoader';
import MarkdownRenderer from '../components/MarkdownRenderer';
import Breadcrumbs from '../components/Breadcrumbs';
import ContactForm from '../components/ContactForm';
import { useGeminiContent } from '../hooks/useGeminiContent';
import { BUSINESS_INFO, SERVICES } from '../constants';
import NotFoundPage from './NotFoundPage';

const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <NotFoundPage />;
  }
  
  const prompt = `Generate highly detailed and SEO-optimized content for a service page about "${service.name}" for the company ${BUSINESS_INFO.name} in Mansfield, TX.
  
  Use markdown format. The content should be comprehensive and authoritative.
  
  Please include the following sections:
  1.  **H1: ${service.name} in Mansfield, TX**
  2.  **Introduction**: A detailed introduction to this specific service, explaining what it is and its primary purpose.
  3.  **Key Features**: List and describe the key features of this service. For example, for 'Luxury Portable Restrooms', features might include flushing toilets, running water sinks, climate control, and interior lighting.
  4.  **Ideal Use Cases**: Describe in detail the best situations and events for this service (e.g., 'Construction Site Portable Toilets' for long-term building projects, 'Event Porta Potty Rental' for festivals and weddings).
  5.  **Benefits of Choosing This Service**: Explain why a customer would choose this specific service over others.
  6.  **Why Choose ${BUSINESS_INFO.name} for Your ${service.name}**: Reiterate company strengths like reliability, cleanliness, and excellent customer service.
  7.  **FAQs for ${service.name}**: Create 4-5 specific, voice-search optimized questions and answers related ONLY to this service. Format them as:
      - **Question:** How many units do I need for my event?
      - **Answer:** A general rule of thumb is...
      - **Question:** What is included in the rental price?
      - **Answer:** Our rental fee includes...
  
  Ensure the content is unique, valuable to the reader, and naturally incorporates keywords related to "${service.name}" and "Mansfield, TX".
  `;
  
  const { content, isLoading } = useGeminiContent(prompt, [service.slug]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.name,
    "provider": {
      "@type": "LocalBusiness",
      "name": BUSINESS_INFO.name,
      "@id": BUSINESS_INFO.baseUrl
    },
    "areaServed": {
      "@type": "City",
      "name": `Mansfield, ${BUSINESS_INFO.address.state}`
    },
    "name": `${service.name} in Mansfield, TX`,
    "description": `Learn more about our professional ${service.name} services in Mansfield, TX. We offer reliable, clean, and affordable solutions for your needs.`,
    "url": `${BUSINESS_INFO.baseUrl}/#/services/${service.slug}`
  };

  const faqContent = content.split(`**FAQs for ${service.name}**`)[1] || '';
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
        title={`${service.name} in Mansfield, TX`}
        description={`Professional ${service.name} by ${BUSINESS_INFO.name}. We provide top-quality, sanitized units for events and job sites in Mansfield, Texas. Get a free quote today!`}
        canonicalUrl={`services/${service.slug}`}
      >
        <SchemaInjector schema={serviceSchema} />
        {faqItems.length > 0 && <SchemaInjector schema={faqSchema} />}
      </Seo>
      <Breadcrumbs crumbs={[{ name: 'Services', path: '/services' }, { name: service.name, path: `/services/${service.slug}` }]} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {isLoading ? (
          <PageLoader />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
               <MarkdownRenderer content={content} />
            </div>
            <aside className="lg:col-span-1">
                <div className="sticky top-28 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                    <h3 className="text-2xl font-bold text-dark font-heading mb-6">Get a Quote for {service.name}</h3>
                    <ContactForm />
                </div>
            </aside>
          </div>
        )}
      </div>
    </>
  );
};

export default ServiceDetailPage;
