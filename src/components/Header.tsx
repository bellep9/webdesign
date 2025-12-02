import { Sparkles } from 'lucide-react';
import { TixieDustLogo } from './TixieDustLogo';
import { Tooltip } from './Tooltip';

export function Header() {
  return (
    <header className="bg-[#7a9871] shadow-md">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <Tooltip content="Home" position="bottom">
            <div className="flex items-center gap-3 cursor-pointer">
              <TixieDustLogo className="w-14 h-14" />
              <div>
                <h1 className="text-3xl text-[#f4e8d0]">Tixie Dust</h1>
                <p className="text-[#e8f5e3] text-sm">Studio Ghibli Cinema</p>
              </div>
            </div>
          </Tooltip>
          <Tooltip content="Experience the magic" position="bottom">
            <Sparkles className="w-10 h-10 text-[#f4e8d0]" />
          </Tooltip>
        </div>
      </div>
    </header>
  );
}