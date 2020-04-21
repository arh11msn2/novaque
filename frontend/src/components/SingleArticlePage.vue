<template>
    <div>
        <h1>Single artilce {{ article.title }}!!</h1>
        <router-link :to="{ name: 'home-page' }">На главную</router-link>
        <p> {{ article.author.firstName + ' ' + article.author.lastName }}
        <p> {{ article.content }} </p>
        <p>Likes: {{ article.likesCount }} </p>
           <div v-for="comment in article.comments" :key='comment.id'>
              <p> {{ comment.text }} </p>
              <p> {{ comment.createdAt }} </p>
            </div>
            <div v-for="article in article.relatedArticles" :key="article.id">
              <card :article="article" />
            </div>
    </div>
</template>

<script>

import { get } from 'axios';
import ArticleCard from './ArticleCard';


export default {
  name: 'SingleArticlePage',
  props: ['id'],
  data: () => ({
    article: {
      author: {},
      likesCount: 0,
      comments: [],
      relatedArticles: [],
    },
  }),

  components: {
    card: ArticleCard,
  },

  async mounted() {
    await this.fetchData();
  },

  methods: {
    async fetchData() {
      const response = await get(`http://127.0.0.1:11000/articles/${this.id}`);
      this.article = { ...response.data };
      console.log(response.data);
    },
  },
};
</script>
