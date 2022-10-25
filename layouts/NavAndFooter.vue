<template>
  <header>
    <NavBar />
  </header>
  <slot />
  <footer>
    apple why
  </footer>
</template>
<style lang="scss">
footer {
  background-color: var(--color-neutral);
  padding: 2em;

}

@media (prefers-color-scheme: dark) {
  footer {
    background-color: var(--color-neutral-soft);

  }
}
</style>