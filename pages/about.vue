<template>
	<NuxtLayout :name="layout">
		<main>
			<!-- <IconSocialList /> -->
			<section class="about__header">

				<img id="profile-pic" :src="pic" alt="profile picture" />


				<div class="about__header-text">
					<h2 class="display">Hi, I'm George!</h2>
					<h3>I have a passion for technology and digitalization.</h3>
					<p>
						My goal is to make technology easy to understand. I have a background
						in applied data science and physics, and have a strong interest web
						development and ux-design.<br />
						I'm open to have a
						<a href="mailto:gmu003@gmail.com" style="color:var(--color-text), text-decoration-line:none">chat 👋</a>, or
						a
						coffee.
					</p>

				</div>
			</section>

			<section class="about__skills">

				<ul>
					<li>
						<h2>Education</h2>
					</li>
					<li>
						<h3>Applied Maths and Physics</h3>
					</li>

					<li>Norwegian Arctic University</li>

					<li>MSc of Tech.</li>

					<li>October 2019</li>
				</ul>




				<ul>
					<li>
						<h2>Skills</h2>
					</li>
					<li>Data Science</li>
					<li>Frontend</li>
					<li>Tutoring</li>
					<li>UX-design</li>
					<li>&nbsp;</li>
					<li>Design thinking</li>
					<li>UX+UI</li>
					<li>Figma, AdobeXD</li>
					<li>HTML , CSS, JS</li>
					<li>&nbsp;</li>


					<li>Machine Learning</li>
					<li>Bayesian Statistics</li>
					<li>Python, R, Excel</li>
					<li>Tableau, PowerBI</li>
					<li>&nbsp;</li>


					<p></p>
				</ul>
				<ul>
					<li>
						<h2>Courses</h2>
					</li>



					<li>
						<h3>
							Google UX-design fundamentals
						</h3>
					</li>
					<li>Coursera</li>

					<li>April 2021</li>
					<li>
						<h3>
							Microsoft Azure fundamentals
						</h3>
					</li>
					<li>Microsoft</li>

					<li>May 2022</li>
					<li>
						<h3>
							Microsoft Azure AI fundamentals
						</h3>
					</li>
					<li>Microsoft</li>

					<li>May 2022</li>

				</ul>


			</section>


		</main>
	</NuxtLayout>
</template>

<script setup lang="ts">
import pic from "@/assets/old/outdoor-pic.jpg"
const layout = "nav-and-footer"
definePageMeta({ layout: false });
</script>
<style lang="scss" scoped>
.about__header {

	border-bottom: 1px solid var(--color-neutral);
	padding-bottom: 2rem;

	/*nada */
	// display: flex;
	img {
		margin: auto;
		padding: 1em;
		width: 100%;
		border-radius: 2em;

	}

	&-text {
		padding: 1em;

		h2 {
			font-size: 2rem;
			background: -webkit-linear-gradient(315deg, var(--color-primary) 25%, var(--color-accent));
			background-clip: border-box;
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			font-weight: 900;

			margin-bottom: 1rem;
		}
	}

}

.about__skills {
	ul {
		h2 {
			font-size: 1.25rem;
			color: var(--text);
		}

		h3 {

			font-size: 0.9rem;

			color: var(--text-soft);

		}

		li {
			color: var(--text-soft);
		}

		padding: 1em;
	}
}

@media (min-width: 640px) {
	main {
		max-width: 1000px;
		margin: auto;

		.about__header {
			/*nada */
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 2em;

			img {
				max-width: 400px;
				margin: 0;
			}

			&-text {
				padding: 1em;
				;

				h2,
				h3 {
					max-width: 40ch;
				}

				p {
					max-width: 50ch;

				}
			}

		}

		.about__skills {
			display: flex;
			justify-content: space-between;
		}
	}

}
</style>