<script lang="ts">
import { defineComponent } from '#imports'
export default defineComponent({
	props: {
		code: {
			type: String,
			default: ''
		},
		language: {
			type: String,
			default: null
		},
		filename: {
			type: String,
			default: null
		},
		highlights: {
			type: Array as () => number[],
			default: () => []
		}
	}
})
</script>

<template>
	<slot />
</template>

<style>
pre {
	margin: 1em;
	border-radius: 10px;
	background: #1e1e1e;
	padding: 1em;
}

pre code .line {
	display: block;
	min-height: 1rem;



}
</style>