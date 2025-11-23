import { Link } from 'react-router-dom';
import { aboutHeroData } from '../data.tsx';

const AboutHero = () => {
  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div
        className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] bg-cover bg-center bg-no-repeat rounded-2xl mx-4 sm:mx-6 lg:mx-8 my-8 sm:my-12 lg:my-16"
        style={{
          backgroundImage: `url(${aboutHeroData?.backgroundImage})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
        
        {/* Blur Effect */}
        <div className="absolute inset-0 backdrop-blur-sm rounded-2xl"></div>
        
        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-6">
            {aboutHeroData?.title}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl font-body text-white/90 max-w-3xl mb-6 sm:mb-8">
            {aboutHeroData?.subtitle}
          </p>
          <Link
            to="/about"
            className="px-8 py-3 sm:py-4 bg-[#FF6B6B] text-white rounded-lg font-body font-semibold text-base sm:text-lg hover:bg-[#FF5555] transition-colors"
          >
            {aboutHeroData?.buttonText}
          </Link>
        </div>
      </div>
      
      {/* Header Component Below */}
    </div>
  );
};

export default AboutHero;

