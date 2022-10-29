<template>
	<main>
		<!-- <IconSocialList /> -->
		<section class="about__header">

			<img id="profile-pic" :src="pic" alt="profile picture" />


			<div class="about__header-text">
				<h1 class="display">Hi, I'm George!</h1>
				<h3>I have a passion for technology and digitalization.</h3>
				<p>
					My goal is to make technology easy to understand. I have a background
					in applied data science and physics, and have a strong interest web
					development and ux-design.<br />
					I'm open to have a
					<a href="mailto:gmu003@gmail.com" style="color:var(--color-text), text-decoration-line:none">chat 👋</a>, or a
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
					<h3>UX-Design</h3>
				</li>

				<li>Coursera</li>

				<li>Google UX-design</li>

				<li>April 2021</li>

				<li>
					<h3>Data Science</h3>
				</li>

				<li>Norwegian Arctic University</li>

				<li>MSc of Tech.</li>

				<li>October 2019</li>
			</ul>



			<ul>
				<li>
					<h2>Skills</h2>
				</li>

				<li>Design thinking</li>
				<li>UX+UI</li>


				<li>Machine Learning</li>
				<li>Bayesian Statistics</li>
				<li>Regression</li>
			</ul>



			<ul>
				<li>
					<h2>Tools</h2>
				</li>
				<li>Figma, AdobeXD</li>
				<li>HTML , CSS, JS</li>
				<li></li>

				<p></p>
				<li>Python, R, Excel</li>
				<li>Tableau, PowerBI</li>
			</ul>

		</section>

		<section class="links">
			<div id="my-projects">
				<router-link to="/work">

					My Projects
				</router-link>
			</div>

			<div id="resume">
				<a href="CV_George.pdf" download="CV George English">
					Download Resume
				</a>
			</div>

			<div id="email">
				<a href="mailto:gmu003@gmail.com">

					Get in touch
				</a>
			</div>
		</section>
	</main>
</template>

<script setup lang="ts">
import pic from "@/assets/old/outdoor-pic.jpg"

</script>
<style lang="scss">
.about__header {

	/*nada */
	// display: flex;
	img {
		margin: auto;
		padding: 1em;
		width: 100%;
	}

	&-text {
		padding: 1em;
	}

}

.about__skills {
	ul {

		padding: 1em;
	}
}

@media (min-width: 640px) {
	main {
		.about__header {
			/*nada */
			display: flex;

			&-text {
				padding: 1em;
			}

		}

		.about__skills {
			display: flex;
			justify-content: space-evenly;
		}
	}

}
</style>