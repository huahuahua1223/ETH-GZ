import React from 'react';

interface SponsorGridProps {
  title: string;
  count: number;
}

const SponsorGrid: React.FC<SponsorGridProps> = ({ title, count }) => {
  // 创建空白占位符
  const placeholders = Array(count).fill(null);
  
  return (
    <div className="mb-8 sm:mb-10 mr-0 md:mr-[-100px] lg:mr-[-200px] xl:mr-[-300px]">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 text-center md:text-center">
        {title}
      </h2>
      <div className={`grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 mx-auto max-w-[280px] sm:max-w-[350px] md:max-w-[450px]`}>
        {placeholders.map((_, index) => (
          <div 
            key={index} 
            className="w-full aspect-square bg-white rounded-full flex items-center justify-center"
            style={{ maxWidth: '70px', maxHeight: '70px', margin: '0 auto' }}
          >
            {/* 此处可以放置赞助商/合作伙伴的logo */}
          </div>
        ))}
      </div>
    </div>
  );
};

const TicketButton: React.FC = () => {
  return (
    <div className="flex items-center justify-center md:justify-end mt-6 sm:mt-8 md:mt-10">
      <a 
        href="#" 
        className="flex items-center bg-transparent text-white px-4 sm:px-6 py-2"
      >
        <img src="/page4/tickets.png" alt="Tickets Icon" className="w-16 sm:w-20 md:w-28 h-10 sm:h-12 md:h-14 mr-3 sm:mr-6" />
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">tickets</span>
      </a>
    </div>
  );
};

const SponsorsSection: React.FC = () => {
  return (
    <div className="pt-2 sm:pt-4">
      <SponsorGrid title="SPONSORS" count={6} />
      <SponsorGrid title="PARTNERS" count={6} />
      <TicketButton />
    </div>
  );
};

export default SponsorsSection; 