import axios from 'axios';
import API_BASE_URL from '../config/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Fetch all transactions
export const fetchTransactions = async () => {
    const response = await api.get('/api/transactions');
    return response.data;
  };
  
  // Create a new transaction
  export const createTransaction = async (transaction: {
    type: string;
    amount: number;
    costBasis?: number;
    timestamp: string;
  }) => {
    const response = await api.post('/api/transactions', transaction);
    return response.data;
  };
  
  // Fetch a specific transaction by ID
  export const fetchTransactionById = async (id: number) => {
    const response = await api.get(`/api/transactions/${id}`);
    return response.data;
  };
  
  // Update a transaction
  export const updateTransaction = async (id: number, updates: object) => {
    const response = await api.put(`/api/transactions/${id}`, updates);
    return response.data;
  };
  
  // Delete a transaction
  export const deleteTransaction = async (id: number) => {
    const response = await api.delete(`/api/transactions/${id}`);
    return response.data;
  };
  

export default api;
