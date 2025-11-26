import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black py-12 px-6 border-t border-white/5 text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Left Column: Logo & Copyright */}
        <div className="flex flex-col items-start">
          <span className="text-white font-bold text-lg leading-tight">XYK LLC</span>
          <span className="text-xs text-gray-500 font-mono mt-1">
            © {currentYear} XYK LLC. All rights reserved.
          </span>
        </div>
        
        {/* Right Column: Contact & Links */}
        <div className="flex flex-col items-start md:items-end w-full md:w-auto mt-4 md:mt-0">
           <a href="mailto:contact@xyklabs.com" className="text-tyrian hover:text-white transition-colors mb-2 font-mono">
             contact@xyklabs.com
           </a>
           <div className="flex gap-6 text-xs text-gray-600">
             <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
             <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;