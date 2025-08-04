# Media Users App

This project is a simple React application that demonstrates how to manage a list of users with a live backend server and Redux Toolkit for state management. It is designed as an educational example for beginners and non-technical audiences interested in how modern web apps work.

---

## Features

- **Live Backend Server:**  
  The app uses a local backend server that listens on port `3005` to store and retrieve user data. This allows the app to save changes and fetch real data, making it feel like a real-world application.

- **Random User Generation:**  
  When you add a new user, the app automatically generates a random name using a library called `@faker-js/faker`. This saves time and makes testing easier.

- **State Management with Redux Toolkit:**  
  The app uses Redux Toolkit to manage complex state and asynchronous actions, such as fetching users from the server or adding a new user.

- **Conditional Styling with classnames:**  
   The app uses the `classnames` library to easily apply different CSS classes to components based on their state, making the UI more dynamic and easier to maintain.

---

## How It Works

### 1. Live Backend Server

We use a tool called [JSON Server](https://github.com/typicode/json-server) to quickly create a fake REST API. This server listens on port `3005` and stores user data in a JSON file.  
**Why?**  
This approach lets us develop and test our app as if we had a real backend, without needing to write server code.

**Example:**  
When you add a user, the app sends a request to:

```
POST http://localhost:3005/users
```

### 2. Random Name Generation

We use the [`@faker-js/faker`](https://www.npmjs.com/package/@faker-js/faker) library to generate random names for new users.  
**Why?**  
This makes it easy to test the app without typing in names manually.

**Example from our code:**

```js
import {faker} from "@faker-js/faker";

const name = faker.name.fullName(); // Generates a random full name
```

### 3. State Management with Redux Toolkit

We use [`@reduxjs/toolkit`](https://redux-toolkit.js.org/) to manage the app's state and handle complex logic, like fetching users or handling loading states.  
**Why?**  
Redux Toolkit simplifies state management and makes our code easier to maintain and scale.

**Example from our code:**

```js
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const addUser = createAsyncThunk("users/add", async () => {
  const res = await axios.post("http://localhost:3005/users", {
    name: faker.name.fullName(),
  });
  return res.data;
});
```

### 4. Conditional Styling with classnames

We use the [`classnames`](https://www.npmjs.com/package/classnames) library to help manage CSS class names based on component state.  
**Why?**  
It makes it easier to apply different styles depending on things like loading, error, or active states, keeping our code clean and readable.

**Example from our code:**

```js
import classNames from "classnames";

const buttonClass = classNames("btn", {
  "btn-loading": isLoading,
  "btn-error": hasError,
});
```

---

## Third-Party Libraries Used

- **[axios](https://www.npmjs.com/package/axios):**  
  For making HTTP requests to our backend server.

- **[@reduxjs/toolkit](https://redux-toolkit.js.org/):**  
  For managing application state and handling asynchronous actions.

- **[@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker):**  
  For generating random user names.

- **[react-redux](https://react-redux.js.org/):**  
  For connecting React components to the Redux store.

- **[classnames](https://www.npmjs.com/package/classnames):**  
  For conditionally joining CSS class names for styling components.

---

## Getting Started

1. **Install dependencies:**

   ```
   npm install
   ```

2. **Start the backend server (JSON Server):**

   ```
   npx json-server --watch db.json --port 3005
   ```

3. **Start the React app:**
   ```
   npm start
   ```

---

## Why These Choices?

- **Live backend server:**  
  Makes the app realistic and interactive, even for demos and learning.

- **Redux Toolkit:**  
  Handles complex state and async logic simply and efficiently.

- **Faker:**  
  Saves time and makes testing fun by generating random names.

  - **classnames:**  
    Makes it easy to apply different styles based on the state of components, keeping the code clean and maintainable.

---

## For Non-Technical Readers

This project shows how modern web apps can use ready-made tools to quickly build powerful features. By combining a fake backend, smart state management, and random data generation, we can create a realistic and interactive app
