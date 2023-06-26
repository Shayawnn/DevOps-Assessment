# Introduction

This is a simple Flask API application that provides the following endpoints:
1. / - returns a static response `Hello`
2. /api/welcome - returns a JSON with the currently set welcome message like `{ "msg": "backend message" }`


# How to run this application

1. create a `.env` file right next to this README file (project directory) with the following content:
	```
	WELCOME='backend message'
	```
2. install the required python packages with `pip install -r requirements.txt`
3. you can run the application in development mode by running `flask run --port 5002` in the project directory.
4. you can run an example test by `python -m pytest` in the project directory.