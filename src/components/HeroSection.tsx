import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import NetworkGraph from '../svg/NetworkGraph';

const HeroSection = () => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: ['Work Smarter,<br>Not Harder.'],
        typeSpeed: 75,
        backSpeed: 50,
        backDelay: 2000,
        startDelay: 0,
        loop: true,
        showCursor: false,
      });

      return () => {
        typed?.destroy();
      };
    }
  }, []);

  return (
    <div className="bg-gray-60">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-8 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight">
                <span ref={el} />
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-subheading text-gray-600">
                The all-in-one platform to streamline your workforce.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/signup"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-[#00D9FF] text-white rounded-lg font-body font-semibold text-base sm:text-lg hover:bg-[#00C4E6] transition-colors text-center"
              >
                Get Started
              </Link>
              <Link
                to="/career"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#FF6B6B] border-2 border-[#FF6B6B] rounded-lg font-body font-semibold text-base sm:text-lg hover:bg-[#FF6B6B] hover:text-white transition-colors text-center"
              >
                View Open Positions
              </Link>
            </div>
          </div>

          <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
              <NetworkGraph />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

