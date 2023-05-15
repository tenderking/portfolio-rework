<template>
  <div>
    <NuxtLink class="blog-card" :to="`${article._path}`">
      <div class="blog-card_body">
        <h2 class="blog-card_title">{{ article.title }}</h2>
        <p class="blog-card_text">{{ article.description }}</p>
      </div>

      <div class="blog-card_footer">
        <div class="tags">
          <TagItem
            v-for="(tag, index) in article.tags"
            :key="index"
            :tag="tag"
            class="badge bg-secondary me-1"
          >
            {{ tag }}
          </TagItem>
        </div>
        <small class="text-muted">{{ article.date }}</small>
      </div>
    </NuxtLink>
  </div>
</template>
<script lang="ts" setup>
import { ParsedContent } from "@nuxt/content/dist/runtime/types";

defineProps({
  article: {
    type: Object as PropType<ParsedContent>,
    required: true,
  },
});
</script>
<style lang="scss" scoped>
.blog-card {
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  max-width: fit-content;
  outline: var(--text) solid 0.125rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
  overflow: hidden;
  display: grid;
  grid-template-rows: 3fr 1fr;
  //  make the card the same height
  min-height: 22rem;

  &:hover {
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  }
  &_body {
    padding: 1rem;
    background-color: var(--bg);
    color: var(--text);
    max-width: 35ch;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }
  &_title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  &_text {
    margin-bottom: 0.5rem;
  }
  &_footer {
    padding: 1rem;
    color: var(--color-secondary);
    background: -webkit-linear-gradient(
      315deg,
      var(--color-primary) 25%,
      var(--color-accent)
    );
    border-top: 1px solid rgba(0, 0, 0, 0.125);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .tags {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }
  }
}
</style>
