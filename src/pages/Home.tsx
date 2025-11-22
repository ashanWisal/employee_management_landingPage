import HeroSection from '../components/HeroSection';
import Header from '../components/Header';
import { ManagementCards } from '../components/ManagementCard';
import { AudienceCards } from '../components/AudienceCard';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Header />
      <ManagementCards />
      <AudienceCards />
    </>
  );
};

export default Home;

