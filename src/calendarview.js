import React, { useState } from "react";
import { format } from "date-fns";

const CalendarView = ({ jobs, vehicles }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysToShow = [...Array(7)].map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return format(date, "yyyy-MM-dd");
  });

  return (
    <div className="bg-orange-50 text-black min-h-screen p-4">
      <header className="flex items-center justify-between mb-6">
        <img src="/logo.png" alt="Move Vision Logo" className="h-10" />
        <h1 className="text-2xl font-bold">Move Vision CRM - Calendar</h1>
      </header>

      <div className="grid grid-cols-[150px_repeat(7,_1fr)] gap-px bg-gray-300">
        <div className="bg-white font-bold text-center p-2">KJØRETØY</div>
        {daysToShow.map((day) => (
          <div key={day} className="bg-white font-bold text-center p-2">
            {format(new Date(day), "EEE dd/MM")}
          </div>
        ))}

        {vehicles.map((vehicle) => (
          <React.Fragment key={vehicle}>
            <div className="bg-white font-semibold text-center p-2">
              {vehicle}
            </div>
            {daysToShow.map((day) => {
              const jobsForDay = jobs.filter(
                (job) => job.vehicle === vehicle && job.date === day
              );
              return (
                <div
                  key={vehicle + day}
                  className="bg-gray-100 min-h-[100px] p-1"
                >
                  {jobsForDay.map((job) => (
                    <div
                      key={job.id}
                      className="bg-white border border-orange-300 p-1 text-sm mb-1 shadow-sm rounded"
                    >
                      <div className="font-semibold text-orange-700">
                        #{job.id} {job.customer}
                      </div>
                      <div className="text-gray-600 text-xs">
                        {job.time} - {job.price} kr
                      </div>
                      <div className="text-xs italic">{job.status}</div>
                      <div className="text-xs">{job.employee}</div>
                    </div>
                  ))}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
