import React from 'react';

interface SocialLinkProps {
  icon: string;
  alt: string;
  href: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, alt, href }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transition-colors rounded-md p-3 transform hover:scale-105"
    >
      <img src={icon} alt={alt} className="w-full h-full object-contain" />
    </a>
  );
};

const SocialLinks: React.FC = () => {
  const links = [
    { icon: '/page5/email.png', alt: 'Email', href: 'mailto:contact@ethguangzhou.com' },
    { icon: '/page5/discord.png', alt: 'Discord', href: 'https://discord.gg/ethguangzhou' },
    { icon: '/page5/twitter.png', alt: 'Twitter', href: 'https://twitter.com/ETHGuangzhou' },
    { icon: '/page5/telegram.png', alt: 'Telegram', href: 'https://t.me/ethguangzhou' },
    { icon: '/page5/youtube.png', alt: 'YouTube', href: 'https://www.youtube.com/c/ETHGuangzhou' }
  ];

  return (
    <div className="flex justify-center mt-20">
      <div className="flex space-x-5 md:space-x-8">
        {links.map((link, index) => (
          <SocialLink key={index} {...link} />
        ))}
      </div>
    </div>
  );
};

export default SocialLinks; 