import { motion, AnimatePresence } from 'framer-motion';
import type { JobListingData } from '../data.tsx';

interface JobModalProps {
  job: JobListingData | null;
  onClose: () => void;
}

const JobModal = ({ job, onClose }: JobModalProps) => {
  if (!job) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e?.stopPropagation()}
        >
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-subheading font-bold text-gray-900 mb-3">
                  {job?.title}
                </h2>
                <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base font-body text-gray-600">
                  <span className="px-3 py-1 bg-gray-100 rounded-lg">{job?.department}</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-lg">{job?.location}</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-lg">{job?.jobType}</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="ml-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-subheading font-semibold text-gray-900 mb-2">
                  Job Description
                </h3>
                <p className="text-base font-body text-gray-700 leading-relaxed whitespace-pre-line">
                  {job?.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default JobModal;

