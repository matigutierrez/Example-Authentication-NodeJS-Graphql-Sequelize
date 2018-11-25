import {
  GraphQLList
} from 'graphql';

import models from '../../../models/index.js';
import User from '../../types/user.type';

export default {
  type: GraphQLList(User),
  args: {},
  resolve(root, args, { user }) {

    if(!user) {
      throw new Error('You are not authenticated!');
    }
    
    return models.User.findAll();
  }
};