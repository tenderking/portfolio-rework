<template>
  <div class="tag-item">
    <NuxtLink :to="`/blog/tags/${tag}`">
      {{ tag }}
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
defineProps({
  tag: {
    type: String,
    required: true,
  },
});
</script>
<style scoped>
.tag-item {
  background: var(--color-accent);
  color: var(--color-secondary);
  width: fit-content;
  padding: 0.5em;
  border-radius: 0.5em;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
</style>
