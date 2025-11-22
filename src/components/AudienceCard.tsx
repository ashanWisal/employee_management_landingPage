import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { audienceCardsData } from '../data.tsx';
import type { AudienceCardData } from '../data.tsx';

interface AudienceCardProps {
  card?: AudienceCardData;
  index?: number;
}

const AudienceCard = ({ card, index = 0 }: AudienceCardProps) => {
  const cardData = card || audienceCardsData[index];

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
      className="bg-white rounded-xl p-8 shadow-sm"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover="hover"
      custom={index}
    >
      <h3 className="text-2xl sm:text-3xl font-subheading font-bold text-gray-800 mb-4">
        {cardData.title}
      </h3>
      <p className="text-base sm:text-lg font-body text-gray-600 mb-6">
        {cardData.description}
      </p>
      <Link
        to={cardData.buttonLink}
        className={`inline-block px-6 py-3 rounded-lg font-body font-semibold text-base sm:text-lg transition-colors ${
          cardData.buttonVariant === 'primary'
            ? 'bg-[#00D9FF] text-white hover:bg-[#00C4E6]'
            : 'bg-white text-[#FF6B6B] border-2 border-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white'
        }`}
      >
        {cardData.buttonText}
      </Link>
    </motion.div>
  );
};

export const AudienceCards = () => {
  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {audienceCardsData.map((card, index) => (
            <AudienceCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudienceCard;

