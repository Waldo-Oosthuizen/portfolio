import React from 'react';

export default function AnimatedSvg() {
  return (
    <div className="relative w-10 h-10">
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        {/* Line 1 */}
        <path
          d="M5 12H18"
          stroke="#F4F4F9" // Outer light stroke (background)
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M5 12H18"
          stroke="#1e1e1e" // Inner dark stroke (main line)
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Line 2 */}
        <path
          d="M5 17H11"
          stroke="#F4F4F9"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M5 17H11"
          stroke="#1e1e1e"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Line 3 */}
        <path
          d="M5 7H15"
          stroke="#F4F4F9"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M5 7H15"
          stroke="#1e1e1e"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
