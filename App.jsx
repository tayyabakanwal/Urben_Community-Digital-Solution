import { Routes, Route, Link } from "react-router-dom";
import ServicesList from "./pages/ServicesList";
import BookingPage from "./pages/BookingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-indigo-600 text-white p-4 shadow">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Urban Service Booking</h1>
          <nav className="space-x-4">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesList />} />
          <Route path="/book/:id" element={<BookingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </main>
    </div>
  );
}
