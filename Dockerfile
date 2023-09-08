# Use the official Node.js image as the base image
FROM node:14

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

# Install a simple web server
RUN npm install -g serve

# Expose port 80
EXPOSE 80

# Specify the command to run when the container starts
CMD ["serve", "-s", "build", "-l", "80"]
