<template>
  <main>
    <h1>hello</h1>
    <ContentList path="/blogs" v-slot="{ list }">
      <div v-for="article in list" class="grid" :key="article._path">
        <div class="card gradient-border">
          <h2>{{ article.title }}</h2>
        </div>

      </div>
    </ContentList>
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
