# Use the official Node.js 18 image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Build the React app
RUN npm run build

# Specify the command to run when the container starts
CMD [ "npm", "start" ]