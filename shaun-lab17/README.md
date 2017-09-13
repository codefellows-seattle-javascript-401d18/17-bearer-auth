*Basic Auth*
# Lab 16

# Username login information encoding demonstration using Express, node.js, and MongoDB.
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

## Project Description
This project is to showcase the ability to create and get users while utilizing modules such as express, body-parser, dotenv and others. I'll be iterating on this throughout the week

## Table of Contents
+ [Installation](#installation)
+ [Usage](#Usage)
+ [About](#About)

### Installation:
+ Fork this repository and clone the forked repository anywhere you'd like on your computer.

+ Open your terminal
 + Navigate to the folder where you did your git clone with your newly forked repository.
 + Make sure you are in the root directory IE. lab-shaun.;
 + Type `npm i` into your terminal.
+ Open *Four* terminal windows.
+ In the first terminal type
 + `npm run start:watch`

 + This creates a local server which should log to the console
   + `server up:: 3000`

+ In the second terminal window type
 + `brew install httpie`

 + This installs httpie which is a package that allows you to make calls to our local server.

+ In the third terminal window type
   + `mongod --dbpath ./data/db`

+ In the Fourth terminal window type
 + `mongo` then

+ Now from the the second terminal window you can make a series of GET, POST, PUT, and DELETE requests.

 ## These are the only variations of this API and endpoints possible.
 ## You must first create a user with valid username, password, and email.

 ### User POST/signup requests
 + Example ==>`http POST localhost:3000/api/signup username=name password=password email=test@test.com`
 + Example w/ Mock info ==> `http POST localhost:3000/api/signup username=ricorocks password=4545 email=email@test.com`

 ### User GET/signin requests
 + Example.==>`http GET localhost:3000/api/signin username:password`
 + Example w/ Mock ID ==> `http GET localhost:3000/api/signin/ricorocks:4545`





<!-- ```
for code blocks
``` -->

+ If you want to interact with your database through mongo and mongoose...
 + In your fourth terminal window you can use the following commands.

 + `show collections`
   + This shows all your collections that are in the database

 + `use toy-dev`
   + This will switch to the collection you want, allowing you to manipulate the data inside. In this example I used toy-dev which will also be the name of the collection for you, if installed correctly.

 + `db.toys.find()`
   + This will return all the documents or items in the database under the collection you used.

 + `db.toys.drop()`
   + This will delete all the documents or items in the database under the collections you used.

### Usage
This app is completely free to be used however you'd like!
