import React from "react";

export default function Close() {
  return (
    <svg
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 hover:scale-75">
      <path
        d="M3 21.32L21 3.32001"
        stroke="#F4F4F9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="line line-1"
      />
      <path
        d="M3 3.32001L21 21.32"
        stroke="#F4F4F9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="line line-2"
      />
    </svg>
  );
}
