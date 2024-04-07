<template>
	<div>
		<NuxtLayout :name="layout">
			<h1>contact</h1>

		</NuxtLayout>
	</div>
</template>
<script lang="ts" setup>
const layout = "nav-and-footer"
definePageMeta({ layout: false, title: "Contact" });

</script>