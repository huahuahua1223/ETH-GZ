import React from 'react';

interface AgendaItemProps {
  time: string;
  event: string;
}

const AgendaItem: React.FC<AgendaItemProps> = ({ time, event }) => {
  return (
    <div className="mb-3">
      <div className="flex">
        <span className="text-amber-300 font-bold mr-3 min-w-[100px]">{time}</span>
        <span className="text-white">{event}</span>
      </div>
    </div>
  );
};

interface DayProps {
  day: string;
  date: string;
  items: { time: string; event: string; }[];
}

const AgendaDay: React.FC<DayProps> = ({ day, date, items }) => {
  return (
    <div className="mb-10 relative">
      <div className="flex items-center mb-5">
        <div className="relative w-10 h-10 flex items-center justify-center ml-[2px]">
          <img 
            src="/page4/logo.png" 
            alt="ETH Icon" 
            className="w-10 h-10 z-10"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-white font-bold text-xl">{day} {date}</h3>
        </div>
      </div>
      <div className="pl-14">
        {items.map((item, index) => (
          <AgendaItem key={index} time={item.time} event={item.event} />
        ))}
      </div>
    </div>
  );
};

const AgendaSection: React.FC = () => {
  const days = [
    {
      day: "Day 1",
      date: "August 22, 2025",
      items: [
        { time: "12.00 PM", event: "Event Registration OPENS" },
        { time: "03.00 PM", event: "Workshops" },
        { time: "09.00 PM", event: "Hacking Begins!" },
      ]
    },
    {
      day: "Day 2",
      date: "August 23, 2025",
      items: [
        { time: "07.00 AM", event: "Event Registration OPENS! (last call)" },
        { time: "12.00 PM", event: "Lunch" },
        { time: "08.00 PM", event: "Dinner" },
      ]
    },
    {
      day: "Day 3",
      date: "August 24, 2025",
      items: [
        { time: "09.00 AM", event: "Submissions Due" },
        { time: "12.30 PM", event: "Lunch" },
        { time: "03.30 PM", event: "Closing Ceremonies" },
      ]
    }
  ];

  return (
    <div className="pt-4">
      <h2 className="text-5xl font-bold text-white mb-8 ml-[75px]">AGENDA</h2>
      <div className="relative">
        <div className="absolute left-5 top-6 bottom-0 w-0.5 bg-amber-300/30"></div>
        
        {days.map((day, index) => (
          <AgendaDay 
            key={index} 
            day={day.day} 
            date={day.date} 
            items={day.items} 
          />
        ))}
        
        <div className="absolute left-5 bottom-0 -translate-x-1/3 translate-y-1/2 w-2 h-2 rounded-full bg-amber-300"></div>
      </div>
    </div>
  );
};

export default AgendaSection; 