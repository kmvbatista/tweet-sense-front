import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Main from './pages/Main.vue';
import Impacts from './pages/TweetsImpacts.vue';
import PastInformations from './components/PastInformations.vue';
import Predictions from './components/Predictions.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
  },
  {
    path: '/impacts/:name',
    name: 'impacts',
    component: Impacts,
    children: [
      {
        path: '/:name/past',
        component: PastInformations,
        name: 'past',
      },
      {
        path: '/:name/predictions',
        component: Predictions,
        name: 'predictions',
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
