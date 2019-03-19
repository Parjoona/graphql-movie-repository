import express from 'express'
import expressGraphQL from 'express-graphql'

import schema from './schema'

// This is worked async
import EpisodeProvider from './providers/EpisodeProvider'

const runner = async () => {
  let lol = await EpisodeProvider
  console.log(lol)
}

runner()

const PORT = 5000
const app = express()

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log(`RUNNING ON PORT ${PORT}`)
})
