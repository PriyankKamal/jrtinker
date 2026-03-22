import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const FooterContact= () => {
  return (
    <div className="space-y-4">
      <div className="flex items-start space-x-3 group">
        <MapPin className="h-5 w-5 text-[#3b82f6] mt-1 flex-shrink-0 group-hover:text-[#60a5fa] transition-colors duration-300" />
        <p className="text-gray-300 group-hover:text-white transition-colors duration-300">55 Main Street, New York</p>
      </div>
      
      <div className="flex items-center space-x-3 group">
        <Mail className="h-5 w-5 text-[#3b82f6] flex-shrink-0 group-hover:text-[#60a5fa] transition-colors duration-300" />
        <a 
          href="mailto:hotline@gmail.com" 
          className="text-gray-300 hover:text-white transition-colors duration-300"
        >
          hotline@gmail.com
        </a>
      </div>
      
      <div className="flex items-center space-x-3 group">
        <Phone className="h-5 w-5 text-[#3b82f6] flex-shrink-0 group-hover:text-[#60a5fa] transition-colors duration-300" />
        <a 
          href="tel:+0123456789" 
          className="text-gray-300 hover:text-white transition-colors duration-300"
        >
          +012 (345) 678
        </a>
      </div>
    </div>
  );
};

export default FooterContact;