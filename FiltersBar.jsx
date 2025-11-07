import React from "react";

export default function FiltersBar({ filter, setFilter }) {
  return (
    <div className="flex flex-col md:flex-row gap-3 items-center justify-between mb-6">
      <div className="flex-1">
        <input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search providers, e.g. electrician"
          className="w-full md:max-w-lg border rounded-lg px-4 py-2 text-sm shadow-sm"
        />
      </div>

      <div className="flex gap-2">
        <select className="border rounded-lg px-3 py-2 text-sm">
          <option>All categories</option>
          <option>Electrician</option>
          <option>Plumber</option>
          <option>Tutor</option>
        </select>
        <select className="border rounded-lg px-3 py-2 text-sm">
          <option>Any location</option>
          <option>Sector 3</option>
          <option>Sector 5</option>
        </select>
      </div>
    </div>
  );
}
