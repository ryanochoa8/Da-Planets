import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
  name: { type: String, required: true },
  //NOTE one to many, one star has many planets
  planets: [{ type: ObjectId, ref: 'Planet' }],
  galaxy: { type: ObjectId, ref: "Galaxy", required: true }
}, { timestamps: true })

export default mongoose.model('Star', _schema)