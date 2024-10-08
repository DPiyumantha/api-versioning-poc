FROM node:18-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent && mv node_modules ../
COPY . .
RUN ls
EXPOSE 8080
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
