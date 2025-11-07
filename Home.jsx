// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";

const heroImg = "/images/community-hero.jpg";
const sideImg = "/images/side-illustration.png";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800 overflow-hidden">

      {/* 🌇 Hero Section */}
      <section
        className="relative flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${heroImg})`,
        }}
      >
        {/* Text Content */}
        <div className="relative z-10 max-w-xl text-white space-y-6">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Connect with Trusted <br /> Neighbors & Experts
          </motion.h1>

          <p className="text-lg text-gray-200 max-w-md leading-relaxed">
            Hire local professionals, exchange skills, or offer your services
            within your community — securely and easily.
          </p>

          <div className="flex gap-4">
            <button className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 shadow">
              Get Started
            </button>
            <button className="bg-transparent border border-white text-white font-semibold px-6 py-2 rounded-lg hover:bg-white/20 transition">
              Explore Services
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <motion.img
          src={sideImg}
          alt="Community illustration"
          className="relative z-10 w-[320px] md:w-[420px] mt-10 md:mt-0 drop-shadow-2xl"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </section>

      {/* ⚙️ How It Works */}
      <section className="py-20 text-center bg-white">
        <h2 className="text-3xl font-bold mb-12 text-indigo-700">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            { title: "1. Sign Up", desc: "Create your account as a seeker or provider." },
            { title: "2. Browse & Connect", desc: "Search skilled neighbors near your area." },
            { title: "3. Book Securely", desc: "Confirm and pay easily — stress-free!" },
          ].map((item, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <div className="shadow-lg hover:shadow-2xl transition-all text-center p-6 bg-white rounded-xl border border-indigo-100">
                <h3 className="text-xl font-semibold mb-3 text-indigo-600">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 💡 Categories */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-12 text-indigo-700">Popular Categories</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Electrician",
            "Tutor",
            "Plumber",
            "Designer",
            "Cook",
            "Mechanic",
            "Cleaner",
            "Beautician",
          ].map((cat, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl cursor-pointer border border-indigo-100"
              whileHover={{ scale: 1.07 }}
            >
              <p className="font-semibold text-indigo-600">{cat}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 💬 Testimonials */}
      <section className="py-20 text-center bg-white">
        <h2 className="text-3xl font-bold mb-12 text-indigo-700">What Our Users Say</h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {[
            {
              name: "Ali Khan",
              text: "Booked a plumber in minutes — service was amazing!",
            },
            {
              name: "Sara Malik",
              text: "Love this platform! I found great clients in my neighborhood.",
            },
            { name: "Usman Ahmed", text: "Secure and easy. Highly recommended!" },
          ].map((t, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <div className="text-center p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-3 text-indigo-600">{t.name}</h3>
                <p className="text-gray-600">{t.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Join the Neighborhood Today</h2>
        <p className="mb-6">
          Offer your skills or find trusted services nearby. Safe, simple, and local!
        </p>
        <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 py-2 rounded-lg shadow">
          Sign Up Now
        </button>
      </section>
    </div>
  );
};

export default Home;
