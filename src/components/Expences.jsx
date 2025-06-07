import React from 'react';

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

const expenses = [
  { id: 1, category: 'Fuel', amount: 120.75, date: '2025-06-05' },
  { id: 2, category: 'Tolls', amount: 34.50, date: '2025-06-06' },
  { id: 3, category: 'Packing Supplies', amount: 89.90, date: '2025-06-07' },
  { id: 4, category: 'Vehicle Maintenance', amount: 205.00, date: '2025-06-07' },
];

export default function Expenses() {
  const currencySymbol = getCurrencySymbol();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Expenses</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2 border-b">#</th>
              <th className="text-left px-4 py-2 border-b">Category</th>
              <th className="text-left px-4 py-2 border-b">Amount</th>
              <th className="text-left px-4 py-2 border-b">Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((exp) => (
              <tr key={exp.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{exp.id}</td>
                <td className="px-4 py-2 border-b">{exp.category}</td>
                <td className="px-4 py-2 border-b">
                  {currencySymbol}
                  {exp.amount.toFixed(2)}
                </td>
                <td className="px-4 py-2 border-b">{exp.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
