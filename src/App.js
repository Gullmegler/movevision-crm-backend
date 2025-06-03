import React from 'react';
import CalendarView from './components/CalendarView';

function App() {
  return (
    <div className="flex min-h-screen text-sm font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white flex flex-col justify-between">
        <div>
          <div className="text-2xl font-bold p-4 text-orange-500">Move Vision CRM</div>
          <nav className="px-4 space-y-2">
            <button className="w-full text-left hover:bg-orange-500 p-2 rounded">Dashboard</button>
            <button className="w-full text-left hover:bg-orange-500 p-2 rounded">Calendar</button>
            <button className="w-full text-left hover:bg-orange-500 p-2 rounded">Leads</button>
            <button className="w-full text-left hover:bg-orange-500 p-2 rounded">Invoices</button>
            <button className="w-full text-left hover:bg-orange-500 p-2 rounded">Settings</button>
          </nav>
        </div>
        <div className="p-4 border-t border-gray-700">
          <img src="/logo.png" alt="Profile" className="w-10 h-10 rounded-full mb-1" />
          <div className="text-xs">Superadmin</div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-orange-50 p-6 overflow-auto">
        <h1 className="text-xl font-semibold mb-4">Kalender – Flytteoppdrag</h1>
        <CalendarView />
      </main>
    </div>
  );
}

export default App;
