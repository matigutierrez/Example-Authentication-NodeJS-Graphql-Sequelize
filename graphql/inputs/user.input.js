import {
  GraphQLInputObjectType,
  GraphQLString
} from 'graphql';


export default new GraphQLInputObjectType({
  name: 'userinput',
  fields: () => ({
    mail: { type: GraphQLString },
    password: { type: GraphQLString }
  })
});