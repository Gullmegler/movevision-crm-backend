import React, { useState } from 'react';

const vehicles = [
  {
    id: 1,
    name: 'TRUCK 001',
    plate: 'AB12345',
    gps: 'Enabled',
    capacity: '30 m³',
    driver: 'John Doe',
    status: 'Active'
  },
  {
    id: 2,
    name: 'TRUCK 002',
    plate: 'CD67890',
    gps: 'Disabled',
    capacity: '40 m³',
    driver: 'Anna Smith',
    status: 'In Service'
  },
  {
    id: 3,
    name: 'VAN 003',
    plate: 'EF24680',
    gps: 'Enabled',
    capacity: '15 m³',
    driver: 'Carlos Mendez',
    status: 'Active'
  }
];

export default function Vehicles() {
  const [vehicleList] = useState(vehicles);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Vehicles</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2 border-b">Name</th>
              <th className="text-left px-4 py-2 border-b">Plate</th>
              <th className="text-left px-4 py-2 border-b">GPS</th>
              <th className="text-left px-4 py-2 border-b">Capacity</th>
              <th className="text-left px-4 py-2 border-b">Driver</th>
              <th className="text-left px-4 py-2 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {vehicleList.map((vehicle) => (
              <tr key={vehicle.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{vehicle.name}</td>
                <td className="px-4 py-2 border-b">{vehicle.plate}</td>
                <td className="px-4 py-2 border-b">{vehicle.gps}</td>
                <td className="px-4 py-2 border-b">{vehicle.capacity}</td>
                <td className="px-4 py-2 border-b">{vehicle.driver}</td>
                <td className="px-4 py-2 border-b">
                  <span className={
                    vehicle.status === 'Active' ? 'text-green-600 font-semibold' :
                    vehicle.status === 'In Service' ? 'text-yellow-600 font-semibold' :
                    'text-gray-600'
                  }>
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
