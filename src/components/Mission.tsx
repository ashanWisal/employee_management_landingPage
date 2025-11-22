import { motion } from 'framer-motion';
import { teamMembersData } from '../data.tsx';
import type { TeamMemberData } from '../data.tsx';

interface TeamMemberCardProps {
  member: TeamMemberData;
  index: number;
}

const TeamMemberCard = ({ member, index }: TeamMemberCardProps) => {
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
      className="relative rounded-xl overflow-hidden shadow-md bg-gradient-to-br from-gray-100 to-gray-200"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover="hover"
      custom={index}
    >
      <div className="relative aspect-square">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-subheading font-bold text-white mb-1">
            {member.name}
          </h3>
          <p className="text-sm font-body text-gray-300">
            {member.title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Mission = () => {
  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-subheading font-bold text-[#607AFB] text-center mb-12 sm:mb-16">
          Meet the Minds Behind the Mission
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembersData.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;

