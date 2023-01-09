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
	<NuxtLink :href="href">
		<slot />
	</NuxtLink>
</template>
<style lang="scss">
a {
	color: var(--color-primary);
	font-weight: 400;
}
</style>