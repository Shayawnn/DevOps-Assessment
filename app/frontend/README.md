# Introduction

This is a simple React application that is able to:
1. read value from the `REACT_APP_WELCOME` environment variable and display its value.
2. read the /welcome API endpoint of an API specified in `REACT_APP_API_URL` environment variable.

# How to run this application

1. create a .env file right next to this README file (project directory) with the following content:
	```
	REACT_APP_WELCOME='frontend message'
	REACT_APP_API_URL=http://localhost:5002/api
	```
2. to install dependencies, run `npm install` in the project directory
3. you can run the application in development mode by running `npm start` in the project directory.
4. you can build the app for production by running `npm run build` in the project directory.