import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import ArticlesPage from '@/components/ArticlesPage';
import SingleArticlePage from '@/components/SingleArticlePage';

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
    },
  ],
});
