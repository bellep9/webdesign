export function TixieDustLogo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer glow */}
      <circle cx="50" cy="50" r="48" fill="#ffd966" opacity="0.15"/>
      
      {/* Main ticket shape */}
      <rect x="20" y="30" width="60" height="40" rx="4" fill="#f4e8d0"/>
      
      {/* Ticket perforation circles on left */}
      <circle cx="20" cy="35" r="2" fill="#7a9871"/>
      <circle cx="20" cy="42" r="2" fill="#7a9871"/>
      <circle cx="20" cy="49" r="2" fill="#7a9871"/>
      <circle cx="20" cy="56" r="2" fill="#7a9871"/>
      <circle cx="20" cy="63" r="2" fill="#7a9871"/>
      
      {/* Ticket perforation circles on right */}
      <circle cx="80" cy="35" r="2" fill="#7a9871"/>
      <circle cx="80" cy="42" r="2" fill="#7a9871"/>
      <circle cx="80" cy="49" r="2" fill="#7a9871"/>
      <circle cx="80" cy="56" r="2" fill="#7a9871"/>
      <circle cx="80" cy="63" r="2" fill="#7a9871"/>
      
      {/* Divider line */}
      <line x1="55" y1="32" x2="55" y2="68" stroke="#7a9871" strokeWidth="1.5" strokeDasharray="3,2"/>
      
      {/* Film strip icon on ticket */}
      <rect x="28" y="42" width="18" height="16" rx="1" fill="#6b9862"/>
      <rect x="30" y="44" width="14" height="12" fill="#8fb584"/>
      <line x1="30" y1="50" x2="44" y2="50" stroke="#6b9862" strokeWidth="1"/>
      <line x1="37" y1="44" x2="37" y2="56" stroke="#6b9862" strokeWidth="1"/>
      
      {/* Text lines on ticket stub */}
      <line x1="60" y1="40" x2="74" y2="40" stroke="#7a9871" strokeWidth="2" strokeLinecap="round"/>
      <line x1="60" y1="48" x2="72" y2="48" stroke="#7a9871" strokeWidth="2" strokeLinecap="round"/>
      <line x1="60" y1="56" x2="74" y2="56" stroke="#7a9871" strokeWidth="2" strokeLinecap="round"/>
      
      {/* Magical sparkles around ticket */}
      <g fill="#ffd966">
        <path d="M15 20 L16 24 L20 25 L16 26 L15 30 L14 26 L10 25 L14 24 Z"/>
        <path d="M85 20 L86 23 L89 24 L86 25 L85 28 L84 25 L81 24 L84 23 Z"/>
        <path d="M88 75 L89 77 L91 78 L89 79 L88 81 L87 79 L85 78 L87 77 Z"/>
        <path d="M12 75 L13 77 L15 78 L13 79 L12 81 L11 79 L9 78 L11 77 Z"/>
        <circle cx="25" cy="22" r="1.5"/>
        <circle cx="75" cy="22" r="1.5"/>
        <circle cx="22" cy="78" r="1.5"/>
        <circle cx="78" cy="75" r="1.5"/>
      </g>
      
      {/* White highlights on sparkles */}
      <g fill="#fff" opacity="0.9">
        <circle cx="15" cy="20" r="1"/>
        <circle cx="85" cy="20" r="1"/>
        <circle cx="88" cy="75" r="1"/>
        <circle cx="12" cy="75" r="1"/>
      </g>
    </svg>
  );
}