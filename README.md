# Example-Authentication-NodeJS-Graphql-Sequelize

## Iniciar Backend

**Descargar dependencias**

```
npm install
```

**Configurar Base de Datos**

Configurar los datos de usuario y nombre de la base de datos en el archivo `config/config.js`

```json
"development": {
    "username": "root",
    "password": "",
    "database": "marte",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
```

**Ejecutar las Migraciones**

```
node_modules/.bin/sequelize db:migrate
```

**Iniciar el Servidor**

```
npm start
```