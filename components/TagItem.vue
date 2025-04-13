<template>
  <NuxtLink :to="`/blog/tags/${tag}`" :custom="true" v-slot="{ navigate }">
  <div class="tag-item">
      <Icon :name="getIconForTag(tag)" class="tag-icon" />
      <span @click="navigate" role="link" tabindex="0" class="tag-link">
        {{ tag }}
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  tag: {
    type: String,
    required: true,
  },
});
function getIconForTag(tag: string): string {
  const tagIcons: Record<string, string> = {
    'coding': 'mdi:code-tags',
    'tech': 'mdi:laptop',
    'design': 'uil:brush-alt',
    'ux': 'material-symbols:design-services',
    'data': 'mdi:database',
    'ai': 'mdi:robot',
    'web': 'mdi:web',
    'frontend': 'logos:vue',
    'backend': 'logos:nodejs',
    'default': 'mdi:card-text-outline'
  };

  return tagIcons[tag.toLowerCase()] || tagIcons.default;
}
</script>

<style scoped>
.tag-item {
  background: var(--color-accent);
  color: var(--color-secondary);
  width: fit-content;
  padding: 0.5em;
  border-radius: 0.5em;
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin: 0.5em;

}

.tag-link {
  cursor: pointer;
  
}
.tag-item:hover{
  text-decoration: none;
  color: var(--color-primary);
  transition: all 0.3s ease;
  background-color: var(--bg-primary);
  outline: solid 0.1em var(--color-primary);
}
</style>
