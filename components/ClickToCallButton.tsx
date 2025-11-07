
import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { Phone } from 'lucide-react';

const ClickToCallButton: React.FC = () => {
  return (
    <a
      href={BUSINESS_INFO.phoneHref}
      className="lg:hidden fixed bottom-0 left-0 right-0 bg-secondary text-white flex items-center justify-center p-4 z-50 shadow-lg text-lg font-bold"
      aria-label={`Call ${BUSINESS_INFO.name}`}
    >
      <Phone size={24} className="mr-3" />
      <span>CLICK TO CALL {BUSINESS_INFO.phone}</span>
    </a>
  );
};

export default ClickToCallButton;
