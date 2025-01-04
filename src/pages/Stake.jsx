import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Stake = () => {
  const [BLUEAmount, setBLUEAmount] = useState('');
  const [lockDuration, setLockDuration] = useState(0);

  const handleStake = () => {
    alert(`Staking ${BLUEAmount} BLUE for ${lockDuration} weeks`);
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-4 pt-40 pb-10"
    >
      <div className="bg-white/10 dark:bg-[#1E3A8A]/10 backdrop-blur-md rounded-lg shadow-md max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold text-[#374151] dark:text-white mb-4">BLUE Staking</h2>

        {/* Deskripsi */}
        
        <p
        className="text-sm text-[#374151] dark:text-white">Enjoy the benefits of weekly BLUE yield revenue share, gauges voting, farm yield boosting, participating in IPOs, and so much more!
        </p>

        {/* Input BLUE dan Durasi */}
        <div className="space-y-4">
        <div className="bg-white/20 dark:bg-[#1E3A8A]/20 p-4 rounded-lg">
        <label className="text-sm text-[#374151] dark:text-white">ADD BLUE</label>
            <div className="flex justify-between items-center">
              <input
                type="text"
                placeholder="0"
                value={BLUEAmount}
                onChange={(e) => setBLUEAmount(e.target.value)}
                className="bg-transparent focus:outline-none text-xl"
              />
              <button className="w-full bg-gradient-to-r from-[#00B4DB] to-[#0083B0] text-white px-4 py-2 rounded-lg hover:from-[#0083B0] hover:to-[#00B4DB] transition-all">
                MAX
              </button>
            </div>
          </div>

          <div className="bg-white/20 dark:bg-[#1E3A8A]/20 p-4 rounded-lg">
          <label className="text-sm text-[#374151] dark:text-white">ADD DURATION</label>
            <div className="flex justify-between items-center">
              <input
                type="number"
                placeholder="0"
                value={lockDuration}
                onChange={(e) => setLockDuration(e.target.value)}
                className="bg-transparent focus:outline-none text-xl"
              />
              <button className="w-full bg-gradient-to-r from-[#00B4DB] to-[#0083B0] text-white px-4 py-2 rounded-lg hover:from-[#0083B0] hover:to-[#00B4DB] transition-all">
                MAX
              </button>
            </div>
          </div>
        </div>

        {/* Lock Overview */}
        <div className="mt-6">
          <h3 className="text-sm font-bold text-[#374151] dark:text-white">Lock Overview</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-[#374151] dark:text-white">Total APR</p>
              <p className="text-2xl font-bold">Up to 25.03%</p>
            </div>
            <div>
              <p className="text-sm text-[#374151] dark:text-white">veBLUE Pool APR</p>
              <p className="text-2xl font-bold">Up to 2.70%</p>
            </div>
            <div>
              <p className="text-sm text-[#374151] dark:text-white">Revenue Sharing APR</p>
              <p className="text-2xl font-bold">Up to 2.94%</p>
            </div>
            <div>
              <p className="text-sm text-[#374151] dark:text-white">MD&A APR</p>
              <p className="text-2xl font-bold">Up to 20.00%</p>
            </div>
          </div>
        </div>

        {/* Benefits of veBLUE */}
        <div className="mt-6">
          <h3 className="text-sm font-bold text-[#374151] dark:text-white">Benefits of veBLUE</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-[#374151] dark:text-white">Earn BLUE</p>
              <p className="text-2xl font-bold">2.85% / 375 BLUE</p>
            </div>
            <div>
              <p className="text-sm text-[#374151] dark:text-white">Gauges Voting</p>
              <p className="text-2xl font-bold">2</p>
            </div>
            <div>
              <p className="text-sm text-[#374151] dark:text-white">Weekly Revenue Sharing</p>
              <p className="text-2xl font-bold">$84.63</p>
            </div>
            <div>
              <p className="text-sm text-[#374151] dark:text-white">Bank Rewards</p>
              <p className="text-2xl font-bold">$22.50</p>
            </div>
          </div>
        </div>

        {/* Tombol Stake */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleStake}
          className="w-full bg-[#1E90FF] text-white p-2 rounded-lg hover:bg-[#FFA500] transition-colors mt-6"
        >
          Connect Wallet
        </motion.button>
      </div>
    </motion.main>
  );
};

export default Stake;