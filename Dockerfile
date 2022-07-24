FROM node:lts-alpine

WORKDIR /app

COPY . . 

RUN npm install --only=production

RUN npm run build

USER node

#serve should have been a dev dependancy but its not sooo
CMD ["./node_modules/.bin/serve","-s", "build"]

EXPOSE 3000

#i have built at fj17x/hooks-test

# so do docker run -p 3000:3000 fj17x/hooks-test

# we use docker build to bundle an app(using the Dockerfile instructions) into a docker image.
# this image can be run in a container using docker run. The container is a self contained instance of the application isolated from the OS.

# we dockerized the hooks app.