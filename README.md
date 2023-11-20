# Phonebook App

[Live Deployment](https://phonebook.carrilho.dev.br)

### Stack Used
* [Node.JS](https://nodejs.org/)
* [Nest.JS](https://nestjs.com/)
* [Docker](https://www.docker.com/)
* [MongoDB](https://www.mongodb.com/)
* [React](https://react.dev/)
* [Vite](https://vitejs.dev/)
### How to run

#### Without Docker
To run the project you need to have a MongoDB instance running on your system.

Fill in the *.env.sample* files in the *backend* folder directory with the database information and rename it to *.env*.

Fill in the *.env.sample* files in the *frontend* folder directory with the backend URL and rename it to *.env*.

##### Backend
Install the NPM dependencies and run the start:dev NPM script.
```sh
$ npm install
$ npm run start:dev
```
##### Frontend
Install the NPM dependencies and run the dev NPM script..
```sh
$ npm install
$ npm run dev
```

#### With Docker

To run it with Docker you need to have Docker installed.

Start the *docker-compose.yaml* services with Docker Compose.

#### Docker Compose
```sh
$ docker-compose -f "docker-compose.yml" up -d --build
```
