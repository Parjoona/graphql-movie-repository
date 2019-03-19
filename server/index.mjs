import express from 'express'
import expressGraphQL from 'express-graphql'
import database from './database'

import schema from './schema'

const PORT = 5000
const app = express()

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}))

app.listen(PORT, () => {
  console.log(`RUNNING ON PORT ${PORT}`)
})