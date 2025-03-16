import React from 'react';
import SpeakerCard from './SpeakerCard';

const Page3: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 relative">
      {/* 背景图片 */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/page3/background.png" 
          alt="Background Pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* 内容区域 */}
      <div className="relative z-10 container mx-auto px-4">
        {/* 标题部分 */}
        <div className="flex justify-center items-center mb-12">
          <img src="/page3/logo.png" alt="ETH Logo" className="w-16 h-16 md:w-20 md:h-20 mx-3" />
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black px-4">
            Judges, Speakers & Mentors
          </h2>
          <img src="/page3/logo.png" alt="ETH Logo" className="w-16 h-16 md:w-20 md:h-20 mx-3" />
        </div>
        
        {/* 演讲者卡片 */}
        <div className="flex flex-wrap justify-center mb-24 max-w-6xl mx-auto">
          <SpeakerCard 
            image="/page3/vitalik.png"
            name="Vitalik Buterin"
            title="Founder, Ethereum"
          />
          
          <SpeakerCard 
            image="/page3/aya.png"
            name="Aya Miyaguchi"
            title="Executive Director of Ethereum Foundation"
          />
          
          <SpeakerCard 
            image="/page3/joe.png"
            name="Joe Lubin"
            title="CEO & Founder of Consensys and Co-founder of Ethereum"
          />
        </div>
        
        {/* 申请部分 */}
        <div className="text-center">
          <h3 className="text-4xl md:text-6xl font-bold text-white mb-12">
            2025 Speaker Applications Now Open!
          </h3>
          
          <div className="relative inline-block">
            {/* 外层边框 */}
            <div 
              className="absolute inset-0 rounded-md"
              style={{ backgroundColor: '#DA9949' }}
            ></div>
            
            {/* 内层按钮 */}
            <a 
              href="#" 
              className="relative block m-[3px] px-14 py-4 text-white font-bold rounded-sm hover:opacity-90 transition-opacity text-lg"
              style={{ backgroundColor: 'rgb(27, 49, 66)' }}
            >
              APPLY TO SPEAK
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3; 