import React from "react";

export default function Sidebar() {
  const menuItems = [
    "Dashboard",
    "AI Surveys",
    "Moving Jobs",
    "Calendar",
    "Vehicles",
    "Employees",
    "Invoicing",
    "Logs",
    "Configuration",
  ];

  return (
    <div className="bg-black text-white w-64 h-screen flex flex-col justify-between fixed">
      <div>
        <div className="text-2xl font-bold text-center py-4 border-b border-gray-700">
          Move Vision
        </div>
        <ul className="mt-6 space-y-1">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="px-6 py-3 hover:bg-orange-500 cursor-pointer transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-6 py-4 border-t border-gray-700">
        <div className="flex items-center space-x-3">
          <img
            src="https://via.placeholder.com/32"
            alt="Profile"
            className="rounded-full w-8 h-8"
          />
          <div>
            <p className="text-sm font-semibold">John Doe</p>
            <p className="text-xs text-gray-400">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}
