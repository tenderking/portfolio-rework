---
author: "George Mushore"
date: "15-06-2022"
imgUrl: "blob.svg"
---

# Calculator App

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### Screenshot

![image](https://github.com/tenderking/calculator-nuxt-app/raw/master/screenshot.png)

### Links

- Solution URL: [Calculator Repo](https://github.com/tenderking/calculator-nuxt-app)
- Live Site URL: [Live Site](https://calculator-nuxt-app.vercel.app/)

### The challenge

The challenge is to build out this calculator app and get it looking as close to the design as possible which is provided by frontend mentor. Any tools you like could be used to help complete the challenge. I wished to practice my typescript skills using nuxt, a vuejs framework.

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

## My process

We worked with pair programming. And I make sure I use something new of every project. This time it was tailwind and nuxt 3.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Vue](https://vuejs.org/) - JS library
- [Nuxt.js](https://nuxtjs.org/) - Vue framework
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


# npm
npm install

# Start the development server on http://localhost:3000
npm run dev

#Build the application for production:
npm run build

```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

## Author

- Frontend Mentor - [@tenderking](https://www.frontendmentor.io/profile/tenderking)
- Github - [@tenderking](https://github.com/tenderking/)

## Acknowledgments

I would like to thank @ermix3, who collaborated with me. We worked well together.

- [@ermix3](https://github.com/ermix3)
