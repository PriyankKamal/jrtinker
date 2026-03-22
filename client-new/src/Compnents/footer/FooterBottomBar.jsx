import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ExternalLink } from 'lucide-react';

const FooterBottomBar = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <Youtube size={18} />, href: "#", label: "YouTube" }
  ];
  
  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Contact", href: "#" }
  ];
  
  return (
    <div className="flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0">
      <div className="text-center md:text-left text-gray-300 text-sm lg:text-xl">
        © {currentYear} <span className="font-semibold text-red-400">JRtinker</span>. All rights reserved.
      </div>
      
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="flex items-center space-x-4">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              aria-label={link.label}
              className="bg-red-400 p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              {link.icon}
            </a>
          ))}
        </div>
        
        {/* <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          {quickLinks.map((link, index) => (
            <React.Fragment key={index}>
              <a 
                href={link.href} 
                className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
              >
                <span>{link.name}</span>
                <ExternalLink className="ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              {index < quickLinks.length - 1 && (
                <span className="text-blue-700 hidden md:inline">|</span>
              )}
            </React.Fragment>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default FooterBottomBar;