<template>
  <div id="app">
    <h1>NOVAQUE</h1>
    <router-view/>
    <body>
      </body>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
  body {
  background-color: antiquewhite;
  }
#app {
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 30px;
  text-align: center;
  color: #2e2013;
  margin-top: 100px;
}
</style>

<style scoop>
h1 {
  animation: mymove 5s infinite
}

@keyframes mymove {
  50% {font-size: 40px}
};

</style>
