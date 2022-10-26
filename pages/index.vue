<template>
  <main>
    <h1>My projects</h1>
    <ContentNavigation path="/projects/" v-slot="{ navigation }">
      <!-- <pre>
    {{ navigation[1] }} 
    
    </pre> -->
      <div v-for="route in navigation[1].children" class="grid" :key="route._path">
        <NuxtLink :to="`${route._path}`">
          <div class="card gradient-border">
            <h2>{{ route.title }}</h2>
          </div>
        </NuxtLink>

      </div>
    </ContentNavigation>
  </main>
</template>
<style lang="scss">
main {
  width: 100vw;

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    outline: black;

    .card {
      padding: 1rem;
    }
  }
}
</style>
