<script setup lang="ts">
import { ref } from 'vue'
import { useSeoMeta, useHead, useAsyncData } from '#imports' // Assuming Nuxt 3 context
import pic from "@/assets/old/outdoor-pic.jpg"

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

// Get about data
const { data: about } = await useAsyncData('about', () => 
  queryCollection('about').first()
)

// Get latest blog post
const { data: latestBlog } = await useAsyncData('latestBlog', () => 
  queryCollection('blog')
    .order('date', 'DESC')
    .limit(1)
    .all()
)
</script>

<template>
  <main class="home">
    <div class="hero-section">
      <header>
        <h1>Hi,<br> I'm George</h1>
        <h2 class="punchline">Welcome to my personal website.</h2>
        <p class="pitch">
          I am a passionate and versatile tech professional with a Master's degree
          in Technology, specializing in Data Analytics. My journey in the tech
          world has been diverse and enriching, spanning various roles and
          responsibilities.
        </p>
      </header>

      <NuxtImg src="/img/bantu.png" alt="George Mushore" densities="x1 x2" width="400px" class="image" />
    </div>
    
    <section class="content-section">
        <div class="text">
          <!-- Latest blog post highlight with the new FeaturedBlog component -->
          <div class="latest-blog-highlight" v-if="latestBlog && latestBlog.length > 0">
            <h3>Latest from my blog</h3>
            <FeaturedBlog :article="latestBlog[0]" />
            <NuxtLink to="/blog" class="view-all-link">View all posts →</NuxtLink>
          </div>
        </div>
    </section>

    <!-- About section merged from about.vue -->
    <section class="about-section">
      <h2 class="section-title">About Me</h2>
      
      <div class="about-header">
        <img id="profile-pic" :src="pic" alt="profile picture" />

        <div class="about-header-text">
          <h2 class="display">{{ about?.title }}</h2>
          <h3>{{ about?.catchphrase }}</h3>
          <p>
            {{ about?.description }}
          </p>
          <NuxtLink to="mailto:contact@example.com" external>Coffee </NuxtLink>
        </div>
      </div>

      <div class="about-skills">
        <div v-if="about?.resume?.education" class="skills-section">
          <h2>Education</h2>
          <ul v-for="item in about.resume.education" :key="item.title">
            <li v-if="item.title">{{ item.title }}</li>
            <li v-if="item.university">{{ item.university }}</li>
            <li v-if="item.date">{{ item.date }}</li>
            <li v-if="item.degree">{{ item.degree }}</li>
          </ul>
        </div>
        <div v-if="about?.resume?.experience" class="skills-section">
          <h2>Experience</h2>
          <ul v-for="item in about.resume.experience" :key="item.title">
            <li>{{ item.title }}</li>
            <li>{{ item.company }}</li>
            <li>{{ item.date }}</li>
            <li>{{ item.description }}</li>
          </ul>
        </div>
        <div v-if="about?.resume?.skills" class="skills-section">
          <h2>Skills</h2>
          <ul>
            <li v-for="item in about.resume.skills" :key="item">
              {{ item }}
            </li>
          </ul>
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

/* Latest Blog Highlight */
.latest-blog-highlight {
  margin-top: 1rem;
  padding: 1rem;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    background: -webkit-linear-gradient(315deg,
        var(--color-primary) 25%,
        var(--color-accent));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
  }
  
  .view-all-link {
    display: inline-block;
    margin-top: 1rem;
    color: var(--color-accent);
    font-weight: 700;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
}

/* About Section Styles */
.about-section {
  margin-top: 3rem;
  padding-top: 2rem;
  
  .section-title {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    background: -webkit-linear-gradient(315deg,
        var(--color-primary) 25%,
        var(--color-accent));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
  }
}

.about-header {
  border-bottom: 1px solid var(--color-neutral);
  padding-bottom: 2rem;

  img {
    margin: auto;
    padding: 1em;
    width: 100%;
    border-radius: 2em;
  }

  &-text {
    padding: 1em;

    h2 {
      font-size: 2rem;
      background: -webkit-linear-gradient(
        315deg,
        var(--color-primary) 25%,
        var(--color-accent)
      );
      background-clip: border-box;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 900;
      margin-bottom: 1rem;
    }
  }
}

.about-skills {
  margin-top: 2rem;
  
  .skills-section {
    margin-bottom: 2rem;
    
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--text);
    }
    
    ul {
      margin: 0;
      margin-bottom: 1rem;
      padding: 0;
      
      li {
        color: var(--text-soft);
        margin-bottom: 0.5rem;
        list-style-type: none;
      }
    }
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
  
  .about-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2em;

    img {
      max-width: 400px;
      margin: 0;
    }

    &-text {
      padding: 1em;
      h2,
      h3 {
        max-width: 40ch;
      }

      p {
        max-width: 50ch;
      }
    }
  }

  .about-skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    .skills-section {
      flex: 0 0 48%; // Two columns with small gap
      margin-bottom: 2rem;
    }
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
        -webkit-filter: drop-shadow(5px 5px 5px #222);
          filter: drop-shadow(5px 5px 5px #222);
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
    padding-inline: 6rem; // More padding for larger screens
  }

  .content {
    padding-block: 4rem;  
  }
  
  .about-skills {
    .skills-section {
      flex: 0 0 23%; // Four columns with small gaps
    }
  }
}
</style>
