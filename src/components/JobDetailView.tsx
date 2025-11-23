import { motion } from 'framer-motion';
import type { JobListingData } from '../data.tsx';

interface JobDetailViewProps {
  job: JobListingData | null;
}

const JobDetailView = ({ job }: JobDetailViewProps) => {
  if (!job) {
    return (
      <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md h-full flex items-center justify-center">
        <p className="text-gray-500 font-body text-lg">Select a job to view details</p>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <motion.div
      className="bg-white rounded-xl p-6 sm:p-8 shadow-md h-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      key={job?.id}
    >
      {/* Job Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-subheading font-bold text-gray-900 mb-3">
          {job?.title}
        </h1>
        <div className="flex flex-wrap items-center gap-2 text-base font-body text-gray-600">
          <span>{job?.department}</span>
          <span>•</span>
          <span>{job?.location}</span>
          <span>•</span>
          <span>{job?.jobType}</span>
        </div>
      </div>

      {/* Job Details */}
      <div className="space-y-8">
        {/* About the Role */}
        {job?.aboutRole && (
          <div>
            <h2 className="text-xl font-subheading font-bold text-gray-900 mb-3">
              About the Role
            </h2>
            <p className="text-base font-body text-gray-700 leading-relaxed">
              {job.aboutRole}
            </p>
          </div>
        )}

        {/* Key Responsibilities */}
        {job?.keyResponsibilities && job.keyResponsibilities.length > 0 && (
          <div>
            <h2 className="text-xl font-subheading font-bold text-gray-900 mb-3">
              Key Responsibilities
            </h2>
            <ul className="space-y-2">
              {job.keyResponsibilities.map((responsibility: string, index: number) => (
                <li
                  key={index}
                  className="flex items-start text-base font-body text-gray-700"
                >
                  <span className="text-[#FF6B6B] mr-3 mt-1 flex-shrink-0">•</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Qualifications */}
        {job?.qualifications && job.qualifications.length > 0 && (
          <div>
            <h2 className="text-xl font-subheading font-bold text-gray-900 mb-3">
              Qualifications
            </h2>
            <ul className="space-y-2">
              {job.qualifications.map((qualification: string, index: number) => (
                <li
                  key={index}
                  className="flex items-start text-base font-body text-gray-700"
                >
                  <span className="text-[#FF6B6B] mr-3 mt-1 flex-shrink-0">•</span>
                  <span>{qualification}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Fallback Description if sections don't exist */}
        {!job?.aboutRole && !job?.keyResponsibilities && !job?.qualifications && (
          <div>
            <h2 className="text-xl font-subheading font-bold text-gray-900 mb-3">
              Job Description
            </h2>
            <p className="text-base font-body text-gray-700 leading-relaxed whitespace-pre-line">
              {job?.description}
            </p>
          </div>
        )}

        {/* Apply Button */}
        <div className="pt-6 border-t border-gray-200">
          <button className="w-full px-8 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#FF8787] text-white rounded-lg font-body font-semibold text-lg hover:from-[#FF5555] hover:to-[#FF7373] transition-all shadow-md hover:shadow-lg">
            Apply for this Job
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default JobDetailView;

