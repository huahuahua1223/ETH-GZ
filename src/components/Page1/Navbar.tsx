import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-2 px-10 bg-transparent absolute top-0 left-0 w-full z-10">
      <div className="flex items-center">
        <img src="/page1/logo.png" alt="ETH Guangzhou" className="h-16" />
        <span className="font-bold text-3xl tracking-wider" style={{ color: '#E2C88A' }}>ETH GUANGZHOU</span>
      </div>
      <div className="flex items-center space-x-8">
        <a href="#" className="text-white text-2xl font-bold tracking-wide hover:text-purple-300 transition-colors">HOME</a>
        <a href="#" className="text-white text-2xl font-bold tracking-wide hover:text-purple-300 transition-colors">OVERVIEW</a>
        <a href="#" className="text-white text-2xl font-bold tracking-wide hover:text-purple-300 transition-colors">SCHEDULE</a>
        <a href="#" className="text-white text-2xl font-bold tracking-wide hover:text-purple-300 transition-colors">VENUE</a>
        
        {/* 登录按钮 - 双层边框样式 */}
        <div className="relative inline-block">
          {/* 外层边框 */}
          <div 
            className="absolute inset-0 rounded-md"
            style={{ backgroundColor: '#da9949' }}
          ></div>
          
          {/* 内层按钮 */}
          <button
            className="relative block m-[2px] px-6 py-2 text-black text-xl font-bold rounded-sm hover:opacity-90 transition-opacity tracking-wide"
            style={{ backgroundColor: '#e2c88a' }}
          >
            LOG IN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 