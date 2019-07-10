import express from 'express'
import _starsService from '../services/StarsService.js'

export default class StarsController {
  async createStar(req, res, next) {
    try {
      let star = await _starsService.create(req.body)
      res.send(star)
    } catch (err) { next(err) }
  }

  async getAllStars(req, res, next) {
    try {
      let stars = await _starsService.find()
      res.send(stars)
    } catch (err) { next(err) }
  }

  async getStar(req, res, next) {
    try {
      let star = await _starsService.findById(req.params.starId).populate('galaxy planets')
      res.send(star)
    }
    catch (err) { next(err) }
  }

  async addPlanet(req, res, next) {
    try {
      let star = await _starsService.findById(req.params.starId)
      star.planets.push(req.body.planetId)
      await star.save(err => {
        if (err) {
          next(err)
        }
      })
      res.send(star)
    } catch (err) { next(err) }
  }


  constructor() {
    this.router = express.Router()
      .get('', this.getAllStars)
      .get('/:starId', this.getStar)
      .post('', this.createStar)
      .put('/:starId/planets/', this.addPlanet)
  }
}