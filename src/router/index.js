import { createRouter, createWebHistory } from 'vue-router';


import Home from '../views/Home/Home.vue';
// import 
const routes = [ 
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/Experience',
    name: 'Experience',

    component: () => import( '../views/Experience/Experience.vue')
  },
  {
    path: '/Contacts',
    name: 'Contacts',

    component: () => import('../views/Contacts/Contacts.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
