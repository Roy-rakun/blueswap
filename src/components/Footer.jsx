import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import icon GitHub dari react-icons

const Footer = () => {
  return (
    <footer
      className={`bg-white/10 dark:bg-[#1E3A8A]/10 backdrop-blur-md p-4 shadow-lg border-t border-gray-200 dark:border-gray-700`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Tulisan @2025 Blueswap - All Right Reserved */}
        <div>
          <span className="text-sm text-gray-800 dark:text-white">@2025 Blueswap - All Right Reserved</span>
        </div>

        {/* Bagian Tengah: Built with Love */}
        

        {/* Bagian Kanan: Harga $BLUE dan Logo GitHub */}
        <div className="flex items-center space-x-4">
          {/* Harga dan Tulisan $BLUE Price dalam Satu Kotak */}
          <div className="bg-[#2E3A59] dark:bg-[#1E3A8A] p-2 rounded-lg flex items-center space-x-2">
            <span className="text-sm text-white">$BLUE Price:</span> {/* Tulisan $BLUE Price */}
            <span className="text-white">$2,670</span> {/* Harga */}
          </div>
          <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-800 dark:text-white">Built with</span>
          <span role="img" aria-label="love" className="text-red-500">❤️</span>
          <span className="text-sm text-gray-800 dark:text-white">By:</span> {/* Emot love */}
        </div>
          {/* Logo GitHub yang bisa diklik */}
          <a
            href="https://github.com/Roy-rakun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white hover:text-[#1E90FF] dark:hover:text-[#1E90FF] transition-colors"
          >
            <FaGithub className="w-6 h-6" /> {/* Icon GitHub */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;