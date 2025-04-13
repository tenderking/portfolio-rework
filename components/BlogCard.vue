<template>
  <div class="card-wrapper">
    <NuxtLink class="blog-card" :to="article.path" :custom="true" v-slot="{ navigate }">
      <div class="blog-card" @click="navigate" role="link" tabindex="0">
        <div class="blog-card_body">
          <div class="blog-card_category">
            <!-- Use icons based on the first tag -->
            <Icon :name="getIconForTag(article.tags?.[0] || 'default')" class="category-icon" />
            <span v-if="article.tags?.[0]">{{ article.tags[0] }}</span>
          </div>
          <h2 class="blog-card_title">{{ article.title }}</h2>
          <p class="blog-card_text">{{ article.description }}</p>
        </div>

        <div class="blog-card_footer">
          <div class="tags">
            <TagItem
              v-for="(tag, index) in article.tags?.slice(1)"
              :key="index"
              :tag="tag"
              class="badge bg-secondary me-1"
            />
          </div>
          <div class="date-wrapper">
            <Icon name="uil:calendar-alt" class="date-icon" />
            <small class="text-muted">{{ article.date }}</small>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

defineProps({
  article: {
    type: Object as PropType<ParsedContent>,
    required: true,
  },
});

// Function to determine which icon to use based on tag
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

<style lang="scss" scoped>
.card-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
}

.blog-card {
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
  border-radius: 1rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  
  /* Glassmorphism effect */
  background: rgba(255, 255, 255, 0.1); 
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    border: 1px solid rgba(255, 255, 255, 0.4);
  }
  
  &_body {
    padding: 1.5rem;
    background: linear-gradient(
      135deg,
      rgba(var(--color-primary), 0.8), 
      rgba(var(--color-primary-2), 0.8)
    );
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    position: relative;
  }
  
  &_category {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    color: var(--color-text);
    font-weight: 500;
    
    .category-icon {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
  
  &_title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    background: -webkit-linear-gradient(
      315deg,
      var(--color-primary) 25%,
      var(--color-primary-2)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    line-height: 1.3;
  }
  
  &_text {
    margin-bottom: 0.5rem;
    color: var(--color-text);
    opacity: 0.9;
    flex-grow: 1;
    line-height: 1.5;
  }
  
  &_footer {
    padding: 1rem 1.5rem;
    color: var(--color-text);
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .tags {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    
    .date-wrapper {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      
      .date-icon {
        width: 1rem;
        height: 1rem;
      }
    }
  }
}

@media (max-width: 768px) {
  .blog-card {
    &_title {
      font-size: 1.3rem;
    }
  }
}
</style>
