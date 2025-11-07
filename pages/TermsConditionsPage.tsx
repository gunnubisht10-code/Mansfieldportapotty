
import React from 'react';
import Seo from '../components/Seo';
import PageLoader from '../components/PageLoader';
import MarkdownRenderer from '../components/MarkdownRenderer';
import Breadcrumbs from '../components/Breadcrumbs';
import { useGeminiContent } from '../hooks/useGeminiContent';
import { BUSINESS_INFO } from '../constants';

const TermsConditionsPage: React.FC = () => {
  const prompt = `Generate a standard Terms and Conditions document for a website.
  The company is "${BUSINESS_INFO.name}".
  The website is "${BUSINESS_INFO.domain}".
  The website provides information about porta potty rental services.
  The document should cover use of the website, intellectual property, limitations of liability, and governing law (Texas, USA).
  Use markdown format with clear headings.
  `;

  const { content, isLoading } = useGeminiContent(prompt, []);

  return (
    <>
      <Seo
        title="Terms and Conditions"
        description={`Terms and Conditions for the use of the ${BUSINESS_INFO.domain} website.`}
        canonicalUrl="terms-and-conditions"
      />
      <Breadcrumbs crumbs={[{ name: 'Terms & Conditions', path: '/terms-and-conditions' }]} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
          <h1 className="text-3xl font-bold font-heading mb-6">Terms and Conditions</h1>
          {isLoading ? <PageLoader /> : <MarkdownRenderer content={content} />}
        </div>
      </div>
    </>
  );
};

export default TermsConditionsPage;
