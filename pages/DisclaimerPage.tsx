
import React from 'react';
import Seo from '../components/Seo';
import PageLoader from '../components/PageLoader';
import MarkdownRenderer from '../components/MarkdownRenderer';
import Breadcrumbs from '../components/Breadcrumbs';
import { useGeminiContent } from '../hooks/useGeminiContent';
import { BUSINESS_INFO } from '../constants';

const DisclaimerPage: React.FC = () => {
  const prompt = `Generate a standard website disclaimer.
  The company is "${BUSINESS_INFO.name}".
  The website is "${BUSINESS_INFO.domain}".
  The disclaimer should cover accuracy of information, external links, and that the website content is for informational purposes only and does not constitute a contract.
  Use markdown format with clear headings.
  `;

  const { content, isLoading } = useGeminiContent(prompt, []);

  return (
    <>
      <Seo
        title="Disclaimer"
        description={`Disclaimer for the ${BUSINESS_INFO.domain} website.`}
        canonicalUrl="disclaimer"
      />
       <Breadcrumbs crumbs={[{ name: 'Disclaimer', path: '/disclaimer' }]} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
          <h1 className="text-3xl font-bold font-heading mb-6">Disclaimer</h1>
          {isLoading ? <PageLoader /> : <MarkdownRenderer content={content} />}
        </div>
      </div>
    </>
  );
};

export default DisclaimerPage;
