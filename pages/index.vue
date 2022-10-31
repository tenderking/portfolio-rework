<template>
  <main>
    <h1>My projects</h1>
    <p>
      I have a passion for technology and digitalization. - Currently working at Telenor
    </p>
    <ContentNavigation path="/projects/" v-slot="{ navigation }">
      <!-- <pre>
    {{ navigation[1] }} 
    
    </pre> -->
      <div class="grid-container">
        <template v-for="route in navigation[1].children" :key="route._path">
          <NuxtLink class="card " :to="`${route._path}`">

            <h2>{{ route.title }}</h2>
            <img src="@/assets/icons/blob.svg" alt="blob" height="200" width="250">
          </NuxtLink>

        </template>
      </div>

    </ContentNavigation>
  </main>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
main {
  width: 100vw;
  text-align: center;

  h1 {
    background: -webkit-linear-gradient(315deg, var(--color-primary) 25%, var(--color-accent));
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
      background: -webkit-linear-gradient(315deg, var(--color-accent) 5%, var(--color-primary));
      background-clip: border-box;


      h2 {
        color: var(--bg)
      }

    }
  }
}

@media (min-width: 640px) {
  main {
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      width: min-content;
      margin: auto;

      .card {
        padding: 2rem 1rem;
        height: 300px;
      }

    }
  }
}
</style>
