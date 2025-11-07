
import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import SchemaInjector from '../components/SchemaInjector';
import PageLoader from '../components/PageLoader';
import MarkdownRenderer from '../components/MarkdownRenderer';
import ContactForm from '../components/ContactForm';
import { useGeminiContent } from '../hooks/useGeminiContent';
import { BUSINESS_INFO, SERVICES, SERVICE_AREAS } from '../constants';
import { Award, Truck, ShieldCheck, Phone } from 'lucide-react';

const HomePage: React.FC = () => {
  const prompt = `Generate comprehensive, SEO-optimized content for the homepage of a porta potty rental company named "${BUSINESS_INFO.name}" located in Mansfield, TX.
  
  The content should be engaging, professional, and structured with clear headings. Use markdown format.
  
  Please include the following sections, with unique and detailed content for each:
  
  1.  **H2: Porta Potty Rental Services in Mansfield, Texas**: Briefly introduce the range of services offered.
  2.  **H2: Affordable Porta Potty Rental**: Focus on cost-effectiveness and value.
  3.  **H2: Portable Toilet Rental Mansfield TX**: Discuss the quality and types of units available.
  4.  **H2 Section: Different Types of Porta Potties Available in Mansfield, TX**: Describe Standard, Deluxe, ADA Accessible Porta Potties, and Restroom Trailers.
  5.  **Benefits Section**: List and explain the key benefits of renting from us (e.g., hygiene, convenience, reliability).
  6.  **How It Works Section**: A simple 3 or 4-step process from booking to pickup.
  7.  **Why Choose Us Section**: Highlight key differentiators like experience, customer service, and fast delivery.
  8.  **H2: What is a Porta Potty?**: A brief, informative explanation.
  9.  **H3: Common Use Cases**: List common scenarios like construction sites, events, weddings, etc.
  10. **About the City (Mansfield, TX)**: Mention some local context, neighborhoods (like Historic Downtown Mansfield, Walnut Creek), ZIP codes (76063), and landmarks to establish local authority.
  11. **Mansfield Porta Potty Service Areas**: List nearby cities we also serve.
  12. **FAQs Section (voice-search optimized)**: Create 5-6 frequently asked questions and their answers, formatted as:
      - **Question:** How much does it cost to rent a porta potty in Mansfield?
      - **Answer:** The cost...
      - **Question:** How often are the porta potties cleaned?
      - **Answer:** Our standard service...
  
  Ensure the tone is helpful and positions ${BUSINESS_INFO.name} as the top choice in Mansfield.
  `;

  const { content, isLoading } = useGeminiContent(prompt, []);

  const serviceAreasForSchema = SERVICE_AREAS.map(area => ({
    "@type": "City",
    "name": `${area.city}, ${area.state}`,
    "url": `${BUSINESS_INFO.baseUrl}/#/service-areas/${area.slug}`
  }));

  const servicesForSchema = SERVICES.map(service => ({
    "@type": "Service",
    "name": service.name,
    "url": `${BUSINESS_INFO.baseUrl}/#/services/${service.slug}`
  }));

  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": BUSINESS_INFO.name,
    "image": `${BUSINESS_INFO.baseUrl}/logo.png`,
    "@id": BUSINESS_INFO.baseUrl,
    "url": BUSINESS_INFO.baseUrl,
    "telephone": BUSINESS_INFO.phone,
    "email": BUSINESS_INFO.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.address.street,
      "addressLocality": BUSINESS_INFO.address.city,
      "addressRegion": BUSINESS_INFO.address.state,
      "postalCode": BUSINESS_INFO.address.zip,
      "addressCountry": "US"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 32.5635, // Approx. lat for Mansfield, TX
        "longitude": -97.1417 // Approx. lon for Mansfield, TX
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": `Mansfield, ${BUSINESS_INFO.address.state}`
      },
      ...serviceAreasForSchema
    ],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Porta Potty Rental Services",
        "itemListElement": servicesForSchema
    }
  };

  const faqContent = content.split('**FAQs Section (voice-search optimized)**')[1] || '';
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
        title="Porta Potty Rental Mansfield, TX"
        description={`Need a porta potty in Mansfield, TX? ${BUSINESS_INFO.name} offers fast, affordable, and clean portable toilet rentals for events, construction, and more. Call today for same-day delivery!`}
        canonicalUrl=""
      >
        <SchemaInjector schema={homePageSchema} />
        {faqItems.length > 0 && <SchemaInjector schema={faqSchema} />}
      </Seo>

      {/* Hero Section */}
      <section className="bg-primary text-white bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
        <div className="bg-black bg-opacity-60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-4">Porta Potty Rental, Mansfield, TX</h1>
            <p className="text-xl md:text-2xl mb-8">Fast, Reliable, and Clean Portable Restroom Solutions</p>
            <div className="max-w-3xl mx-auto mb-8">
                <div className="bg-white/90 p-6 rounded-lg shadow-2xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-dark font-heading mb-4">Need a porta potty in Mansfield, TX today?</h2>
                    <p className="text-dark mb-6">We offer same-day delivery for all your urgent sanitation needs. Get a free, no-obligation quote now!</p>
                    <a href={BUSINESS_INFO.phoneHref} className="w-full sm:w-auto inline-block bg-secondary text-white font-bold py-4 px-8 rounded-lg text-xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
                        <Phone className="inline-block mr-3" />
                        Call For A Free Quote
                    </a>
                    <p className="text-dark mt-4 text-sm">Open 24/7 for Your Convenience</p>
                </div>
            </div>
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
                <div className="flex items-center justify-center flex-col space-y-2">
                    <Award size={40} className="text-accent" />
                    <span className="font-semibold">Top-Rated Service</span>
                </div>
                <div className="flex items-center justify-center flex-col space-y-2">
                    <Truck size={40} className="text-accent" />
                    <span className="font-semibold">Same-Day Delivery</span>
                </div>
                <div className="flex items-center justify-center flex-col space-y-2">
                    <ShieldCheck size={40} className="text-accent" />
                    <span className="font-semibold">Clean & Sanitized</span>
                </div>
            </div>
            </div>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {isLoading ? (
          <PageLoader />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
               <MarkdownRenderer content={content} />
            </div>
            <aside className="lg:col-span-1">
                <div className="sticky top-28 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                    <h3 className="text-2xl font-bold text-dark font-heading mb-6">Request a Quote</h3>
                    <ContactForm />
                </div>
            </aside>
          </div>
        )}
        {/* Services Section */}
        <section className="py-16">
            <div className="text-center mb-12">
                 <h2 className="text-3xl md:text-4xl font-bold text-dark font-heading">Complete Portable Sanitation Services</h2>
                 <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">From construction sites to elegant weddings, we have the perfect sanitation solution for any occasion.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {SERVICES.map(service => (
                    <Link to={`/services/${service.slug}`} key={service.slug} className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-primary">
                        <h3 className="text-xl font-bold font-heading text-primary">{service.name}</h3>
                        <p className="mt-2 text-gray-600">Learn more about our {service.name.toLowerCase()} options.</p>
                    </Link>
                ))}
            </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
