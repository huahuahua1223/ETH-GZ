import React from 'react';
import VenueSection from './VenueSection';
import SocialLinks from './SocialLinks';

const Page5: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-10 sm:py-16 md:py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <VenueSection />
        <SocialLinks />
      </div>
    </div>
  );
};

export default Page5; 