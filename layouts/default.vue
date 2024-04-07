<template>
  <div>
    <header>
      <NavBar />
    </header>
    <slot />
  </div>
</template>
<script lang="ts" setup>
const route = useRoute()
useHead
({
  meta
: [{ property
: 'og:title', content
: `George Mushore - ${route
.meta
.title
}` }]
})
</script>