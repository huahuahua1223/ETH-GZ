import React from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-base text-white font-medium mb-[10px]">{date}</div>
      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#3b5165] mb-2">
        <div className="w-8 h-8 rounded-full bg-white"></div>
      </div>
      <div className="text-center w-[180px]">
        <p className="text-white text-base md:text-lg font-semibold whitespace-pre-line leading-tight">
          {title}
        </p>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  return (  
    <div className="w-full overflow-x-auto py-16 md:py-20">
      <div className="flex justify-between items-start min-w-[1200px] px-12 relative mx-auto">
        {/* 水平白色连接线 */}
        <div className="absolute w-[85%] h-[3px] bg-white top-[66px] left-[7.5%] z-0"></div>
        
        <TimelineItem 
          date="**/**/2025" 
          title="Sponsorships Applications Open" 
        />
        
        <TimelineItem 
          date="**/**/2025" 
          title="Launch of Speakers Applications" 
        />
        
        <TimelineItem 
          date="**/**/2025" 
          title="First Ticket Sale Wave" 
        />
        
        <TimelineItem 
          date="**/**/2025" 
          title="Second Ticket Sale Wave" 
        />
        
        <TimelineItem 
          date="**/**/2025" 
          title="ETH GuangZhou starts" 
        />
      </div>
    </div>
  );
};

export default Timeline; 