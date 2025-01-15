import { useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "../config/api"; // Centralized API base URL
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

// Define the expected structure for Kraken API response
interface PriceResponse {
  price: string;
}

const Dashboard = () => {
  // State for Kraken data
  const [krakenPrice, setKrakenPrice] = useState<string>("");
  const [error, setError] = useState<string | null>(null); // Error state

  // Fetch Kraken Data
  useEffect(() => {
    const fetchKrakenPrice = async () => {
      try {
        const response = await axios.get<PriceResponse>(`${API_BASE_URL}/api/kraken-price`);
        setKrakenPrice(response.data?.price || "Unavailable");
      } catch (err) {
        setError("Failed to fetch Kraken data");
        console.error("Error fetching Kraken data:", err);
      }
    };

    fetchKrakenPrice();
    const interval = setInterval(fetchKrakenPrice, 60000); // Refresh every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Account Value Container */}
      <div className="bg-[#131313] p-6 rounded-lg shadow border border-gray-600">
        <h2 className="text-[#f9f9f9] text-lg font-semibold mb-4">Account Value</h2>
        <p className="text-[#f9f9f9]">Add your account value details here</p>
      </div>

      {/* Kraken Container */}
      <div className="bg-[#131313] p-6 rounded-lg shadow border border-gray-600">
        <h2 className="text-[#f9f9f9] text-lg font-semibold mb-4">Kraken Bitcoin Price</h2>
        {error ? (
          <p className="text-red-500 text-sm">{error}</p> // Display error message
        ) : (
          <p className="text-[#f9f9f9] text-xl">
            {krakenPrice ? `$${parseFloat(krakenPrice).toFixed(2)}` : "Loading..."}
          </p>
        )}
      </div>

      {/* Holdings Container */}
      <div className="bg-[#131313] p-6 rounded-lg shadow border border-gray-600">
        <h2 className="text-[#f9f9f9] text-lg font-semibold mb-4">Holdings</h2>
        <p className="text-[#f9f9f9]">Add your holdings details here</p>
      </div>

      {/* Placeholder Container */}
      <div className="bg-[#131313] p-6 rounded-lg shadow border border-gray-600">
        <h2 className="text-[#f9f9f9] text-lg font-semibold mb-4">Placeholder</h2>
        <p className="text-[#f9f9f9]">Add content here</p>
      </div>
    </div>
  );
};

export default Dashboard;
