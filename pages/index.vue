<script setup lang="ts">
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
      href: 'favicon.ico'
    }
  ]
})
const projects = await queryContent("projects")
  .only(["_path", "title", "imgUrl"])
  .find()
</script>
<template>
  <main>
    <header>
      <h1>Hi, I'm George Mushore</h1>
      <h2 class="punchline">Welcome to my personal website.</h2>
      <p class="pitch">
        I am a passionate and versatile tech professional with a Master’s degree in Technology, specializing in Data Analytics. My journey in the tech world has been diverse and enriching, spanning various roles and responsibilities.
      </p>
      <p>
        I'm currently seeking exciting opportunities in the tech or IT industry
        where I can leverage my expertise and build innovative solutions.
      </p>
    </header>

    <h2 class="title">My projects</h2>

    <template v-if="projects">
      <div class="grid-container">
        <template v-for="route in projects" :key="route._path">
          <NuxtLink class="card" :to="`${route._path}`">
            <h2>{{ route.title }}</h2>

            <img :src="route.imgUrl" alt="blob" height="200" width="250" />
          </NuxtLink>
        </template>
      </div>
    </template>
  </main>
  <!-- show blog page on scroll down -->
</template>

<style lang="scss" scoped>
hr {
  border: none;
  border-top: 1px solid var(--text);
  overflow: visible;
  text-align: center;
  height: 5px;
}
main {
  width: 100vw;
  text-align: center;
  margin-bottom: 2rem;
  header {
    padding-block: 4rem;
  }

  h1,
  .title {
    background: -webkit-linear-gradient(
      315deg,
      var(--color-primary) 40%,
      var(--color-accent)
    );
    background-clip: border-box;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 0;
    margin-top: 0;
  }
  .title {
    margin-bottom: 4rem;
  }

  .punchline {
    background: -webkit-linear-gradient(
      315deg,
      var(--color-accent) 15%,
      var(--text)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1rem;
    margin-bottom: 2rem;
    margin-top: 0.5rem;
  }
  p {
    margin-bottom: 2rem;
    margin-inline: auto;
    max-width: 75ch;
    text-align: left;
    padding: 1rem;
  }

  p.pitch {
    max-width: 75ch;
  }

  .grid-container {
    padding: 1em;
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 1em;

    .card {
      padding: 2rem 1rem;
      width: 100%;
      display: grid;
      justify-content: center;
      border-radius: 0.5rem;

      align-items: center;
      text-align: center;
      background: -webkit-linear-gradient(
        315deg,
        var(--color-accent) 5%,
        var(--color-primary)
      );
      background-clip: border-box;

      h2 {
        color: var(--bg);
      }
    }
  }
}

@media (min-width: 640px) {
  main {
    h1,
    .title {
      font-weight: 700;
      font-size: 4rem;
      margin-bottom: 0;
      margin-top: 0;
    }
    .title {
      margin-bottom: 4rem;
    }

    .punchline {
      font-size: 3.5rem;
      margin-bottom: 2rem;
      margin-top: 0.5rem;
    }

    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      max-width: 80rem;
      width: 100%;
      // justify-content: center;

      margin: auto;

      .card {
        padding: 2rem 1rem;
        height: 300px;
      }
    }
    p {
      text-align: center;
      padding: 0;
    }
  }
}
</style>
