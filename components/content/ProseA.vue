<script setup lang="ts">
defineProps({
	href: {
		type: String,
		default: ''
	},
	blank: {
		type: Boolean,
		default: false
	}
})
</script>

<template>
	<NuxtLink class="doc-links" :href="href">
		<slot />
	</NuxtLink>
</template>
<style lang="scss">
a.doc-links {
	color: var(--color-primary);
	font-weight: 400;
}

@media (prefers-color-scheme: dark) {
	a.doc-links {
		color: var(--color-accent);

	}
}
</style>