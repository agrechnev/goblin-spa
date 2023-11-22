import { createApp } from 'vue';
import App from './App.vue';

import { createRouter, createWebHistory } from 'vue-router';
import HelloView from './views/HelloView.vue';
import PostView from './views/PostView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hello',
      component: HelloView
    },
    {
      path: '/post/:id',
      name: 'post',
      component: PostView,
      props: true,
    }
  ]
});


const app = createApp(App);
app.use(router);
app.mount('#app');
