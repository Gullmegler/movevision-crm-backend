import React from 'react';

const products = [
  { id: 1, name: 'Small Box', price: 2.5, unit: 'per box' },
  { id: 2, name: 'Medium Box', price: 3.5, unit: 'per box' },
  { id: 3, name: 'Large Box', price: 4.5, unit: 'per box' },
  { id: 4, name: 'Wardrobe Boxes', price: 12.0, unit: 'per box' },
  { id: 5, name: 'Bubble Wrap', price: 25.0, unit: 'per roll' },
  { id: 6, name: 'Packing Paper', price: 15.0, unit: 'per pack' },
  { id: 7, name: 'Tape Rolls', price: 4.0, unit: 'per roll' },
  { id: 8, name: 'Mattress Covers', price: 10.0, unit: 'per cover' },
  { id: 9, name: 'TV Box', price: 25.0, unit: 'per box' },
  { id: 10, name: 'Furniture Pads', price: 8.0, unit: 'per pad' },
  { id: 11, name: 'Other', price: 0.0, unit: 'custom' }
];

export default function Products() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Moving Products</h2>
      <div className="overflow-auto shadow rounded bg-white">
        <table className="min-w-full text-sm table-auto">
          <thead className="bg-gray-100 text-left text-gray-600">
            <tr>
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Price (USD)</th>
              <th className="px-4 py-2">Unit</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">${item.price.toFixed(2)}</td>
                <td className="px-4 py-2">{item.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
