
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

interface Breadcrumb {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  crumbs: Breadcrumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs }) => {
  const allCrumbs = [{ name: 'Home', path: '/' }, ...crumbs];

  return (
    <nav className="bg-gray-100 py-3">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          {allCrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <ChevronRight size={16} className="mx-2 text-gray-400" />}
              {index === allCrumbs.length - 1 ? (
                <span className="font-medium text-gray-800">{crumb.name}</span>
              ) : (
                <Link to={crumb.path} className="hover:text-primary transition-colors">
                  {index === 0 ? <Home size={16} className="inline-block" /> : crumb.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
