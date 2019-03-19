// mLab url
import mlab from '../mLab'

import mongodb from 'mongodb'
const { MongoClient } = mongodb

class EpisodeProvider {
  constructor(database) {
    this.db = database
  }
}

class EpisodeProviderFactory {
  static async create() {
    this.data = null
    let client = new MongoClient(mlab.url, { useNewUrlParser: true });
    return new Promise((resolve, reject) => {
      client.connect(async (err, db) => {
        if (err) return reject(err)
        return resolve(new EpisodeProvider(await Promise.resolve(db)))
      })
    })
  }
}

export default (async function generateEpisodeProvider() {
  try {
    return await EpisodeProviderFactory.create()
  } catch (error) {
    console.log(error)
  }
})()