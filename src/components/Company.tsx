import { motion } from 'framer-motion';
import { timelineData } from '../data.tsx';
import type { TimelineItemData } from '../data.tsx';

interface TimelineItemProps {
  item: TimelineItemData;
  index: number;
  isLast: boolean;
}

const TimelineItem = ({ item, index, isLast }: TimelineItemProps) => {
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    }),
  };

  return (
    <motion.div
      className="relative flex items-start gap-6"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      custom={index}
    >
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full border-2 border-[#00D9FF]">
          <div className="w-8 h-8 flex items-center justify-center">
            {item?.icon}
          </div>
        </div>
        {!isLast && (
          <div className="w-0.5 h-full min-h-[100px] bg-[#00D9FF] mt-2"></div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8 sm:pb-12">
        <p className="text-sm sm:text-base font-body text-gray-500 mb-1">
          {item?.year}
        </p>
        <h3 className="text-xl sm:text-2xl font-subheading font-bold text-[#607AFB] mb-2">
          {item?.title}
        </h3>
        <p className="text-base sm:text-lg font-body text-gray-700">
          {item?.description}
        </p>
      </div>
    </motion.div>
  );
};

const Company = () => {
  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-[#607AFB] sm:text-4xl lg:text-5xl font-heading font-bold text-center mb-12 sm:mb-16">
          Our Journey
        </h2>
        
        <div className="relative">
          {timelineData?.map((item, index) => (
            <TimelineItem
              key={item?.id}
              item={item}
              index={index}
              isLast={index === (timelineData?.length ?? 0) - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Company;

