<script lang="ts" setup>
const blogs = await queryContent('blog').only(['_path', 'title', 'description', 'date']).find()
</script>

<template>
	<h1>My Blogs</h1>

	<div class="blog-cards_container">
		<div class="blog-cards" v-for="article in blogs" :key="article._path">
			<NuxtLink :to="`${article._path}`">
				<div class="blog-article">
					<span>
						{{ article.date }}
					</span>
					<div>
						<h2>
							{{ article.title }}
						</h2>
						<p>
							{{ article.description }}
						</p>

					</div>


				</div>
			</NuxtLink>
		</div>
	</div>




	<!-- <pre>{{ blogs }}</pre> -->
</template>
<style lang="scss" scoped>
h1 {
	text-align: center;
}

h1 {
	background: -webkit-linear-gradient(355deg, var(--color-primary) 15%, var(--color-accent));
	background-clip: border-box;
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-weight: 900;
	font-size: 3rem;
	margin-bottom: 1rem;
}

.blog-cards_container {

	display: flex;
	flex-direction: column;
	gap: 1em;
	justify-content: center;
	align-items: center;

	.blog-cards {
		outline: solid;
		width: max-content;
		max-width: 400px;
		padding: 1em;
		border-radius: 1em;

		.blog-article {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 1em;

			span {
				font-weight: 400;
				font-size: smaller;
				color: var(--text-mute);
			}
		}



	}

}
</style>