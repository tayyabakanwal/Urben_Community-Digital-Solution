import React from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-emerald-400 rounded-lg flex items-center justify-center text-white font-bold">
              U
            </div>
            <div>
              <h1 className="text-lg font-semibold">Urban Service Booking</h1>
              <p className="text-xs text-gray-500">Book trusted local pros</p>
            </div>
          </div>

          <nav className="flex items-center gap-4">
            <Link to="/" className="text-sm text-indigo-600 hover:underline">Services</Link>
            <button className="hidden md:inline-flex items-center gap-2 bg-indigo-600 text-white text-sm px-3 py-2 rounded hover:bg-indigo-700">
              Wallet • Rs 0
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">{children}</main>

      
    </div>
  );
}
