import React, { useState } from 'react';

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

const invoices = [
  {
    id: 1,
    customer: 'John Doe',
    amount: 299.99,
    status: 'Paid',
    method: 'Bank Card',
    date: '2025-06-07'
  },
  {
    id: 2,
    customer: 'Alice Smith',
    amount: 180.00,
    status: 'Unpaid',
    method: 'Mobile Payment',
    date: '2025-06-06'
  },
  {
    id: 3,
    customer: 'Carlos Mendez',
    amount: 459.00,
    status: 'Paid',
    method: 'Bank Transfer',
    date: '2025-06-05'
  },
  {
    id: 4,
    customer: 'Emma Watson',
    amount: 89.50,
    status: 'Paid',
    method: 'Cash',
    date: '2025-06-04'
  },
];

export default function Invoices() {
  const currencySymbol = getCurrencySymbol();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Invoices</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2 border-b">Invoice #</th>
              <th className="text-left px-4 py-2 border-b">Customer</th>
              <th className="text-left px-4 py-2 border-b">Amount</th>
              <th className="text-left px-4 py-2 border-b">Status</th>
              <th className="text-left px-4 py-2 border-b">Method</th>
              <th className="text-left px-4 py-2 border-b">Date</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">#{invoice.id}</td>
                <td className="px-4 py-2 border-b">{invoice.customer}</td>
                <td className="px-4 py-2 border-b">
                  {currencySymbol}
                  {invoice.amount.toFixed(2)}
                </td>
                <td className="px-4 py-2 border-b">
                  <span className={
                    invoice.status === 'Paid'
                      ? 'text-green-600 font-semibold'
                      : 'text-red-600 font-semibold'}>
                    {invoice.status}
                  </span>
                </td>
                <td className="px-4 py-2 border-b">{invoice.method}</td>
                <td className="px-4 py-2 border-b">{invoice.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
