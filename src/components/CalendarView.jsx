import React, { useState } from "react";

const initialJobs = [
  {
    id: 1,
    customer: "Siri Valdman",
    date: "2025-06-04",
    time: "08:30",
    vehicle: "BE 22970",
    price: 7500,
    status: "Utført",
    employee: "Frank Karlsen",
    label: "moving"
  },
  {
    id: 2,
    customer: "Joakim Engelsen",
    date: "2025-06-04",
    time: "14:00",
    vehicle: "BR 22971",
    price: 1400,
    status: "Godkjent",
    employee: "Frank Karlsen",
    label: "moving"
  }
];

const vehicleList = ["BE 22970", "BR 22971", "DS 10916", "DS 15433"];
const weekDates = ["2025-06-03", "2025-06-04", "2025-06-05", "2025-06-06", "2025-06-07"];

export default function CalendarView() {
  const [jobs, setJobs] = useState(initialJobs);

  const getJobs = (date, vehicle) =>
    jobs.filter((job) => job.date === date && job.vehicle === vehicle);

  const formatDate = (date) => {
    const options = { weekday: "short", day: "2-digit", month: "short" };
    return new Date(date).toLocaleDateString("no-NO", options);
  };

  return (
    <div className="p-4 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Kalender – Flytteoppdrag</h2>
      <div className="border rounded overflow-x-auto shadow bg-white">
        <table className="min-w-full table-auto text-sm">
          <thead>
            <tr>
              <th className="bg-orange-600 text-white px-4 py-2">FLYTTEBIL</th>
              {weekDates.map((date) => (
                <th key={date} className="bg-orange-600 text-white px-4 py-2 text-center">
                  {formatDate(date)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {vehicleList.map((vehicle) => (
              <tr key={vehicle} className="border-t border-gray-200">
                <td className="bg-gray-50 px-4 py-2 font-semibold">{vehicle}</td>
                {weekDates.map((date) => (
                  <td key={`${vehicle}-${date}`} className="p-2 align-top">
                    {getJobs(date, vehicle).map((job) => (
                      <div
                        key={job.id}
                        className={`mb-2 p-2 rounded text-xs shadow border-l-4 ${
                          job.status === "Godkjent"
                            ? "border-orange-500 bg-orange-100"
                            : "border-green-600 bg-green-100"
                        }`}
                      >
                        <div className="font-bold">#{job.id} {job.customer}</div>
                        <div>{job.time} • Kr {job.price.toLocaleString()}</div>
                        <div>{job.employee} • {job.label}</div>
                        <div className="text-gray-600">{job.status}</div>
                      </div>
                    ))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

