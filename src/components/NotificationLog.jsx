import React from 'react';

const logs = [
  { id: 1, type: "status", message: "Job #2031 marked as completed", time: "10:42 AM" },
  { id: 2, type: "system", message: "Invoice #556 was sent to emma@movevision.io", time: "09:15 AM" },
  { id: 3, type: "lead", message: "New lead from movevision.io", time: "Yesterday" },
  { id: 4, type: "user", message: "John Doe updated vehicle info", time: "June 5" },
  { id: 5, type: "calendar", message: "Job moved from June 6 to June 7", time: "June 4" },
];

const typeColor = {
  status: "text-green-700",
  system: "text-blue-700",
  lead: "text-purple-700",
  user: "text-yellow-700",
  calendar: "text-red-700"
};

export default function NotificationLog() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Activity Log</h2>
      <div className="bg-white rounded shadow divide-y">
        {logs.map((log) => (
          <div key={log.id} className="p-4 flex justify-between items-center hover:bg-gray-50">
            <div>
              <p className={`text-sm font-medium ${typeColor[log.type]}`}>{log.message}</p>
              <p className="text-xs text-gray-500">{log.type}</p>
            </div>
            <span className="text-xs text-gray-400">{log.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
