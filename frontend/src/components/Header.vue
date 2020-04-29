<template>
    <div class="conatiner">
      <div v-if="!isLoggedIn">
        <router-link :to="{ name: 'login-page' }">Log in</router-link>
        <router-link :to="{ name: 'registration-page' }">Sign up</router-link>
      </div>
      <div v-if="isLoggedIn">
        Hi, {{ profileData.firstName }} {{ profileData.lastName }}!
        <router-link :to="{ name: 'create-article-page' }">Create an article</router-link>
        <button @click="logout">Log out</button>
      </div>
    </div>
</template>

<script>
import { defaults, get } from 'axios';

export default {
  name: 'Header',
  data: () => ({
    isLoggedIn: false,
    profileData: {},
  }),
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const profileReponse = await get('http://127.0.0.1:11000/auth/profile/');
      this.profileData = profileReponse.data;
      this.isLoggedIn = true;
    },
    logout() {
      localStorage.removeItem('auth_token');
      defaults.headers.common.Authorization = '';
    },
  },
};
</script>

<style scoped>
.container {
    position: absolute;
    display: flex;
    justify-content: space-around;
}
</style>
