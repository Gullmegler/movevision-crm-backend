import React from 'react';
import CalendarView from './components/CalendarView';

function App() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-4">
        <h2 className="text-xl font-bold mb-4">Move Vision CRM</h2>
        <ul className="space-y-2">
          <li className="hover:bg-orange-500 p-2 rounded cursor-pointer">Dashboard</li>
          <li className="hover:bg-orange-500 p-2 rounded cursor-pointer">Calendar</li>
          <li className="hover:bg-orange-500 p-2 rounded cursor-pointer">Leads</li>
          <li className="hover:bg-orange-500 p-2 rounded cursor-pointer">Invoices</li>
          <li className="hover:bg-orange-500 p-2 rounded cursor-pointer">Settings</li>
        </ul>
        {/* Profile (bottom) */}
        <div className="absolute bottom-4 left-4">
          <img src="/logo.png" alt="Move Vision" className="w-10 h-10 rounded-full mb-1" />
          <div className="text-sm">Superadmin</div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white p-6">
        <CalendarView />
      </main>
    </div>
  );
}

export default App;
