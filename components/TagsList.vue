<template>
  <!-- list of all tags -->
  <div class="tags-list">
    <TagItem v-for="tag in data" :key="tag" :tag="tag">
      {{ tag }}
    </TagItem>
  </div>
</template>
<script setup lang="ts">
// get list of all tags using queryCollection

const { data } = await useAsyncData('tags', () =>
  queryCollection('blog')
    .select('tags')
    .where('tags', 'IS NOT NULL')
    .all()
    .then(posts => {
          const tags = posts
            .map(post => post.tags)
            .flat()
            .filter((tag): tag is string => typeof tag === "string");
          return [...new Set(tags)];
        })
);
</script>
<style scoped>
.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin: auto;
  justify-content: center;
  padding: 1em;
}
</style>
