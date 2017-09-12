# *SeveringUpSomeAuthpresso*
# Servering the best Authpresso Experience around.

# Username login information encoding demonstration using Express, node.js, and MongoDB.
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

## Project Description
Using node.js, HTTP, superagent, Express, MongoDB, and Mongoose I have created a Server that responds to different GET, POST, PUT, and DELETE responses from a developer position. The requests can interact with a local Database managed with MongoDB. We can create relationships between two schema's. In this example I use toys and children. A toy MUST belong to a child, but a child can NOT have a toy. This project represents what is possible with a few simple tools. We can create a Database from POST requests with the information provided by the dev. Then we can interact with the database with GET, PUT, and DELETE.

## Table of Contents
+ [Installation](#installation)
+ [Usage](#Usage)
+ [About](#About)

### Installation:
+ Fork this repository and clone the forked repository anywhere you'd like on your computer.

+ Open your terminal
  + Navigate to the folder where you did your git clone with your newly forked repository.
  + Make sure you are in the root directory IE. lab-gavin.;
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
  + Example w/ Mock info ==> `http POST localhost:3000/api/signup username=Gavinator password=35353 email=email@test.com`

  ### User GET/signin requests
  + Example.==>`http GET localhost:3000/api/signin username:password`
  + Example w/ Mock ID ==> `http GET localhost:3000/api/signin/gavinator:35353`





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


### About
I am currently a Full Stack Web Developer with focus in UX. If you are interested in using me for any of your projects please feel free to reach out to me!
