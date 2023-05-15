<template>
  <!-- list of all tags -->
  <div class="tags-list">
    <TagItem v-for="tag in data" :key="tag" :tag="tag">
      {{ tag }}
    </TagItem>
  </div>
</template>
<script setup lang="ts">
// get list of all tags using queryContent

const { data } = await useAsyncData("tags", () => {
  return queryContent("blog")
    .where({ tags: { $exists: true } })
    .only(["tags"])
    .find()
    .then((data) => {
      return data.map((item) => item.tags).flat();
    })
    .then((data) => {
      return [...new Set(data)];
    });
});
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
