import { useEffect, useState } from "react";
import { getProviders } from "../api/providersApi";
import ProviderCard from "../components/ProviderCard";
import FiltersBar from "../components/FiltersBar";

export default function ServicesList() {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProviders();
        setProviders(data);
      } catch (err) {
        console.error("Error fetching providers:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p className="p-10 text-gray-500">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <FiltersBar />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {providers.map((p) => (
          <ProviderCard key={p.id} provider={p} />
        ))}
      </div>
    </div>
  );
}
