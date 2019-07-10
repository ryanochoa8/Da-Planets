import express from 'express'
import _moonsService from '../services/MoonsService.js'
import MoonsService from '../services/MoonsService.js';

export default class MoonController {

  async createMoon(req, res, next) {
    try {
      let moon = await _moonsService.create(req.body)
      res.send(moon)
    } catch (err) { next(err) }
  }

  async getAllMoons(req, res, next) {
    try {
      let moons = await _moonsService.find()
      res.send(moons)
    } catch (err) { next(err) }
  }


  constructor() {
    this.router = express.Router()
      .get('', this.getAllMoons)
      .post('', this.createMoon)
  }
}