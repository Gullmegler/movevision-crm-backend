import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AppRoutes from './routes';

export default function App() {
  return (
    <div className="flex h-screen font-sans text-sm">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 bg-gray-50 p-6 overflow-auto">
          <AppRoutes />
        </main>
      </div>
    </div>
  );
}
