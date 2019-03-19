import graphql from 'graphql'
const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInt, GraphQLBoolean } = graphql

import query from './root_query'
const { CourseType } = query

export default new GraphQLObjectType({
  name: 'Mutation', 
  fields: {
    addCourse: {
      type: UserType,
      courseName: {
        type: new GraphQLNonNull(GraphQLString)
      },
      courseDescription: {
        type: new GraphQLNonNull(GraphQLString)
      }
    }
  }
})
