# Updated Dockerfile for Backend

# Use the base Node.js image for the correct platform at runtime
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install build dependencies for bcrypt
RUN apk add --no-cache python3 make g++

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 5001

# Start the application
CMD [ "npm", "start" ]
