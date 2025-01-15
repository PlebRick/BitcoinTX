// Import necessary modules
import Fastify from 'fastify';
import cors from '@fastify/cors';
import { Sequelize } from 'sequelize';
import krakenRoutes from './routes/kraken';
import { initTransactionModel } from './models/TransactionModel';
import axios from 'axios'; // Axios for API calls

// Initialize Fastify server
const server = Fastify();

// Register CORS
server.register(cors, {
  origin: 'http://localhost:5173', // Allow requests from the frontend
});

// Initialize Sequelize
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/bitcoinTX.sqlite',
});

// Initialize models
initTransactionModel(sequelize);

// Sync database
(async function syncDatabase() {
  try {
    await sequelize.sync();
    console.log('Database synced successfully.');
  } catch (err) {
    console.error('Error syncing database:', err);
    process.exit(1);
  }
})();

// Root route for server status
server.get('/', async (request, reply) => {
  return { message: 'Hello, BitcoinTX!' };
});

// Register routes
(async function registerRoutes() {
  try {
    await server.register(krakenRoutes); // Kraken-specific routes
  } catch (err) {
    console.error('Error registering routes:', err);
    process.exit(1);
  }
})();

// CoinGecko /api/price endpoint
server.get('/api/price', async (request, reply) => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart',
      {
        params: {
          vs_currency: 'usd', // Fetch data in USD
          days: 1, // Fetch data for the last 1 day
          interval: 'minute', // Fetch data at 1-minute intervals
        },
      }
    );

    // Validate and send the response data
    if (response.data && response.data.prices) {
      reply.send(response.data);
    } else {
      console.error('Invalid response structure:', response.data);
      reply.status(500).send({ error: 'Invalid data structure from CoinGecko' });
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
      }
    } else {
      console.error('Unknown error:', error);
    }
    reply.status(500).send({ error: 'Failed to fetch Bitcoin price data' });
  }
});

// Start the server
server.listen({ port: 3001 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running at ${address}`);
});
