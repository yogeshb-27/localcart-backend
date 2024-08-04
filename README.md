# 🛒 LocalCart Backend

Welcome to the backend repository of LocalCart, your local fresh foods marketplace. This repository contains the backend implementation of LocalCart, responsible for handling user authentication, product management, order processing, and communication with the frontend.

## Tech Stack

- `Express`: Fast, unopinionated, minimalist web framework for Node.js.
- `Mongoose`: Elegant MongoDB object modeling for Node.js.
- `bcrypt`: Library for hashing passwords for secure authentication.
- `jsonwebtoken`: JSON Web Token implementation for user authentication.
- `multer`: Middleware for handling multipart/form-data, used for file uploads.
- `nodemailer`: Module for sending emails, utilized for notifications and alerts.
- `cors`: Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express applications.
- `dotenv`: Module for loading environment variables from a .env file into process.env.

## Getting Started

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Set up environment variables by creating a `.env` file and adding necessary configurations (e.g., MongoDB connection string, JWT secret, email service configurations).
4. Run the server with `npm start`.
5. Your backend server is now running and ready to handle requests from the frontend!

## Environment Variables

Here are the environment variables you need to set in your `.env` file:
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_SERVICE=your_email_service
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password

## API Endpoints

### Authentication

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Login an existing user.
- `POST /api/auth/logout`: Logout a user.

### Products

- `GET /api/products`: Get all products.
- `GET /api/products/:id`: Get a specific product by ID.
- `POST /api/products`: Add a new product (admin only).
- `PUT /api/products/:id`: Update a product by ID (admin only).
- `DELETE /api/products/:id`: Delete a product by ID (admin only).

## Contribution

Contributions to LocalCart backend are welcome! Feel free to submit bug reports, feature requests, or pull requests to help improve the project.

Thank you for contributing to LocalCart! Your support helps us build a robust and user-friendly marketplace for local fresh foods.
