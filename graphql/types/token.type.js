import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
  name: 'token',
  description: 'token user',
  fields() {
    return {
      hash: {
        type: GraphQLString,
        description: "token user",
        resolve(hash) {
          return hash.token;
        }
      }
    };
  }
});