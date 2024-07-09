import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import SobreNos from '../components/SobreNos.vue';
import UserLogin from '../components/UserLogin.vue';
import UserRegister from '../components/UserRegister.vue';
import UserAgenda from '../components/UserAgenda.vue';
import MedicalRecord from '../components/MedicalRecord.vue';
import UserDashboard from '../components/UserDashboard.vue';
import ClientList from '../components/ClientList.vue';
import AddPatient from '../components/AddPatient.vue';
import PatientList from '../components/PatientList.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/sobre-nos', component: SobreNos },
  { path: '/login', component: UserLogin },
  { path: '/register', component: UserRegister },
  { path: '/agenda', component: UserAgenda, meta: { requiresAuth: true } },
  { path: '/prontuario', component: MedicalRecord, meta: { requiresAuth: true } },
  { path: '/dashboard', component: UserDashboard, meta: { requiresAuth: true } },
  { path: '/clientes', component: ClientList, meta: { requiresAuth: true } },
  { path: '/pharmacists/:pharmacistId/add-patient', component: AddPatient, meta: { requiresAuth: true } },
  { path: '/pharmacists/:pharmacistId/patients', component: PatientList, meta: { requiresAuth: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !localStorage.getItem('token')) {
    next('/login');
  } else {
    next();
  }
});

export default router;