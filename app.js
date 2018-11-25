'use strict'

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import GraphHTTP from 'express-graphql';
import Schema from './graphql';

var app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

app.use('/graphql', GraphHTTP((request) => ({
  schema: Schema,
  context: { user: request.user },
  pretty: true,
  graphiql: true
})));

module.exports = app;