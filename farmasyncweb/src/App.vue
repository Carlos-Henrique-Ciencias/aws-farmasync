<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import axios from 'axios';
import { API_URL } from './config.js';

export default {
  name: 'App',
  components: {
    Header
  },
  created() {
    // Exemplo de chamada à API ao criar o componente
    axios.get(`${API_URL}/auth/test`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
