<template>
  <div class="flex-col container">
    <SideBar class="side-bar" />
    <div class="article">
      <ContentDoc />
    </div>
  </div>
</template>
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

}
.article-img{
  width: 100%;
}


@media (min-width: 640px) {
  .side-bar {
    display: block;
  }

}

</style>
