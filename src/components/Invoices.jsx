import React from 'react';

const invoices = [
  { id: 1, customer: "John Doe", date: "2025-06-01", amount: 4500, status: "paid" },
  { id: 2, customer: "Jane Smith", date: "2025-06-03", amount: 7800, status: "unpaid" },
  { id: 3, customer: "Bob Lee", date: "2025-06-05", amount: 3200, status: "paid" },
  { id: 4, customer: "Emma Olsen", date: "2025-06-06", amount: 2100, status: "unpaid" },
];

const statusColor = {
  paid: "bg-green-100 text-green-800",
  unpaid: "bg-red-100 text-red-800"
};

export default function Invoices() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Invoices Overview</h2>
      <div className="overflow-auto shadow rounded">
        <table className="min-w-full table-auto bg-white text-sm">
          <thead className="bg-gray-100 text-left text-gray-600">
            <tr>
              <th className="px-4 py-2">Invoice ID</th>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Amount (USD)</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="border-t">
                <td className="px-4 py-2">{invoice.id}</td>
                <td className="px-4 py-2">{invoice.customer}</td>
                <td className="px-4 py-2">{invoice.date}</td>
                <td className="px-4 py-2">${invoice.amount.toLocaleString()}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${statusColor[invoice.status]}`}>
                    {invoice.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
