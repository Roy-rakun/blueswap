import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const Bridge = () => {
  const [amount, setAmount] = useState('');
  const [isEthereumDropdownOpen, setIsEthereumDropdownOpen] = useState(false); // State buat dropdown Ethereum
  const [isBnbDropdownOpen, setIsBnbDropdownOpen] = useState(false); // State buat dropdown BNB Smart Chain
  const [selectedEthereumOption, setSelectedEthereumOption] = useState('Ethereum'); // State buat pilihan Ethereum
  const [selectedBnbOption, setSelectedBnbOption] = useState('BNB Chain'); // State buat pilihan BNB Smart Chain

  // Fungsi buat toggle dropdown Ethereum
  const toggleEthereumDropdown = () => {
    setIsEthereumDropdownOpen(!isEthereumDropdownOpen);
    setIsBnbDropdownOpen(false); // Tutup dropdown BNB kalo Ethereum dibuka
  };

  // Fungsi buat toggle dropdown BNB Smart Chain
  const toggleBnbDropdown = () => {
    setIsBnbDropdownOpen(!isBnbDropdownOpen);
    setIsEthereumDropdownOpen(false); // Tutup dropdown Ethereum kalo BNB dibuka
  };

  // Fungsi buat handle pilihan Ethereum
  const handleSelectEthereumOption = (option) => {
    setSelectedEthereumOption(option);
    setIsEthereumDropdownOpen(false);
  };

  // Fungsi buat handle pilihan BNB Smart Chain
  const handleSelectBnbOption = (option) => {
    setSelectedBnbOption(option);
    setIsBnbDropdownOpen(false);
  };

  const handleBridge = () => {
    alert(`Bridging ${amount} USDT from ${selectedEthereumOption} to ${selectedBnbOption}`);
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-4 pt-40 pb-10"
    >
      <div className="bg-white/10 dark:bg-[#1E3A8A]/10 backdrop-blur-md rounded-lg shadow-md max-w-md mx-auto p-6">
        <h2 className="text-2xl font-bold text-[#374151] dark:text-white mb-4">Bridge</h2>
        <div className="space-y-4">
          {/* Pilihan Jaringan */}
          <div className="bg-white/20 dark:bg-[#1E3A8A]/20 p-4 rounded-lg">
            <label className="text-sm text-[#374151] dark:text-white">From</label>
            <div className="flex justify-between items-center mt-2 space-x-4">
              {/* Tombol Ethereum dengan Dropdown */}
              <div className="relative flex-1">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleEthereumDropdown}
                  className="w-full flex items-center justify-between bg-gradient-to-r from-[#00B4DB] to-[#0083B0] text-white px-4 py-2 rounded-lg hover:from-[#0083B0] hover:to-[#00B4DB] transition-all"
                >
                  <span>{selectedEthereumOption}</span>
                  <FaChevronDown className="text-sm" />
                </motion.button>

                {/* Dropdown Menu Ethereum */}
                {isEthereumDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-full bg-white dark:bg-[#2E3A59] rounded-lg shadow-lg z-10"
                  >
                    <ul className="py-2">
                      {['Ethereum', 'BNB Chain', ,'Matic','Solana', 'Trx','Ton'].map((option, index) => (
                        <li key={index}>
                          <button
                            onClick={() => handleSelectEthereumOption(option)}
                            className="w-full flex items-center space-x-2 px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-[#1E90FF] transition-colors"
                          >
                            <span>{option}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>

              {/* Tombol BNB Smart Chain dengan Dropdown */}
              <label className="text-sm text-[#374151] dark:text-white">To</label>
              <div className="relative flex-1">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleBnbDropdown}
                  className="w-full flex items-center justify-between bg-gradient-to-r from-[#00B4DB] to-[#0083B0] text-white px-4 py-2 rounded-lg hover:from-[#0083B0] hover:to-[#00B4DB] transition-all"
                >
                  <span>{selectedBnbOption}</span>
                  <FaChevronDown className="text-sm" />
                </motion.button>

                {/* Dropdown Menu BNB Smart Chain */}
                {isBnbDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-full bg-white dark:bg-[#2E3A59] rounded-lg shadow-lg z-10"
                  >
                    <ul className="py-2">
                      {['BNB Chain', 'Ethereum','Matic','Solana', 'Trx','Ton'].map((option, index) => (
                        <li key={index}>
                          <button
                            onClick={() => handleSelectBnbOption(option)}
                            className="w-full flex items-center space-x-2 px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-[#1E90FF] transition-colors"
                          >
                            <span>{option}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Input You Send */}
          <div className="bg-white/20 dark:bg-[#1E3A8A]/20 p-4 rounded-lg">
            <label className="text-sm text-[#374151] dark:text-white">You Send</label>
            <div className="flex justify-between items-center">
              <input
                type="text"
                placeholder="0.0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-transparent focus:outline-none text-xl"
              />
              <button className="w-full bg-gradient-to-r from-[#00B4DB] to-[#0083B0] text-white px-4 py-2 rounded-lg hover:from-[#0083B0] hover:to-[#00B4DB] transition-all">
                USDT
              </button>
            </div>
          </div>

          {/* Tombol Connect Wallet */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBridge}
            className="w-full bg-gradient-to-r from-[#00B4DB] to-[#0083B0] text-white px-4 py-2 rounded-lg hover:from-[#0083B0] hover:to-[#00B4DB] transition-all"
          >
            Connect Wallet
          </motion.button>
        </div>
      </div>
    </motion.main>
  );
};

export default Bridge;