"use client";

import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link 
      href="/" 
      className={`flex items-center font-bold text-2xl ${className}`}
    >
      <span className="text-blue-500">Arbi</span>
      <span>Suite</span>
    </Link>
  );
} 