export default function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ color: 'orange' }}>✅ React funker!</h1>
      <p>Siden er ikke lenger blank 🎉</p>
    </div>
  );
}
import React from 'react';
import CalendarView from './components/CalendarView';
import './index.css';

function App() {
  return (
    <div className="flex min-h-screen font-sans text-sm">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white flex flex-col justify-between">
        <div>
          <div className="text-2xl font-bold p-4 text-orange-500">Move Vision CRM</div>
          <nav className="px-4 space-y-2 mt-4">
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

      {/* Main */}
      <main className="flex-1 bg-orange-50 p-6 overflow-auto">
        <h1 className="text-xl font-semibold mb-4">Calendar – Moving Jobs</h1>
        <CalendarView />
      </main>
    </div>
  );
}

export default App;
>>>>>>> a3ee08d9 (Update frontend layout and vite config)
