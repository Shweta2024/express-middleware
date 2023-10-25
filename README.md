<h2>Middleware</h2>

- Any function that executes between the server gets the request and the server sends the response. It runs in the order that we define it.

- It has access to the ```reqest object(req)```, ```response object(res)``` and the ```next``` function in the application's request-response cycle.

- The ```next``` function, when called, it invokes the next middleware which is after the current middleware.

- To load a middleware we write ```app.use(middlewareName)```

<br>

Middleware functions can perform the following tasks:- 

1. Execute any code
2. Make change in the request and the response object.
3. End the request-respone cycle.
4. Invoke/Call the other middleware

<br>

    NOTE: If the current middleware does not ends the request-response cycle, then, it must call the next() function to pass on the control to the next middleware. Otherwise the request will be left hanging.

<br>
<h3>Examples:-</h3>

![Alt text](image-1.png)

- Each time the app recieves a request to any route(root & users in this case), it prints ```Logged``` to the terminal, because ```myLogger``` is a global middleware in this case.

- The middleware function which is loaded first, gets executed first, i.e. they are executed in the order they are loaded.

<br>
        
    NOTE: If myLogger is loaded after the routes(root & users), then the control never reachers to the myLogger middleware and 'Logged' never gets prints to the terminal. It is because the route handlers of the root & users, terminates the request-response cycle. Hence, it is important to load myLogger before loading/writing the routes, if we want the middleware to get executed each time before we hit that route.

