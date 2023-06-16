# Queendom Puzzle Group Generator

A simple SPA written in Typescript, made using ReactJS, which generates k-pop groups using [Konva.js](https://konvajs.org/).

### Libraries and Services Used:
1. [**React**](https://react.dev/): duh.
2. [**Typescript**](https://www.typescriptlang.org/): for shipping a type-safe app which minimizes the amount of errors during development and runtime 
3. [**Prettier**](https://prettier.io/): for maintaining a rigid set of coding style
4. [**Konva**](https://konvajs.org/): for manipulating and export the images on the canvas using HTML5 Canvas API
5. [**React-Konva**](https://konvajs.org/docs/react/Intro.html): for interacting with Konva api to manipulate the Layer & Shapes on the Canvas
6. [**FontAwesome**](https://fontawesome.com/): for some icons here and there
7. [**Firebase**](https://firebase.google.com/): as backend for storing user data and total no. of App Visits
8. [**crypto.js**](https://github.com/brix/crypto-js): for hashing the user IP address for keeping track of unique users.
9. [**Netlify**](https://www.netlify.com/): for hosting the app itself
10. [**Cloudinary**](https://cloudinary.com/): for image hosting and CDN
11. [**Tailwind CSS**](https://tailwindcss.com): for easy and consistent styling of the app
12. [**DaisyUI**](https://daisyui.com): for extends tailwind by incorporating pre-styled reusable components
13. [**Headless UI**](https://headlessui.com/): for implementing the toggle switch for name labels and Dialog for saved user info

#### Logging User Data to Firestore

- Logged User Data consists of a Visit Counter and an Object with 3 properties: 
	1. userAddress
	2. firstVisitedAt
	3. lastVisitedAt
- Whenever the page is rendered, the visit counter is incremented
- The App makes a GET request to [jsonip](https://jsonip.com/) in order to get the user ip. This IP is then hashed to a SHA256 string, to maintain anonymity but still being able to generate the same hash from the same input string.
The app checks if the generated hash exists in the backend, if it does not, a new user document is created, but if it does, only the lastVisitedAt key is updated.

#### Link to the Deployed App

The deployed app can be found here:
https://queendom-puzzle.netlify.app
#### Available Scripts

This project uses the default react-scripts
```sh
# To run the development server at localhost:3000
npm start

# To compile and minify the app for deployment
npm run build

# To run tests (although there are no tests)
npm run test

# To eject from the react configurations for webpack and stuff, so that you can configure it yourself
# PS: Once you run this, there's no going back
npm run eject
```

##### Disclaimer:
`This app is inspired by Queendom Puzzle. It uses the name, style, and images of idols for entertainment purposes. Not affiliated with Queendom Puzzle or its owners. All copyrights belong to their respective owners.`