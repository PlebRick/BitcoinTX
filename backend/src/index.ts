import Fastify from 'fastify';

const server = Fastify();

// Example route
server.get('/', async (request, reply) => {
  return { message: 'Hello, BitcoinTX!' };
});

// Start the server
server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running at ${address}`);
});
