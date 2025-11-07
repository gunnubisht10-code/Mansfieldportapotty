
import React from 'react';
import { useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import SchemaInjector from '../components/SchemaInjector';
import PageLoader from '../components/PageLoader';
import MarkdownRenderer from '../components/MarkdownRenderer';
import Breadcrumbs from '../components/Breadcrumbs';
import { useGeminiContent } from '../hooks/useGeminiContent';
import { BUSINESS_INFO, LOCAL_ATTRACTIONS } from '../constants';
import NotFoundPage from './NotFoundPage';

const LocalAttractionPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const attraction = LOCAL_ATTRACTIONS.find(a => a.slug === slug);

  if (!attraction) {
    return <NotFoundPage />;
  }
  
  const prompt = `Generate an informational article about "${attraction.name}" in Mansfield, TX. 
  
  Use markdown format. This content is for a local business's blog to improve local SEO. 
  
  **IMPORTANT**: Do NOT include any sales content or mentions of "porta potty", "rental", or "${BUSINESS_INFO.name}". This should be purely informational.
  
  Please include the following sections:
  1.  **H1: Discovering ${attraction.name} in Mansfield, TX**
  2.  **Introduction**: A captivating introduction to the attraction.
  3.  **History**: A brief history of the attraction, if applicable.
  4.  **What to See and Do**: Describe the main highlights and activities available.
  5.  **Visitor Information**: Provide practical information like location, typical hours (if available publicly), and what to expect.
  6.  **Why It's a Local Favorite**: Explain why residents and visitors love this spot.
  
  The tone should be that of a friendly local guide. Interlink back to the main local attractions hub page.
  `;
  
  const { content, isLoading } = useGeminiContent(prompt, [attraction.slug]);

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": `${BUSINESS_INFO.baseUrl}/#/local-attractions/${attraction.slug}`,
    "name": `A Guide to ${attraction.name} in Mansfield, TX`,
    "description": `Discover the history, activities, and visitor information for ${attraction.name}, a popular local attraction in Mansfield, TX.`,
    "isPartOf": {
        "@type": "WebSite",
        "url": BUSINESS_INFO.baseUrl,
        "name": BUSINESS_INFO.name
    }
  };

  return (
    <>
      <Seo
        title={`A Guide to ${attraction.name}`}
        description={`Discover the history, activities, and visitor information for ${attraction.name}, a popular local attraction in Mansfield, TX.`}
        canonicalUrl={`local-attractions/${attraction.slug}`}
      >
        <SchemaInjector schema={webPageSchema} />
      </Seo>
      <Breadcrumbs crumbs={[{ name: 'Local Attractions', path: '/local-attractions' }, { name: attraction.name, path: `/local-attractions/${attraction.slug}` }]} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <img src={`https://picsum.photos/800/400?random=${attraction.slug}`} alt={attraction.name} className="w-full h-64 object-cover rounded-lg shadow-lg mb-8" loading="lazy"/>
          {isLoading ? (
            <PageLoader />
          ) : (
            <MarkdownRenderer content={content} />
          )}
        </div>
      </div>
    </>
  );
};

export default LocalAttractionPage;
