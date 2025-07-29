// File: src/components/Header.tsx
import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="bg-blue-900 border-b border-blue-800">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo and Site Title */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative">
              {/* Logo with responsive sizing */}
              <img
                src="/fastingclock-logo-adsense-5to1.png"
                alt="Fasting Clock Logo"
                className="h-6 w-auto sm:h-8 md:h-10 lg:h-12 transition-transform group-hover:scale-105"
              />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                Fasting Clock
              </h1>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-4">
            <Link 
              href="/blog" 
              className="text-blue-200 hover:text-yellow-400 transition-colors text-sm sm:text-base font-medium"
            >
              Blog
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
