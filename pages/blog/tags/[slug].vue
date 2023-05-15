<script setup lang="ts">
// get all blogs with the tag

const route = useRoute();
const blogs = await queryContent("blog/")
  .where({ tags: { $contains: [`${route.params.slug}`] } })
  .only(["_path", "title", "description", "date", "tags"])
  .find();
</script>
<template>
  <h1># {{ route.params.slug }}</h1>

  <div class="blog-cards_container">
    <BlogCard
      v-for="article in blogs"
      :key="article._path"
      :article="article"
    />
  </div>

  <!-- <pre>{{ blogs }}</pre> -->
</template>
<style lang="scss" scoped>
h1 {
  text-align: center;
}

h1 {
  background: -webkit-linear-gradient(
    355deg,
    var(--color-primary) 15%,
    var(--color-accent)
  );
  background-clip: border-box;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  font-size: 3rem;
  margin-bottom: 1rem;
}

.blog-cards_container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  margin: 0 auto;
  // center the cards
  max-width: 80rem;
  padding: 1rem;
}
</style>
