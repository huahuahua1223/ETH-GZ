import React from 'react';

interface SpeakerCardProps {
  image: string;
  name: string;
  title: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ image, name, title }) => {
  return (
    <div className="flex flex-col items-center mx-8 md:mx-12 mb-10">
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-6">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-2">{name}</h3>
      <p className="text-base md:text-lg text-center max-w-[260px] leading-snug">{title}</p>
    </div>
  );
};

export default SpeakerCard; 