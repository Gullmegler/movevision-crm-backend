import React from 'react';

const reportData = [
  { id: 1, label: 'Total Leads Today', value: 5 },
  { id: 2, label: 'Total Leads This Week', value: 28 },
  { id: 3, label: 'Total Leads This Month', value: 114 },
  { id: 4, label: 'Total Leads This Year', value: 932 },
  { id: 5, label: 'Invoices Sent', value: 75 },
  { id: 6, label: 'Paid Invoices', value: 61 },
  { id: 7, label: 'Total Revenue (est.)', value: 47820 },
  { id: 8, label: 'Expenses (reported)', value: 18420 },
  { id: 9, label: 'Active Customers', value: 219 },
  { id: 10, label: 'Lost Customers', value: 7 },
];

export default function Reports() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Reports Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reportData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow rounded p-4 border border-gray-200 hover:shadow-md"
          >
            <h3 className="text-sm text-gray-500 mb-1">{item.label}</h3>
            <p className="text-2xl font-semibold text-gray-800">
              {typeof item.value === 'number' && item.label.includes('Revenue')
                ? new Intl.NumberFormat(navigator.language || 'en-US', {
                    style: 'currency',
                    currency: new Intl.NumberFormat(navigator.language || 'en-US', {
                      style: 'currency',
                      currency: 'USD'
                    }).resolvedOptions().currency
                  }).format(item.value)
                : item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
