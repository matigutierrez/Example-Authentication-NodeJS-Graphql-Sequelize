import {
  GraphQLString,
  GraphQLNonNull
} from 'graphql';
import models from '../../../models/index.js';
import Token from '../../types/token.type'
const bcrypt = require('bcrypt');
import jwt from '../../../services/jwt.service';

export default {
  type: Token,
  args: {
    mail: {
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  async resolve (source, args) {

    const user = await models.User.findOne({ where: { mail: args.mail }});

    if (!user) {
      throw new Error('No user with that email')
    }

    const valid = await bcrypt.compare(args.password, user.password);

    if (!valid) {
      throw new Error('Incorrect password')
    }

    var hash = {
      token: jwt(user)
    }

    return hash;
  }
};