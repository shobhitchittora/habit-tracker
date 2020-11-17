# habit-tracker
Designing and building a habit tracker


## Getting Started

Intall dependencies 
```shell
npm install
cd server && npm i
cd client && npm i
cd api-serv && npm i
```

Running the project
```shell
npm run start
```

Running the client:dev
```shell
cd client
npm run start
```

Running the API serv
```shell
npm run api
```

## Structure

The project is divided into 3 separate projects - server, client, api-server. The server folder hosts the 
public facing HTTP endpoint. The client folder hosts the CRA based client side app. The api-server hosts the
internal API server, which connects to the DB and does other processing.


```
  -server
    - routes
    - index.js

  -client
    - src
      - components
      - pages
      - App

  -api-server
    - api
      - addUser
      - getUser
      -....

    - lib
      - db
```

## Hosting

The web-server and the api-server are hosted on heroku - https://hobby-lobby.herokuapp.com/