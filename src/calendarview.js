import React from "react";
import { FaUser, FaTruck } from "react-icons/fa";

const jobs = [
  {
    id: 1,
    customer: "John Doe",
    date: "2025-06-03",
    time: "08:30",
    vehicle: "TRUCK 001",
    price: "7500",
    status: "Utført",
    employeeCount: 2,
    truckCount: 1,
    label: "Private, Supplies",
  },
  {
    id: 2,
    customer: "Jane Smith",
    date: "2025-06-04",
    time: "14:00",
    vehicle: "TRUCK 002",
    price: "1400",
    status: "Godkjent",
    employeeCount: 3,
    truckCount: 2,
    label: "Commercial, Waste",
  },
];

const vehicleList = ["TRUCK 001", "TRUCK 002", "TRUCK 003"];
const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const today = new Date("2025-06-03T00:00:00");
const days = [...Array(7)].map((_, i) => {
  const d = new Date(today);
  d.setDate(d.getDate() + i);
  return d.toISOString().split("T")[0];
});

const getStatusColor = (status) => {
  switch (status) {
    case "Godkjent":
      return "bg-orange-500 text-white";
    case "Utført":
      return "bg-green-500 text-white";
    case "På vent":
      return "bg-yellow-400 text-black";
    case "Spam":
    case "Slett":
      return "bg-gray-400 text-white";
    default:
      return "bg-white text-black";
  }
};

const renderIcons = (icon, count) => {
  return (
    <div className="flex gap-1 text-white text-xs">
      {[...Array(count)].map((_, i) => (
        <span key={i}>{icon}</span>
      ))}
    </div>
  );
};

const CalendarView = () => {
  return (
    <div className="min-h-screen bg-orange-50 text-sm font-sans">
      <div className="flex">
        <div className="w-48 bg-black text-white p-4 min-h-screen">
          <img src="/logo.png" alt="Move Vision CRM" className="w-32 mb-6" />
          <nav className="space-y-2">
            {["Dashboard","Calendar","Leads","Invoices","Settings"].map((item, i) => (
              <div
                key={i}
                className="hover:bg-orange-500 p-2 rounded cursor-pointer"
              >
                {item}
              </div>
            ))}
          </nav>
          <div className="absolute bottom-6 text-white text-xs left-4">
            <span className="font-semibold">Superadmin</span>
          </div>
        </div>

        <div className="flex-1 p-6">
          <h2 className="text-xl font-bold mb-4">Calendar – Moving Jobs</h2>

          <div className="overflow-x-auto">
            <div className="grid grid-cols-[12rem_repeat(7,minmax(8rem,1fr))]">
              <div className="bg-white border p-2 font-bold text-center">Vehicle</div>
              {days.map((day, i) => (
                <div
                  key={i}
                  className="bg-white border p-2 font-bold text-center"
                >
                  {weekdays[i]}<br />{day.slice(8, 10)}. {day.slice(5, 7)}
                </div>
              ))}
              {vehicleList.map((vehicle, i) => (
                <React.Fragment key={vehicle}>
                  <div className="bg-white border font-medium p-2">
                    <div className="flex items-center gap-2">
                      <FaTruck className="text-gray-700" /> {vehicle}
                    </div>
                  </div>
                  {days.map((day, di) => {
                    const jobsForDay = jobs.filter(
                      (job) => job.vehicle === vehicle && job.date === day
                    );
                    return (
                      <div key={di} className="border min-h-[6rem] p-1 space-y-1">
                        {jobsForDay.map((job) => (
                          <div
                            key={job.id}
                            className={`rounded p-1 text-xs shadow-sm ${getStatusColor(
                              job.status
                            )}`}
                          >
                            <div className="font-semibold">
                              #{job.id} {job.customer}
                            </div>
                            <div className="text-xs">{job.time} • Kr {job.price}</div>
                            <div className="italic text-xs">{job.status}</div>
                            <div className="flex gap-1 items-center">
                              {renderIcons(<FaUser />, job.employeeCount)}
                              {renderIcons(<FaTruck />, job.truckCount)}
                            </div>
                            <div className="text-[10px] text-gray-700">{job.label}</div>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
