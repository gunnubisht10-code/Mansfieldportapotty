
import React from 'react';
import Seo from '../components/Seo';
import SchemaInjector from '../components/SchemaInjector';
import PageLoader from '../components/PageLoader';
import MarkdownRenderer from '../components/MarkdownRenderer';
import Breadcrumbs from '../components/Breadcrumbs';
import { useGeminiContent } from '../hooks/useGeminiContent';
import { BUSINESS_INFO } from '../constants';

const AboutPage: React.FC = () => {
  const prompt = `Generate compelling 'About Us' content for ${BUSINESS_INFO.name}, a porta potty rental company in Mansfield, TX. 
  
  Use markdown format. The tone should be professional, trustworthy, and community-focused. 
  
  Include these sections:
  1.  **H1: About ${BUSINESS_INFO.name}: Mansfield's Trusted Portable Sanitation Partner**
  2.  **Our Story**: Create a brief, relatable history of the company. Emphasize its local roots in the Mansfield area.
  3.  **Our Mission**: Define a clear mission statement focused on providing clean, reliable, and affordable sanitation solutions.
  4.  **Our Values**: List and explain 3-4 core values, such as 'Commitment to Cleanliness', 'Customer-First Service', 'Reliability and Punctuality', and 'Community Focus'.
  5.  **Meet the Team (Optional, can be generic)**: A short paragraph about the experienced and friendly team dedicated to customer satisfaction.
  6.  **Why We're Different**: Summarize the key benefits of choosing your company.
  `;

  const { content, isLoading } = useGeminiContent(prompt, []);

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "url": `${BUSINESS_INFO.baseUrl}/#/about`,
    "name": `About ${BUSINESS_INFO.name}`,
    "description": `Learn about ${BUSINESS_INFO.name}, our mission, values, and our commitment to providing the best porta potty rental services in Mansfield, TX.`,
    "mainEntity": {
      "@type": "Organization",
      "name": BUSINESS_INFO.name,
      "@id": BUSINESS_INFO.baseUrl
    }
  };

  return (
    <>
      <Seo
        title="About Us"
        description={`Learn about ${BUSINESS_INFO.name}, our mission, values, and our commitment to providing the best porta potty rental services in Mansfield, TX.`}
        canonicalUrl="about"
      >
        <SchemaInjector schema={aboutPageSchema} />
      </Seo>
      <Breadcrumbs crumbs={[{ name: 'About Us', path: '/about' }]} />
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {isLoading ? (
            <PageLoader />
          ) : (
             <div className="max-w-4xl mx-auto">
                <MarkdownRenderer content={content} />
             </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
