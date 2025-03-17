import React from 'react';

interface SpeakerCardProps {
  image: string;
  name: string;
  title: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ image, name, title }) => {
  return (
    <div className="flex flex-col items-center mx-4 sm:mx-6 md:mx-8 lg:mx-12 mb-10">
      <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden mb-4 sm:mb-6">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-1 sm:mb-2">{name}</h3>
      <p className="text-sm sm:text-base md:text-lg text-center max-w-[200px] sm:max-w-[230px] md:max-w-[260px] leading-snug">{title}</p>
    </div>
  );
};

export default SpeakerCard; 