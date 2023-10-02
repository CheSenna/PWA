import { createRouter, createWebHistory } from 'vue-router';
import DashboardPage from './views/Dashboard.vue';
import NotificationsPage from './views/Notifications.vue';
import CalendarPage from './views/Calendar.vue';
import SuggestionsPage from './views/Suggestions.vue';
import LoginPage from './views/Login.vue';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/notifications', component: Notifications },
  { path: '/calendar', component: Calendar },
  { path: '/suggestions', component: Suggestions },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
