import React from 'react';

const ScrollingBanner: React.FC = () => {
  return (
    <div className="w-full overflow-hidden py-2" style={{ backgroundColor: 'rgb(27, 49, 66)' }}>
      <div className="animate-marquee whitespace-nowrap flex">
        {/* 重复图片以创建无限滚动效果 */}
        {[...Array(10)].map((_, index) => (
          <img 
            key={index}
            src="/page2/guangzhou.png" 
            alt="GUANGZHOU ETH Banner"
            className="h-12 mx-4"
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner; 