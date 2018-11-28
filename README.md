# Example-Authentication-NodeJS-Graphql-Sequelize

**Download dependencies**

```
npm install
```

**Configure Database**

Configure the user data and name of the database in the `config / config.js` file

```json
"development": {
    "username": "root",
    "password": "",
    "database": "marte",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
```

**Running the Migrations**

```
node_modules/.bin/sequelize db:migrate
```

**Running the Server**

```
npm start
```
Open GraphiQL with the route http://localhost:3977/graphql

**Example**

Create User

```
  mutation{
    createuser(user: {mail: "hola@gmail.com", 
      password:"12345"}){
      id
    }
  }
```
Login User

```
  mutation{
    login(mail: "hola@gmail.com", 
      password:"12345"){
      hash
    }
  }
```

**Suggestions**

Update to the latest stable version of NodeJS