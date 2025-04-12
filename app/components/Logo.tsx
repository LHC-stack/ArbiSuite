"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link 
        href="/" 
        className={`flex items-center font-bold text-2xl ${className}`}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Arbi</span>
        <span className="text-white">Suite</span>
      </Link>
    </motion.div>
  );
};

export default Logo; 