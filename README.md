# GitHub Topic Explorer

## Assignment:

Your task is to build a React web application that displays all the "[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)" related to the term "react", using the GitHub GraphQL API.

The application should display how many "[stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection)" each topic has. A click on a topic should display the topics related to that topic, and how many stargazers they have. And so forth.

To interact with the Github GraphQL API you'll need to have
  * a [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
  * You'll want to make use of the key in the .env file within your application

You may use whatever React framework or library you find useful. URL routing is optional.


## Evaluation:

* We will pay particular attention to the way the code is organized, and to the overall readability
* Unit tests will be greatly appreciated
* Design will be ignored, however usability and accessibility will be taken into consideration
* Remember to update this README with instructions on how to install, run and test your application
* Your first goal is to have a working app, but feel free to improve the application however you see fit
* We hope that you can complete the assignment within 2 hours but don't set any time constraints
* Please reach out per email or by opening an issue if anything is unclear or blocking you

Best of luck

## Dev Notes

* Libraries or tools used.
 - material-ui library for basic components. (AppBar, Grid to have a responsive app, etc)
 - react-data-table-component library to display data.
 - axios library as HTTP client to make the api calls.
 - react redux is installed but is not being used in the app. The code shows how would be implemented
   in the future.

### How to run app & test

* You need to have node installed so you can use npm.

In the project directory, you can run: 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Future Improvements

Feel free to elaborate on how you would improve any of the following topics 

* Code Structuring:
  - Add unit test files.

* Refactoring:
  - Use React-redux. The base code is in the app, in case we need to use redux for store management,
    we could save the history of topics visited, etc.
  - Add unit test!
  - Pagination from API, to have a better loading.
  - Save constant keys in an environment file (i.e. Token and  url API)
  - Add Error handling.

* Additional Features:
  - Add search option input, so we send an specific topic search to the query.
  - Show history of topics clicked

