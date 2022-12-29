Scaffold the boilerplate code with `pnpx create-mf-app` and the following options:

```bash
? Pick the name of your app: server
? Project Type: API Server
? Port number: 8080
? Template: nestjs-auth
```

Static files are served out of the public directory.

```
$ curl http://localhost:8080/products
$ # result -> array of products in JSON format
```

Trying authorized routes without a JWT will result in a 401.

```
$ curl http://localhost:8080/authorized
$ # result -> {"statusCode":401,"message":"Unauthorized"}
```

Use the `/auth/login` route to login.

```
$ # POST /auth/login
$ curl -X POST http://localhost:8080/auth/login -d '{"username": "maria", "password": "123"}' -H "Content-Type: application/json"
$ # result -> {"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm... }
```

Send the JWT to authorized routes using the `Authorization` header and prefixing the JWT with `Bearer `.

```
$ # GET /profile using access_token returned from previous step as bearer code
$ curl http://localhost:8080/authorized -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm..."
$ # result -> {"userId":2}
```
