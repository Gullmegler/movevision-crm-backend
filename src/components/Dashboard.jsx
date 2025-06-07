import React, { useEffect, useState } from 'react';

function getCurrency(locale) {
  const currencyMap = {
    'en-US': 'USD', 'en-GB': 'GBP', 'no': 'NOK', 'de': 'EUR', 'fr': 'EUR',
    'es': 'EUR', 'sv': 'SEK', 'da': 'DKK', 'ja': 'JPY', 'zh': 'CNY',
    'ko': 'KRW', 'ru': 'RUB', 'pl': 'PLN', 'cs': 'CZK', 'hu': 'HUF',
    'tr': 'TRY', 'ar': 'AED', 'pt': 'BRL', 'id': 'IDR', 'th': 'THB',
    'in': 'INR', 'it': 'EUR', 'fi': 'EUR', 'nl': 'EUR',
    'en-CA': 'CAD', 'en-AU': 'AUD', 'en-NZ': 'NZD', 'en-ZA': 'ZAR',
    'nb': 'NOK', 'nn': 'NOK', 'sv-SE': 'SEK', 'da-DK': 'DKK', 
    'de-CH': 'CHF', 'fr-CH': 'CHF', 'it-CH': 'CHF'
  };
  const match = Object.keys(currencyMap).find(key => locale.startsWith(key));
  return currencyMap[match] || 'USD';
}

function getCurrencySymbol() {
  const locale = navigator.language || 'en-US';
  const currency = getCurrency(locale);
  return new Intl.NumberFormat(locale, { style: 'currency', currency })
    .formatToParts(0)
    .find(part => part.type === 'currency').value;
}

export default function Dashboard({ isAdmin }) {
  const [aiAdvice, setAiAdvice] = useState('');
  const [adminStats, setAdminStats] = useState(null);

  const currencySymbol = getCurrencySymbol();

  // Disse tallene bør hentes dynamisk i ekte system
  const todayLeads = 4;
  const weekLeads = 18;
  const monthLeads = 70;
  const yearLeads = 300;
  const totalRevenue = 12500.50;

  useEffect(() => {
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

      <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded shadow-sm">
        <h2 className="text-lg font-semibold text-orange-700">AI Advice</h2>
        <p className="text-gray-700 mt-1">{aiAdvice}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white shadow rounded p-4 text-center">
          <p className="text-sm text-gray-500">Leads Today</p>
          <p className="text-xl font-bold">{todayLeads}</p>
        </div>
        <div className="bg-white shadow rounded p-4 text-center">
          <p className="text-sm text-gray-500">This Week</p>
          <p className="text-xl font-bold">{weekLeads}</p>
        </div>
        <div className="bg-white shadow rounded p-4 text-center">
          <p className="text-sm text-gray-500">This Month</p>
          <p className="text-xl font-bold">{monthLeads}</p>
        </div>
        <div className="bg-white shadow rounded p-4 text-center">
          <p className="text-sm text-gray-500">This Year</p>
          <p className="text-xl font-bold">{yearLeads}</p>
        </div>
      </div>

      <div className="bg-white shadow rounded p-6 mt-6">
        <h3 className="text-lg font-semibold mb-2">Total Revenue</h3>
        <p className="text-3xl font-bold">{currencySymbol}{totalRevenue.toLocaleString()}</p>
      </div>

      {isAdmin && adminStats && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
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
