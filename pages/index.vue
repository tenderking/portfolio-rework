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
          <NuxtLink class="card gradient-border" :to="`${route._path}`">

            <h2>{{ route.title }}</h2>

          </NuxtLink>

        </template>
      </div>

    </ContentNavigation>
  </main>
</template>
<style lang="scss" scoped>
main {
  width: 100vw;
  text-align: center;

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
      height: 150px;
      align-items: center;
      text-align: center;
      background-color: var(--bg-element);
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
        width: 200px;
        height: 150px;
      }

    }
  }
}
</style>
