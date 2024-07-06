<template>
    <div class="add-patient">
      <h2>Adicionar Paciente</h2>
      <form @submit.prevent="addPatient">
        <input type="text" v-model="name" placeholder="Nome" required>
        <input type="email" v-model="email" placeholder="Email" required>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: ''
      };
    },
    methods: {
      async addPatient() {
        try {
          const response = await fetch(`/api/pharmacists/${this.$route.params.pharmacistId}/add-patient`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: this.name, email: this.email })
          });
          if (response.ok) {
            this.$router.push(`/pharmacists/${this.$route.params.pharmacistId}/patients`);
          } else {
            const data = await response.json();
            alert(data.error);
          }
        } catch (err) {
          console.error(err);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .add-patient {
    max-width: 400px;
    margin: 0 auto;
    padding: 1rem;
  }
  </style>
  