import { motion } from 'framer-motion';
import type { JobListingData } from '../data.tsx';
import { ArrowRightIcon } from '../svg/svg';

interface JobCardProps {
  job: JobListingData;
  index: number;
  onCardClick: (job: JobListingData) => void;
  isSelected?: boolean;
  maxDescriptionLength?: number;
}

const JobCard = ({ job, index, onCardClick, isSelected = false, maxDescriptionLength = 150 }: JobCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    }),
    hover: {
      y: -2,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const truncatedDescription =
    job?.description && job?.description?.length > maxDescriptionLength
      ? `${job.description.substring(0, maxDescriptionLength)}...`
      : job.description ?? '';

  const handleClick = () => {
    onCardClick(job);
  };

  return (
    <motion.div
      className={`bg-white rounded-xl p-6 shadow-md cursor-pointer transition-all ${
        isSelected ? 'border-2 border-[#00D9FF]' : 'border border-gray-200'
      }`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover="hover"
      onClick={handleClick}
      custom={index}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-subheading font-bold text-gray-900 mb-2">
            {job?.title}
          </h3>
          <div className="flex flex-wrap items-center gap-2 text-sm font-body text-gray-500 mb-3">
            <span>{job?.department}</span>
            <span>•</span>
            <span>{job?.location}</span>
            <span>•</span>
            <span>{job?.jobType}</span>
          </div>
          <p className="text-base font-body text-gray-700">
            {truncatedDescription}
          </p>
        </div>
        <div className="flex-shrink-0 cursor-pointer">
          <ArrowRightIcon />
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;
