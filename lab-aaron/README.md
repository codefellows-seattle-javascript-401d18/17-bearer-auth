
# Creating a Password Protected Server
Using node.js, HTTP, superagent, MondoDB and mongoose, this app creates a server that is able to respond to GET, POST, PUT and DELETE requests that are created in the terminal. These requests and responses will create a new user in the database and encrypt the password and username created by the user. The app is also able to update and destroy the username and password using terminal commands using httpie.

With the most recent update we are introducing the Gallery.


## Installation
Clone the repository to whatever location you would like it stored in.
In terminal use this command while in the project file:
1. `npm i`
This will install all the required dependencies for the app.

### Using the App
Once you have the dependencies installed go back to your terminal and use the following command;
1. `http POST :5000/api/signup username=username password=password email=user-email`

You should also be able to get your login information using this command;
1. `http -a user:pass :5000/api/signin`



#### Documentation for App
https://nodejs.org/en/

http://mongoosejs.com/

https://httpie.org/doc

https://www.npmjs.com/package/bcrypt

https://www.npmjs.com/package/jsonwebtoken

https://www.npmjs.com/package/express

https://www.npmjs.com/package/cors

https://www.npmjs.com/package/dotenv

https://www.npmjs.com/package/uuid

http://bluebirdjs.com/docs/getting-started.html
