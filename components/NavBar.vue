<template>
  <nav aria-label="Main">
    <NuxtLink to="/">
      <IconLogo />
    </NuxtLink>

    <div class="wrapper">
      <ul
        ref="target"
        :class="isHidden ? 'hidden' : 'show'"
        v-on-click-outside="closeModal"
      >
        <li>
          <NuxtLink tabindex="0" to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink tabindex="0" to="/blog">Blog</NuxtLink>
        </li>
      </ul>

      <ButtonToggle tabindex="0" />
      <i v-if="isMobile">
        <IconHamburger v-if="isHidden" @click="openModal" />
        <IconClose v-else @click="closeModal" />
      </i>
    </div>
  </nav>
</template>
<script lang="ts" setup>
import { vOnClickOutside } from "@vueuse/components"
const isHidden = ref(true)
const isMobile = useMediaQuery("(max-width: 640px)")

function closeModal() {
  isHidden.value = true
}
function openModal() {
  isHidden.value = false
}

// scroll to blog page on scroll down
// const target = ref<HTMLElement | null>(null)
// const scroll = () => {
//   if (target.value) {
//     target.value.scrollIntoView({ behavior: "smooth" })
//   }
// }
// const router = useRouter()

// const checkScroll = () => {
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//     router.push("/blog")
//   }
// }
// onMounted(() => {
//   window.addEventListener("scroll", checkScroll)
// })
</script>
<style lang="scss" scoped>
nav {
  padding:0 1rem ;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5em;

    ul {
      position: absolute;
      inset: 2em 0 auto 0;
      background-color: var(--color-primary);
      gap: 1rem;
      flex-direction: column;

      padding: 1rem;
      gap: 1rem;
      border-radius: 1rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      text-align: center;
      z-index: 10;
      margin-inline: 2em;
      display: none;
    }

    i {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .hidden {
      display: none;
      transition: all 0.5s ease-in-out;
    }

    .show {
      display: flex;
      transition: all 0.5s ease-in-out;
    }
  }
}

/**large screens */

@media (min-width: 640px) {
  nav {
    .wrapper {
      ul {
        position: static;
        inset: 2em 0 auto 0;
        padding: 0;
        display: flex;
        gap: 1rem;
        flex-direction: row;
        background: none;
        box-shadow: none;
      }

      .hidden {
        display: flex;
      }
    }
  }
}
</style>
