# Your Favorite Songs

**Your Favorite Songs**, a web application that allows users to save, search, filter, and sort their favorite songs. The application features a Node.js (NestJs) backend for handling data and a React frontend for a user-friendly interface.

## Requirements

- Node.js (v14 or higher)
- npm (v6 or higher)

## Features

- Save your favorite songs
- Search for songs
- Filter and sort songs based on different criteria
- Share results using URL
- Node.js (NestJs) backend for handling data
- React frontend for a user-friendly interface

## Technologies Used

### Backend

- Node.js
- NestJs
- Mongoose
- Jio
- TypeScript
- ESLint
- Jest

### Database
- MongoDB

### Frontend

- React
- Vite
- TypeScript (using SWC)
- Ant Design
- React Router DOM
- Redux Toolkit
- Axios
- Lodash
- React Redux
- ESLint
- Vitest

## Prerequisites

- Node.js
- npm

## Getting Started

### Docker Setup

This project uses Docker version 4.25.1 for managing both development and production environments. Ensure Docker is installed on your machine by downloading it from the [official Docker website](https://www.docker.com/).

#### Development Environment

For development:

1. Configure the `.env` file for development purposes in both `/server` and `/client` directories.

2. Edit the `docker-compose.dev.yml` file in the root directory to specify the ports for server and client applications.

    ```bash
    # Modify the port numbers in docker-compose.dev.yml
    ports:
      - "4000:4000" # Server port
      - "5173:5173"   # Client port # Note: For development, this port is used for the client. If you wish to change it, navigate to     `docker-compose.dev.yml` and add `--port {CustomPort}` to the client command.

    ```

3. Run the following command from the root directory:

    ```bash
    docker compose -f docker-compose.dev.yml up --build
    ```

    Access the server at `http://localhost:{4000/CustomPort}` and the client app at `http://127.0.0.1:{5173/CustomPort}`.

#### Production Environment

For production setup:

1. Ensure necessary environment variables are configured for production. For the production environment, variables are added to the `Dockerfile` located in `/server`. This setup includes a live testing MongoDB server and exposes the application on port 4000. You can adjust these variables in the `Dockerfile` if needed to match their specific database requirements. Remember to configure these variables in both the `/server` and `/client` folders for a comprehensive production setup.

2. Open `docker-compose.yml` in the root directory. Customize the exposed ports and configurations for production.

    ```bash
    # Modify port configurations in docker-compose.yml
    ports:
      - "CustomPort:4000" # Expose server on a custom port
      - "8080:80"           # Expose client app through port 80 (nginx)
    ```

3. Run the following command from the root directory:

    ```bash
    docker compose up --build
    ```

    Access the server through `http://localhost:{CustomPort}` and the client app through `http://localhost:80`.

    **Note:** The client app is served using Nginx.


### Backend

1. Navigate to the `server` folder:

    ```bash
    cd server
    ```

2. Create a `.env` file based on the provided example:

    ```bash
    cp example.env .env
    ```

3. Configure variables in the `.env` file.

4. Install dependencies:

    ```bash
    npm install
    ```

5. Run tests:

    ```bash
    npm test
    ```

6. Build the project:

    ```bash
    npm run build
    ```

7. Start the development server:

    ```bash
    npm run start:dev
    ```

8. Start the production server:

    ```bash
    npm run start:prod
    ```

9. Run ESLint:

    ```bash
    npm run lint
    ```

### Frontend

1. Navigate to the `client` folder:

    ```bash
    cd client
    ```

2. Create a `.env` file based on the provided example:

    ```bash
    cp example.env .env
    ```

3. Configure variables in the `.env` file.

4. Install dependencies:

    ```bash
    npm install
    ```

5. Run the development server:

    ```bash
    npm run dev
    ```

6. Run tests:

    ```bash
    npm test
    ```

7. Run ESLint:

    ```bash
    npm run lint
    ```

8. Build the project:

    ```bash
    npm run build
    ```

9. Preview the build:

    ```bash
    npm run preview
    ```

## License

This project is licensed under the MIT - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

The development of Your Favorite Songs was made possible with the help of the following libraries, tutorials, and sources:

- [Node.js](https://nodejs.org/en/) -  Cross-platform, open-source server environment.
- [NestJs](https://docs.nestjs.com/) - Framework for building efficient, scalable Node.js server-side applications.
- [MongoDB](https://www.mongodb.com/) - Document-based NoSQL database.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Ant Design](https://ant.design/) - UI Design Library.
- [Vite](https://vitejs.dev/) - Next-generation frontend tooling for faster development.
- [Redux Toolkit](https://redux-toolkit.js.org/) - App state management.
- [SWC](https://swc.rs/) - Speedy Web Compiler.
- [Jest](https://jestjs.io/) - Testing Library.

