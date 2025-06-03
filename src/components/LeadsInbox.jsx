import React, { useState } from "react";

const mockLeads = [
  { id: 1, name: "Emma Olsen", phone: "91234567", date: "2025-06-05", status: "pending" },
  { id: 2, name: "Lars Berg", phone: "99887766", date: "2025-06-06", status: "approved" },
  { id: 3, name: "Unknown", phone: "********", date: "2025-06-07", status: "spam" },
];

const statusColors = {
  pending: "bg-yellow-200 text-yellow-800",
  approved: "bg-green-200 text-green-800",
  spam: "bg-red-200 text-red-800",
};

export default function LeadsInbox() {
  const [leads, setLeads] = useState(mockLeads);

  const handleStatusChange = (id, newStatus) => {
    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === id ? { ...lead, status: newStatus } : lead
      )
    );
  };

  const handleDelete = (id) => {
    setLeads((prev) => prev.filter((lead) => lead.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Incoming AI Survey Leads</h2>
      <div className="overflow-x-auto shadow rounded bg-white border">
        <table className="w-full table-auto text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 text-left">Navn</th>
              <th className="p-3 text-left">Telefon</th>
              <th className="p-3">Dato</th>
              <th className="p-3">Status</th>
              <th className="p-3">Handling</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-t hover:bg-orange-50">
                <td className="p-3">{lead.name}</td>
                <td className="p-3">{lead.phone}</td>
                <td className="p-3 text-center">{lead.date}</td>
                <td className="p-3 text-center">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[lead.status]}`}>
                    {lead.status === "pending"
                      ? "På vent"
                      : lead.status === "approved"
                      ? "Godkjent"
                      : "Spam"}
                  </span>
                </td>
                <td className="p-3 flex flex-wrap gap-1 justify-center">
                  <button
                    className="px-2 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700"
                    onClick={() => handleStatusChange(lead.id, "approved")}
                  >
                    Godkjenn
                  </button>
                  <button
                    className="px-2 py-1 bg-yellow-500 text-white text-xs rounded hover:bg-yellow-600"
                    onClick={() => handleStatusChange(lead.id, "pending")}
                  >
                    På vent
                  </button>
                  <button
                    className="px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600"
                    onClick={() => handleStatusChange(lead.id, "spam")}
                  >
                    Spam
                  </button>
                  <button
                    className="px-2 py-1 bg-gray-500 text-white text-xs rounded hover:bg-gray-600"
                    onClick={() => handleDelete(lead.id)}
                  >
                    Slett
                  </button>
                </td>
              </tr>
            ))}
            {leads.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 p-4">
                  Ingen leads funnet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

