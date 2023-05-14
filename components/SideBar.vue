<script lang="ts" setup>
const blogs = await queryContent("blog")
  .only(["_path", "title", "description", "date"])
  .find();
</script>

<template>
  <div class="sidebar">
    <h2>My Blogs</h2>

    <ul>
      <li v-for="article in blogs" :key="article._path" class="blog-article">
        <NuxtLink :to="`${article._path}`">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  width: 200px;
  /* height: 100%; */
  padding: 1rem;
  left: 0;
}
ul {
  padding: 0;
}
li {
  padding-left: 0.75rem;
  border-left: solid 1px var(--text-soft);
}

a {
  font-weight: normal;
  color: var(--text-soft);
}
</style>
