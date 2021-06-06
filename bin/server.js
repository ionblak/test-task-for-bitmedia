const { QueryTypes } = require('sequelize')

const app = require('../app')
const db = require('../models')
const { User, UserStatistic } = require('../models')
const { fillTheTableUsersStatistics, fillTheTableUsers } = require('../helpers/initial')
const PORT = process.env.PORT || 3000

db.sequelize.authenticate().then(async() => {
  const isExists = await db.sequelize.query("SELECT name FROM sqlite_master WHERE type='table' AND name='Users'", { type: QueryTypes.SELECT })
  if (isExists.length === 0) {
    await User.sequelize.sync()
    await UserStatistic.sequelize.sync()
    await fillTheTableUsers()
    await fillTheTableUsersStatistics()
  }
  app.listen(PORT, () => {
    console.log(`Server running. Use our API on port: ${PORT}`)
  })
}).catch((err) => {
  console.log(`Server not running. Error message: ${err.message}`)
  process.exit(1)
})
