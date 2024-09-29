# Task Manager App | CRUD | MERN 📝

A Full-Stack Task Manager application built with the MERN stack, allowing users to manage tasks using CRUD operations with JWT-based authentication. The application has two main components: the **client** (frontend) built in React.js and the **server** (backend) built using Node.js, Express.js, and MongoDB.

## Features:

- User Registration and Login
- Secure authentication with JWT Tokens
- Task Management: Create, Read, Update, and Delete (CRUD)
- Manage tasks via a user-friendly interface
- Postman used for testing API endpoints


## Dependencies uses:
- bcrypt: Password hashing
- cors: Enable CORS
- express-validator: Middleware for validating requests
- jsonwebtoken: JWT handling for authentication
- mongoose: MongoDB ORM for Node.js
- nodemon: Automatically restart the server during development
- react-dom: Rendering React components to the DOM

## API Endpoints
You can use Postman to test the following endpoints.

### Auth Routes
- POST /auth/register - Register a new user
- POST /auth/login - Login and get a JWT token
  
### Task Routes (Authentication Required)
- GET /tasks - Get the list of tasks for the logged-in user
- POST /tasks - Create a new task
- PUT /tasks/ - Update an existing task
- DELETE /tasks/ - Delete a task
