import React from "react";
import { motion } from "framer-motion";

const steps = ["Pending", "Accepted", "Completed"];

export default function BookingStatus({ status }) {
  const current = steps.indexOf(status);
  return (
    <div className="bg-white rounded-2xl p-4 mb-4 border">
      <h4 className="text-sm text-gray-600 mb-3">Booking Progress</h4>

      <div className="flex items-center gap-4">
        {steps.map((s, i) => {
          const active = i <= current;
          return (
            <div key={s} className="flex-1">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ backgroundColor: active ? "#4f46e5" : "#e6e7ee" }}
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold`}
                  transition={{ duration: 0.35 }}
                >
                  {i + 1}
                </motion.div>

                <div>
                  <div className={`${active ? "text-indigo-600 font-semibold" : "text-gray-500"}`}>{s}</div>
                  <div className="text-xs text-gray-400">{i === 0 ? "Waiting for provider" : i === 1 ? "Provider en route" : "Service completed"}</div>
                </div>
              </div>

              {i < steps.length - 1 && (
                <div className={`h-1 bg-${active ? "indigo-600" : "gray-200"} mt-3`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
