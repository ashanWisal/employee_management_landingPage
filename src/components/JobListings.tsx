import { useState, useEffect } from 'react';
import { jobListingsData } from '../data.tsx';
import type { JobListingData } from '../data.tsx';
import JobCard from './JobCard';
import RecentJob from './RecentJob';

const JobListings = () => {
  const [selectedJob, setSelectedJob] = useState<JobListingData | null>(null);

  // Set the first job as selected by default
  useEffect(() => {
    if (jobListingsData && jobListingsData.length > 0) {
      setSelectedJob(jobListingsData[0] ?? null);
    }
  }, []);

  const handleJobClick = (job: JobListingData) => {
    setSelectedJob(job);
  };

  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Column - Job Cards */}
          <div className="w-full lg:w-1/2 space-y-4">
            {jobListingsData?.map((job, index) => (
              <JobCard
                key={job?.id}
                job={job}
                index={index}
                onCardClick={handleJobClick}
                isSelected={selectedJob?.id === job?.id}
              />
            ))}
          </div>

          {/* Right Column - Job Detail View */}
          <div className="w-full lg:w-1/2">
            <RecentJob key={selectedJob?.id} job={selectedJob} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListings;

