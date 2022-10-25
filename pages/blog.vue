<template>
	<h1>My Blogs</h1>
	<ContentList path="/blogs" v-slot="{ list }">
		<div v-for="article in list" :key="article._path">
			<div class="blog-article gradient-border">
				<ContentRenderer :value="article" />
			</div>

		</div>
	</ContentList>
</template>
<style lang="scss" scoped>
h1 {
	text-align: center;
}

.blog-article {
	padding: 1em;

	margin: 2rem;

}
</style>