
import React from 'react';
import Seo from '../components/Seo';
import SchemaInjector from '../components/SchemaInjector';
import Breadcrumbs from '../components/Breadcrumbs';
import ContactForm from '../components/ContactForm';
import { BUSINESS_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "url": `${BUSINESS_INFO.baseUrl}/#/contact`,
    "name": "Contact Lawrence Rental Works",
    "description": "Get in touch with Lawrence Rental Works for all your porta potty rental needs in Mansfield, TX. Contact us by phone, email, or through our online form.",
    "mainEntity": {
      "@type": "Organization",
      "name": BUSINESS_INFO.name,
      "@id": BUSINESS_INFO.baseUrl,
      "telephone": BUSINESS_INFO.phone,
      "email": BUSINESS_INFO.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": BUSINESS_INFO.address.street,
        "addressLocality": BUSINESS_INFO.address.city,
        "addressRegion": BUSINESS_INFO.address.state,
        "postalCode": BUSINESS_INFO.address.zip,
        "addressCountry": "US"
      }
    }
  };
  
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${process.env.API_KEY || ''}&q=${encodeURIComponent(BUSINESS_INFO.address.full)}`;

  return (
    <>
      <Seo
        title="Contact Us"
        description={`Contact ${BUSINESS_INFO.name} for porta potty rentals in Mansfield, TX. Call ${BUSINESS_INFO.phone}, email ${BUSINESS_INFO.email}, or visit our office.`}
        canonicalUrl="contact"
      >
        <SchemaInjector schema={contactPageSchema} />
      </Seo>
      <Breadcrumbs crumbs={[{ name: 'Contact Us', path: '/contact' }]} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark font-heading">Get in Touch</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">We're here to help with all your portable sanitation needs. Reach out today for a free quote or to discuss your requirements.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-dark font-heading mb-6">Contact Information</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <MapPin className="text-primary mt-1 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <a href={BUSINESS_INFO.gmbLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">{BUSINESS_INFO.address.full}</a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-primary mt-1 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href={BUSINESS_INFO.phoneHref} className="hover:text-primary transition">{BUSINESS_INFO.phone}</a>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-primary mt-1 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-primary transition">{BUSINESS_INFO.email}</a>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="text-primary mt-1 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold">Business Hours</h3>
                  <p>{BUSINESS_INFO.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
             <h2 className="text-2xl font-bold text-dark font-heading mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
           <h2 className="text-3xl font-bold text-dark font-heading text-center mb-8">Our Location</h2>
           <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <iframe
                    src={mapSrc}
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map of Lawrence Rental Works Location"
                ></iframe>
           </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
