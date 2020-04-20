<template>
    <div>
        <p>Title: {{ article.title }}</p>
        <p>Author: {{ article.author.firstName}} {{ article.author.lastName }}</p>
        <p>Likes: {{ article.likesCount }}</p>
        <router-link :to="{ name: 'single-article-page', params: { id: article.id }}">
            Читать
        </router-link>
        <br/>
    </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: ['article'],
};
</script>
