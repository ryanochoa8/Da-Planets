import express from 'express'
import _galaxyService from '../services/GalaxyService.js'
import _starsService from '../services/StarsService.js'

export default class GalaxyController {


  async getAllGalaxies(req, res, next) {
    try {
      let subjects = await _galaxyService.find()
      res.send(subjects)
    } catch (err) { next(err) }
  }
  async createGalaxy(req, res, next) {
    try {
      let galaxy = await _galaxyService.create(req.body)
      res.send(galaxy)
    } catch (err) { next(err) }
  }

  async getGalaxyStars(req, res, next) {
    try {
      let stars = await _starsService.find({ galaxy: req.params.galaxyId })
    } catch (error) {
    }
  }

  constructor() {
    this.router = express.Router()
      .get('', this.getAllGalaxies)
      .get('/:galaxyId/stars', this.getGalaxyStars)
      .post('', this.createGalaxy)
  }
}