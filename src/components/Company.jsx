import React, { useState } from 'react';

export default function Company() {
  const [companyData, setCompanyData] = useState({
    name: "Move Vision",
    logoUrl: "https://via.placeholder.com/150x40?text=Move+Vision+Logo",
    reviewUrl: "https://g.page/r/your-review-id",
    address: "123 Main Street, Los Angeles, CA",
    email: "support@movevision.io",
    phone: "(555) 123-4567",
    orgNumber: "EIN: 12-3456789",
    iban: "US00BANK00000000001234",
    routing: "021000021",
    swift: "CHASUS33"
  });

  const handleChange = (e) => {
    setCompanyData({ ...companyData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Company settings saved successfully!");
    // TODO: Send data to backend or save in database
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Company Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Branding */}
        <div>
          <label className="block text-sm font-medium">Company Name</label>
          <input
            name="name"
            value={companyData.name}
            onChange={handleChange}
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Logo URL</label>
          <input
            name="logoUrl"
            value={companyData.logoUrl}
            onChange={handleChange}
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Google Review URL</label>
          <input
            name="reviewUrl"
            value={companyData.reviewUrl}
            onChange={handleChange}
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        <hr className="my-4" />

        {/* Invoice Info */}
        <h3 className="text-md font-semibold">Invoice Information</h3>

        <div>
          <label className="block text-sm font-medium">Address</label>
          <input
            name="address"
            value={companyData.address}
            onChange={handleChange}
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            name="email"
            value={companyData.email}
            onChange={handleChange}
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input
            name="phone"
            value={companyData.phone}
            onChange={handleChange}
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Org./EIN Number</label>
          <input
            name="orgNumber"
            value={companyData.orgNumber}
            onChange={handleChange}
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        <hr className="my-4" />

        {/* Bank Info */}
        <h3 className="text-md font-semibold">Banking Details</h3>

        <div>
          <label className="block text-sm font-medium">Bank Account / IBAN</label>
          <input
            name="iban"
            value={companyData.iban}
            onChange={handleChange}
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Routing Number</label>
          <input
            name="routing"
            value={companyData.routing}
            onChange={handleChange}
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">SWIFT / BIC</label>
          <input
            name="swift"
            value={companyData.swift}
            onChange={handleChange}
            className="w-full mt-1 border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
}
