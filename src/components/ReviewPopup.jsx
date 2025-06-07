import React from 'react';

export default function ReviewPopup({ customerName, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Send vurderingsforespørsel?</h2>
        <p className="mb-4">
          Ønsker du å sende vurderingsforespørsel til <strong>{customerName}</strong>?
        </p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Nei
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Ja, send e-post
          </button>
        </div>
      </div>
    </div>
  );
}
