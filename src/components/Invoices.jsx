import React from 'react';

const invoices = [
  {
    id: 'INV-1001',
    customer: 'John Doe',
    amount: 1200.5,
    dueDate: '2025-06-20',
    status: 'Paid'
  },
  {
    id: 'INV-1002',
    customer: 'Jane Smith',
    amount: 980,
    dueDate: '2025-06-22',
    status: 'Unpaid'
  },
  {
    id: 'INV-1003',
    customer: 'Acme Corp',
    amount: 450,
    dueDate: '2025-06-25',
    status: 'Overdue'
  }
];

function getCurrency(locale) {
  const currencyMap = {
    'en-US': 'USD', 'en-GB': 'GBP', 'no': 'NOK', 'de': 'EUR', 'fr': 'EUR',
    'es': 'EUR', 'sv': 'SEK', 'da': 'DKK', 'ja': 'JPY', 'zh': 'CNY',
    'ko': 'KRW', 'ru': 'RUB', 'pl': 'PLN', 'cs': 'CZK', 'hu': 'HUF',
    'tr': 'TRY', 'ar': 'AED', 'pt': 'BRL', 'id': 'IDR', 'th': 'THB',
    'in': 'INR', 'it': 'EUR', 'fi': 'EUR', 'nl': 'EUR'
  };
  const match = Object.keys(currencyMap).find(key => locale.startsWith(key));
  return currencyMap[match] || 'USD';
}

function formatCurrency(amount) {
  const locale = navigator.language || 'en-US';
  const currency = getCurrency(locale);
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency
  }).format(amount);
}

export default function Invoices() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Invoices</h2>
      <div className="overflow-auto rounded bg-white shadow">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-4 py-2 text-left">Invoice ID</th>
              <th className="px-4 py-2 text-left">Customer</th>
              <th className="px-4 py-2 text-left">Amount</th>
              <th className="px-4 py-2 text-left">Due Date</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="border-t">
                <td className="px-4 py-2">{invoice.id}</td>
                <td className="px-4 py-2">{invoice.customer}</td>
                <td className="px-4 py-2">{formatCurrency(invoice.amount)}</td>
                <td className="px-4 py-2">{invoice.dueDate}</td>
                <td className={`px-4 py-2 ${invoice.status === 'Paid' ? 'text-green-600' : invoice.status === 'Overdue' ? 'text-red-600' : 'text-yellow-600'}`}>
                  {invoice.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
