# Queendom Puzzle Group Generator

A simple SPA written in Typescript, made using ReactJS, which generates K-pop groups using [Konva.js](https://konvajs.org/).

### Libraries and Services Used:
1. [**React**](https://react.dev/): Used for building the application.
2. [**Typescript**](https://www.typescriptlang.org/): Ensures type safety and minimizes the amount of errors during development and runtime.
3. [**Prettier**](https://prettier.io/): Maintains a consistant coding style.
4. [**Konva**](https://konvajs.org/): Manipulates and exports the images on the canvas using HTML5 Canvas API
5. [**React-Konva**](https://konvajs.org/docs/react/Intro.html): Interacts with Konva api to manipulate the Layers & Shapes on the Canvas
6. [**FontAwesome**](https://fontawesome.com/): Provides icons for the application
7. [**Firebase**](https://firebase.google.com/): Backend service for storing user data and tracking the total number of app visits
8. [**crypto.js**](https://github.com/brix/crypto-js): Hashs the user IP address for tracking unique users.
9. [**Netlify**](https://www.netlify.com/): Hosts the application
10. [**Cloudinary**](https://cloudinary.com/): Used for image hosting and CDN
11. [**Tailwind CSS**](https://tailwindcss.com): Simplifies and ensures consistent styling of the app
12. [**DaisyUI**](https://daisyui.com): Extending Tailwind CSS by incorporating pre-styled reusable components
13. [**Headless UI**](https://headlessui.com/): Implementing the toggle switch for name labels and dialog for saved user info

#### Logging User Data to Firestore

- Logged User Data consists of a Visit Counter and an Object with 3 properties: 
	- `userAddress`
	- `firstVisitedAt`
	- `lastVisitedAt`
- Each time the page is rendered, the visit counter is incremented
- The App makes a GET request to [jsonip](https://jsonip.com/) to obtain the user's IP Address. This IP Address is then hashed to a SHA256 string to maintain anonymity but still generating the same hash from the same input string.
The app checks if the generated hash exists in the backend, if it does not, a new user document is created. If it does, only the `lastVisitedAt` key is updated.

#### Link to the Deployed App

The deployed app can be accessed here:
https://queendom-puzzle.netlify.app

#### Available Scripts

This project uses the default `react-scripts`
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
