<template>
    <div>
        <h1> {{ article.title }} </h1>
        <router-link :to="{ name: 'home-page' }">Main page</router-link>
        <p class="toFrame"> <b>
          {{ article.author.firstName + ' ' + article.author.lastName }}
        </b> </p>
        <p class="toFrame"> {{ article.content }} </p>
        <p class="CommsLikesFrame"> <b> Likes: </b> {{ article.likesCount }} </p>
        <p class="CommsLikesFrame"><b> Comment section</b> </p>
         <div v-for="comment in article.comments" :key='comment.id'>
              <div class="Comms"><p> {{ comment.text }} </p>
              <p> {{ comment.createdAt }} </p> </div>
        </div>
         <p class="toFrame"><b>Related articles:</b></p>
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

<style scoped>
  .toFrame {
  margin-top: 30px;
  margin-bottom: 30px;
  border-top-style: solid;
  border-bottom-style: solid;
  border-color: rgb(63, 52, 14);
  border-width: 5x;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 50px;
  background: #f8e4d1;
  }
  .CommsLikesFrame {
   margin-top: 30px;
  margin-bottom: 30px;
  border-top-style: solid;
  border-bottom-style: solid;
  border-color: rgb(63, 52, 14);
  border-width: 5x;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 50px;
  background: #e5bf9b;
  }
  .Comms {
     text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  border-top-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-color: rgb(63, 52, 14);
  border-width: 5x;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 50px;
  background: #f8e4d1;
  font-family: Arial Narrow, sans-serif;
  }
</style>
