import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
  name: 'user',
  description: 'users table',
  fields() {
    return {
      id: {
        type: GraphQLID,
        description: "user ID",
        resolve(user) {
          return user.id;
        }
      },
      mail: {
        type: GraphQLString,
        description: "mail user",
        resolve(user) {
          return user.mail;
        }
      }
    };
  }
});