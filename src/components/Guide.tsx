import { motion } from 'framer-motion';
import { principlesData } from '../data.tsx';
import type { PrincipleCardData } from '../data.tsx';

interface PrincipleCardProps {
  principle: PrincipleCardData;
  index: number;
}

const PrincipleCard = ({ principle, index }: PrincipleCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    }),
    hover: {
      y: -4,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <motion.div
      className="bg-white rounded-xl p-6 sm:p-8 shadow-md"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover="hover"
      custom={index}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          {principle?.icon}
        </div>
        <h3 className="text-xl sm:text-2xl font-subheading font-bold text-[#607AFB] mb-3">
          {principle?.title}
        </h3>
        <p className="text-base sm:text-lg font-body text-gray-700">
          {principle?.description}
        </p>
      </div>
    </motion.div>
  );
};

const Guide = () => {
  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-subheading font-bold text-[#607AFB] text-center mb-12 sm:mb-16">
          The Principles That Guide Us
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {principlesData?.map((principle, index) => (
            <PrincipleCard key={principle?.id} principle={principle} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guide;

