
import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Breadcrumbs from '../components/Breadcrumbs';
import { BUSINESS_INFO, SERVICE_AREAS } from '../constants';
import { MapPin } from 'lucide-react';

const ServiceAreaHubPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Service Areas"
        description={`We proudly provide porta potty rentals to Mansfield, TX, and surrounding areas including ${SERVICE_AREAS.slice(0, 3).map(a => a.city).join(', ')}, and more. See our full service area list.`}
        canonicalUrl="service-areas"
      />
      <Breadcrumbs crumbs={[{ name: 'Service Areas', path: '/service-areas' }]} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark font-heading">Our Service Areas</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {BUSINESS_INFO.name} is your trusted local provider, delivering clean and reliable portable restrooms throughout the Mansfield region and beyond. Find your city below to learn more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {SERVICE_AREAS.map((area) => (
            <Link 
              to={`/service-areas/${area.slug}`} 
              key={area.slug} 
              className="group flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-primary transition-all duration-300"
            >
              <MapPin className="text-primary group-hover:text-white mr-4" />
              <span className="font-semibold text-gray-800 group-hover:text-white">{area.city}, {area.state}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceAreaHubPage;
