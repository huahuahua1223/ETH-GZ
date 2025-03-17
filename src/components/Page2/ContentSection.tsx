import React from 'react';

const ContentSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-16">
        {/* 左侧图片区域 */}
        <div className="w-full md:w-2/5 space-y-4 md:space-y-6">
          {/* 主图 */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src="/page2/1.png" 
              alt="ETH Guangzhou Conference" 
              className="w-full h-auto object-cover"
              style={{ maxHeight: '360px' }}
            />
          </div>
          
          {/* 两张并排小图 */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/page2/2.png" 
                alt="Developers Collaboration" 
                className="w-full h-full object-cover"
                style={{ height: '180px', maxHeight: '320px' }}
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/page2/3.png" 
                alt="Hackathon Team" 
                className="w-full h-full object-cover"
                style={{ height: '180px', maxHeight: '320px' }}
              />
            </div>
          </div>
        </div>
        
        {/* 右侧文本区域 */}
        <div className="w-full md:w-3/5 text-center md:text-center relative mt-6 md:mt-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 md:mb-10">
            What is ETH GUANGZHOU ?
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-1">
            Nihao Developers!
          </h3>
          <div className="text-base sm:text-lg md:text-xl lg:text-3xl" style={{ color: '#e2c88a', lineHeight: '1.9' }}>
            <p className="mb-6">
              We are thrilled to introduce ETH Guangzhou, the first-ever Ethereum Hackathon in South China! Set in this dynamic hub of innovation, we are bringing together passionate developers to push the boundaries of what's possible on Ethereum.
              This three-day technical extravaganza will feature cutting-edge workshops, top-tier mentorship, and an exciting prize pool of $25,000+ to help turn your dream projects into reality!
            </p>
          </div>
          
          {/* 底部背景图片 */}
          <div className="absolute top-[80px] sm:top-[100px] md:top-[120px] left-0 w-full pointer-events-none z-[-10]">
            <img 
              src="/page2/hello.png" 
              alt="Hello Background" 
              className="w-full h-auto object-contain opacity-70 md:opacity-100"
            />
          </div>
          
          {/* MORE ABOUT US 按钮 - 双层边框样式 */}
          <div className="relative inline-block z-10 mt-4 md:mt-0">
            {/* 外层边框 */}
            <div 
              className="absolute inset-0 rounded-md"
              style={{ backgroundColor: '#da9949' }}
            ></div>
            
            {/* 内层按钮 */}
            <button
              className="relative block m-[3px] px-6 sm:px-8 md:px-10 py-3 md:py-4 text-black font-bold rounded-sm hover:opacity-90 transition-opacity text-base sm:text-lg"
              style={{ backgroundColor: '#e2c88a' }}
            >
              MORE ABOUT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection; 