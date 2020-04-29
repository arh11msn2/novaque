import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import ArticlesPage from '@/components/ArticlesPage';
import SingleArticlePage from '@/components/SingleArticlePage';
import RegistrationPage from '@/components/RegistrationPage';
import LoginPage from '@/components/LoginPage';
import CreateArticlePage from '@/components/CreateArticlePage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomePage,
    },
    {
      path: '/articles',
      name: 'articles-page',
      component: ArticlesPage,
    },
    {
      path: '/articles/:id',
      name: 'single-article-page',
      component: SingleArticlePage,
      props: true,
    },
    {
      path: '/login',
      name: 'login-page',
      component: LoginPage,
    },
    {
      path: '/registration',
      name: 'registration-page',
      component: RegistrationPage,
    },
    {
      path: '/create-article',
      name: 'create-article-page',
      component: CreateArticlePage,
    },
  ],
});
