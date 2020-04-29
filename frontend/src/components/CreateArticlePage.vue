<template>
    <div class="container">
        <router-link :to="{ name: 'home-page' }">Main page</router-link>
        <input type="text" placeholder="title" v-model="title" />
        <textarea type="text" rows="10" placeholder="content" v-model="content" />
        <button @click="create">Create an article</button>
    </div>
</template>

<script>
import { post } from 'axios';

export default {
  name: 'CreateArticlePage',
  data: () => ({
    title: '',
    content: '',
  }),
  methods: {
    async create() {
      const response = await post('http://127.0.0.1:11000/articles/', {
        title: this.title,
        content: this.content,
      });
      console.log(response.data);
    },
  },

};
</script>

<style scoped>
.container {
    margin: 0 auto;
    display: flex;
    max-width: 400px;
    flex-direction: column;
}
</style>
