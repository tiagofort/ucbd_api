const User = require('../models/user.model')

const create = async (data) => {
  return await User.create(data);
};

const findAll = async () => {
  return await User.find({ master: false});
};

const findByIdAndUpdate = (id, data) => {
  return User.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
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
  getUserByEmail,
  findByIdAndUpdate
}
