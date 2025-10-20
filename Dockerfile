FROM node:18-alpine

ENV NODE_ENV=production
WORKDIR /usr/src/app

# Install NestJS CLI globally
# RUN npm install -g @nestjs/cli

# Copy package files and install dependencies
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install

# List files to verify installation (optional)
RUN ls -al

# Copy the rest of the application code
COPY . .

# Run the build command
RUN npm run build

# List files in the dist folder to verify build output (optional)
RUN ls -al dist

# Expose the application port
EXPOSE 8080

# Change ownership of the application files to the 'node' user
RUN chown -R node /usr/src/app
USER node

# Start the application
CMD ["npm", "start"]
