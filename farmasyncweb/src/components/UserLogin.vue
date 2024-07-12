<template>
  <div class="bg">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/">Meu Site</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="card p-4">
        <h2 class="text-center">Login</h2>
        <div>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="payload.email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password" v-model="payload.password">
          </div>
          <button @click="handleLogin" class="btn btn-primary btn-block">Login</button>
          <p class="text-center mt-3">Don't have an account? <router-link to="/register">Register</router-link></p>
        </div>
        <span v-if="isLoading">Carregando...</span>
      </div>
    </div>

    <footer class="footer bg-dark text-white text-center py-3">
      <p>&copy; 2024 Meu Site. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
import { API_URL } from '../config';
import axios from "axios";
import { ref } from "vue";

const payload = ref({
  email: "",
  password: ""
})
const isLoading = ref(false)

const handleLogin = () => {
  isLoading.value = true;
  axios.post(`${API_URL}/auth/login`, payload.value)
    .then(() => {
      window.location.pathname = '/members'
    })
    .catch((err) => console.error(err))
    .finally(() => isLoading.value = false)
}
</script>

<style scoped>
.bg {
  background-image: url('@/assets/home.jpg');
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.container {
  height: 100vh;
}
</style>
