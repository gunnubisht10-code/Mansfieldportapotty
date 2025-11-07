
import React from 'react';
import Seo from '../components/Seo';
import PageLoader from '../components/PageLoader';
import MarkdownRenderer from '../components/MarkdownRenderer';
import Breadcrumbs from '../components/Breadcrumbs';
import { useGeminiContent } from '../hooks/useGeminiContent';
import { BUSINESS_INFO } from '../constants';

const PrivacyPolicyPage: React.FC = () => {
  const prompt = `Generate a standard Privacy Policy for a website.
  The company is "${BUSINESS_INFO.name}".
  The website is "${BUSINESS_INFO.domain}".
  The company is located in the USA.
  The policy should cover data collection (e.g., from contact forms), use of data, data sharing, cookies, and user rights.
  Use markdown format with clear headings.
  This is for a small local service business, so the policy should be comprehensive but not overly complex.
  `;

  const { content, isLoading } = useGeminiContent(prompt, []);

  return (
    <>
      <Seo
        title="Privacy Policy"
        description={`Privacy Policy for ${BUSINESS_INFO.name}. Learn how we collect, use, and protect your data.`}
        canonicalUrl="privacy-policy"
      />
      <Breadcrumbs crumbs={[{ name: 'Privacy Policy', path: '/privacy-policy' }]} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
          <h1 className="text-3xl font-bold font-heading mb-6">Privacy Policy</h1>
          {isLoading ? <PageLoader /> : <MarkdownRenderer content={content} />}
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
