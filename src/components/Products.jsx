import React from 'react';

function getCurrency(locale) {
  const currencyMap = {
    'en-US': 'USD', 'en-GB': 'GBP', 'no': 'NOK', 'de': 'EUR', 'fr': 'EUR',
    'es': 'EUR', 'sv': 'SEK', 'da': 'DKK', 'ja': 'JPY', 'zh': 'CNY',
    'ko': 'KRW', 'ru': 'RUB', 'pl': 'PLN', 'cs': 'CZK', 'hu': 'HUF',
    'tr': 'TRY', 'ar': 'AED', 'pt': 'BRL', 'id': 'IDR', 'th': 'THB',
    'in': 'INR', 'it': 'EUR', 'fi': 'EUR', 'nl': 'EUR',
    'en-CA': 'CAD', 'en-AU': 'AUD', 'en-NZ': 'NZD', 'en-ZA': 'ZAR',
    'nb': 'NOK', 'nn': 'NOK', 'sv-SE': 'SEK', 'da-DK': 'DKK', 
    'de-CH': 'CHF', 'fr-CH': 'CHF', 'it-CH': 'CHF'
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

const products = [
  { name: 'Small Box', price: 1.5 },
  { name: 'Medium Box', price: 2.0 },
  { name: 'Large Box', price: 2.5 },
];

export default function Products() {
  const currencySymbol = getCurrencySymbol();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Products</h2>
      <ul className="space-y-2">
        {products.map((product, index) => (
          <li
            key={index}
            className="flex justify-between bg-white p-4 rounded shadow border border-gray-200"
          >
            <span>{product.name}</span>
            <span>
              {currencySymbol}
              {product.price.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
