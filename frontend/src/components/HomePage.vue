<template>
  <div class="hello">
    <router-link :to="{ name: 'articles-page' }">To articles</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data: () => ({}),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #5e4511;
}
</style>
