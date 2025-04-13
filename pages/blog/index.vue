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
  grid-auto-rows: 1fr;
  grid-gap: 2rem;
  margin-top: 2rem;
  margin-inline: auto;
  padding: 1.5rem;
  max-width: 80rem;
}

/* Add a subtle background pattern to the blog page for the glassmorphism effect to work against */
:deep(body) {
  position: relative;
}

:deep(body)::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(
      45deg,
      rgba(var(--color-primary-rgb), 0.03) 25%,
      transparent 25%,
      transparent 75%,
      rgba(var(--color-primary-rgb), 0.03) 75%,
      rgba(var(--color-primary-rgb), 0.03)
    ),
    linear-gradient(
      -45deg,
      rgba(var(--color-accent-rgb), 0.03) 25%,
      transparent 25%,
      transparent 75%,
      rgba(var(--color-accent-rgb), 0.03) 75%,
      rgba(var(--color-accent-rgb), 0.03)
    );
  background-size: 60px 60px;
  z-index: -1;
  opacity: 0.4;
}
</style>
