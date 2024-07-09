<template>
    <div>
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
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register">Register</router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" to="/members">Members</router-link>
            </li>
          </ul>
        </div>
      </nav>
  
      <div class="container">
        <h2 class="text-center mt-5">Welcome to the Members Area</h2>
        <p class="text-center">This is a protected area only accessible after login.</p>
      </div>
  
      <footer class="footer bg-dark text-white text-center py-3">
        <p>&copy; 2024 Meu Site. Todos os direitos reservados.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Members'
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 50px;
  }
  </style>
  