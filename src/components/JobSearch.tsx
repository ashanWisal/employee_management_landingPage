import { useState } from 'react';
import { SearchIcon, ChevronDownIcon } from '../svg/svg';

const JobSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');

  return (
    <div className="bg-gray-50  sm:py-">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Search by keyword, role, or team..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent font-body"
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1 lg:flex-none lg:w-auto">
              {/* Department Dropdown */}
              <div className="relative flex-1 lg:w-40">
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full pl-4 pr-10 py-3 bg-gray-100 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent font-body cursor-pointer"
                >
                  <option value="">Department</option>
                  <option value="engineering">Engineering</option>
                  <option value="product">Product</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                  <option value="sales">Sales</option>
                  <option value="hr">Human Resources</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <ChevronDownIcon />
                </div>
              </div>

              {/* Location Dropdown */}
              <div className="relative flex-1 lg:w-40">
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-4 pr-10 py-3 bg-gray-100 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent font-body cursor-pointer"
                >
                  <option value="">Location</option>
                  <option value="remote">Remote</option>
                  <option value="new-york">New York</option>
                  <option value="san-francisco">San Francisco</option>
                  <option value="london">London</option>
                  <option value="tokyo">Tokyo</option>
                  <option value="berlin">Berlin</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <ChevronDownIcon />
                </div>
              </div>

              {/* Job Type Dropdown */}
              <div className="relative flex-1 lg:w-40">
                <select
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  className="w-full pl-4 pr-10 py-3 bg-gray-100 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:border-transparent font-body cursor-pointer"
                >
                  <option value="">Job Type</option>
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <ChevronDownIcon />
                </div>
              </div>
            </div>

            {/* Search Button */}
            <button
              className="px-6 py-3 cursor-pointer bg-[#FF6B6B] text-white rounded-lg font-body font-semibold hover:bg-[#FF5555] transition-colors whitespace-nowrap"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;

