<template>
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/sobre-nos">Sobre Nós</router-link>
        <router-link to="/register">Register</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/dashboard" v-if="user">Dashboard</router-link>
        <router-link to="/clientes" v-if="user">Clientes</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['user'])
    }
  };
  </script>
  
  <style scoped>
  nav {
    display: flex;
    justify-content: space-around;
    background-color: #42b983;
    padding: 1rem;
  }
  a {
    color: white;
    text-decoration: none;
  }
  </style>
  