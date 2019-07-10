import express from 'express'
import _galaxyService from '../services/GalaxyService.js'

export default class GalaxyController {
  async createGalaxy(req, res, next) {
    try {
      let galaxy = await _galaxyService.create(req.body)
      res.send(galaxy)
    } catch (err) { next(err) }
  }

  async getAllGalaxies(req, res, next) {
    try {
      let subjects = await _galaxyService.find()
      res.send(subjects)
    } catch (err) { next(err) }
  }


  constructor() {
    this.router = express.Router()
      .get('', this.getAllGalaxies)
      .post('', this.createGalaxy)
  }
}