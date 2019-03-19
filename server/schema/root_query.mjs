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
    }
  })
})


export default new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: EpisodeType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(parentValue, args) {
        return 
      }
    }
  }
})