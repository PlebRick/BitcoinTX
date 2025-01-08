import { FastifyInstance } from 'fastify';

export default async function priceRoutes(fastify: FastifyInstance) {
  // GET /api/price - Fetch current Bitcoin price
  fastify.get('/api/price', async (request, reply) => {
    // Placeholder: replace this with real API integration (e.g., CoinGecko)
    return { price: 42000 }; // Example price
  });
}
