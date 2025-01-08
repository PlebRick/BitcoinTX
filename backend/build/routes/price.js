export default async function priceRoutes(fastify) {
    // GET /api/price - Fetch current Bitcoin price
    fastify.get('/api/price', async (request, reply) => {
        // Placeholder: replace this with real API integration (e.g., CoinGecko)
        return { price: 42000 }; // Example price
    });
}
