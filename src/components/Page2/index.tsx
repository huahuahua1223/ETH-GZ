import React from 'react';
import ScrollingBanner from './ScrollingBanner';
import ContentSection from './ContentSection';

const Page2: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'rgb(27, 49, 66)' }}>
      {/* 内容区域 */}
      <div className="relative z-10 flex flex-col h-full">
        <ScrollingBanner />
        <ContentSection />
      </div>
    </div>
  );
};

export default Page2; 