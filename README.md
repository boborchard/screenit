# Hi there!

This project is the result of my code challenge with Planning Center. If you have any questions, please send me an email and I'll get an answer right over to you.

## Previewing this project

I've built and deployed a preview of this branch here: https://screen-it-api.vercel.app/

## Running this project

You'll find two branches in this repository:

**main** represents the initial build of the UI based on the designs provided in Figma. There were a few concessions I made in terms of pixel-perfect accuracy, but that was due mostly to the time constraint of the challenge.

- the stars from the rating system do not match 100%
- the text sizes in the avatars don't vary in size quite the same, but I've adjusted the ratios to be similar
- there are some browser differences in the color of the text for the form inputs, which I resolved in the second branch

**use-mockapi** represents a few changes I'd make to this experience to prioritize the display and ranking of the movies by splitting the add/edit experience into separate routes. In summary, I've added the ability to:

- visit `http://localhost:3000` to see a list of movies pulled from an API
- visit `http://localhost:3000/add` to add a new movie via the API
- click/tap on any movie to visit `http://localhost:3000/edit/:id` and edit or remove that movie via the API

From the project directory, you can run:

**`yarn start`**

This will run the app in the development mode. This will also build Tailwind and watch for changes to Tailwind styles. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. The exception to this is the `tailwind.config.js` settings.

**`yarn build`**

This will build the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for performance. In my testing it reduces the **2.6MB** development build to **315.4KB** in **~22 seconds**.
