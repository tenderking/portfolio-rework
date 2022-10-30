<template>
  <div>
    <header>
      <NavBar />
    </header>
    <slot />
    <footer>

      <svg class="curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">

        <path fill-opacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </path>
      </svg>

      <div class="container">
        <div class="links">
          <div id="my-projects">
            <router-link to="/">

              My Projects
            </router-link>
          </div>

          <div id="resume">
            <a href="CV_George.pdf" download="CV George English">
              Download Resume
            </a>
          </div>

        </div>

        <div>
          <h2>
            Contact
          </h2>
          <p>+47 92 659 659</p>
          <p>gmu003@gmail.com</p>
        </div>
        <a class="cta" href="mailto:gmu003@gmail.com">

          Get in touch
        </a>
      </div>
    </footer>
  </div>
</template>
<style lang="scss" scoped>
footer {
  // background-color: var(--color-neutral);
  color: white;


  p {
    color: white;
  }

  .curve {
    width: 100%;
    fill: var(--bg-neutral);

  }

  .container {
    background-color: var(--bg-neutral);
    background-clip: border-box;
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 2em 1em;

    a.cta {
      background-color: var(--color-primary);
      width: max-content;
      padding: 0.5em 2em;
      border-radius: 2em;
      transition: all ease-in-out 300ms;

      &:hover,
      &:focus {
        background: -webkit-linear-gradient(315deg, var(--color-accent) 5%, var(--color-primary));
      }
    }
  }

}

// @media (prefers-color-scheme: dark) {
//   footer {
//     background-color: var(--color-neutral-soft);

//   }
// }

@media (min-width:640px) {
  footer {
    .container {
      padding: 2em 6em;
      justify-content: space-between;
      flex-direction: row;

      a.cta {

        height: min-content;


        &:hover,
        &:focus {
          background: -webkit-linear-gradient(315deg, var(--color-accent) 5%, var(--color-primary));
        }
      }

    }
  }

}
</style>