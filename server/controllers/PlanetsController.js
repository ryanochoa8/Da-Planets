import express from 'express'
import _planetsService from '../services/PlanetsService.js'

export default class PlanetsController {
  async createPlanet(req, res, next) {
    try {
      let planet = await _planetsService.create(req.body)
      res.send(planet)
    } catch (err) { next(err) }
  }

  async getAllPlanets(req, res, next) {
    try {
      let planets = await _planetsService.find()
      res.send(planets)
    } catch (err) { next(err) }
  }

  async getPlanet(req, res, next) {
    try {
      let planet = await _planetsService.findById(req.params.planetId)
      res.send(planet)
    }
    catch (err) { next(err) }
  }

  async addMoon(req, res, next) {
    try {
      let planet = await _planetsService.findById(req.params.planetId)
      planet.moons.push(req.body.moonId)
      await planet.save(err => {
        if (err) {
          next(err)
        }
      })
      res.send(planet)
    } catch (err) { next(err) }
  }


  constructor() {
    this.router = express.Router()
      .get('', this.getAllPlanets)
      .get('/:planetId', this.getPlanet)
      .post('', this.createPlanet)
      .put('/:planetId/moons/', this.addMoon)
  }
}