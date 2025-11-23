import { motion } from 'framer-motion';
import { managementCardsData } from '../data.tsx';
import type { ManagementCardData } from '../data.tsx';

interface ManagementCardProps {
  card?: ManagementCardData;
  index?: number;
}

const ManagementCard = ({ card, index = 0 }: ManagementCardProps) => {
  const cardData = card ?? managementCardsData?.[index];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    }),
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i: number) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.2 + 0.2,
        duration: 0.5,
        type: 'spring' as const,
        stiffness: 200,
      },
    }),
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="bg-gray-100 rounded-xl p-6 shadow-md cursor-pointer"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      whileHover="hover"
      custom={index}
    >
      <motion.div
        className="mb-4"
        variants={iconVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover="hover"
        custom={index}
      >
        {cardData?.icon}
      </motion.div>
      <h3 className="text-xl font-subheading font-bold text-gray-800 mb-2">
        {cardData?.title}
      </h3>
      <p className="text-base font-body text-gray-600">
        {cardData?.description}
      </p>
    </motion.div>
  );
};

export const ManagementCards = () => {
  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {managementCardsData?.map((card, index) => (
            <ManagementCard key={card?.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagementCard;

