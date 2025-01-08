<script lang="ts">
  let transactions: string[] = [];
  let price: number = 0;

  // Fetch transactions
  async function fetchTransactions() {
    try {
      const res = await fetch("http://localhost:3001/api/transactions");
      if (res.ok) {
        const data = await res.json();
        transactions = data.transactions || [];
      } else {
        console.error("Failed to fetch transactions");
      }
    } catch (err) {
      console.error("Error fetching transactions:", err);
    }
  }

  // Fetch Bitcoin price
  async function fetchPrice() {
    try {
      const res = await fetch("http://localhost:3001/api/price");
      if (res.ok) {
        const data = await res.json();
        price = data.price || 0;
      } else {
        console.error("Failed to fetch price");
      }
    } catch (err) {
      console.error("Error fetching price:", err);
    }
  }

  // Fetch data on load
  fetchTransactions();
  fetchPrice();
</script>

<main>
  <h1>BitcoinTX</h1>

  <!-- Bitcoin Price Section -->
  <h2>Bitcoin Price: {price > 0 ? `${price} USD` : "Loading..."}</h2>

  <!-- Transactions Section -->
  <h3>Transactions</h3>
  {#if transactions.length > 0}
    <ul>
      {#each transactions as transaction}
        <li>{transaction}</li>
      {/each}
    </ul>
  {:else}
    <p>No transactions found.</p>
  {/if}

  <!-- Footer -->
  <footer>
    <p class="read-the-docs">
      Built with Vite + Svelte for BitcoinTX 🚀
    </p>
  </footer>
</main>

<style>
  main {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 2em;
  }

  h1 {
    color: #333;
    font-size: 2.5em;
    margin-bottom: 1em;
  }

  h2 {
    color: #646cff;
    margin-bottom: 1em;
  }

  h3 {
    color: #333;
    margin-bottom: 0.5em;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    background-color: #f9f9f9;
    margin: 0.5em auto;
    padding: 1em;
    border-radius: 8px;
    max-width: 600px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .read-the-docs {
    color: #888;
    margin-top: 2em;
    font-size: 0.9em;
  }

  footer {
    margin-top: 2em;
    font-size: 0.8em;
    color: #888;
  }
</style>
