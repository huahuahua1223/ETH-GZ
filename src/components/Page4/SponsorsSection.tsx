import React from 'react';

interface SponsorGridProps {
  title: string;
  count: number;
}

const SponsorGrid: React.FC<SponsorGridProps> = ({ title, count }) => {
  // 创建空白占位符
  const placeholders = Array(count).fill(null);
  
  return (
    <div className="mb-10 mr-[-300px]">
      <h2 className="text-5xl font-bold text-white mb-6 text-center">{title}</h2>
      <div className={`grid grid-cols-3 gap-5 mx-auto max-w-[450px]`}>
        {placeholders.map((_, index) => (
          <div 
            key={index} 
            className="w-full aspect-square bg-white rounded-full flex items-center justify-center"
            style={{ maxWidth: '80px', maxHeight: '80px', margin: '0 auto' }}
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
    <div className="flex items-center justify-end mt-10">
      <a 
        href="#" 
        className="flex items-center bg-transparent text-white px-6 py-2"
      >
        <img src="/page4/tickets.png" alt="Tickets Icon" className="w-28 h-14 mr-6" />
        <span className="text-4xl font-bold text-white">tickets</span>
      </a>
    </div>
  );
};

const SponsorsSection: React.FC = () => {
  return (
    <div className="pt-4">
      <SponsorGrid title="SPONSORS" count={6} />
      <SponsorGrid title="PARTNERS" count={6} />
      <TicketButton />
    </div>
  );
};

export default SponsorsSection; 