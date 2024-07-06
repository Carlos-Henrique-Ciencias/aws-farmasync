<template>
    <div class="patient-list">
      <h2>Lista de Pacientes</h2>
      <ul>
        <li v-for="patient in patients" :key="patient.id">
          {{ patient.name }} - {{ patient.email }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        patients: []
      };
    },
    async created() {
      try {
        const response = await fetch(`/api/pharmacists/${this.$route.params.pharmacistId}/patients`);
        this.patients = await response.json();
      } catch (err) {
        console.error(err);
      }
    }
  };
  </script>
  
  <style scoped>
  .patient-list {
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
  }
  </style>
  