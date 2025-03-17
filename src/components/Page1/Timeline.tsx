import React, { useState } from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  isCollapsible?: boolean;
  index?: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, isCollapsible, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // 桌面视图的TimelineItem保持原样
  if (!isCollapsible) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-base text-white font-medium mb-[10px]">{date}</div>
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-[#3b5165] mb-2">
          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white"></div>
        </div>
        <div className="text-center w-full max-w-[120px] sm:max-w-[150px] md:max-w-[180px]">
          <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-semibold whitespace-pre-line leading-tight">
            {title}
          </p>
        </div>
      </div>
    );
  }

  // 移动视图的折叠式TimelineItem
  return (
    <div className="relative z-10">
      {/* 连接线到下一个点的延伸 */}
      {index !== 4 && <div className="absolute h-full w-[3px] bg-white left-1/2 top-10 -z-10"></div>}
      
      <div 
        className="flex flex-col items-center mb-8 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* 日期 - 顶部居中 */}
        <div className="text-white font-medium mb-2 text-center">{date}</div>
        
        {/* 时间点圆圈 - 居中 */}
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#3b5165] mb-3">
          <div className="w-6 h-6 rounded-full bg-white"></div>
        </div>
        
        {/* 标题和展开箭头 */}
        <div className="w-full max-w-[220px] mx-auto">
          <div className="flex items-center justify-center bg-[#3b5165] bg-opacity-50 rounded-lg px-3 py-2">
            <p className="text-white text-sm font-semibold text-center mr-2">
              {title.split(' ')[0]}
            </p>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={`text-white transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          
          {/* 可展开内容 */}
          <div className={`overflow-hidden transition-all duration-300 bg-[#3b5165] bg-opacity-30 rounded-b-lg px-4 ${isExpanded ? 'max-h-20 mt-1 py-3 opacity-100' : 'max-h-0 opacity-0 py-0'}`}>
            <p className="text-white text-sm leading-tight">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  const [isTimelineExpanded, setIsTimelineExpanded] = useState(false);
  const timelineItems = [
    { date: "**/**/2025", title: "Sponsorships Applications Open" },
    { date: "**/**/2025", title: "Launch of Speakers Applications" },
    { date: "**/**/2025", title: "First Ticket Sale Wave" },
    { date: "**/**/2025", title: "Second Ticket Sale Wave" },
    { date: "**/**/2025", title: "ETH GuangZhou starts" }
  ];

  return (  
    <div className="w-full py-6 sm:py-10 md:py-16">
      {/* 移动端折叠式时间线 */}
      <div className="sm:hidden px-4 py-2 relative">
        <div className="max-w-[400px] mx-auto">
          {/* 总标题与折叠开关 */}
          <div 
            className="flex items-center justify-center space-x-2 cursor-pointer bg-[#3b5165] py-3 px-4 rounded-lg mb-6 mx-auto"
            onClick={() => setIsTimelineExpanded(!isTimelineExpanded)}
          >
            <h3 className="text-center text-white text-xl font-bold">ETH GuangZhou Timeline</h3>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={`text-white transition-transform duration-300 ${isTimelineExpanded ? 'rotate-180' : ''}`}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          
          {/* 可折叠的时间线内容 */}
          <div className={`transition-all duration-500 overflow-hidden ${isTimelineExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            {timelineItems.map((item, index) => (
              <TimelineItem 
                key={index} 
                date={item.date} 
                title={item.title} 
                isCollapsible={true}
                index={index} 
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* 桌面端水平时间线 */}
      <div className="hidden sm:block w-full overflow-x-auto py-6 md:py-10">
        <div className="flex justify-between items-start min-w-[800px] md:min-w-[1000px] lg:min-w-[1200px] px-6 md:px-12 relative mx-auto">
          {/* 水平白色连接线 */}
          <div className="absolute w-[85%] h-[3px] bg-white top-[57px] sm:top-[60px] md:top-[66px] left-[7.5%] z-0"></div>
          
          {timelineItems.map((item, index) => (
            <TimelineItem key={index} date={item.date} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline; 