# Project Structure

matrimony-frontend/
├── public/                              # Static assets for the project
│   ├── index.html                       # Main HTML file
│   ├── 404.html                         # Custom 404 error page
│   ├── coming-soon.html                 # Coming soon page
│   ├── favicon.ico                      # Favicon for the app
│   └── images/                          # Static images
│       ├── profile/
│       ├── blog/
│       └── gallery/
├── src/
│   ├── assets/                          # All design assets (CSS, images, fonts)
│   │   ├── css/
│   │   │   ├── index.css                # Main CSS file
│   │   │   ├── bootstrap.min.css        # Bootstrap styles
│   │   │   └── custom.css               # Custom styling
│   │   └── js/
│   │       ├── jquery.min.js            # jQuery library
│   │       └── jquery-ui.min.js         # jQuery UI library
│   ├── components/                      # React components
│   │   ├── Header.js                    # Site header
│   │   ├── Footer.js                    # Site footer
│   │   ├── Navigation.js                # Navbar component
│   │   ├── Common/                      # Shared UI components (buttons, forms, etc.)
│   │   ├── Gallery/                     # Photo gallery components
│   │   ├── Blog/
│   │   │   ├── BlogList.js              # Blog list
│   │   │   └── BlogDetail.js            # Blog detail page
│   │   ├── Profile/                     # Profile-related components
│   │   │   ├── AllProfiles.js           # All profiles page
│   │   │   └── ProfileDetails.js        # Profile details page
│   │   └── Pages/                       # Page-level components
│   │       ├── About.js                 # About page
│   │       ├── Contact.js               # Contact page
│   │       ├── FAQ.js                   # FAQ page
│   │       ├── Enquiry.js               # Enquiry page
│   │       ├── Login.js                 # Login page
│   │       ├── SignUp.js                # Sign-up page
│   │       └── Wedding.js               # Wedding page
│   ├── pages/                           # HTML versions or legacy static pages
│   │   ├── user/helloWorld.html         # Example static page
│   │   ├── login.html                   # Login HTML (static example)
│   │   ├── about.html                   # About static example
│   │   └── (other pages...)
│   ├── styles/                          # Additional styling
│   │   └── overrides.css                # Custom style overrides
│   ├── utils/                           # Utility functions (helpers, API calls, etc.)
│   │   ├── Api.js                       # Example API service
│   │   ├── Constants.js                 # Global constants
│   │   └── Validation.js                # Input validation logic
│   ├── App.js                           # Main App component
│   ├── index.js                         # React DOM render
│   ├── reportWebVitals.js               # Performance measuring
│   ├── setupTests.js                    # Testing setup
│   └── Routes.js                        # React Router configuration
├── .gitignore                           # Ignored files for Git
├── package.json                         # NPM dependencies
└── README.md                            # Project documentation


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
