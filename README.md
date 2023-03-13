# Welcome to flighs and Search mircro service functionality using nodejs

# project setup

    -clone the project into your local
    -execute `npm install` on the same path as of your root directory of the download project
    -Create a `.env` file in the root directory and add the following enviornment variables
    -       `PORT=3000`
    -Inside the `src/config` folder create a new file `config.json` and then the following peice of json

```
{
    "development": {
    "username": "YOUR DB NAME",
    "password": "YOUR DB PASSWORD",
    "database": "WRITE YOUR DB NAME",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
