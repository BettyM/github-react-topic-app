# GitHub Topic Explorer

## Dev Notes

* Libraries or tools used.
 - material-ui library for basic components. (AppBar, Grid to have a responsive app, etc)
 - react-data-table-component library to display data.
 - axios library as HTTP client to make the api calls.
 - jest for tests.
 - react redux is installed but is not being used in the app. The code shows how would be implemented
   in the future.

  -IMPORTANT: the token key must be replaced in .env file, github disabled the key for security
  reasons when is pushed in the public repo.

### How to run app & test

* You need to have node installed so you can use npm.

In the project directory, you can run: 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm test -- --coverage`

It shows the test coverage files

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Future Improvements

Feel free to elaborate on how you would improve any of the following topics 

* Code Structuring:

* Refactoring:
  - Use React-redux. The base code is in the app, in case we need to use redux for store management,
    we could save the history of topics visited, etc.
  - Coverage more code in test files.
  - Pagination from API, to have a better loading.
  - Save constant keys in an environment file (i.e. Token and  url API)
  - Add Error handling.

* Additional Features:
  - Add search option input, so we send an specific topic search to the query.
  - Show history of topics clicked

