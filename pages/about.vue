<template>
  <main class="about">
    <section class="about__header">
      <img id="profile-pic" :src="pic" alt="profile picture" />

      <div class="about__header-text">
        <h2 class="display">{{ about?.title }}</h2>
        <h3>{{ about?.catchphrase }}</h3>
        <p>
          {{ about?.description }}
        </p>
        <NuxtLink mail:to="about?.email" external>Coffee </NuxtLink>
      </div>
    </section>

    <section class="about__skills">
      <div v-if="about?.resume?.education">
        <h2>Education</h2>
        <ul v-for="item in about.resume.education" :key="item.title">
          <li v-if="item.title">{{ item.title }}</li>
          <li v-if="item.university">{{ item.university }}</li>
          <li v-if="item.date">{{ item.date }}</li>
          <li v-if="item.description">{{ item.description }}</li>
        </ul>
      </div>
      <div v-if="about?.resume?.experience">
        <h2>Experience</h2>
        <ul v-for="item in about.resume.experience" :key="item.title">
          <li>{{ item.title }}</li>
          <li>{{ item.company }}</li>
          <li>{{ item.date }}</li>
          <li>{{ item.description }}</li>
        </ul>
      </div>
      <div v-if="about?.resume?.certifications">
        <h2>Certifications</h2>
        <ul v-for="item in about.resume.certifications" :key="item.title">
          <li>{{ item.title }}</li>
          <li>{{ item.from }}</li>
          <li>{{ item.date }}</li>
        </ul>
      </div>
      <div v-if="about?.resume?.skills">
        <h2>Skills</h2>
        <ul>
          <li v-for="item in about.resume.skills" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useAsyncData } from '#imports';
import pic from "@/assets/old/outdoor-pic.jpg"
const title = ref('George Mushore | About')

useSeoMeta({
  title,
  description: () => `description: ${title.value}`
})
definePageMeta({ layout: "nav-and-footer", title: "About" })

// Use queryCollection instead of queryContent in v3
const { data: about } = await useAsyncData('about', () => 
  queryCollection('about').first()
)
</script>

<style lang="scss" scoped>
.about__header {
  border-bottom: 1px solid var(--color-neutral);
  padding-bottom: 2rem;

  /*nada */
  // display: flex;
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

.about__skills {
  ul {
      margin: 0;
      margin-bottom: 1rem;
      padding: 0;
    h2 {
      font-size: 1.25rem;
      color: var(--text);
    }

    h3 {
      font-size: 0.9rem;

      color: var(--text-soft);
    }

    li {
      color: var(--text-soft);
    
    }

  }
}

@media (min-width: 640px) {
  main {
    max-width: 1000px;
    margin: auto;

    .about__header {
      /*nada */
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

    .about__skills {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
