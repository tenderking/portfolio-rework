<script lang="ts" setup>
const title = ref('George Mushore | Blog')
const isDev = import.meta.dev // Use Nuxt's process.dev instead of import.meta.dev

useSeoMeta({
  title,
  description: () => `description: ${title.value}`
})

// Use queryCollection instead of queryContent in v3
const { data: blogs } = await useAsyncData('blogs', () => 
  queryCollection('blog')
    .order('date', 'DESC')
    .all()
)

// Debug output
console.log('Blogs data:', blogs.value)
</script>

<template>
  <h1>My Blogs</h1>
  <TagsList />

  <div class="blog-cards_container">
    <BlogCard
      v-for="article in blogs"
      :key="article.path"
      :article="article"
    />
  </div>

  <!-- Debug output (only in development) -->
  <pre v-if="blogs && isDev">{{ blogs }}</pre>
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
  grid-gap: 2rem;
  margin-top: 1rem;
  margin-inline: auto;
  padding: 1rem;
  justify-items: center;
  max-width: 80rem;
}
</style>
