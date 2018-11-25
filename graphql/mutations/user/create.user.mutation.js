import models from '../../../models/index.js';
import User from '../../types/user.type';
import UserInput from '../../inputs/user.input';
const bcrypt = require('bcrypt');

export default {
  type: User,
  args: {
    user: {
      type: UserInput
    }
  },
  async resolve (source, args) {

      return models.User.create(
        {
          mail: args.user.mail,
          password: await bcrypt.hash(args.user.password, 12)
        }
      ).then(us => {
        
        return us;
      }).catch(error => {
  
        throw new Error('Query error', error);
      });
  }
};