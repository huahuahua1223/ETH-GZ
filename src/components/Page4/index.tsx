import React from 'react';
import AgendaSection from './AgendaSection';
import SponsorsSection from './SponsorsSection';

const Page4: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-16 relative overflow-hidden">
      {/* 背景和装饰元素 */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90 z-0 pointer-events-none">
        <img 
          src="/page4/main.png" 
          alt="ETH Logo" 
          className="w-[300px] md:w-[380px] lg:w-[420px] animate-float" 
        />
      </div>
      
      {/* 内容区域 */}
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* 左侧：日程 */}
          <div className="md:pl-6">
            <AgendaSection />
          </div>
          
          {/* 右侧：赞助商和合作伙伴 */}
          <div className="md:pr-6">
            <SponsorsSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4; 