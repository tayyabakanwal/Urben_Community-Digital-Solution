import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProviderById } from "../api/providersApi";
import { createBooking } from "../api/bookingApi";
import BookingForm from "../components/BookingForm";
import PaymentPanel from "../components/PaymentPanel";
import BookingStatus from "../components/BookingStatus";

export default function BookingPage() {
  const { id } = useParams();
  const [provider, setProvider] = useState(null);
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    async function fetchProvider() {
      const data = await getProviderById(id);
      setProvider(data);
    }
    fetchProvider();
  }, [id]);

  const handleBookingSubmit = async (formData) => {
    const newBooking = await createBooking({
      providerId: id,
      ...formData,
    });
    setBooking(newBooking);
  };

  if (!provider) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">{provider.name}</h2>

      {!booking ? (
        <BookingForm onSubmit={handleBookingSubmit} />
      ) : (
        <>
          <BookingStatus status={booking.status} />
          <PaymentPanel booking={booking} />
        </>
      )}
    </div>
  );
}
