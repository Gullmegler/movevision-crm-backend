import React from "react";

export default function Calendar() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Move Vision CRM</h1>
      <p className="mb-4">Welcome to the CRM dashboard for moving companies.</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>📋 Leads from AI Survey</li>
        <li>📅 Calendar view with job status</li>
        <li>🚛 Vehicle & employee management</li>
        <li>🧾 Invoicing & job tracking</li>
      </ul>
      <p className="mt-6 text-sm italic">More features coming soon…</p>
    </div>
  );
}

