# movies_app

## HTTP Request
An HTTp (Hypertext Transfer Protocol) request is a message sent by a client (such as a web browser or an application) to a server, requesting a specific action or resource. It is the foundation of communication between clients and servers over the internet.

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