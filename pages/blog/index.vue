<script lang="ts" setup>
const blogs = await queryContent("blog")
  .only(["_path", "title", "description", "date", "tags"])
  .find();
</script>

<template>
  <h1>My Blogs</h1>
  <TagsList />

  <div class="blog-cards_container">
    <BlogCard
      v-for="article in blogs"
      :key="article._path"
      :article="article"
    />
  </div>
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
  margin: 1rem;
  padding: 1rem;
  justify-items: center;
  max-width: 80rem;
}
</style>
