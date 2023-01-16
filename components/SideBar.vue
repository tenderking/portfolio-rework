<script lang="ts" setup>
const blogs = await queryContent('blog').only(['_path', 'title', 'description', 'date']).find()

</script>




<template>
	<div class="sidebar">

		<h2>My Blogs</h2>

		<ul v-for="article in blogs" :key="article._path">
			<li class="blog-article">
				<NuxtLink :to="`${article._path}`">
					{{ article.title }}
				</NuxtLink>
			</li>

		</ul>


	</div>
</template>



<style>
.sidebar {

	width: 200px;
	height: 100%;


	left: 0;

}

li {}

a {
	font-weight: normal;
	color: var(--text-soft);
}
</style>
