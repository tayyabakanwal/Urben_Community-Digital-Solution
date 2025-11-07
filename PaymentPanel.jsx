import React, { useState } from "react";

export default function PaymentPanel({ amount, onPay }) {
  const [method, setMethod] = useState("wallet");

  const payNow = () => {
    // dummy simulate payment
    onPay({ method, amount });
  };

  return (
    <div className="bg-white p-5 rounded-2xl border mt-6">
      <h3 className="text-lg font-semibold mb-3">Payment</h3>

      <div className="space-y-3">
        <label className="flex items-center gap-3">
          <input type="radio" name="pay" checked={method === "wallet"} onChange={() => setMethod("wallet")} />
          <div>
            <div className="font-medium">Wallet (Dummy)</div>
            <div className="text-xs text-gray-500">Use your app wallet balance</div>
          </div>
        </label>

        <label className="flex items-center gap-3">
          <input type="radio" name="pay" checked={method === "cod"} onChange={() => setMethod("cod")} />
          <div>
            <div className="font-medium">Cash on Delivery</div>
            <div className="text-xs text-gray-500">Pay the provider in cash</div>
          </div>
        </label>

        <label className="flex items-center gap-3">
          <input type="radio" name="pay" checked={method === "card"} onChange={() => setMethod("card")} />
          <div>
            <div className="font-medium">Credit/Debit Card</div>
            <div className="text-xs text-gray-500">Basic card form</div>
          </div>
        </label>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-500">Total</div>
          <div className="text-xl font-semibold">Rs {amount}</div>
        </div>

        <button onClick={payNow} className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
          Pay Rs {amount}
        </button>
      </div>
    </div>
  );
}
