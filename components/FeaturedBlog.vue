<template>
  <NuxtLink class="featured-blog" :to="article.path" :custom="true" v-slot="{ navigate }">
    <div class="featured-blog" @click="navigate" role="link" tabindex="0">
      <div class="featured-blog_container">
        <div class="featured-blog_content">
          <h2 class="featured-blog_title">{{ article.title }}</h2>
          <p class="featured-blog_description">{{ article.description }}</p>
          <div class="featured-blog_meta">
            <div class="tags">
              <TagItem
                v-for="(tag, index) in article.tags"
                :key="index"
                :tag="tag"
                class="tag"
              />
            </div>
            <div class="date">{{ article.date }}</div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

defineProps({
  article: {
    type: Object as PropType<ParsedContent>,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.featured-blog {
  width: 100%;
  margin-bottom: 2rem;
  cursor: pointer;
  text-decoration: none;
  display: block;
  border-radius: 1rem;
  overflow: hidden;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-2));
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    text-decoration: none;
  }

  &_container {
    padding: 2rem;
    color: var(--color-secondary);
  }

  &_title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--color-secondary);
  }

  &_description {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
    opacity: 0.9;
    color: var(--color-secondary);

  }

  &_meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .date {
      font-size: 0.9rem;
      opacity: 0.8;
    }
  }
}

@media (min-width: 768px) {
  .featured-blog {
    &_container {
      padding: 3rem;
    }
    
    &_title {
      font-size: 2.5rem;
    }
  }
}
</style>