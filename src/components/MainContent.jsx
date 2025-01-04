import React from 'react';

const MainContent = () => {
  return (
    <main className="container mx-auto p-4 pt-40 pb-10">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-[#2E3A59] mb-4">Swap Tokens</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="From"
            className="w-full p-2 border border-[#87CEEB] rounded-lg"
          />
          <input
            type="text"
            placeholder="To"
            className="w-full p-2 border border-[#87CEEB] rounded-lg"
          />
          <button className="w-full bg-[#1E90FF] text-white p-2 rounded-lg hover:bg-[#FFA500] transition-colors">
            Swap
          </button>
        </div>
      </div>
    </main>
  );
};

export default MainContent;