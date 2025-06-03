import React from "react";

const vehicles = [
  { reg: "NY1234", icon: "🚚" },
  { reg: "LD5678", icon: "🚛" },
  { reg: "LV9101", icon: "🚐" },
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const jobs = [
  { day: "Mon", reg: "NY1234", customer: "Jane Smith", status: "confirmed", workers: 2 },
  { day: "Tue", reg: "LD5678", customer: "Alice Johnson", status: "pending", workers: 3 },
  { day: "Wed", reg: "LV9101", customer: "Bob Lee", status: "completed", workers: 4 },
];

const statusColor = {
  confirmed: "bg-orange-600",
  pending: "bg-blue-500",
  completed: "bg-green-600",
};

export default function Calendar() {
  const userIsSuperAdmin = true; // Sett via backend/session i real app
  const companyLogo = "/company-logo.png"; // Lastet opp via admin settings
  const moveVisionLogo = "/logo.png"; // Static branding

  return (
    <div className="min-h-screen bg-orange-100 p-4">
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <img src={moveVisionLogo} alt="Move Vision" className="h-10" />
          {userIsSuperAdmin && (
            <img src={companyLogo} alt="Company" className="h-8 rounded shadow" />
          )}
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Weekly Calendar</h1>
      </header>

      <div className="overflow-x-auto bg-white rounded shadow border">
        <table className="table-auto w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 w-36 text-left">Vehicle</th>
              {days.map((day, idx) => (
                <th key={idx} className="p-3 text-center w-48">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.reg} className="border-t">
                <td className="p-3 font-medium flex items-center gap-2">
                  <span className="text-xl">{vehicle.icon}</span> {vehicle.reg}
                </td>
                {days.map((day) => {
                  const job = jobs.find((j) => j.day === day && j.reg === vehicle.reg);
                  return (
                    <td key={day} className="p-2 align-top">
                      {job ? (
                        <div
                          className={`text-white p-2 rounded ${statusColor[job.status]} flex flex-col gap-1 shadow-sm`}
                        >
                          <span className="font-semibold">{job.customer}</span>
                          <span className="text-xs">👥 {job.workers}</span>
                          <div className="flex justify-end gap-1 text-xs">
                            <span>✏️</span>
                            <span>📨</span>
                          </div>
                        </div>
                      ) : (
                        <div className="text-gray-300 text-center">-</div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

