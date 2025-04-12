<script setup lang="ts">
// Get the current tag from route params
const route = useRoute();
const tag = route.params.slug as string;

// Get all blogs with the specified tag using IN operator for array values
const { data: blogs } = await useAsyncData(`blogs-${tag}`, () =>
  queryCollection('blog')
    .where('tags', 'LIKE', tag) // Use CONTAINS operator for arrays
    .order('date', 'DESC') // Sort by date descending
    .all()
);

console.log(`Found ${blogs.value?.length || 0} posts with tag: ${tag}`);
</script>

<template>
  <h1># {{ route.params.slug }}</h1>

  <div v-if="blogs && blogs.length > 0" class="blog-cards_container">
    <BlogCard
      v-for="article in blogs"
      :key="article.path"
      :article="article"
    />
  </div>
  <div v-else class="no-posts">
    <p>No posts found with this tag.</p>
  </div>

  <!-- Debug output 
  <pre v-if="blogs">{{ blogs }}</pre>
  -->
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
  max-width: 80rem;
  width: 100%;
  justify-items: center;

  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
}
</style>
