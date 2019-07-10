import mongoose from 'mongoose'

let _schema = new mongoose.Schema({
  name: { type: String, required: true },
  material: { type: String, required: true }
}, { timestamps: true })

export default mongoose.model('Moon', _schema)