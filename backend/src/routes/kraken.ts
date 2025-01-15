import { FastifyInstance } from "fastify";
import axios from "axios";

interface KrakenResponse {
  result: {
    XXBTZUSD: {
      c: [string, string]; // Current price and other details
    };
  };
}

async function krakenRoutes(server: FastifyInstance) {
  server.get("/api/kraken-price", async (request, reply) => {
    try {
      const response = await axios.get<KrakenResponse>("https://api.kraken.com/0/public/Ticker", {
        params: { pair: "XBTUSD" }, // XBT = Bitcoin, USD = US Dollar
      });

      const price = response.data.result?.XXBTZUSD?.c[0] ?? "Unavailable"; // Current price
      reply.send({ price });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.message);
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
        }
      } else {
        console.error("Unknown error:", error);
      }
      reply.status(500).send({ error: "Failed to fetch Kraken price data" });
    }
  });
}

export default krakenRoutes;
