
import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { AlertTriangle } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Seo
        title="404 - Page Not Found"
        description="The page you are looking for does not exist."
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-md mx-auto">
          <AlertTriangle className="mx-auto h-24 w-24 text-accent" />
          <h1 className="mt-6 text-4xl font-extrabold text-dark font-heading">404 - Page Not Found</h1>
          <p className="mt-4 text-lg text-gray-600">
            Oops! The page you're looking for seems to have been moved or doesn't exist.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Go Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
