# Documentation  
#### Feature Tasks  
* created the app's scaffold including the following directories to organize my code:  
  * `lib`  
  * `model`  
  * `route`  
  * `__test__`  
* created the folowing folders:  
  * `.gitignore`  
  * `.eslintrc.json`  
  * `.eslintignore`  
  * `package.json`  
  * `README.md`  
  * `index.js`  

## What this project does:  
The final goal for this app is to create a mock version of instagram. We're calling it CF gram. CF gram is an app that can let users sign up and sign in; create galleries, and then add images that belong to those galleries.  

We are now using Bearer to allow the user to make updates/changes to their login information.  

## Learning Objectives  
* We will be able to create bearer authentication middleware.  
* We will be able to utilize their bearer authentication middleware in their route structures.  
* We will be able to test against authenticated routes.  

## How another dev could 'get started' with my api on their own:  
  - How do you clone this project?  
      1. First click on the Fork button in the upper right hand corner to make a copy of my repository.  
      2. That will automatically take you to your github. Then click on the green 'clone or download' button to copy the URL to your machines clipboard.  
      3. In terminal navigate to wherever you want this clone to live, type 'git clone <this is where you paste the URL you just copied>', you should see a 'master' branch appear.  
      4. Then type 'git checkout -b <branch name of your choosing> to create a fresh branch to work from.  
  - How do you start using this project?
      1. You will need to have NodeJS installed on your machine.  
      2. You will need to install httpie in one terminal window to test HTTP requests.  
      3. Then start type nodemon or node server.js in a separate terminal window to get your server running.  


# Mongo database steps:  
1. Create db folder within data folder.  
2. Upper left side terminal window (within lab-maddy folder)  
```
npm run start:watch
```
3. Upper right window (within lab-maddy folder)  
```
mongod --dbpath ./data/db
```
4. Lower right window (within lab-maddy folder)  
```
mongo
```
5. Lower left window - POST, GET, PUT, DELETE requests  

### To see what's in your database:  
````
show database
````
### Show collections:  
```
show collections
```
### To open the collection you're working with:  
```
use cf-gram-dev
```
### To delete the data in the collection:  
```
drop cd-gram-dev
```

## To test POST, GET, PUT and DELETE an object on the server, use these requests in terminal (we're able to do this with the http client superagent):  


## Example POST(sign up) request:  
```
http POST :3000/api/signup username=maddy password=1234 email=test@example.com
```

## Example GET(sign in) request:  
```
http GET localhost:3000/api/signin/maddy1234
```

```
http -a user:pass :3000/api/signin
```

## Example PUT request:  
```
http GET localhost:3000/api/gallery/_id: name:name desc=desc
```

```
http PUT localhost:3000/api/gallery/3384748484 name:Moana desc=pilot
```

## Example DELETE request:  
```
http GET localhost:3000/api/gallery/_id:
```
```
http GET
localhost:3000/api/gallery/484747483
```

# Packages and commands to remember:
## New packages (introduced for this project):  
- npm install jsonwebtoken (Tor jwt (JSON web tokens); this is what makes it possible for us to create user tokens)-
- npm i bcrypt (For hashing user passwords) -  
- npm install dotenv (This is for ) -  

## For Mongo:  
- npm install mongodb into your project directory (To install Mongo) -  
- mongod (To start the MongoDB process)  
- mongo (To start the MongoDB shell-- )  

## For Mongoose:  
- npm install mongoose (To install mongoose) -  

## General:  
  - In package.json's scripts, add- "start:debug": "DEBUG=http* nodemon server.js",  
  - npm install express -  
  - npm i or npm install (For node modules) -  

### HTTP requests:  
  - node server.js or just nodemon (to start a command line server) -  
  - rs (restart, if needed)  
  - ^C (control-C to stop node server)  
  - npm install httpie (A command line   HTTP client, to be able to test making http requests. An alternative is postman.)  
  - npm install superagent (To be able to make http requests) -  
  - npm install uuid (For creating unique user ids) -  
  - npm install -D jest (To be able to run tests) -  
    - npm test (To actually run the jest test)  

### TESTS:  
  - run run start:watch (This option won't tell what is wrong with your code) -  
  - npm run start:debug - (Then attempt a POST and this option will tell you where you are wrong)  
  - npm run debugger (Not sure what makes this one different or special yet...)-  

### Not needed for every project:  
  - npm install bluebird (sets this as a dependency in package.json) -  

## General notes/changes made from previous projects:  
- Created an index.js and set it as the start point in package.json.  
- Created a .env file with the following:  
  - Note: The angle brackets are just   placeholders and sshould not be included in your code.  

```
MONGODB_URI='mongodb://localhost/<name of your database>'
APP_SECRET='<a secret word>'
PORT=<a port number>
```

- In package.json, within scripts add the '--runInBand' to the 'test: jest.' This will make sure all tests run sequentially.  
```
"test": "jest --runInBand",
```
- Don't push an AWS key to github!!!  
- I copied my work from lab 16 into this lab.  
- Tests from lab 14 will help with the test for this lab.- gavin  

# Collaborators:  
Madeline and Isaiah.  
