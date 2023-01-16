<template>
	<h1 :id="id">
		<a v-if="generate" :href="`#${id}`">
			<slot />
		</a>
		<slot v-else />
	</h1>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#imports'
defineProps<{ id: string }>()
const heading = 1
const { anchorLinks } = useRuntimeConfig().public.content
const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>

<style scoped>
h1 {
	text-align: center;
	background: -webkit-linear-gradient(355deg, var(--color-primary) 15%, var(--color-accent));
	background-clip: border-box;
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-weight: 900;
	font-size: 2rem;
	margin-bottom: 1rem;
}
</style>