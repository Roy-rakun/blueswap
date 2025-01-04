import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaMoon, FaSun, FaWallet, FaCoins, FaEthereum, FaBars } from 'react-icons/fa';

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false); // State buat ngecek theme
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State buat ngecek dropdown network
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State buat ngecek menu mobile
  const [selectedNetwork, setSelectedNetwork] = useState('BNB Chain'); // State buat nyimpen network yang dipilih

  // Fungsi buat toggle theme
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle('dark'); // Tambah/remove class 'dark' di root element
  };

  // Fungsi buat toggle dropdown network
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Fungsi buat handle pilih network
  const handleSelectNetwork = (network) => {
    setSelectedNetwork(network); // Set network yang dipilih
    setIsDropdownOpen(false); // Tutup dropdown setelah pilih
  };

  // Fungsi buat toggle menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/10 dark:bg-[#1E3A8A]/10 backdrop-blur-md p-4 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-4">
        {/* Bagian Kiri: Logo BlueSwap dan Tulisan */}
        <div className="flex items-center gap-4 sm:gap-8">
          {/* Hamburger Menu (Mobile Only) */}
          <button onClick={toggleMenu} className="sm:hidden p-2">
            <FaBars className="w-6 h-6 text-[#374151] dark:text-white" />
          </button>

          {/* Logo BlueSwap */}
          <img
            src="/logo.png" // Path ke logo (pastiin file logo.png ada di folder public)
            alt="BlueSwap Logo"
            className="w-8 h-8 sm:w-10 sm:h-10" // Ukuran logo responsive
          />

          {/* Tulisan BlueSwap */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg sm:text-2xl font-bold text-[#374151] dark:text-white"
          >
            BlueSwap
          </motion.h1>

          {/* Menu: Swap, Bridge, Stake (Desktop Only) */}
          <nav className="hidden sm:flex">
            <ul className="flex gap-4">
              {['Swap', 'Bridge', 'Stake'].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="text-sm sm:text-base text-[#374151] dark:text-white hover:text-[#FFA500] transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bagian Kanan: Dropdown dan Connect Wallet */}
        <div className="flex items-center gap-4">
          {/* Dropdown Pilih Network */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDropdown}
              className="flex items-center gap-2 bg-gradient-to-r from-[#00B4DB] to-[#0083B0] text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:from-[#0083B0] hover:to-[#00B4DB] transition-all"
            >
              {/* Icon network yang dipilih */}
              {selectedNetwork === 'BNB Chain' && <FaCoins className="w-5 h-5 sm:w-6 sm:h-6" />}
              {selectedNetwork === 'Ethereum' && <FaEthereum className="w-5 h-5 sm:w-6 sm:h-6" />}
              {selectedNetwork === 'Solana' && <FaCoins className="w-5 h-5 sm:w-6 sm:h-6" />}
              {selectedNetwork === 'Polygon' && <FaCoins className="w-5 h-5 sm:w-6 sm:h-6" />}
              {selectedNetwork === 'Tron' && <FaCoins className="w-5 h-5 sm:w-6 sm:h-6" />}
              {selectedNetwork === 'TON' && <FaCoins className="w-5 h-5 sm:w-6 sm:h-6" />}
              <span className="text-sm sm:text-base">{selectedNetwork}</span> {/* Tampilin network yang dipilih */}
              <FaChevronDown className="text-sm" />
            </motion.button>

            {/* Dropdown Menu Network */}
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-48 max-w-[90vw] bg-white dark:bg-[#2E3A59] rounded-lg shadow-lg z-50 overflow-auto"
              >
                <ul className="py-2">
                  {[
                    { name: 'BNB Chain', icon: <FaCoins className="w-5 h-5 sm:w-6 sm:h-6" /> },
                    { name: 'Ethereum', icon: <FaEthereum className="w-5 h-5 sm:w-6 sm:h-6" /> },
                    { name: 'Solana', icon: <FaCoins className="w-5 h-5 sm:w-6 sm:h-6" /> },
                    { name: 'Polygon', icon: <FaCoins className="w-5 h-5 sm:w-6 sm:h-6" /> },
                    { name: 'Tron', icon: <FaCoins className="w-5 h-5 sm:w-6 sm:h-6" /> },
                    { name: 'TON', icon: <FaCoins className="w-5 h-5 sm:w-6 sm:h-6" /> },
                  ].map((network, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleSelectNetwork(network.name)} // Panggil fungsi handleSelectNetwork
                        className="w-full flex items-center gap-2 px-4 py-2 text-sm sm:text-base text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-[#1E90FF] transition-colors"
                      >
                        {network.icon}
                        <span>{network.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          {/* Tombol Connect Wallet */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-gradient-to-r from-[#00B4DB] to-[#0083B0] text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:from-[#0083B0] hover:to-[#00B4DB] transition-all"
          >
            <FaWallet className="w-5 h-5 sm:w-6 sm:h-6" /> {/* Icon wallet */}
            <span className="text-sm sm:text-base">Connect Wallet</span>
          </motion.button>

          {/* Tombol Toggle Theme */}
          <button onClick={toggleTheme} className="p-2">
            {isDarkTheme ? (
              <FaSun className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            ) : (
              <FaMoon className="w-5 h-5 sm:w-6 sm:h-6 text-[#374151]" />
            )}
          </button>
        </div>

        {/* Menu Mobile (Muncul saat hamburger menu diklik) */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full sm:hidden mt-4"
          >
            <ul className="flex flex-col gap-2">
              {['Swap', 'Bridge', 'Stake'].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="block p-2 text-[#374151] dark:text-white hover:bg-gray-200 dark:hover:bg-[#1E90FF] transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;