import { Tooltip } from './Tooltip';

interface NavigationProps {
  activeTab: 'home' | 'about' | 'scheduling' | 'tickets';
  onTabChange: (tab: 'home' | 'about' | 'scheduling' | 'tickets') => void;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav className="bg-[#4a6741] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 py-4">
          <Tooltip content="Return to welcome page">
            <button
              onClick={() => onTabChange('home')}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === 'home'
                  ? 'bg-[#e8f5e3] text-[#4a6741]'
                  : 'text-[#e8f5e3] hover:bg-[#5a7751]'
              }`}
            >
              Home
            </button>
          </Tooltip>
          <Tooltip content="Learn about Studio Ghibli">
            <button
              onClick={() => onTabChange('about')}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === 'about'
                  ? 'bg-[#e8f5e3] text-[#4a6741]'
                  : 'text-[#e8f5e3] hover:bg-[#5a7751]'
              }`}
            >
              About Studio Ghibli
            </button>
          </Tooltip>
          <Tooltip content="View all movie screenings">
            <button
              onClick={() => onTabChange('scheduling')}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === 'scheduling'
                  ? 'bg-[#e8f5e3] text-[#4a6741]'
                  : 'text-[#e8f5e3] hover:bg-[#5a7751]'
              }`}
            >
              Scheduling
            </button>
          </Tooltip>
          <Tooltip content="View your booked tickets">
            <button
              onClick={() => onTabChange('tickets')}
              className={`px-6 py-2 rounded-full transition-all ${
                activeTab === 'tickets'
                  ? 'bg-[#e8f5e3] text-[#4a6741]'
                  : 'text-[#e8f5e3] hover:bg-[#5a7751]'
              }`}
            >
              My Tickets
            </button>
          </Tooltip>
        </div>
      </div>
    </nav>
  );
}