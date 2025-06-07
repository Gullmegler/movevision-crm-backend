import React from 'react';

const customerLogs = [
  {
    id: 1,
    action: "Job marked as completed",
    by: "John Doe",
    time: "2025-06-06T15:32:00Z",
  },
  {
    id: 2,
    action: "Review request sent to customer",
    by: "Emma Olsen",
    time: "2025-06-06T15:40:00Z",
  },
  {
    id: 3,
    action: "Invoice #556 created",
    by: "Frank Karlsen",
    time: "2025-06-06T15:50:00Z",
  },
  {
    id: 4,
    action: "Phone number updated",
    by: "Admin",
    time: "2025-06-07T09:15:00Z",
  },
];

function formatDateTime(isoString) {
  const locale = navigator.language || "en-US";
  const usesAmPm = ["en-US", "en-CA", "en-AU"].includes(locale);
  const date = new Date(isoString);

  const time = date.toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: usesAmPm
  });

  const day = date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return `${day} at ${time}`;
}

export default function CustomerLog() {
  return (
    <div className="bg-white shadow rounded p-5 border border-gray-200 mt-6">
      <h3 className="text-lg font-semibold mb-3">Customer History Log</h3>
      <ul className="space-y-2 text-sm text-gray-800">
        {customerLogs.map((entry) => (
          <li key={entry.id} className="flex justify-between items-start border-b pb-2">
            <div>
              <p>{entry.action}</p>
              <p className="text-xs text-gray-500">By {entry.by}</p>
            </div>
            <span className="text-xs text-gray-400">{formatDateTime(entry.time)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
