---
author: "George Mushore"
date: "15-06-2022"
imgUrl: "blobo.svg"
---

# Job listings with filtering

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

- Solution URL: [Solution](https://github.com/tenderking/job-listing-app)
- Live Site URL: [Live site URL](https://tenderking.github.io/job-listing-app/)

### Screenshot

![Screenshot](https://user-images.githubusercontent.com/10375060/156828701-e821c6fb-a4f1-4b20-a4f4-3b85c37cc140.png)

<style type="text/css">
    img {
        width: 80%;
        
    }
</style>



## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Vuejs](https://vuejs.org/) - JS library
- [Quasar](https://quasar.dev/) - Vue framework

### What I learned

I learned to use a vue framework, use typescript, using json data file, learned about reactive components.

This code filtered the data, but the logic was faulty. It filtered by objects containing a filter word or another. But the goal was filtering objects by a filter word and then another. The difference becomes that the if the filter words were, html and css, the algorithm would show objects the word html, or css or both. The desired was to only show the objects with both html and css.

```js
let filteredResult = () => {
      const result3 = props.rows.filter((item) =>
        selected.value.some((val) => item.languages.includes(val))
      );
      const result1 = props.rows.filter((item) =>
        selected.value.some((val) => item.tools.includes(val))
      );
      const result2 = props.rows.filter((item) =>
        selected.value.some((val) => item.level.includes(val))
      );
      const result4 = props.rows.filter((item) =>
        selected.value.some((val) => item.role.includes(val))
      );
      const resultList = [result1, result2, result3, result4];
      //some arrays will be empty so we remove them here.
      let filteredResult = resultList.find((a) => a.length > 1);

      return filteredResult;
    };
}
```

The refactored changed the logic and also improved the code to avoid repitition.

```js
let filteredResult = () => {
	const filteredResult = props.rows.filter((item) =>
		selected.value.every((val) =>
			[...item.languages, ...item.tools, item.level, item.role].includes(val)
		)
	);

	return filteredResult;
};
```

<!-- ### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.** -->

<!-- ## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.** -->

<!-- ## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.** -->

```
# Install the dependencies
npm install

# Start the app in development mode (hot-code reloading, error reporting, etc.)
npx quasar dev

# Lint the files
npx run lint

# Build the app for production
npx quasar build
```

### Customize the configuration

See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

## Author

- Website - [George Mushore](https://www.georgemushore.com)
- Frontend Mentor - [@tenderking](https://www.frontendmentor.io/profile/tenderking)
