// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Calendar from './Calendar.vue';
import Dashboard from './Dashboard.vue';
import Notifications from './Notifications.vue';
import Suggestions from './Suggestions.vue';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/notifications', component: Notifications },
  { path: '/calendar', component: Calendar },
  { path: '/suggestions', component: Suggestions },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
