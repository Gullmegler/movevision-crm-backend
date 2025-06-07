import React from 'react';
import Sidebar from './components/Sidebar';
import AppRoutes from './Routes';

export default function App() {
  // Her kan du senere hente fra innlogget bruker
  const currentUser = {
    name: 'Frank Karlsen',
    role: 'admin', // endre til 'user' for vanlige flyttebyrå-brukere
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
