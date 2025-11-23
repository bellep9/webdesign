import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-[#7a9871] shadow-md">
      <div className="container mx-auto px-4 py-6 max-w-3xl">
        <div className="flex items-center gap-3">
          <Sparkles className="w-8 h-8 text-[#f4e8d0]" />
          <h1 className="text-[#f4e8d0]">Tixie Dust</h1>
        </div>
        <p className="text-[#e8f5e3] mt-2">Studio Ghibli Cinema Experience</p>
      </div>
    </header>
  );
}