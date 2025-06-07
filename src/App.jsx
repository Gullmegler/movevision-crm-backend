import React from 'react';
import Sidebar from './components/Sidebar';
import AppRoutes from './Routes';

export default function App() {
  // You can later fetch this from the authenticated user context
  const currentUser = {
    name: 'Frank Karlsen',
    role: 'admin', // change to 'user' for moving companies
  };

  const isAdmin = currentUser.role === 'admin';

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar isAdmin={isAdmin} />
      <main className="flex-1 overflow-y-auto p-4">
        <AppRoutes />
      </main>
    </div>
  );
}
