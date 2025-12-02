export function HomeSection({ onTabChange }: { onTabChange: (tab: 'home' | 'about' | 'scheduling' | 'tickets') => void }) {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center">
        <div className="bg-white/80 rounded-3xl p-12 shadow-lg mb-8">
          <h2 className="text-[#4a6741] mb-6">Welcome to Tixie Dust</h2>
          <p className="text-[#6b8464] max-w-2xl mx-auto mb-8">
            Experience the enchanting world of Studio Ghibli on the big screen. 
            We bring you special screenings of beloved classics and recent masterpieces 
            from the legendary animation studio.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-[#e8f5e3] rounded-2xl p-6">
              <div className="text-4xl mb-3">🎬</div>
              <h3 className="text-[#4a6741] mb-2">24 Films</h3>
              <p className="text-[#6b8464]">
                From Nausicaä to The Boy and the Heron
              </p>
            </div>
            
            <div className="bg-[#e8f5e3] rounded-2xl p-6">
              <div className="text-4xl mb-3">🎫</div>
              <h3 className="text-[#4a6741] mb-2">Easy Booking</h3>
              <p className="text-[#6b8464]">
                Reserve your seats in just a few clicks
              </p>
            </div>
            
            <div className="bg-[#e8f5e3] rounded-2xl p-6">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-[#4a6741] mb-2">Magical Experience</h3>
              <p className="text-[#6b8464]">
                Immerse yourself in Ghibli's artistry
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/60 rounded-2xl p-6">
          <p className="text-[#6b8464] mb-3">
            Navigate to the{' '}
            <button 
              onClick={() => onTabChange('scheduling')}
              className="text-[#4a6741] hover:text-[#7a9871] underline cursor-pointer"
            >
              Scheduling
            </button>{' '}
            tab to view all available screenings and book your tickets today!
          </p>
          <p className="text-[#6b8464]">
            View all your bookings in the{' '}
            <button 
              onClick={() => onTabChange('tickets')}
              className="text-[#4a6741] hover:text-[#7a9871] underline cursor-pointer"
            >
              My Tickets
            </button>{' '}
            tab.
          </p>
        </div>
      </div>
    </main>
  );
}