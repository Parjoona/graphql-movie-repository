import graphql from 'graphql'
import RootQuery from './root_query'

const { GraphQLSchema } = graphql

export default new GraphQLSchema({
  query: RootQuery
})