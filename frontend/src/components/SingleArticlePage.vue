<template>
    <div>
        <h1>Single artilce!</h1>
        <router-link :to="{ name: 'home-page' }">На главную</router-link>
    </div>
</template>

<script>
export default {
  name: 'SingleArticlePage',
};
</script>
