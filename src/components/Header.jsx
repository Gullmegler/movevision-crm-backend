import React from 'react';

export default function Header() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', month: 'short', day: 'numeric'
  });

  return (
    <header className="bg-white px-6 py-4 border-b border-gray-200 flex justify-between items-center">
      <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600">{today}</span>
        <img
          src="https://via.placeholder.com/32"
          alt="user"
          className="w-8 h-8 rounded-full border"
        />
      </div>
    </header>
  );
}
