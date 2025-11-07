import React, { useState } from "react";

export default function BookingForm({ provider, onSubmit }) {
  const [date, setDate] = useState("");
  const [hours, setHours] = useState(1);
  const [notes, setNotes] = useState("");

  const handleConfirm = () => {
    if (!date) return alert("Please select a date");
    onSubmit({ date, hours, notes });
  };

  return (
    <div className="bg-white p-5 rounded-2xl border">
      <h2 className="text-lg font-semibold mb-3">Book {provider.name}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <label className="block">
          <div className="text-xs text-gray-500 mb-1">Date</div>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full border rounded px-3 py-2" />
        </label>

        <label className="block">
          <div className="text-xs text-gray-500 mb-1">Hours</div>
          <input type="number" min="1" value={hours} onChange={(e) => setHours(Number(e.target.value))} className="w-full border rounded px-3 py-2" />
        </label>

        <label className="md:col-span-2 block">
          <div className="text-xs text-gray-500 mb-1">Notes (optional)</div>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full border rounded px-3 py-2" />
        </label>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-600">Rate: Rs {provider.price}/hr</div>
        <button onClick={handleConfirm} className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600">
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
