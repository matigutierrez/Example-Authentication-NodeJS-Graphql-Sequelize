import {
  GraphQLList
} from 'graphql';

import models from '../../../models/index.js';
import User from '../../types/user.type';

export default {
  type: GraphQLList(User),
  args: {},
  resolve(root, args) {
    
    return models.User.findAll();
  }
};