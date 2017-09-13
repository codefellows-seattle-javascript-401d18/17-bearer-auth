# Lab17-Isaiah

### Configuration
```md
  * \__test__ (folder: contains a lib/ folder(handles the jest setup, test-env, and mock ups) and routes/ folder(handles the basic auth tests))
  * lib (folder: contains basic-auth-middleware.js, bearer-auth-middleware.js, error-handler.js, and server.js)
  * model (folder: contains user.js which houses the user schema && gallery.js which houses the gallery schema)
  * route (folder: contains route-auth.js && route-gallery.js)
  * .gitignore
  * .eslintrc
  * .eslintignore
  * package.json
  * README.md (this file)
```

### Feature Tasks:
* Completed feature tasks. Majority, if not all, covered today in demo. Got server up and running with success with CRUD operation command requests. Need to continue to dig through tests. Lab work requirements are as follows:

      ```md
      ## Description
      * create a bearer auth middleware module (feel free to use the one from lecture as a reference point)
      * create a new resource that has at least three properties
        * this resource must have a property of `userId` that references the `_id` of the user that created the resource
        * the `userId` property can only be set from an `_id` found using your bearer auth middleware module
      * as always, use the **npm** `debug` module to log function calls that are used within your application
      * using the express `Router`, create routes for doing **RESTFUL CRUD** operations against your resource

      ## Server Endpoints
      ### `/api/resource-name`
      * `POST` request
      * pass data as stringifed JSON in the body of a post request to create a new resource

      ### `/api/resource-name/:id`
      * `GET` request
      * pass the id of a resource though the url endpoint to `req.params` to fetch a resource   
      * `PUT` request
      * pass data as stringifed JSON in the body of a put request to update a resource
      * `DELETE` request
      * pass the id of a resource though the url endpoint *(using `req.params`)* to delete a resource   

      ## Tests
      * create a test to ensure that your API returns a status code of 404 for routes that have not been registered
      * create a series of tests to ensure that your `/api/resource-name` endpoint responds as described for each condition below:
      * `GET` - test **200**, for a request made with a valid id
      * `GET` - test **401**, if no token was provided
      * `GET` - test **404**, for a valid request with an id that was not found
      * `PUT` - test **200**, for a post request with a valid body
      * `PUT` - test **401**, if no token was provided
      * `PUT` - test **400**, if the body was invalid
      * `PUT` - test **404**, for a valid request made with an id that was not found
      * `POST` - test **200**, for a post request with a valid body
      * `POST` - test **401**, if no token was provided
      * `POST` - test **400**, if no body was provided or if the body was invalid

      ## Bonus
      * **1pt:** a `GET` request to `/api/resource-name` should return an array of all of the ids for that resource
      * **1pt:** create a series of tests for a `DELETE` request
        ```
