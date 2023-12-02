# Base image for the server development stage
FROM node:20.9.0-alpine as server-development

# Set working directory for the development server
WORKDIR /usr/src/development/server

# Copy package files for server from local context to the container
COPY package*.json .

# Install server dependencies
RUN npm install

# Copy all files from local context to the container
COPY . .

# Build the server code
RUN npm run build

# Production stage for the server
FROM node:20.9 as server-production

# Define environment variables for production
ARG NODE_ENV=production
ARG SERVER_PORT=4000
ARG MONGO_URI="mongodb+srv://devUser2:ivbItqjOiHgMPmT0@cluster0.3qtpdss.mongodb.net/test"
ENV NODE_ENV=${NODE_ENV}
ENV SERVER_PORT=${SERVER_PORT}
ENV MONGO_URI=${MONGO_URI}

# Set working directory for the production server
WORKDIR /usr/src/production/server

# Copy package files for server from local context to the container
COPY package*.json .

# Install only production dependencies using npm ci
RUN npm ci --only=production

# Copy the built server files from the development stage to the production container
COPY --from=server-development /usr/src/development/server/dist ./dist

# Copy specific directories to the built server for production
COPY src/views /usr/src/production/server/dist/views
# COPY src/public /usr/src/production/server/dist/public

# Command to start the server in production mode
CMD ["node", "dist/main.js"]