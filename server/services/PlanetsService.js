import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  name: { type: String, require: true },
  moons: [{ type: ObjectId, ref: 'Moons' }],
  planets: [{ type: ObjectId, ref: 'Planet' }]
}, { timestamps: true })

export default mongoose.model('Planet', _schema)