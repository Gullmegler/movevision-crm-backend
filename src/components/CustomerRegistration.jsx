import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CustomerRegistration() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: '',
    county: '',
    country: '',
    accessNotes: '',
    leadSource: '',
    customerType: 'Private'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (!response.ok) throw new Error('Failed to register customer');

      const data = await response.json();
      navigate(`/customer/${data.id}`); // Redirect to customer profile page
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4 max-w-xl mx-auto bg-white shadow rounded border border-gray-200">
      <h2 className="text-xl font-bold">New Customer Registration</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <select name="customerType" value={form.customerType} onChange={handleChange} className="border p-2 rounded col-span-2">
          <option value="Private">Private Customer</option>
          <option value="Business">Business / Company</option>
        </select>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="border p-2 rounded" required />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="border p-2 rounded" required />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="border p-2 rounded" required />
        <input name="address" placeholder="Address" value={form.address} onChange={handleChange} className="border p-2 rounded" required />
        <input name="zip" placeholder="Zip Code" value={form.zip} onChange={handleChange} className="border p-2 rounded" required />
        <input name="city" placeholder="City" value={form.city} onChange={handleChange} className="border p-2 rounded" required />
        <input name="county" placeholder="County / Fylke" value={form.county} onChange={handleChange} className="border p-2 rounded" />
        <input name="country" placeholder="Country" value={form.country} onChange={handleChange} className="border p-2 rounded" required />
        <textarea name="accessNotes" placeholder="Access Conditions (stairs, ferry, etc.)" value={form.accessNotes} onChange={handleChange} className="border p-2 rounded col-span-2" rows={2} />
        <input name="leadSource" placeholder="Lead Source (AI Survey, Website, Phone...)" value={form.leadSource} onChange={handleChange} className="border p-2 rounded col-span-2" required />
      </div>

      <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Register Customer</button>
    </form>
  );
}
