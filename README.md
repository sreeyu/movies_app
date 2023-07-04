# movies_app

The movies_app is a web application that allows users to fetch and add movies. It retrieves movie information from Firebase and provides an interface for users to view and add movies to the list.

## Features
- Fetch Movies: Clicking on the "Fetch Movies" button retrieves movie information from Firebase and displays them in a list.
- Add Movie: Users can add a new movie to the list by filling out the title, opening text, and release date fields and clicking the "Add Movie" button.
- Loading State: While fetching movies, a loading indicator is displayed to provide feedback to the user.
- Error Handling: If an error occurs during the API request or if no movies are found, an appropriate error message is displayed.
- Movie List: The fetched movies are displayed in a list format, showing the movie title and opening text.

## Technologies Used
- React: A JavaScript library for building user interfaces.
- JSX: A syntax extension for JavaScript that allows writing HTML-like code in React components.
- CSS: Cascading Style Sheets for styling the application.
- Firebase: A platform that provides various services for building web and mobile applications, including real-time database functionality.

## Getting Started
You can access the deployed version of the Movie List App by following this link: [movies_app](https://sreeyu.github.io/movies_app/). This allows you to interact with the application without any setup.

## Usage
1. Upon accessing the Movie List App, you will see a form titled "Add Movie" and a button labeled "Fetch Movies."

2. To add a new movie to the list:

 - Enter the movie's title in the "Title" input field.
 - Provide a brief opening text for the movie in the "Opening Text" textarea.
 - Specify the movie's release date in the "Release Date" input field.
 - Click the "Add Movie" button to add the movie to the list.

3. To fetch movies:

 - Click the "Fetch Movies" button. The app will retrieve movie information from the database and display them in a list below the button.

4. The list of movies will appear below the "Fetch Movies" button. Each movie is represented by a title and an opening text.

5. If there are no movies to display or an error occurs during the API request, an appropriate message will be shown on the screen.

6. You can add more movies or fetch movies again by repeating steps 2 and 3.

## HTTP Request
An HTTP (Hypertext Transfer Protocol) request is a message sent by a client (such as a web browser or an application) to a server, requesting a specific action or resource. It is the foundation of communication between clients and servers over the internet.

An HTTP request consists of several components:

1. **HTTP Method:** It specifies the type of action the client wants the server to perform. Common HTTP methods include:
 - GET: Requests data from a server.
 - POST: Sends data to a server to create a new resource.
 - PUT: Updates an existing resource on the server.
 - DELETE: Deletes a resource on the server.

2. **URL(Uniform Resource Locator):** It specifies the address of the resource or the endpoint on the server that the client wants to interact with.

3. **Headers:** These are additional information sent with the request, such as the content type, authentication credentials, caching instructions, and more. Headers provide context and additional instructions to the server or client.

4. **Request Body:** It is an optional component, usually included with HTTP methods like POST or PUT, used to send data from the client to the server. The request body can contain various types of data, such as form data, JSON, XML, or binary data.

5. **Query Parameters:** These are additional parameters included in the URL to provide additional instructions or filter data on the server.

When the server receives an HTTP request, it processes the request based on the method, URL, headers, and request body. It performs the requested action and returns an HTTP response, which includes a status code, headers, and possibly a response body containing the requested data or the result of the requested action.

Overall, HTTP requests enable clients to interact with servers, retrieve data, send data, update resources, delete resources, and perform various actions over the internet.

## API
In React, an API(Application Programming Interface) refers to a set of predefined functions and methods that allow developers to interact with the React framework and build robust applications. React provides several APIs that facilitate various aspects odf application development. 

**fetch API**
In this project we use fetch API to make HTTP requests to retrieve and send data from and to server.  

The Fetch API is a modern browser API that provides a built-in way to make HTTP requests. It is available in most modern browsers and can be used in React applications without any additional dependencies. You can use the `fetch()` function to send GET, POST, PUT, DELETE, and other types of requests to a server and handle the response using promises.

```jsx
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Handle the retrieved data
  })
  .catch(error => {
    // Handle any errors
  });
```

## Promise
A promise is an object used in JavaScript to handle asynchronous operations. It represents the eventual completion or failure of an asynchronous operation and allows you to write asynchronous code in a more manageable and readable manner.

A promise can be in one of three states:

1. **Pending:** The initial state when a promise is created and the asynchronous operation is still in progress.

2. **Fulfilled:** The state when the asynchronous operation is completed successfully, and the promise is resolved with a value.

3. **Rejected:** The state when the asynchronous operation encounters an error or fails, and the promise is rejected with a reason or an error message.

The main advantage of promises is that they provide a structured way to handle asynchronous operations and their results. Instead of relying on nested callbacks, promises allow you to chain asynchronous operations using methods like .then() and .catch(), making the code more readable and avoiding callback hell.

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const data = "Some fetched data";
      // If the operation is successful, resolve the promise with the data
      resolve(data);
      // If there's an error, reject the promise with an error message
      // reject("An error occurred");
    }, 2000);
  });
};

// Using the promise
fetchData()
  .then((data) => {
    console.log("Data fetched:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

Promises provide a powerful mechanism for handling asynchronous operations and enable you to write more maintainable and readable code when dealing with asynchronous tasks in JavaScript.

## License
This project is licensed under the [MIT License](https://opensource.org/license/mit/).