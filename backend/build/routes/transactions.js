export default async function transactionsRoutes(fastify) {
    // GET /api/transactions - Fetch all transactions
    fastify.get('/api/transactions', async (request, reply) => {
        return { transactions: [] }; // Placeholder for transactions
    });
    // POST /api/transactions - Create a new transaction
    fastify.post('/api/transactions', async (request, reply) => {
        const { amount, type } = request.body;
        return { message: 'Transaction created!', transaction: { amount, type } };
    });
}
