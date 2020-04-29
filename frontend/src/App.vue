<template>
  <div id="app">
    <novaque-header />
    <h1 class="title">NOVAQUE</h1>
    <router-view/>
    <body>
      </body>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    'novaque-header': Header,
  },
};
</script>

<style>
  body {
  background-color: antiquewhite;
  }
#app {
  position: relative;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 30px;
  text-align: center;
  color: #2e2013;
  margin-top: 100px;
}
</style>

<style scoped>
h1 .title {
  animation: mymove 5s infinite
}

@keyframes mymove {
  50% {font-size: 40px}
};

</style>
