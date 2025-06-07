import React, { useState } from 'react';

export default function ReviewRequest({ customerName = "Customer", onSubmit, googleReviewUrl }) {
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    if (score >= 7) {
      window.location.href = googleReviewUrl || "https://www.google.com/search?q=movevision+reviews";
    } else {
      alert("Thank you for your feedback!");
    }
    onSubmit?.(score);
  };

  if (submitted) {
    return (
      <div className="p-6 text-center bg-white rounded shadow max-w-md mx-auto">
        <h2 className="text-lg font-semibold mb-2">Thank you!</h2>
        <p className="text-gray-600">We truly appreciate your feedback and hope to serve you again in the future.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Rate Your Experience</h2>
      <p className="mb-4">
        Hi {customerName}, we hope everything went smoothly with your move.  
        We'd really appreciate it if you could rate us from <strong>1 to 10</strong>:
      </p>

      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {[...Array(10)].map((_, i) => {
          const value = i + 1;
          return (
            <button
              key={value}
              onClick={() => setScore(value)}
              className={`w-8 h-8 rounded-full text-sm font-medium border ${
                score === value ? 'bg-blue-600 text-white' : 'bg-gray-100'
              }`}
            >
              {value}
            </button>
          );
        })}
      </div>

      <button
        onClick={handleSubmit}
        className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={!score}
      >
        Submit Rating
      </button>
    </div>
  );
}
