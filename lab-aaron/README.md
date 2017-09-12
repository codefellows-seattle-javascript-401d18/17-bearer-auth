
# Creating a Password Protected Server
Using node.js, HTTP, superagent, MondoDB and mongoose, this app creates a server that is able to respond to GET and POST requests that are created in the terminal, that will create a new user and encrypt the password and username created by the user.


## Installation
Clone the repository to whatever location you would like it stored in.
In terminal use the command while in the project file:
npm i
This will install all the required dependencies for the app.

### Using the App
Once you have the dependencies installed go back to your terminal and use the following command;
http POST :3000/api/signup username=<username password=<password> email=<user-email>

You should also be able to get your login information using this command;

http -a user:pass :3000/api/signin

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
