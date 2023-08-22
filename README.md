# Synergy React Application

This repository holds all the code for the Synergy Center for Dance React-App website. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Organization

In the top level of the src folder are the App.js, index.js, and index.css files. These are the top-level files that run the react application.

The subfolders of src are organized as follows
* Components: all js and jsx files. The top level of the folder holds the footer, along with several "items" files, which are javascript lists that are used throughout the website to sequentially render repetitive sections of the html (such as Teacher Bios, FAQs, etc). 
    * Header: all the files required for rendering the navbar, including several components and the MenuItems.js file, which contains the organization of the navbar.
    * Pages: Each "page" of the website has a component that is rendered. This folder holds all of these components.
* Images: all images for the website. The top level of the folder holds miscellaneous pictures that are used throughout the site.
    * Staff: All the images of staff.
* Styles: this folder holds all the css files for the website. There is one .css file for each .jsx file in "Components/Pages". Additionally, there is a file for the header, the footer, and one global css file containing root variables and rules.

## Adding a new page
* Create a component for the page in src/Components/Pages
* Go to src/App.js
* Import your component under "Some component imports"
* Scroll down to "ADD NEW PAGES HERE!"
* Create a new 'Route' and choose any url extension to present the component.
* If you want the page to be accessible from the main navbar, go to src/Components/Header/MenuItems.js and add a link to your new page under one of the submenus.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

### `npm run deploy`

Runs the predeploy and deploy scripts, which are currently configured to build the current app and deploy it via github pages. 
This means that the built code will push to the gh-pages branch of the synergy git repo and will be accessible at (https://huntergroff.github.io/Synergy/)