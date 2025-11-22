const NetworkGraph = () => {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g stroke="#00D9FF" strokeWidth="1.5" className="opacity-60">
        <line x1="80" y1="100" x2="150" y2="120" />
        <line x1="150" y1="120" x2="220" y2="100" />
        <line x1="150" y1="120" x2="180" y2="180" />
        <line x1="220" y1="100" x2="280" y2="130" />
        <line x1="280" y1="130" x2="320" y2="200" />
        <line x1="180" y1="180" x2="250" y2="220" />
        <line x1="250" y1="220" x2="320" y2="200" />
        <line x1="100" y1="200" x2="150" y2="250" />
        <line x1="150" y1="250" x2="220" y2="280" />
        <line x1="220" y1="280" x2="280" y2="260" />
        <line x1="280" y1="260" x2="320" y2="200" />
        <line x1="80" y1="100" x2="100" y2="200" />
        <line x1="150" y1="120" x2="100" y2="200" />
        <line x1="220" y1="100" x2="250" y2="220" />
      </g>

      <g>
        <circle cx="80" cy="100" r="8" fill="#00D9FF" className="animate-pulse" />
        <circle cx="150" cy="120" r="10" fill="#00D9FF" className="animate-pulse delay-75" />
        <circle cx="220" cy="100" r="8" fill="#00D9FF" className="animate-pulse delay-150" />
        <circle cx="280" cy="130" r="9" fill="#00D9FF" className="animate-pulse delay-200" />
        <circle cx="320" cy="200" r="12" fill="#00D9FF" className="animate-pulse delay-300" />
        <circle cx="180" cy="180" r="7" fill="#00D9FF" className="animate-pulse delay-500" />
        <circle cx="250" cy="220" r="9" fill="#00D9FF" className="animate-pulse delay-700" />
        <circle cx="100" cy="200" r="8" fill="#00D9FF" className="animate-pulse delay-1000" />
        <circle cx="150" cy="250" r="7" fill="#00D9FF" className="animate-pulse delay-75" />
        <circle cx="220" cy="280" r="8" fill="#00D9FF" className="animate-pulse delay-150" />
        <circle cx="280" cy="260" r="9" fill="#00D9FF" className="animate-pulse delay-200" />
      </g>
    </svg>
  );
};

export default NetworkGraph;

