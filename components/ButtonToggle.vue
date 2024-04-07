<template>
  <button @click="toggleButton" class="main">
    <svg
      width="36"
      height="16"
      viewBox="1 -1 36 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="icon-toggle"
      role="button"
    >
      <title id="icon-toggle">Toggle theme</title>
      <rect width="36" height="16" rx="8" class="rect" />
      <circle class="active" :cx="circlePos" cy="8" r="6" />
    </svg>
  </button>
</template>
<script lang="ts" setup>
const isActive = ref(false)
const circlePos = ref(8)
const isDark = useDark({
  selector: "body",

  valueDark: "dark",
  valueLight: "light",
})
const toggleButton = () => {
  isActive.value = !isActive.value
  isDark.value = !isDark.value
}

watch(isActive, () => {
  circlePos.value === 8 ? transitionTo(28) : transitionTo(8)
})
function transitionTo( pos: number) {
//   stepwise move the circle to the new position
  let i = circlePos.value
  let interval = setInterval(() => {
	if (i === pos) {
	  clearInterval(interval)
	} else {
	  i < pos ? i++ : i--
	  circlePos.value = i
	}
  }, 10)
  

}
</script>

<style lang="scss" scoped>
.main {
  .active {
	  fill: var(--text);
    transition: fill 0.8s ease-in-out; /* animate only fill property */
  }

  .rect {
    fill: var(--bg);
    stroke: var(--text);
    stroke-width: 2px;
	transition: fill 0.8s ease-in-out;
  }

  circle {
	  fill: var(--text);
	transition: cx 0.8s ease-in-out, fill 0.8s ease-in-out; /* animate cx and fill properties */
  }
}

</style>
