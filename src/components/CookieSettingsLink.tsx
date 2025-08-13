'use client';

export default function CookieSettingsLink() {
  const handleCookieSettings = () => {
    localStorage.removeItem('cookie-consent');
    window.location.reload();
  };

  return (
    <button 
      onClick={handleCookieSettings}
      className="text-gray-200 hover:text-yellow-400 transition-colors"
    >
      Cookie Settings
    </button>
  );
}
