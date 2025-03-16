import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center relative h-full w-full top-[-100px]">
      {/* Phoenix/Dragon Image - 放在底层且显著增大尺寸 */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0 top-[150px] animate-float">
        <img 
          src="/page1/main.png" 
          alt="Ethereum Guangzhou Phoenix" 
          className="h-[620px] w-full object-contain"
          style={{ transform: 'translateY(-5%)' }}
        />
      </div>
      
      {/* 内容区域 - 上移位置 */}
      <div className="flex flex-col items-center justify-center z-10 mt-[-120px]">
        {/* 日期和地点信息 - 垂直排列 */}
        <div className="flex justify-between w-full max-w-md mb-10">
          <div className="flex flex-col items-center mx-8">
            <div className="w-10 h-10 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-10 h-10">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-white text-xl">GuangZhou</span>
          </div>

          <div className="flex flex-col items-center mx-8">
            <div className="w-10 h-10 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-10 h-10">
                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-white text-xl">August 22, 2025</span>
          </div>
        </div>

        <h1 className="text-white text-6xl md:text-8xl font-bold mb-4 tracking-wide relative z-10 text-center">
          ETH GUANGZHOU
        </h1>

        <div className="relative inline-block z-10">
          {/* 外层边框 */}
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: '#DA9949' }}
          ></div>
          
          {/* 内层按钮 */}
          <button
            className="relative block m-[3px] px-4 py-2 bg-white text-black text-2xl font-bold hover:opacity-90 transition-opacity"
          >
            APPLY TO HACK
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 