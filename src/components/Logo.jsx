import React from 'react';

// ACKOIndia logo: a protective arch with a person-dot beneath it, in the brand violet.
export function LogoMark({ className = 'w-10 h-10', dark = false }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ackoArch" x1="10" y1="10" x2="30" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#c4b5fd" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="20" fill={dark ? '#1f2937' : '#111827'} />
      <path d="M11.500 30V20.500a8.500 8.500 0 0 1 17 0V30" stroke="url(#ackoArch)" strokeWidth="4.200" strokeLinecap="round" />
      <circle cx="20" cy="23.500" r="3" fill="#fff" />
    </svg>
  );
}

export default function Logo({ dark = false, href = '#' }) {
  return (
    <a href={href} className="flex items-center gap-2.5 group" aria-label="ACKOIndia home">
      <LogoMark dark={dark} className="w-10 h-10 group-hover:-translate-y-0.5 transition-transform duration-300" />
      <span className="leading-none">
        <span className={`block text-[23px] tracking-tight ${dark ? 'text-white' : 'text-gray-900'}`}>
          <span className="font-black">acko</span>
          <span className="font-medium text-gray-400">india</span>
        </span>
        <span className={`hidden sm:flex items-center gap-1.5 mt-1 text-[9px] font-bold tracking-[0.2em] uppercase ${dark ? 'text-violet-400' : 'text-[#6332ec]'}`}>
          <span className={`w-3 h-px ${dark ? 'bg-violet-400' : 'bg-[#6332ec]'}`}></span>Protected, simply
        </span>
      </span>
    </a>
  );
}
