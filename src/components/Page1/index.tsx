import React from 'react';
import Navbar from './Navbar';
import Timeline from './Timeline';
import HeroSection from './HeroSection';

const Page1: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden" style={{ backgroundColor: 'rgb(27, 49, 66)' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/page1/mountain.png" 
          alt="Mountain background" 
          className="absolute bottom-0 w-full object-cover"
        />
        <img 
          src="/page1/guang.png"
          alt="Guang character"
          className="absolute w-[70px] h-[85px] sm:w-[200px] sm:h-[240px] md:w-[250px] md:h-[300px] lg:w-[290px] lg:h-[350px] left-[20px] sm:left-[50px] md:left-[80px] lg:left-[100px] bottom-[-15px] z-20"
        />
        <img 
          src="/page1/zhou.png"
          alt="Zhou character"
          className="absolute w-[70px] h-[85px] sm:w-[200px] sm:h-[240px] md:w-[250px] md:h-[300px] lg:w-[290px] lg:h-[350px] right-[20px] sm:right-[50px] md:right-[80px] lg:right-[100px] bottom-[0px] z-20"
        />
      </div>

      {/* Page Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <div className="py-1">
          <Timeline />
        </div>
        <div className="flex-grow flex items-center justify-center pt-0 overflow-visible">
          <HeroSection />
        </div>
      </div>
    </div>
  );
};

export default Page1; 