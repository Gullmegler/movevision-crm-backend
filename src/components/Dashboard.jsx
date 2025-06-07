import React, { useEffect, useState } from 'react';

export default function Dashboard({ isAdmin }) {
  const [aiAdvice, setAiAdvice] = useState('');
  const [adminStats, setAdminStats] = useState(null);

  useEffect(() => {
    // Dynamisk AI Advice (kan senere kobles mot backend)
    const adviceSamples = [
      'Remember to assign a truck for job #2032.',
      'Review the invoice totals for last week.',
      '3 jobs have not been marked as completed.',
      'Customer data incomplete on 2 leads.',
      'Check for missing price estimates in customers list.',
    ];
    const random = Math.floor(Math.random() * adviceSamples.length);
    setAiAdvice(adviceSamples[random]);

    if (isAdmin) {
      // Simulerte admin-tall (erstatt med API senere)
      setAdminStats({
        companies: 14,
        users: 37,
        leadsThisWeek: 26,
        invoicesCreated: 18,
        crmSubscribers: 8,
        surveySubscribers: 12,
      });
    }
  }, [isAdmin]);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>

      {/* AI Advice */}
      <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded shadow-sm">
        <h2 className="text-lg font-semibold text-orange-700">AI Advice</h2>
        <p className="text-gray-700 mt-1">{aiAdvice}</p>
      </div>

      {/* Admin overview */}
      {isAdmin && adminStats && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white rounded shadow p-4 border border-gray-200">
            <h3 className="text-sm text-gray-500">Companies</h3>
            <p className="text-2xl font-bold">{adminStats.companies}</p>
          </div>
          <div className="bg-white rounded shadow p-4 border border-gray-200">
            <h3 className="text-sm text-gray-500">Users</h3>
            <p className="text-2xl font-bold">{adminStats.users}</p>
          </div>
          <div className="bg-white rounded shadow p-4 border border-gray-200">
            <h3 className="text-sm text-gray-500">Leads (this week)</h3>
            <p className="text-2xl font-bold">{adminStats.leadsThisWeek}</p>
          </div>
          <div className="bg-white rounded shadow p-4 border border-gray-200">
            <h3 className="text-sm text-gray-500">Invoices Created</h3>
            <p className="text-2xl font-bold">{adminStats.invoicesCreated}</p>
          </div>
          <div className="bg-white rounded shadow p-4 border border-gray-200">
            <h3 className="text-sm text-gray-500">AI Survey</h3>
            <p className="text-2xl font-bold">{adminStats.surveySubscribers}</p>
          </div>
          <div className="bg-white rounded shadow p-4 border border-gray-200">
            <h3 className="text-sm text-gray-500">AI Survey + CRM</h3>
            <p className="text-2xl font-bold">{adminStats.crmSubscribers}</p>
          </div>
        </div>
      )}
    </div>
  );
}
