import Header from '../components/Header';
import JobSearch from '../components/JobSearch';
import JobListings from '../components/JobListings';

const Career = () => {
  return (
    <>
      <Header
        title="Join Our Team"
        align="left"
        matchNavbar={true}
        subtitleComponent={
          <p className="text-gray-600">
            Build your future with us.{' '}
            <span>Explore your next opportunity.</span>
          </p>
        }
      />
      <JobSearch />
      <JobListings />
    </>
  );
};

export default Career;

