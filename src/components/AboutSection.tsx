import { Instagram, Facebook } from 'lucide-react';

export function AboutSection() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white/80 rounded-3xl p-8 shadow-lg">
        <h2 className="text-[#4a6741] mb-6">About Studio Ghibli</h2>
        
        <div className="space-y-6 text-[#6b8464]">
          <p>
            Studio Ghibli is a legendary Japanese animation studio founded in 1985 by directors 
            Hayao Miyazaki and Isao Takahata, along with producer Toshio Suzuki. The studio has 
            created some of the most beloved and critically acclaimed animated films in cinema history.
          </p>
          
          <p>
            Known for their breathtaking hand-drawn animation, imaginative storytelling, and deep 
            environmental and humanist themes, Studio Ghibli films have captured the hearts of 
            audiences worldwide. From the whimsical adventures of My Neighbor Totoro to the epic 
            fantasy of Princess Mononoke and the magical journey of Spirited Away, each film offers 
            a unique and enchanting experience.
          </p>
          
          <div className="bg-[#e8f5e3] rounded-2xl p-6 mt-8">
            <h3 className="text-[#4a6741] mb-4">Notable Achievements</h3>
            <ul className="space-y-2 text-[#6b8464]">
              <li>• Spirited Away won the Academy Award for Best Animated Feature in 2003</li>
              <li>• Multiple films received Academy Award nominations</li>
              <li>• The Boy and the Heron won the Academy Award for Best Animated Feature in 2024</li>
              <li>• Recognized worldwide for artistic excellence and storytelling</li>
              <li>• Films celebrated for their environmental messages and strong characters</li>
            </ul>
          </div>
          
          <p>
            The name "Ghibli" comes from the Italian word for a hot desert wind, reflecting the 
            studio's mission to "blow a new wind through the anime industry." Over the decades, 
            Studio Ghibli has certainly achieved this goal, inspiring countless artists and 
            filmmakers around the world.
          </p>

          <div className="bg-[#e8f5e3] rounded-2xl p-6 mt-8">
            <h3 className="text-[#4a6741] mb-4">Follow Studio Ghibli</h3>
            <div className="flex gap-4 justify-center">
              <a
                href="https://www.instagram.com/ghibliusa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#7a9871] text-white rounded-full hover:bg-[#6b8464] transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://x.com/GhibliUSA?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#7a9871] text-white rounded-full hover:bg-[#6b8464] transition-colors"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>X (Twitter)</span>
              </a>
              <a
                href="https://www.facebook.com/GhibliUSA/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#7a9871] text-white rounded-full hover:bg-[#6b8464] transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}