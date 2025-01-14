// routes/transactions.ts
import { FastifyInstance } from 'fastify';
import {
  createTransaction,
  getTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction
} from '../controllers/transactions';

export default async function transactionRoutes(server: FastifyInstance) {
  // Create a new transaction
  server.post('/api/transactions', createTransaction);

  // Retrieve all transactions
  server.get('/api/transactions', getTransactions);

  // Retrieve a specific transaction by ID
  server.get('/api/transactions/:id', getTransactionById);

  // Update an existing transaction
  server.put('/api/transactions/:id', updateTransaction);

  // Delete a transaction
  server.delete('/api/transactions/:id', deleteTransaction);
}
