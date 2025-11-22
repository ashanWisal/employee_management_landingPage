import { PayrollIcon, SchedulingIcon, PerformanceIcon, RocketIcon, DiamondIcon, GlobeIcon, EyeIcon, LightbulbIcon, TeamworkIcon, GrowthIcon } from './svg/svg';

export const headerData = {
  title: 'Everything you need in one place',
  subtitle: 'Our platform is designed to simplify your HR processes from start to finish.',
};

export interface ManagementCardData {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const managementCardsData: ManagementCardData[] = [
  {
    id: 1,
    title: 'Simplified Payroll',
    description: 'Automate payroll processes to save time and reduce errors.',
    icon: <PayrollIcon />,
  },
  {
    id: 2,
    title: 'Intelligent Scheduling',
    description: 'Create and manage employee schedules with ease and flexibility.',
    icon: <SchedulingIcon />,
  },
  {
    id: 3,
    title: 'Performance Tracking',
    description: 'Set goals, track progress, and provide meaningful feedback.',
    icon: <PerformanceIcon />,
  },
];

export interface AudienceCardData {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  buttonVariant: 'primary' | 'secondary';
  buttonLink: string;
}

export const audienceCardsData: AudienceCardData[] = [
  {
    id: 1,
    title: 'For Employees',
    description: 'Access your schedule, pay stubs, and company resources all in one place.',
    buttonText: 'Login to Dashboard',
    buttonVariant: 'primary',
    buttonLink: '/login',
  },
  {
    id: 2,
    title: 'For Job Seekers',
    description: 'Ready to join a team that values innovation and growth? Explore our open positions.',
    buttonText: 'See Our Culture',
    buttonVariant: 'secondary',
    buttonLink: '/about',
  },
];

export const aboutHeroData = {
  title: 'We Believe in People.',
  subtitle: 'Discover the story, values, and the amazing team behind our mission to revolutionize employee management.',
  buttonText: 'Learn More',
  backgroundImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
};

export interface TimelineItemData {
  id: number;
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const timelineData: TimelineItemData[] = [
  {
    id: 1,
    year: '2018',
    title: 'Company Founded',
    description: 'Born from a vision to simplify human resources, our journey began with a small team and a big idea.',
    icon: <RocketIcon />,
  },
  {
    id: 2,
    year: '2020',
    title: 'First 100 Clients',
    description: 'We celebrated a major milestone, earning the trust of over 100 innovative companies who believed in our platform.',
    icon: <DiamondIcon />,
  },
  {
    id: 3,
    year: '2023',
    title: 'Global Expansion',
    description: 'Our platform went international, helping businesses across continents manage their teams more effectively.',
    icon: <GlobeIcon />,
  },
];

export interface PrincipleCardData {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColor: 'red' | 'blue';
}

export const principlesData: PrincipleCardData[] = [
  {
    id: 1,
    title: 'Transparency',
    description: 'We believe in open communication and clarity in everything we do.',
    icon: <EyeIcon />,
    iconColor: 'red',
  },
  {
    id: 2,
    title: 'Innovation',
    description: 'We constantly push boundaries to create the future of work.',
    icon: <LightbulbIcon />,
    iconColor: 'blue',
  },
  {
    id: 3,
    title: 'Teamwork',
    description: 'Collaboration is at our core. We succeed together.',
    icon: <TeamworkIcon />,
    iconColor: 'red',
  },
  {
    id: 4,
    title: 'Growth',
    description: 'We are dedicated to personal and professional development.',
    icon: <GrowthIcon />,
    iconColor: 'blue',
  },
];

export interface TeamMemberData {
  id: number;
  name: string;
  title: string;
  image: string;
}

export const teamMembersData: TeamMemberData[] = [
  {
    id: 1,
    name: 'Jane Doe',
    title: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    id: 2,
    name: 'John Smith',
    title: 'Head of Engineering',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    id: 3,
    name: 'Emily White',
    title: 'Director of Product',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  },
  {
    id: 4,
    name: 'Michael Brown',
    title: 'Lead HR Consultant',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
];

