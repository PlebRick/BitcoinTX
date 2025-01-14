import { fetchTransactions, createTransaction } from '../services/api';

async function testApi() {
  console.log('API test script is running...');
  console.log('Fetching transactions...');
  const transactions = await fetchTransactions();
  console.log('Transactions:', transactions);

  console.log('Creating a new transaction...');
  const newTransaction = await createTransaction({
    type: 'buy',
    amount: 1.2,
    costBasis: 30000,
    timestamp: '2025-01-14T12:00:00Z',
  });
  console.log('New Transaction:', newTransaction);
}

testApi();
