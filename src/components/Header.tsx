// File: src/components/Header.tsx
import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="bg-blue-900 border-b border-blue-800">
      <div className="container mx-auto px-4 py-8">
        {/* Centered Logo Section */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block group">
            {/* Large centered logo */}
            <div className="flex flex-col items-center gap-4">
              <img
                src="/fasting-clock-logo.svg"
                alt="Fasting Clock Logo"
                className="w-32 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24 lg:w-56 lg:h-28 transition-transform group-hover:scale-105"
              />
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                Fasting Clock
              </h1>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex items-center justify-center">
          <Link 
            href="/blog" 
            className="text-blue-200 hover:text-yellow-400 transition-colors text-lg font-medium px-6 py-2 rounded-lg hover:bg-blue-800"
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
