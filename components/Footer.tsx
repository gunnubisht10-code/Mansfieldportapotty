
import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, SERVICES, SERVICE_AREAS } from '../constants';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: 'Contact', path: '/contact' },
  ];
  
  const legalLinks = [
      { name: 'Privacy Policy', path: '/privacy-policy'},
      { name: 'Terms & Conditions', path: '/terms-and-conditions'},
      { name: 'Disclaimer', path: '/disclaimer'},
  ];

  return (
    <footer className="bg-dark text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Business Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white font-heading">{BUSINESS_INFO.name}</h3>
            <p className="text-sm">{BUSINESS_INFO.industry}</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="mr-3 mt-1 flex-shrink-0" />
                <a href={BUSINESS_INFO.gmbLink} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition">{BUSINESS_INFO.address.full}</a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3" />
                <a href={BUSINESS_INFO.phoneHref} className="hover:text-secondary transition">{BUSINESS_INFO.phone}</a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-3" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-secondary transition">{BUSINESS_INFO.email}</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white font-heading mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-secondary transition">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white font-heading mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {SERVICES.slice(0, 6).map(service => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="hover:text-secondary transition">{service.name}</Link>
                </li>
              ))}
               <li>
                  <Link to="/services" className="hover:text-secondary transition font-semibold">View All Services...</Link>
                </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold text-white font-heading mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm">
               {SERVICE_AREAS.slice(0, 6).map(area => (
                <li key={area.slug}>
                  <Link to={`/service-areas/${area.slug}`} className="hover:text-secondary transition">{area.city}, {area.state}</Link>
                </li>
              ))}
               <li>
                  <Link to="/service-areas" className="hover:text-secondary transition font-semibold">View All Areas...</Link>
                </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
           <div className="flex space-x-4 mb-4 md:mb-0">
               {legalLinks.map(link => (
                <Link key={link.path} to={link.path} className="hover:text-white transition">{link.name}</Link>
               ))}
           </div>
           <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
