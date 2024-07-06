<template>
    <div class="client-list">
      <h2>Lista de Clientes</h2>
      <ul>
        <li v-for="client in clients" :key="client.id">
          {{ client.name }} - {{ client.email }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        clients: []
      };
    },
    async created() {
      try {
        const response = await fetch('/api/clients');
        this.clients = await response.json();
      } catch (err) {
        console.error(err);
      }
    }
  };
  </script>
  
  <style scoped>
  .client-list {
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
  }
  </style>
  