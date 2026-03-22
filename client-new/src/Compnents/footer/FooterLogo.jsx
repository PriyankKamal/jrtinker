import React from 'react';
import { Lightbulb } from 'lucide-react';

const FooterLogo = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        {/* <div className="bg-white p-2 rounded-md">
          <Lightbulb className="text-[#ff5722] h-8 w-8" />
        </div> */}
        <img src="/images/nav-logo.png" alt="logo" className="w-[138px]" />
      </div>
      <p className="text-gray-300 leading-relaxed">
        Empowering young minds through innovation and hands-on learning to shape a brighter future.
      </p>
    </div>
  );
};

export default FooterLogo;