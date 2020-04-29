<template>
    <div class="container">
      <router-link :to="{ name: 'home-page' }">Main page</router-link>
        <div v-if="errorMessage">{{errorMessage}}</div>
        <input type="email" placeholder="Email" v-model="email" />
        <input type="password" placeholder="Password" v-model="password" />
        <input type="password" placeholder="Retry password" v-model="passwordRetry" />
        <input type="text" placeholder="Nickname" v-model="nickName" />
        <input type="text" placeholder="First name" v-model="firstName" />
        <input type="text" placeholder="Last name" v-model="lastName" />
        <button @click="commit">Sign up</button>
    </div>
</template>

<script>
import { post } from 'axios';

export default {
  name: 'RegistrationPage',
  data: () => ({
    email: '',
    password: '',
    passwordRetry: '',
    nickName: '',
    firstName: '',
    lastName: '',
    errorMessage: '',
  }),
  methods: {
    async commit() {
      if (this.password !== this.passwordRetry) {
        this.errorMessage = 'Пароли не совпадают';
      } else {
        const response = await post('http://127.0.0.1:11000/registration/reader', {
          email: this.email,
          password: this.password,
          nickName: this.nickName,
          firstName: this.firstName,
          lastName: this.lastName,
        });
      }
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
