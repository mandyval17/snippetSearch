# Snippet Search

## Project Overview

The Snippet Manager is a web application designed to facilitate the creation, management, and sharing of code snippets. It provides users with the ability to create their own code snippets, mark them as public or private, and share private snippets with other users.

### Features

- **User Authentication:** Users can securely register, login, and logout using bcrypt for password hashing and Passport.js for authentication.
- **Snippet Creation:** Users can create their own code snippets.
- **Public and Private Snippets:** Users can choose to make their snippets public or private. Public snippets are visible to all users, while private snippets are only visible to the creator.
- **Snippet Sharing:** Users can share private snippets with other users by generating a code for the snippet, which can be imported into the recipient's collection.

## Technologies Used

- **Node.js:** JavaScript runtime for building server-side applications.
- **Express:** Web application framework for Node.js.
- **bcrypt:** Used for secure password hashing.
- **Passport.js:** Used for authentication and session management.

## Installation

To run the Snippet Manager locally, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.

## Manual Installation

Clone the repo:

```bash
git clone https://github.com/mandyval17/snippetSearch
cd backend-node-express
```

Install the dependencies:

```bash
npm install
```

Set the environment variables:

```bash
cp .env.example .env
# open .env and modify the environment variables
```

## Commands

Running in development:

```bash
npm start
# or
npm run dev
```

## Environment Variables

The environment variables can be found and modified in the `.env` file.

```bash
MONGO_URI="mongodb://localhost:27017/database_name"
NODE_ENV="development"
CALL_BACK = '/auth/google/redirect'
CLIENT_ID =
CLIENT_SECRET =

### API Endpoints

List of available routes:

**Auth routes**:
`POST http://localhost:5000/auth/google` - Signup
`POST http://localhost:5000/auth/logout` - Logout

**User routes**:
`POST http://localhost:5000/add/username` - Add Username
`POST http://localhost:5000/add/snippet` - Add Snippet
`PUT http://localhost:5000/update/Snippet` - Update Snippet
`GET http://localhost:5000/get/public` - Get Public Snippet
`GET http://localhost:5000/get/private` - Get Private Snippet
`GET http://localhost:5000/get/id` - Get Snippet Id
`GET http://localhost:5000/get/Byid`- Get Snippet By Id
`GET http://localhost:5000/get/bykeyword` - Get Snippet By Keyword
