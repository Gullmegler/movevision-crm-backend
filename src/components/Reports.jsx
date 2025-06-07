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

const reportsData = [
  { title: 'Total Revenue', amount: 12850.45 },
  { title: 'Total Expenses', amount: 4920.25 },
  { title: 'Net Profit', amount: 7930.20 },
  { title: 'Jobs Completed', amount: 38, isNumeric: true },
  { title: 'Pending Invoices', amount: 6, isNumeric: true },
];

export default function Reports() {
  const currencySymbol = getCurrencySymbol();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Reports Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reportsData.map((item, idx) => (
          <div key={idx} className="bg-white p-4 rounded shadow border border-gray-200">
            <h3 className="text-sm text-gray-500 mb-1">{item.title}</h3>
            <p className="text-xl font-semibold text-gray-800">
              {item.isNumeric ? item.amount : `${currencySymbol}${item.amount.toFixed(2)}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
