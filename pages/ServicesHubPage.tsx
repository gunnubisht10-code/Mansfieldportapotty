
import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import SchemaInjector from '../components/SchemaInjector';
import Breadcrumbs from '../components/Breadcrumbs';
import { BUSINESS_INFO, SERVICES } from '../constants';
import { ChevronRight } from 'lucide-react';

const ServicesHubPage: React.FC = () => {
    
  const servicesForSchema = SERVICES.map(service => ({
    "@type": "Service",
    "name": service.name,
    "url": `${BUSINESS_INFO.baseUrl}/services/${service.slug}`
  }));

  const servicePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": `${BUSINESS_INFO.baseUrl}/services`,
    "name": `Our Porta Potty Rental Services | ${BUSINESS_INFO.name}`,
    "description": `Explore our comprehensive range of portable toilet and sanitation services in Mansfield, TX. From standard units to luxury restroom trailers, we have a solution for every need.`,
    "mainEntity": {
        "@type": "OfferCatalog",
        "name": "Porta Potty Rental Services",
        "itemListElement": servicesForSchema
    }
  };

  return (
    <>
      <Seo
        title="Our Porta Potty Rental Services"
        description="Explore our comprehensive range of portable toilet and sanitation services in Mansfield, TX. From standard units to luxury restroom trailers, we have a solution for every need."
        canonicalUrl="services"
      >
          <SchemaInjector schema={servicePageSchema} />
      </Seo>
      <Breadcrumbs crumbs={[{ name: 'Services', path: '/services' }]} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark font-heading">Our Services</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            At {BUSINESS_INFO.name}, we offer a wide variety of portable sanitation solutions to meet the specific needs of your event, construction project, or any other occasion in Mansfield and beyond.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <ul className="divide-y divide-gray-200">
                {SERVICES.map((service) => (
                    <li key={service.slug}>
                    <Link to={`/services/${service.slug}`} className="block hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between p-6">
                        <h2 className="text-xl font-semibold text-primary font-heading">{service.name}</h2>
                        <ChevronRight className="text-gray-400" />
                        </div>
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
        </div>
      </div>
    </>
  );
};

export default ServicesHubPage;
