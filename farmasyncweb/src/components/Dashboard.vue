<template>
    <div class="dashboard">
      <h2>Dashboard</h2>
      <p>Bem-vindo ao painel de controle!</p>
      <router-link to="/pharmacists/{{ this.$store.state.user.id }}/add-patient">Adicionar Paciente</router-link>
      <router-link to="/pharmacists/{{ this.$store.state.user.id }}/patients">Lista de Pacientes</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dashboard'
  };
  </script>
  
  <style scoped>
  .dashboard {
    text-align: center;
    margin-top: 50px;
  }
  </style>
  