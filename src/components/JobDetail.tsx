import { motion } from 'framer-motion';
import type { JobListingData } from '../data.tsx';

interface JobDetailProps {
  job: JobListingData | null;
  onBack: () => void;
}

const JobDetail = ({ job, onBack }: JobDetailProps) => {
  if (!job) return null;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <motion.div
      className="bg-gray-50 py-12 sm:py-16 lg:py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-6 flex items-center text-gray-600 hover:text-gray-900 transition-colors font-body"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Jobs
        </button>

        {/* Job Header */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-subheading font-bold text-[#1E3A8A] mb-4">
            {job?.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-base sm:text-lg font-body text-gray-600">
            <span>{job?.department}</span>
            <span>•</span>
            <span>{job?.location}</span>
            <span>•</span>
            <span>{job?.jobType}</span>
          </div>
        </div>

        {/* Job Details */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md space-y-8">
          {/* About the Role */}
          {job?.aboutRole && (
            <div>
              <h2 className="text-xl sm:text-2xl font-subheading font-bold text-gray-900 mb-4">
                About the Role
              </h2>
              <p className="text-base sm:text-lg font-body text-gray-700 leading-relaxed">
                {job.aboutRole}
              </p>
            </div>
          )}

          {/* Key Responsibilities */}
          {job?.keyResponsibilities && job.keyResponsibilities.length > 0 && (
            <div>
              <h2 className="text-xl sm:text-2xl font-subheading font-bold text-gray-900 mb-4">
                Key Responsibilities
              </h2>
              <ul className="space-y-3">
                {job.keyResponsibilities.map((responsibility: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start text-base sm:text-lg font-body text-gray-700"
                  >
                    <span className="text-[#FF6B6B] mr-3 mt-1">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Qualifications */}
          {job?.qualifications && job.qualifications.length > 0 && (
            <div>
              <h2 className="text-xl sm:text-2xl font-subheading font-bold text-gray-900 mb-4">
                Qualifications
              </h2>
              <ul className="space-y-3">
                {job.qualifications.map((qualification: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start text-base sm:text-lg font-body text-gray-700"
                  >
                    <span className="text-[#FF6B6B] mr-3 mt-1">•</span>
                    <span>{qualification}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Fallback Description if sections don't exist */}
          {!job?.aboutRole && !job?.keyResponsibilities && !job?.qualifications && (
            <div>
              <h2 className="text-xl sm:text-2xl font-subheading font-bold text-gray-900 mb-4">
                Job Description
              </h2>
              <p className="text-base sm:text-lg font-body text-gray-700 leading-relaxed whitespace-pre-line">
                {job?.description}
              </p>
            </div>
          )}

          {/* Apply Button */}
          <div className="pt-6 border-t border-gray-200">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#FF6B6B] text-white rounded-lg font-body font-semibold text-lg hover:bg-[#FF5555] transition-colors">
              Apply for this Job
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JobDetail;

