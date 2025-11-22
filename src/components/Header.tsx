import { headerData } from '../data.tsx';

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  const displayTitle = title || headerData.title;
  const displaySubtitle = subtitle || headerData.subtitle;

  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-subheading font-bold text-gray-800 mb-4 sm:mb-6">
          {displayTitle}
        </h1>
        <p className="text-base sm:text-lg lg:text-xl font-body text-gray-600">
          {displaySubtitle}
        </p>
      </div>
    </div>
  );
};

export default Header;

