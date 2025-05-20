const User = require('../models/user.model')

const createUser = (data) => User.create(data)
const getAllUsers = () => User.find()
const getUserById = (id) => User.findById(id)
const updateUser = (id, data) => User.findByIdAndUpdate(id, data, { new: true })
const deleteUser = (id) => User.findByIdAndDelete(id)

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
deleteUser}
