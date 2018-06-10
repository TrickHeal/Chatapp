import Vue from 'vue';
import Router from 'vue-router';
import SecondPage from '@/components/SecondPage';
import EnterPage from '@/components/EnterPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'EnterPage',
      },
    },

    {
      path: '/chat',
      name: 'SecondPage',
      component: SecondPage,
    },
    {
      path: '/enter',
      name: 'EnterPage',
      component: EnterPage,
    },
  ],
});
