import Fastify from 'fastify';
import { Sequelize } from 'sequelize';
import transactionRoutes from './routes/transactions';
import { initTransactionModel } from './models/TransactionModel';

// Initialize Fastify server
const server = Fastify();

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

// Example route
server.get('/', async (request, reply) => {
  return { message: 'Hello, BitcoinTX!' };
});

// Register transaction routes
(async function registerRoutes() {
  try {
    await server.register(transactionRoutes);
  } catch (err) {
    console.error('Error registering routes:', err);
    process.exit(1);
  }
})();

// Start the server
server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running at ${address}`);
});
