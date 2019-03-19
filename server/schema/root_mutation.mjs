import graphql from 'graphql'
const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLInt, GraphQLBoolean } = graphql

import * as query from './root_query'
const { CourseType } = query

export default new GraphQLObjectType({
  name: 'Mutation', 
  fields: {
    addCourse: {
      type: CourseType,
      args: {
        courseName: {
          type: new GraphQLNonNull(GraphQLString)
        },
        courseDescription: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(parentValue, args) {
        return 
      }
    }
  }
})
