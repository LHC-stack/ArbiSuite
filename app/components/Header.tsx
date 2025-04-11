"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="w-full py-6 border-b border-border">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
        </div>
        
        <div>
          <Link 
            href="#early-access" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors"
          >
            Получить ранний доступ
          </Link>
        </div>
      </div>
    </header>
  );
} 