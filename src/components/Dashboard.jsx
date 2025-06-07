import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [aiAdvice, setAiAdvice] = useState('');
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch('/api/dashboard')
      .then((res) => res.json())
      .then((data) => {
        setStats(data.stats);
        setAiAdvice(data.aiAdvice);
      });
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Total Leads" value={stats?.leads ?? '...'} />
        <StatCard label="Jobs Completed" value={stats?.completedJobs ?? '...'} />
        <StatCard label="Pending Invoices" value={stats?.pendingInvoices ?? '...'} />
        <StatCard label="Vehicles in Use" value={stats?.activeVehicles ?? '...'} />
      </div>

      <div className="bg-orange-50 p-4 border-l-4 border-orange-500 rounded shadow-sm">
        <h2 className="text-lg font-semibold">AI Advice</h2>
        <p className="text-sm text-gray-700 mt-1">{aiAdvice || 'Checking latest suggestions...'}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <QuickLink to="/leads" label="Manage Leads" />
        <QuickLink to="/invoices" label="View Invoices" />
        <QuickLink to="/calendar" label="Calendar" />
        <QuickLink to="/company" label="Company Settings" />
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="bg-white rounded border p-4 shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}

function QuickLink({ to, label }) {
  return (
    <Link to={to} className="block bg-white border p-4 rounded shadow hover:bg-orange-50">
      <h3 className="text-md font-medium text-orange-600">{label}</h3>
    </Link>
  );
}
