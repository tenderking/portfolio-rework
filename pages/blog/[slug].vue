<template>
  <div class="flex-col container">
    <SideBar class="side-bar" />
    <div class="article">
      <!-- Just show the date in the header -->
      <header v-if="post" class="blog-header">
        <span class="blog-date">{{ formatDate(post.date) }}</span>
      </header>
     
      <ContentRenderer v-if="post" :value="post" class="post-content" />
      <div v-else class="error-message">
        <p>Blog post not found.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useRoute, useAsyncData, createError } from '#app'; // Import Nuxt composables

const route = useRoute();
// Ensure slug is treated as a string, handle potential array case if needed
const slugParam = route.params.slug;
const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

// --- Use queryCollection() ---
// Fetch the single blog post matching the slug within the 'blog' collection.
// The path needs to match how Nuxt Content generates paths (usually including the directory).
// Assuming content files are in `content/blog/` and generate paths like `/blog/your-slug`
const fullPath = `/blog/${slug}`; // Construct the expected full path

const { data: post } = await useAsyncData(
   () => queryCollection('blog').path(fullPath).first()
);


// Helper function to format date (optional)
const formatDate = (dateString: string): string => {
  if (!dateString) return '';
  try {
    // Attempt to create a valid date object
    const date = new Date(dateString);
    // Check if the date is valid before formatting
    if (isNaN(date.getTime())) {
        console.warn(`Invalid date string received: ${dateString}`);
        return dateString; // Return original invalid string
    }
    return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  } catch (e) {
    console.error(`Error formatting date string "${dateString}":`, e);
    return dateString; // Return original string if formatting fails
  }
};

</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: auto 1fr;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
}

.side-bar {
  grid-column: 1/2;
  border-right: solid 2px var(--text-soft);
  color: var(--text);
  display: none;
}

.article {
  margin: auto;
  padding: 1em;
  grid-column: 2/3;
  width: 100%;
  box-sizing: border-box;
}
.article-img{
  width: 100%;
}

/* Add responsive image styles for blog content */
:deep(.post-content) {
  img {
    max-width: 100%;
    height: auto;
    margin: 1rem 0;
  }

  /* Fix for floating images in mobile view */
  @media (max-width: 639px) {
    img[style*="float:right"],
    img[style*="float: right"] {
      float: none !important;
      display: block;
      margin: 1rem auto !important;
      width: 100% !important;
      max-width: 300px;
    }
  }
}

@media (min-width: 640px) {
  .side-bar {
    display: block;
  }
}

.post-meta {
  display: flex;
  gap: 2rem;
  color: var(--text-soft);
  margin-bottom: 2rem;
}

.error-message {
  color: red;
  border: 1px solid red;
  padding: 1rem;
  margin: 2rem 0;
  border-radius: 0.5rem;
}

.loading {
  padding: 2rem 0;
  font-style: italic;
  color: var(--text-soft);
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.post-content {
  line-height: 1.6;
  margin-top: 2rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
}

.content-debug {
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 0.5rem;
  color: #333;
}

/* Update styles for the blog header */
.blog-header {
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--text-soft);
  display: flex;
  justify-content: flex-end;
}

.blog-date {
  color: var(--text-soft);
  font-size: 1rem;
  font-style: italic;
}

/* Responsive adjustments */
@media (min-width: 768px) {
  .blog-header {
    justify-content: flex-end;
  }
}
</style>
