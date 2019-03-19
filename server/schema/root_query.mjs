import graphql from 'graphql'
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLID } = graphql

export const EpisodeType = new GraphQLObjectType({
  name: 'Episode',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    episodeNumber: {
      type: GraphQLInt
    },
    completed: {
      type: GraphQLBoolean
    },
    secondsCompleted: {
      type: GraphQLInt
    },
    sectionName: {
      type: GraphQLString
    },
    course: {
      type: CourseType,
      resolve(parentValue, args) {
        return
      }
    }
  })
})

export const CourseType = new GraphQLObjectType({
  name: 'Course',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    courseName: {
      type: GraphQLString
    },
    courseDescription: {
      type: GraphQLString
    }
  })
})

export default new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    episode: {
      type: EpisodeType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parentValue, args) {
        return 
      }
    },
    course: {
      type: CourseType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parentValue, args) {
        return 
      }
    }
  }
})