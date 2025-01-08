import { FastifyInstance } from 'fastify';
import fetch from 'node-fetch';

// Define the response structure from CoinGecko API
interface CoinGeckoResponse {
  bitcoin: {
    usd: number;
  };
}

export default async function priceRoutes(fastify: FastifyInstance) {
  fastify.get('/api/price', async (request, reply) => {
    console.log("Price endpoint hit"); // Debugging log to ensure the route is working
    try {
      const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
      const data = (await res.json()) as CoinGeckoResponse;
      return { price: data.bitcoin.usd };
    } catch (err) {
      fastify.log.error(err); // Log the error for debugging
      return { error: 'Failed to fetch price' };
    }
  });
}
