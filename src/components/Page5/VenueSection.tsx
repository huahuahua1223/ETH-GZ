import React from 'react';

const VenueSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16">
      {/* 左侧：场地图片 */}
      <div className="w-full md:w-2/5">
        <div className="relative aspect-square max-w-[300px] sm:max-w-[350px] md:max-w-full mx-auto">
          <div className="absolute inset-0 overflow-hidden" 
               style={{ 
                 clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
               }}>
            <img 
              src="/page5/place.png" 
              alt="Venue" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      
      {/* 右侧：场地信息 */}
      <div className="w-full md:w-3/5 text-left relative mt-8 md:mt-0">
        <div className="relative z-10 flex flex-col">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 text-center md:text-left">
            The Venue
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed" style={{ textIndent: '2em' }}>
            example : Tianhe Road Business Circle – Guangzhou's vibrant commercial hub, home to TeeMall, Taikoo Hui, and Grandview Mall. A dynamic mix of shopping, finance, and tech, with dazzling skyscrapers lighting up the skyline at night.
          </p>
          
          <div className="relative">
            {/* 背景汉字 - 降低z-index确保在按钮下方 */}
            <div className="absolute -bottom-12 right-0 w-full h-72 overflow-hidden pointer-events-none z-10 opacity-30 sm:opacity-50">
              <img 
                src="/page5/didian.png" 
                alt="Chinese character for location" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* 按钮放在didian图片上方，提高z-index */}
            <div className="flex justify-center md:justify-end relative z-30 mb-10 sm:mb-16 mt-6 sm:mt-10">
              <div className="relative inline-block md:mr-48" style={{ minWidth: '180px', maxWidth: '220px' }}>
                {/* 外层边框 */}
                <div 
                  className="absolute inset-0 rounded-md"
                  style={{ backgroundColor: '#da9949' }}
                ></div>
                
                {/* 内层按钮 */}
                <a 
                  href="#" 
                  className="relative block m-[4px] px-4 sm:px-8 py-2 sm:py-3 text-black font-bold text-base sm:text-xl rounded-sm hover:opacity-90 transition-opacity text-center"
                  style={{ backgroundColor: '#e2c88a' }}
                >
                  GET DIRECTIONS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueSection; 