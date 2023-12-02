# Base image for the client development stage
FROM node:20.9.0-alpine as client-development

# Set working directory for the client development
WORKDIR /usr/src/development/client

# Copy package files for client from local context to the container
COPY package*.json .

# Install client dependencies
RUN npm install

# Copy all files from local context to the container
COPY . .

# Build the client code
RUN npm run build

# Base image for the client production stage
FROM node:20.9.0-alpine as client-production

# Set working directory for the client production
WORKDIR /usr/src/production/client

# COPY --from=client-development /usr/src/development/client/dist /usr/src/production/client

FROM nginx:latest

# Remove default NGINX configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom NGINX configuration
COPY /nginx/nginx.conf /etc/nginx/conf.d/

COPY --from=client-development /usr/src/development/client/dist /usr/share/nginx/html

EXPOSE 80