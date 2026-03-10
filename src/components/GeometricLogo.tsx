import React from 'react';

export default function GeometricLogo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-pulse"
    >
      <polygon points="30,50 10,50 20,30 30,40" fill="#0B3954" className="animate-float-1" />
      <polygon points="40,50 30,40 40,20 50,35" fill="#0F5C73" className="animate-float-2" />
      <polygon points="50,50 50,35 60,15 70,40" fill="#1C7C7D" className="animate-float-3" />
      <polygon points="70,50 70,40 80,25 90,50" fill="#2FAE7A" className="animate-float-1" />
      <polygon points="30,40 40,20 50,35" fill="#0F5C73" opacity="0.8" className="animate-float-2" />
      <polygon points="50,35 60,15 70,40" fill="#1C7C7D" opacity="0.8" className="animate-float-3" />
      <polygon points="40,20 50,10 60,15" fill="#9EDC6F" className="animate-float-1" />
      <polygon points="20,30 30,40 25,20" fill="#0B3954" opacity="0.6" className="animate-float-2" />
    </svg>
  );
}
