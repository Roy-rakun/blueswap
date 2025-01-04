import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaEthereum, FaCoins } from 'react-icons/fa'; // Import FaCoins
import { Link } from 'react-router-dom'; // Import Link

const Swap = () => {
  const [fromToken, setFromToken] = useState('BNB'); // State buat token "From"
  const [toToken, setToToken] = useState('BLUE'); // State buat token "To"
  const [isFromTokenDropdownOpen, setIsFromTokenDropdownOpen] = useState(false); // State buat dropdown "From"
  const [isToTokenDropdownOpen, setIsToTokenDropdownOpen] = useState(false); // State buat dropdown "To"
  const [selectedNetwork, setSelectedNetwork] = useState('BNB Chain'); // State buat nyimpen network yang dipilih

  // Daftar token berdasarkan network
  const tokensByNetwork = {
    'BNB Chain': [
      { name: 'BNB', icon: <FaCoins className="w-6 h-6" /> },
      { name: 'BLUE', icon: <FaCoins className="w-6 h-6" /> },
      { name: 'USDT', icon: <FaCoins className="w-6 h-6" /> },
    ],
    Ethereum: [
      { name: 'ETH', icon: <FaEthereum className="w-6 h-6" /> },
      { name: 'USDT', icon: <FaCoins className="w-6 h-6" /> },
    ],
    Solana: [
      { name: 'SOL', icon: <FaCoins className="w-6 h-6" /> },
      { name: 'USDT', icon: <FaCoins className="w-6 h-6" /> },
    ],
    Polygon: [
      { name: 'MATIC', icon: <FaCoins className="w-6 h-6" /> },
      { name: 'USDT', icon: <FaCoins className="w-6 h-6" /> },
    ],
    Tron: [
      { name: 'TRX', icon: <FaCoins className="w-6 h-6" /> },
      { name: 'USDT', icon: <FaCoins className="w-6 h-6" /> },
    ],
    TON: [
      { name: 'TON', icon: <FaCoins className="w-6 h-6" /> },
      { name: 'USDT', icon: <FaCoins className="w-6 h-6" /> },
    ],
  };

  // Ambil token berdasarkan network yang dipilih
  const tokens = tokensByNetwork[selectedNetwork] || [];

  // Sound effect buat dropdown
  const playSound = () => {
    const audio = new Audio('/click-sound.mp3'); // Ganti dengan path sound effect kamu
    audio.play();
  };

  const handleSwap = () => {
    alert(`Swapping ${fromToken} to ${toToken} on ${selectedNetwork}`);
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-4 pt-40 pb-10"
    >
      <div className="bg-white/10 dark:bg-[#1E3A8A]/10 backdrop-blur-md rounded-lg shadow-md max-w-md mx-auto p-6">
        <h2 className="text-2xl font-bold text-[#374151] dark:text-white mb-4">Swap</h2>
        {/* Link ke TWAP dan Limit */}
        <div className="flex space-x-4 mb-4">
          <Link
            to="/twap"
            className="text-[#1E90FF] hover:text-[#FFA500] transition-colors"
          >
            TWAP
          </Link>
          <Link
            to="/limit"
            className="text-[#1E90FF] hover:text-[#FFA500] transition-colors"
          >
            Limit
          </Link>
        </div>
        <div className="space-y-4">
          {/* Input From */}
          <div className="bg-white/20 dark:bg-[#1E3A8A]/20 p-4 rounded-lg">
            <label className="text-sm text-[#374151] dark:text-white">From</label>
            <div className="flex justify-between items-center">
              <input
                type="text"
                placeholder="0.00"
                className="bg-transparent focus:outline-none text-xl text-[#374151] dark:text-white"
              />
              {/* Dropdown Pilih Token From */}
              <div className="relative">
                <button
                  onClick={() => {
                    setIsFromTokenDropdownOpen(!isFromTokenDropdownOpen);
                    playSound(); // Play sound effect
                  }}
                  className="flex items-center space-x-2 bg-gradient-to-r from-[#00B4DB] to-[#0083B0] text-white px-4 py-2 rounded-lg hover:from-[#0083B0] hover:to-[#00B4DB] transition-all"
                >
                  <motion.div
                    key={fromToken} // Key buat trigger animasi pas token berubah
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {tokens.find((token) => token.name === fromToken)?.icon}
                  </motion.div>
                  <span>{fromToken}</span>
                  <FaChevronDown className="text-sm" />
                </button>
                {isFromTokenDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-10 right-0 bg-white dark:bg-[#2E3A59] text-[#374151] dark:text-white rounded-lg shadow-md w-48 z-10"
                  >
                    <ul>
                      {tokens.map((token, index) => (
                        <li
                          key={index}
                          onClick={() => {
                            setFromToken(token.name);
                            setIsFromTokenDropdownOpen(false);
                            playSound(); // Play sound effect
                          }}
                          className="p-2 hover:bg-gray-200 dark:hover:bg-[#1E90FF] cursor-pointer flex items-center space-x-2"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            {token.icon}
                          </motion.div>
                          <span>{token.name}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Input To */}
          <div className="bg-white/20 dark:bg-[#1E3A8A]/20 p-4 rounded-lg">
            <label className="text-sm text-[#374151] dark:text-white">To</label>
            <div className="flex justify-between items-center">
              <input
                type="text"
                placeholder="0.00"
                className="bg-transparent focus:outline-none text-xl text-[#374151] dark:text-white"
              />
              {/* Dropdown Pilih Token To */}
              <div className="relative">
                <button
                  onClick={() => {
                    setIsToTokenDropdownOpen(!isToTokenDropdownOpen);
                    playSound(); // Play sound effect
                  }}
                  className="flex items-center space-x-2 bg-gradient-to-r from-[#00B4DB] to-[#0083B0] text-white px-4 py-2 rounded-lg hover:from-[#0083B0] hover:to-[#00B4DB] transition-all"
                >
                  <motion.div
                    key={toToken} // Key buat trigger animasi pas token berubah
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {tokens.find((token) => token.name === toToken)?.icon}
                  </motion.div>
                  <span>{toToken}</span>
                  <FaChevronDown className="text-sm" />
                </button>
                {isToTokenDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-10 right-0 bg-white dark:bg-[#2E3A59] text-[#374151] dark:text-white rounded-lg shadow-md w-48 z-10"
                  >
                    <ul>
                      {tokens.map((token, index) => (
                        <li
                          key={index}
                          onClick={() => {
                            setToToken(token.name);
                            setIsToTokenDropdownOpen(false);
                            playSound(); // Play sound effect
                          }}
                          className="p-2 hover:bg-gray-200 dark:hover:bg-[#1E90FF] cursor-pointer flex items-center space-x-2"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            {token.icon}
                          </motion.div>
                          <span>{token.name}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Tombol Swap */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSwap}
            className="w-full bg-gradient-to-r from-[#00B4DB] to-[#0083B0] text-white px-4 py-2 rounded-lg hover:from-[#0083B0] hover:to-[#00B4DB] transition-all"
          >
            Swap
          </motion.button>
        </div>
      </div>
    </motion.main>
  );
};

export default Swap;