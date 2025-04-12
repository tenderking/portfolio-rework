<script lang="ts" setup>
const { data: blogs } = await useAsyncData('sidebar-blogs', () =>
  queryCollection('blog')
    .select('title', 'path')
    .all()
);

const route = useRoute();
const blogPath = computed(() => 
  blogs.value?.map(blog => blog.path?.replace("/blog/", "")) || []
);
const isActiveBlog = computed(() => 
  blogPath.value.includes(Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug)
);
</script>

<template>
  <div class="sidebar">
    <h2>My Blogs</h2>

    <ul>
      <li v-for="article in blogs" :key="article.path" class="blog-article">
        <NuxtLink
          :to="article.path"
          :active-class="isActiveBlog ? 'active' : ''"
        >
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
.active {
  color: var(--color-primary);
  font-weight: bold;
}
</style>
