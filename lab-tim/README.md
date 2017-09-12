# Lab 17 - Bearer Auth
## Tim Turner
=====================================

### Description

This app is a basic auth server.  You can send POST and GET requests to the server and get a response.  The valid API endpoints are `/api/signup` and `/api/signin`.

To run the server, you must have NodeJS installed.  You also have to run npm install to download the npm required modules.  These commands listed below to interact with the server require HTTPie to be installed on your computer.  After you have those done, type "npm run start" in the terminal window.  The server will now be running.

This server uses MongoDB for data storage.  To run the database you must have MongoDB installed.  Type "npm run start-db" to start the mongo server

To send requests to the server, in another terminal windows, type some of the following commands.


`http POST localhost:5000/api/signup username='username' password='password' email='email@email.com'` should create a new user named Joe with a password and email attached and return a message with the user's hash if successful.

`http -a username:password localhost:5000/api/signin` should return the user's hash if the input username and password are valid.

Type control + C to stop the server.

example requests:

`http POST localhost:5000/api/signup username="Joe" password="imjoedirt" email="joe@dirt.com"`
`http -a Joe:imjoedirt localhost:5000/api/signin`
`http POST localhost:5000/api/signup username="Bill" password="ghostbusters" email="bill@murray.com"`
`http -a Bill:ghostbusters localhost:5000/api/signin`
