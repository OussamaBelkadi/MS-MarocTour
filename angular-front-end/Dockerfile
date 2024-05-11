# Compile and Build angular codebase

# Declare the version of node module use it
FROM node:16-alpine as build

# Create the workin derectory
WORKDIR /usr/local/app

# Copy all the conteinte to the working derectory
COPY ./ /usr/local/app/

# Install all dependencies of the application
RUN npm install

# Generate the build of the application
RUN npm run build

# Serve app with nginx server

FROM nginx:latest

# Copy the build output to replace the default nginx content
COPY --from=build /usr/local/app/dist/angular-front-end /usr/share/nginx/html

# Exposed port
EXPOSE 80



