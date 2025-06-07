import React from 'react';

const vehicles = [
  { id: 1, name: "Box Truck 01", plate: "CA12345", capacity: "1050 cu ft", status: "available" },
  { id: 2, name: "Sprinter Van 02", plate: "TX67890", capacity: "420 cu ft", status: "in use" },
  { id: 3, name: "Trailer 03", plate: "NY13579", capacity: "1765 cu ft", status: "maintenance" },
];

const statusColor = {
  available: "bg-green-100 text-green-800",
  "in use": "bg-yellow-100 text-yellow-800",
  maintenance: "bg-red-100 text-red-800",
};

export default function Vehicles() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Fleet Vehicles (US Units)</h2>
      <div className="overflow-auto shadow rounded bg-white">
        <table className="min-w-full text-sm table-auto">
          <thead className="bg-gray-100 text-left text-gray-600">
            <tr>
              <th className="px-4 py-2">Vehicle</th>
              <th className="px-4 py-2">License Plate</th>
              <th className="px-4 py-2">Capacity</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id} className="border-t">
                <td className="px-4 py-2">{vehicle.name}</td>
                <td className="px-4 py-2">{vehicle.plate}</td>
                <td className="px-4 py-2">{vehicle.capacity}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${statusColor[vehicle.status]}`}>
                    {vehicle.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
