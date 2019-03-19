import graphql from 'graphql'
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } = graphql

const EpisodeType = new GraphQLObjectType({
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

const CourseType = new GraphQLObjectType({
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
    },
    episode: {
      type: EpisodeType,
      resolve(parentValue, args) {
        return
      }
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