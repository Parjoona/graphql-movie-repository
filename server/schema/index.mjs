import graphql from 'graphql'
import query from './root_query'
import mutation from './root_mutation'

const { GraphQLSchema } = graphql

export default new GraphQLSchema({
  query,
  mutation
})