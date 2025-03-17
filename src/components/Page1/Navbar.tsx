import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // 处理导航点击，滚动到对应的页面
  const scrollToPage = (pageNumber: number) => {
    setMenuOpen(false); // 关闭移动端菜单
    
    // 获取页面元素并滚动
    const pages = document.querySelectorAll('.min-h-screen');
    if (pages.length > pageNumber) {
      // 获取目标页面
      const targetPage = pages[pageNumber];
      // 滚动到目标位置
      targetPage.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex justify-between items-center py-2 px-4 sm:px-6 md:px-10 bg-transparent absolute top-0 left-0 w-full z-30">
      <div className="flex items-center">
        <img src="/page1/logo.png" alt="ETH Guangzhou" className="h-10 sm:h-12 md:h-16" />
        <span className="font-bold text-xl sm:text-2xl md:text-3xl tracking-wider" style={{ color: '#E2C88A' }}>ETH GUANGZHOU</span>
      </div>
      
      {/* 移动端汉堡菜单按钮 */}
      <div className="lg:hidden">
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white p-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* 桌面端导航 */}
      <div className="hidden lg:flex items-center space-x-8">
        <button 
          onClick={() => scrollToPage(1)} 
          className="text-white text-2xl font-bold tracking-wide hover:text-purple-300 transition-colors"
        >
          HOME
        </button>
        <button 
          onClick={() => scrollToPage(2)} 
          className="text-white text-2xl font-bold tracking-wide hover:text-purple-300 transition-colors"
        >
          OVERVIEW
        </button>
        <button 
          onClick={() => scrollToPage(4)} 
          className="text-white text-2xl font-bold tracking-wide hover:text-purple-300 transition-colors"
        >
          SCHEDULE
        </button>
        <button 
          onClick={() => scrollToPage(5)} 
          className="text-white text-2xl font-bold tracking-wide hover:text-purple-300 transition-colors"
        >
          VENUE
        </button>
        
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
      
      {/* 移动端菜单下拉 */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#1B3142] p-4 flex flex-col space-y-4 border-t border-gray-700 mt-2">
          <button 
            onClick={() => scrollToPage(1)} 
            className="text-white text-xl font-bold tracking-wide hover:text-purple-300 transition-colors py-2 text-left"
          >
            HOME
          </button>
          <button 
            onClick={() => scrollToPage(2)} 
            className="text-white text-xl font-bold tracking-wide hover:text-purple-300 transition-colors py-2 text-left"
          >
            OVERVIEW
          </button>
          <button 
            onClick={() => scrollToPage(4)} 
            className="text-white text-xl font-bold tracking-wide hover:text-purple-300 transition-colors py-2 text-left"
          >
            SCHEDULE
          </button>
          <button 
            onClick={() => scrollToPage(5)} 
            className="text-white text-xl font-bold tracking-wide hover:text-purple-300 transition-colors py-2 text-left"
          >
            VENUE
          </button>
          
          {/* 登录按钮 - 双层边框样式 */}
          <div className="relative inline-block">
            {/* 外层边框 */}
            <div 
              className="absolute inset-0 rounded-md"
              style={{ backgroundColor: '#da9949' }}
            ></div>
            
            {/* 内层按钮 */}
            <button
              className="relative block m-[2px] w-full px-6 py-2 text-black text-xl font-bold rounded-sm hover:opacity-90 transition-opacity tracking-wide"
              style={{ backgroundColor: '#e2c88a' }}
            >
              LOG IN
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 