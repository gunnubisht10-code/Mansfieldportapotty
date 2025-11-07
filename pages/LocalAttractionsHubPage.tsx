
import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Breadcrumbs from '../components/Breadcrumbs';
import { LOCAL_ATTRACTIONS } from '../constants';
import { Camera } from 'lucide-react';

const LocalAttractionsHubPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Local Attractions in Mansfield, TX"
        description="Discover the best local attractions in and around Mansfield, TX. An informational guide from your local friends at Lawrence Rental Works."
        canonicalUrl="local-attractions"
      />
      <Breadcrumbs crumbs={[{ name: 'Local Attractions', path: '/local-attractions' }]} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark font-heading">Explore Mansfield, TX</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            As a proud local business, we love our community. Here's our guide to some of the wonderful attractions our area has to offer. This is purely an informational resource for residents and visitors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LOCAL_ATTRACTIONS.map((attraction, index) => (
            <Link to={`/local-attractions/${attraction.slug}`} key={attraction.slug} className="group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative">
                <img src={`https://picsum.photos/400/250?random=${index}`} alt={attraction.name} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold font-heading text-dark group-hover:text-primary transition-colors">{attraction.name}</h2>
                <p className="mt-2 text-sm text-gray-600">Discover more about this local gem.</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default LocalAttractionsHubPage;
