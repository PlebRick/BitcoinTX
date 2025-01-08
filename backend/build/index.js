import Fastify from 'fastify';
import dotenv from 'dotenv';
import transactionsRoutes from './routes/transactions.js';
import priceRoutes from './routes/price.js';
// Load environment variables from .env file
dotenv.config();
// Create a Fastify instance with logging enabled
const fastify = Fastify({ logger: true });
// Port configuration with fallback
const PORT = process.env.PORT || 3001;
// Register Routes
// Transactions API (handles Bitcoin transactions)
fastify.register(transactionsRoutes);
// Price API (fetches real-time Bitcoin price)
fastify.register(priceRoutes);
// Root Route
fastify.get('/', async (request, reply) => {
    return { message: 'Welcome to the BitcoinTX backend!' };
});
// Handle unknown routes (404 handler)
fastify.setNotFoundHandler((request, reply) => {
    reply.status(404).send({ error: 'Route not found' });
});
// Global Error Handler
fastify.setErrorHandler((error, request, reply) => {
    fastify.log.error(error); // Log the error for debugging
    reply.status(500).send({ error: 'Internal Server Error' });
});
// Start Server
const start = async () => {
    try {
        await fastify.listen({ port: Number(PORT) });
        console.log(`Server is running on http://localhost:${PORT}`);
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1); // Exit with error
    }
};
start();
