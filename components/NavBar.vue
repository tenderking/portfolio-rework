<template>
  <nav aria-label="Main">
    <span>George Mushore</span>

    <div :class="{ 'h-auto': isOpen === false }">
      <ul :class="{ hidden: isOpen === false }">
        <li v-for="link in links" :key="link">
          <a href="#" tabindex="0">{{ link }}</a>
        </li>
      </ul>
    </div>
    <i @click="toggleButton()" v-if="isMobile">
      <IconClose v-if="isOpen" />
      <IconHamburger v-else />
    </i>
  </nav>
</template>
<script lang="ts" setup>
import { useMediaQuery, useToggle } from "@vueuse/core";
const isMobile = useMediaQuery("(max-width: 640px)");
const idText = "header-icon-logo";
const [isOpen = true, toggleButton] = useToggle();
const links = ["Home", "About", "Contact", "Blog", "Careers"];
</script>
<style lang="scss">
.hidden {
  display: none;
}
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--bg-element);
  position: relative;
  div {
    position: absolute;

    height: 100vh;
    top: 1em;
    right: 2rem;
    left: 2rem;
    text-align: center;
    z-index: 10;
    margin-top: 2em;

    ul {
      padding: 1em;
      gap: 1em;
      border-radius: 1em;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      background-color: var(--bg-element);
      display: flex;
      flex-direction: column;
    }
  }
}
@media (min-width: 640px) {
  nav {
    padding-inline: 16px;
    div {
      position: static;
      height: auto;
      width: auto;
      margin: 0;
      ul {
        margin: 0;
        padding: 0;
        flex-direction: row;
        border-radius: 0;
        box-shadow: none;
      }
    }
  }
}
</style>
