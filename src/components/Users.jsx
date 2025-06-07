import React from 'react';

const users = [
  { id: 1, name: "Emma Olsen", email: "emma@movevision.io", role: "Admin", status: "active" },
  { id: 2, name: "Lars Berg", email: "lars@movevision.io", role: "User", status: "invited" },
  { id: 3, name: "Nora Lie", email: "nora@movevision.io", role: "User", status: "suspended" },
];

const statusColor = {
  active: "bg-green-100 text-green-800",
  invited: "bg-yellow-100 text-yellow-800",
  suspended: "bg-red-100 text-red-800",
};

export default function Users() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Users</h2>
      <div className="overflow-auto shadow rounded bg-white">
        <table className="min-w-full text-sm table-auto">
          <thead className="bg-gray-100 text-left text-gray-600">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${statusColor[user.status]}`}>
                    {user.status}
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
