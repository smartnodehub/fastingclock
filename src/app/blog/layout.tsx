import Link from "next/link";

export const metadata = {
  title: "Free Fasting Timer Tips | FastingClock.com",
  description: "Unlock intermittent fasting success with our free fasting timer insights and fasting clock strategies. Expert tips for better health—start learning today!",
};

interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Blog Header */}
      <header className="border-b border-gray-700 bg-gray-800">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors group">
              <div className="relative">
                <img
                  src="/fasting-clock-logo.svg"
                  alt="Fasting Clock Logo"
                  className="w-16 h-8 sm:w-20 sm:h-10 transition-transform group-hover:scale-105"
                />
              </div>
              <span className="text-lg sm:text-xl font-bold">← Back to Fasting Clock</span>
            </Link>
            <h1 className="text-xl sm:text-2xl font-bold">Fasting Blog</h1>
          </nav>
        </div>
      </header>

      {/* Blog Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Blog Footer */}
      <footer className="border-t border-gray-700 bg-gray-800 mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-gray-400">
          <p>&copy; 2025 Fasting Clock. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
