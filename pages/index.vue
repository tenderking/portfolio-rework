<script setup lang="ts">
import { ref } from 'vue'
import { useSeoMeta, useHead } from '#imports' // Assuming Nuxt 3 context

const title = ref('George Mushore')

useSeoMeta({
  title,
  description: () => `description: ${title.value}`
})
useHead({
  meta: [
    {
      name: 'description',
      content: 'George Mushore personal website'
    }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico' // Ensure favicon path is correct
    }
  ]
})
</script>

<template>
  <main class="home">
    <div class="hero-section">
      <header>
        <h1>Hi,<br> I'm George</h1>
        <h2 class="punchline">Welcome to my personal website.</h2>
        <p class="pitch">
          I am a passionate and versatile tech professional with a Master’s degree
          in Technology, specializing in Data Analytics. My journey in the tech
          world has been diverse and enriching, spanning various roles and
          responsibilities.
        </p>
      </header>

      <NuxtImg src="/img/bantu.png" alt="George Mushore" densities="x1 x2" width="400px" class="image" />



    </div>
    <section class="content-section">

      <div class="content">

        <div class="text">

          <p>
            I'm currently seeking exciting opportunities in the tech or IT
            industry where I can leverage my expertise and build innovative
            solutions.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
// Define CSS variables (example, adjust to your actual theme)


main.home {
  width: 100%;
  max-width: 1200px; // Optional: constrain max width
  margin: 0 auto; // Center the main container
  padding: 0 1rem; // Horizontal padding for mobile
  box-sizing: border-box;
  margin-bottom: 2rem;
}

/* Hero Section Styles */
.hero-section {
  display: grid;
  grid-template-columns: 1fr; // Stack image and header by default (mobile)
  gap: 1rem; // Gap when stacked
  padding-block: 2rem; // Vertical padding
  align-items: center; // Center items horizontally when stacked
  text-align: center; // Center text when stacked

  .image {
    margin: 0 auto; // Center image when stacked
    max-width: 250px; // Limit image size on mobile
    width: 60%; // Responsive width


    img {
      border-radius: 1rem;
      max-width: 100%;
      height: auto;
      display: block;
      object-fit: cover;
    }
  }

  header {
    padding: 0; // Remove padding from header itself, handled by hero-section
    text-align: center; // Center text on mobile
  }

  h1,
  .title {
    // Combined styles for h1 and potential .title class

    font-weight: 700;
    font-size: 1.8rem; // Adjusted size for mobile
    margin: 0 0 0.5rem 0; // Margin below h1
    line-height: 1.2;
  }

  .punchline {
    background: -webkit-linear-gradient(315deg,
        var(--color-accent) 15%,
        var(--text));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.3rem; // Adjusted size for mobile
    margin: 0; // Reset margin
    font-weight: normal;
    line-height: 1.3;
  }
}

/* Content Section Styles */
.content {
  padding-top: 2rem; // Add space above the paragraphs

  .text {
    text-align: left; // Keep paragraphs left-aligned
  }

  p {
    margin-bottom: 1.5rem;
    max-width: 75ch; // Limit paragraph width for readability
    margin-left: auto; // Center paragraph block if needed (optional)
    margin-right: auto; // Center paragraph block if needed (optional)
    line-height: 1.6;
  }
}


/* Styles for Medium Screens and Up (e.g., Tablets and Desktops) */
@media (min-width: 768px) {
  main.home {
    padding: 0 2rem; // Increase horizontal padding
    margin: auto;
  }

  .hero-section {
    grid-template-columns: auto 1fr; // **KEY: Image auto-width, text takes rest**
    gap: 2rem; // Space between image and text
    padding-block: 3rem;
    text-align: left; // Align text block left

    .image {
      max-width: 300px; // Allow slightly larger image
      width: 100%; // Let grid control size up to max-width
      margin: 0; // Reset margin
    }

    header {
      text-align: left; // Align header text left
    }

    h1,
    .title {
      font-size: 3.5rem; // Larger font size
    }

    .punchline {
      font-size: 2.2rem; // Larger font size
    }
  }

  /* Content Section See through glass*/
  .content-section {
    background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 165, 0, 0.2));
    backdrop-filter: blur(10px); // Blur effect for glassmorphism
    border-radius: 10px; // Rounded corners
    padding: 1.5rem; // Padding for content section
  }


  .content {
    padding-top: 3rem; // More space above paragraphs
    background-color: var(--color-secondary); // Optional background color
    border-radius: 10px;
    color: var(--color-neutral-mute); // Optional text color
  }
}

/* Optional: Styles for Larger Screens */
@media (min-width: 1024px) {
  main.home {
    padding: 0 3rem;
  }

  .hero-section {
    gap: 3rem; // Increase gap further
    padding-block: 4rem;

    .image {
      max-width: 350px; // Slightly larger image max-width
      position: relative;
      left: -2rem; // Adjust image position
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Optional shadow for depth
    }

    h1,
    .title {
      font-size: 6rem;
    }

    .punchline {
      font-size: 1.8rem;
    }

    .pitch {
      max-width: 45ch;
    }
  }

  .content-section {
    margin-top: 4rem;
  }


  .content {
    padding-block: 4rem;
  }
}
</style>
