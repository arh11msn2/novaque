<template>
    <div>
        <h1>Artilces</h1>
        <div v-for="article in articles" :key="article.id">
            <card :article="article" />
        </div>
        <router-link :to="{ name: 'home-page' }">Main page</router-link>
    </div>
</template>

<script>
import { get } from 'axios';

import ArticleCard from './ArticleCard';

export default {
  name: 'ArticlesPage',
  components: {
    card: ArticleCard,
  },
  data: () => ({
    articles: [],
  }),
  async mounted() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      const response = await get('http://127.0.0.1:11000/articles');
      this.articles = response.data;
    },
  },
};
</script>
