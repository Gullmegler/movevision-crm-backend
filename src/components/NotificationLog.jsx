import React from 'react';

const logs = [
  {
    id: 1,
    type: "job",
    action: "marked job #2031 as completed",
    by: "John Doe",
    time: "2025-06-06T15:42:00Z",
  },
  {
    id: 2,
    type: "invoice",
    action: "sent invoice #556 to emma@movevision.io",
    by: "Emma Olsen",
    time: "2025-06-06T09:15:00Z",
  },
  {
    id: 3,
    type: "lead",
    action: "registered new lead from movevision.io",
    by: "Frank Karlsen",
    time: "2025-06-05T13:10:00Z",
  },
  {
    id: 4,
    type: "user",
    action: "updated company information",
    by: "Admin",
    time: "2025-06-04T17:55:00Z",
  },
];

const typeColor = {
  job: "text-green-700",
  invoice: "text-blue-700",
  lead: "text-purple-700",
  user: "text-yellow-700",
  calendar: "text-red-700",
};

const typeIcon = {
  job: "📦",
  invoice: "💰",
  lead: "📥",
  user: "👤",
  calendar: "📅",
};

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

export default function NotificationLog() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Activity Log</h2>
      <div className="bg-white rounded shadow divide-y border border-blue-100">
        {logs.map((log) => (
          <div
            key={log.id}
            className="p-4 flex justify-between items-start hover:bg-gray-50"
          >
            <div>
              <p className={`text-sm font-medium ${typeColor[log.type]}`}>
                {typeIcon[log.type]} <strong>{log.by}</strong> {log.action}
              </p>
              <p className="text-xs text-gray-500 capitalize">{log.type}</p>
            </div>
            <span className="text-xs text-gray-400 mt-1">{formatDateTime(log.time)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
