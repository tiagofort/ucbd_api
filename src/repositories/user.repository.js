const User = require('../models/user.model')

const create = async (data) => {
  return await User.create(data);
};

const findAll = async () => {
  return await User.find();
};

const findById = async (id) => {
  return await User.findById(id);
};

const getUserByEmail = (email) => {
  return User.findOne({ email });
};

module.exports = {
  create,
  findAll,
  findById,
  getUserByEmail
}
