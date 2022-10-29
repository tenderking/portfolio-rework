---
title: Calculator
author: "Sébastien Chopin"
publishedAt: "15-06-2022"
---

# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Nuxt Setup](#nuxt-setup)
  - [Setup](#setup)
  - [Development Server](#development-server)
  - [Production](#production)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Calculator Repo](https://github.com/tenderking/calculator-nuxt-app)
- Live Site URL: [Live Site](https://calculator-nuxt-app.vercel.app/)

## My process

We worked with pair programming. And I make sure I use something new of every project. This time it was tailwind and nuxt 3.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Vue](https://vuejs.org/) - JS library
- [Nuxt.js](https://nuxtjs.org/) - React framework
- [NUxt Tailwind](https://tailwindcss.nuxtjs.org/) - For styles

### What I learned

I learn to use tailwindcss and nuxt, setup up multiple themes. Nuxt 3 doesn't work well with github pages, we used vercel instead. This is because Nuxt is server side rendered and github pages is great for hosting static sites or client side rendered apps.

```js
pressedKey.value = eval(pressedKey.value);
```

### Continued development

I still spend a lot of time in configuration and dealing with builds that are different from dev mode.

## Nuxt Setup

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

### Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

### Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

### Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/tenderking)

## Acknowledgments

I would like to thank @ermix3, who collaborated with me. We worked well together.

- [@ermix3](https://github.com/ermix3)
