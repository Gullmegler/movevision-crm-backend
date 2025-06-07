    };
    fetchCustomer();
  }, [id]);

  const formatTime = (dateStr) => {
    const date = new Date(dateStr);
    const locale = navigator.language;
    const isUS = locale === 'en-US';
    return date.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: '2-digit',
      hour12: isUS
    });
  };

  if (loading) return <div className="p-6">Loading customer profile...</div>;
  if (!customer) return <div className="p-6 text-red-500">Customer not found.</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6 bg-white border border-gray-200 rounded shadow">
      <h2 className="text-2xl font-bold">Customer Profile</h2>
      <div className="grid grid-cols-2 gap-4">
        <div><strong>Type:</strong> {customer.customerType}</div>
        <div><strong>Name:</strong> {customer.name}</div>
        <div><strong>Email:</strong> {customer.email}</div>
        <div><strong>Phone:</strong> {customer.phone}</div>
        <div><strong>Address:</strong> {customer.address}</div>
        <div><strong>Zip:</strong> {customer.zip}</div>
        <div><strong>City:</strong> {customer.city}</div>
        <div><strong>County/Fylke:</strong> {customer.county}</div>
        <div><strong>Country:</strong> {customer.country}</div>
        <div><strong>Lead Source:</strong> {customer.leadSource}</div>
        <div className="col-span-2"><strong>Access Conditions:</strong> {customer.accessNotes}</div>
      </div>

      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
        <h3 className="font-semibold mb-1">AI Advice</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>Estimated fixed price: ${customer.estimatedPrice ?? 'based on local averages'}</li>
          <li>Compare with other movers in your area</li>
          <li>Access conditions: {customer.accessNotes || 'not specified'}</li>
        </ul>
      </div>

      <CustomerLog customerId={id} />
    </div>
  );
}

