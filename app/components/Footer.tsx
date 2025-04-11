"use client";

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-xl font-bold">
              <span className="text-blue-500">Arbi</span>Suite
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Единая платформа для арбитража трафика и digital-маркетологов
            </p>
          </div>
          
          <div className="flex gap-4">
            <SocialLink href="https://t.me/arbisuite" icon="telegram" />
            <SocialLink href="https://twitter.com/arbisuite" icon="twitter" />
          </div>
        </div>
        
        <hr className="border-border my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} ArbiSuite. Все права защищены.
          </p>
          
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Условия использования
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
          
          <div className="text-sm">
            <a href="mailto:hello@arbisuite.io" className="text-muted-foreground hover:text-foreground transition-colors">
              hello@arbisuite.io
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface SocialLinkProps {
  href: string;
  icon: 'telegram' | 'twitter';
}

function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-10 h-10 bg-muted hover:bg-accent rounded-full flex items-center justify-center transition-colors"
    >
      {icon === 'telegram' ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.16-.04-.23-.02-.1.02-1.62 1.03-4.58 3.03-.43.3-.82.45-1.17.44-.39-.01-1.13-.22-1.68-.4-.68-.23-1.22-.35-1.17-.74.02-.2.3-.4.84-.6 3.28-1.43 5.47-2.37 6.58-2.83 3.13-1.32 3.77-1.55 4.2-1.56.09 0 .31.02.45.19.12.14.15.33.17.47-.01.06.01.25-.04.55z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
        </svg>
      )}
    </a>
  );
} 