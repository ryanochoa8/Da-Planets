import express from 'express'
import bp from 'body-parser'
import './db/dbconfig'
let port = 3000

let server = express()

server.use(bp.json())

//NOTE Register our routes here
import GalaxyController from './controllers/GalaxyController'
import StarsController from './controllers/StarsController'
import PlanetsController from './controllers/PlanetsController'
import MoonsController from './controllers/MoonsController'

server.use('/api/galaxy', new GalaxyController().router)
server.use('/api/stars', new StarsController().router)
server.use('/api/planets', new PlanetsController().router)
server.use('/api/moons', new MoonsController().router)




server.use((error, req, res, next) => {
  res.status(error.status || 400).send(error)
})

server.listen(port, () => {
  console.log("your server is running on port: ", port, " You better go catch it!")
})