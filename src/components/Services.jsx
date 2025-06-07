import React from 'react';

const services = [
  { id: 1, name: 'Moving Labor', price: 65.0, unit: 'per hour' },
  { id: 2, name: 'Packing Service', price: 55.0, unit: 'per hour' },
  { id: 3, name: 'Storage Service', price: 200.0, unit: 'per month' },
  { id: 4, name: 'Furniture Disassembly', price: 40.0, unit: 'per item' },
  { id: 5, name: 'Waste Removal', price: 100.0, unit: 'per load' },
  { id: 6, name: 'Piano Moving', price: 300.0, unit: 'per item' },
  { id: 7, name: 'Move-out Cleaning', price: 150.0, unit: 'per service' },
  { id: 8, name: 'Other', price: 0.0, unit: 'custom' }
];

function getCurrency(locale) {
  const currencyMap = {
    'en-US': 'USD', 'en-GB': 'GBP', 'no': 'NOK', 'de': 'EUR', 'fr': 'EUR',
    'es': 'EUR', 'sv': 'SEK', 'da': 'DKK', 'ja': 'JPY', 'zh': 'CNY',
    'ko': 'KRW', 'ru': 'RUB', 'pl': 'PLN', 'cs': 'CZK', 'hu': 'HUF',
    'tr': 'TRY', 'ar': 'AED', 'pt': 'BRL', 'id': 'IDR', 'th': 'THB',
    'in': 'INR', 'it': 'EUR', 'fi': 'EUR', 'nl': 'EUR',
    'en-CA': 'CAD', 'en-AU': 'AUD', 'en-NZ': 'NZD', 'en-ZA': 'ZAR',
    'nb': 'NOK', 'nn': 'NOK', 'sv-SE': 'SEK', 'da-DK': 'DKK', 'de-CH': 'CHF', 'fr-CH': 'CHF', 'it-CH': 'CHF'
  };
  const match = Object.keys(currencyMap).find(key => locale.startsWith(key));
  return currencyMap[match] || 'USD';
}

function getCurrencySymbol() {
  const locale = navigator.language || 'en-US';
  const currency = getCurrency(locale);
  return new Intl.NumberFormat(locale, { style: 'currency', currency })
    .formatToParts(0)
    .find(part => part.type === 'currency').value;
}

const currencySymbol = getCurrencySymbol();

export default function Services() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Services Offered</h2>
      <div className="overflow-auto shadow rounded bg-white">
        <table className="min-w-full text-sm table-auto">
          <thead className="bg-gray-100 text-left text-gray-600">
            <tr>
              <th className="px-4 py-2">Service</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Unit</th>
            </tr>
          </thead>
          <tbody>
            {services.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{currencySymbol}{item.price.toFixed(2)}</td>
                <td className="px-4 py-2">{item.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
