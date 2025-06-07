import React from 'react';

// Eksempel-logger (disse bør komme fra backend senere)
const logs = [
  { id: 1, type: "job", action: "marked as completed", by: "John Doe", time: "2025-06-06T15:32:00Z" },
  { id: 2, type: "invoice", action: "sent to customer", by: "Emma Olsen", time: "2025-06-06T09:10:00Z" },
  { id: 3, type: "lead", action: "created new AI Survey lead", by: "Frank Karlsen", time: "2025-06-05T17:20:00Z" },
  { id: 4, type: "user", action: "updated company info", by: "Admin", time: "2025-06-04T13:00:00Z" },
];

const typeIcon = {
  job: "📦",
  invoice: "💰",
  user: "👤",
  lead: "📥",
};

// Funksjon for lokal formattilpasning
function formatDateTime(isoTime) {
  const userLocale = navigator.language || "en-US";
  const usesAmPm = ["en-US", "en-CA", "en-AU"].includes(userLocale); // kan utvides
  const date = new Date(isoTime);

  const timeString = date.toLocaleTimeString(userLocale, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: usesAmPm,
  });

  const dateString = date.toLocaleDateString(userLocale, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return `${dateString} at ${timeString}`;
}

export default function NotificationLog() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Activity Log</h2>
      <div className="bg-white rounded shadow divide-y">
        {logs.map((log) => (
          <div key={log.id} className="p-4 flex justify-between items-center hover:bg-gray-50">
            <div>
              <p className="text-sm text-gray-800">
                {typeIcon[log.type]} <strong>{log.by}</strong> {log.action}
              </p>
              <p className="text-xs text-gray-500 capitalize">{log.type}</p>
            </div>
            <span className="text-xs text-gray-400">{formatDateTime(log.time)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
