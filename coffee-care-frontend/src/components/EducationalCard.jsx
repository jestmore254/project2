import React from 'react';

function PaymentCard({ payment }) {
  const statusColors = {
    Paid: 'bg-green-500 text-white',
    Pending: 'bg-yellow-500 text-black',
    Failed: 'bg-red-500 text-white',
  };

  return (
    <div className="border rounded-lg shadow p-6 bg-white dark:bg-gray-800 transition hover:shadow-lg">
      <h3 className="text-xl font-bold mb-2">{payment.farmer}</h3>
      <p>Amount: ${payment.amount}</p>
      <p>Date: {payment.date}</p>
      <span
        className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold ${statusColors[payment.status]}`}
      >
        {payment.status}
      </span>
    </div>
  );
}

export default PaymentCard;
