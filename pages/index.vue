<script setup lang="ts">
const projects = await queryContent("projects")
  .only(["_path", "title", "imgUrl"])
  .find();
</script>
<template>
  <main>
    <header>
      <img src="@/assets/icons/Mask.svg" width="200" height="200" />
      <h1>George Mushore</h1>
      <p class="pitch">
        Hi. I'm George, welcome to my personal website. I have a passion for
        technology and digitalization.
        <br />
        - Currently working at Telenor
      </p>
    </header>
    <h2>My projects</h2>

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
</template>

<style lang="scss" scoped>
main {
  width: 100vw;
  text-align: center;

  h1 {
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
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
    margin-inline: auto;
  }

  p.pitch {
    max-width: 45ch;
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
  }
}
</style>
