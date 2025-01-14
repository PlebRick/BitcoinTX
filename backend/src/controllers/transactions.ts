// controllers/transactions.ts
import { FastifyReply, FastifyRequest } from 'fastify';
import { TransactionModel } from '../models/TransactionModel';

// Define input type for transactions
type TransactionInput = {
  type: string;
  amount: number;
  costBasis?: number;
  timestamp: Date;
};

// Create a new transaction
export async function createTransaction(
  request: FastifyRequest<{ Body: TransactionInput }>, 
  reply: FastifyReply
) {
  try {
    const newTransaction = await TransactionModel.create(request.body);
    reply.code(201).send(newTransaction);
  } catch (error) {
    reply.code(500).send({ error: 'Failed to create transaction', details: error });
  }
}

// Retrieve all transactions
export async function getTransactions(request: FastifyRequest, reply: FastifyReply) {
  try {
    const transactions = await TransactionModel.findAll();
    reply.send(transactions);
  } catch (error) {
    reply.code(500).send({ error: 'Failed to retrieve transactions', details: error });
  }
}

// Retrieve a specific transaction by ID
export async function getTransactionById(request: FastifyRequest, reply: FastifyReply) {
  try {
    const { id } = request.params as { id: string };
    const transaction = await TransactionModel.findByPk(id);
    if (transaction) {
      reply.send(transaction);
    } else {
      reply.code(404).send({ error: 'Transaction not found' });
    }
  } catch (error) {
    reply.code(500).send({ error: 'Failed to retrieve transaction', details: error });
  }
}

// Update an existing transaction
export async function updateTransaction(
  request: FastifyRequest<{ Body: TransactionInput; Params: { id: string } }>, 
  reply: FastifyReply
) {
  try {
    const { id } = request.params;
    const updated = await TransactionModel.update(request.body, { where: { id } });
    if (updated[0] > 0) {
      reply.send({ message: 'Transaction updated successfully' });
    } else {
      reply.code(404).send({ error: 'Transaction not found' });
    }
  } catch (error) {
    reply.code(500).send({ error: 'Failed to update transaction', details: error });
  }
}

// Delete a transaction
export async function deleteTransaction(
  request: FastifyRequest<{ Params: { id: string } }>, 
  reply: FastifyReply
) {
  try {
    const { id } = request.params;
    const deleted = await TransactionModel.destroy({ where: { id } });
    if (deleted > 0) {
      reply.send({ message: 'Transaction deleted successfully' });
    } else {
      reply.code(404).send({ error: 'Transaction not found' });
    }
  } catch (error) {
    reply.code(500).send({ error: 'Failed to delete transaction', details: error });
  }
}
