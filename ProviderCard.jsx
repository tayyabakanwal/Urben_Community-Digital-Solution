import React from "react";
import { motion } from "framer-motion";

export default function ProviderCard({ provider, onBook }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(99,102,241,0.12)" }}
      transition={{ duration: 0.35 }}
      className="bg-white rounded-2xl p-4 border"
    >
      <div className="flex gap-4">
        <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center text-xl font-semibold text-gray-600">
          {provider.name.split(" ")[0][0]}
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">{provider.name}</h3>
              <div className="text-sm text-gray-500 mt-1">{provider.skills.join(" · ")}</div>
            </div>
            <div className="text-right">
              <div className="text-indigo-600 font-semibold">Rs {provider.price}/hr</div>
              <div className="text-xs text-gray-400">{provider.location}</div>
            </div>
          </div>

          <p className="mt-3 text-sm text-gray-600">{provider.desc}</p>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 font-semibold">★ {provider.rating}</span>
              {provider.badges.map((b) => (
                <span key={b} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded">
                  {b}
                </span>
              ))}
            </div>

            <button
              onClick={() => onBook(provider)}
              className="bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-indigo-700"
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
