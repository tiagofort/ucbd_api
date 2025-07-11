const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  active: { type: Boolean, default: true },
  master: { type: Boolean, default: false }
}, { timestamps: true })

const forceMasterFalse = function (next) {
  this.set({ master: false })
  next()
}

UserSchema.pre('findOneAndUpdate', forceMasterFalse)

module.exports = mongoose.model('User', UserSchema)
