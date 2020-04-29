<template>
    <div class="container">
      <router-link :to="{ name: 'home-page' }">Main page</router-link>
        <div v-if="errorMessage">{{errorMessage}}</div>
        <input type="email" placeholder="Email" v-model="email" />
        <input type="password" placeholder="Пароль" v-model="password" />
        <button @click="commit">Войти</button>
    </div>
</template>

<script>
import { defaults, post } from 'axios';

export default {
  name: 'LoginPage',
  data: () => ({
    email: '',
    password: '',
    errorMessage: '',
  }),
  methods: {
    async commit() {
      const response = await post('http://127.0.0.1:11000/auth/login', {
        email: this.email,
        password: this.password,
      });
      const token = response.data.access_token;
      localStorage.setItem('auth_token', token);
      defaults.headers.common.Authorization = `Bearer ${token}`;
      this.$router.push('/');
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
