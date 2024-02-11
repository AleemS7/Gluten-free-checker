Built By Aleem Shaik

Built Using React, Node.js, CSS, Netlify, Open Food Facts API

## Inspiration
This project was inspired by different stories from close friends and family who have dealt with Celiacs disease which causes an immune reaction to eating gluten, a protein found in wheat, barley, and rye.

## What it does
It autocompletes searches for various food products which then can be chosen to view their respective gluten information. Clicking on a food product after searching for it shows a detailed page of the products informaiton such as ingredients and most importantly, whether it contains gluten. 

## How we built it
The Gluten-Free Explorer project was built using React for its interactive UI components, Node.js for development environment setup and dependency management, Netlify for seamless deployment and hosting, and CSS for custom styling and layout enhancements. The main API powering this project was the Open Food Facts API.

## Challenges we ran into
One of the main challenges I ran into was the translation of ingredients from a foreign language to english. The reason this is important is because after filtering out gluten-free tagged products, I used the ingredient list to filter out any other products that listed gluten containing ingredients. Some of these were not in english because of the global nature of the API. The solution for this would have been a paid one where I could employ google translate API to translate all ingredients to english and then parse them.

## Accomplishments that we're proud of
One accomplishment I'm proud of is the usage of the autocomplete search feature which makes it much easier for users to use the site rather than having them type in the exact name of the product.

## What we learned
My main takeway from this project is that simplicity and purposeful design triumphs random bells and whistles. I realized that building a web app with insane design and complex tech is always impressive to see, but building something impactful starts from a clear need and purpose.

## What's next for Gluten-Free Explorer
One of the main things that Gluten-Free Explorer would benefit from is an alternative gluten-free product display where gluten-free alternatives to a gluten containing product are listed for the user. Obviously this functionality and design concept can be stretched to different allergen filters aswell and would be very impactful.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
