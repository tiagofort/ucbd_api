const bcrypt = require('bcrypt');
const userRepository = require('../repositories/user.repository');

const createUser = async ({ email, password, active }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return userRepository.createUser({ email, password: hashedPassword, active });
};

const getAllUsers = () => userRepository.getAllUsers();
const getUserById = (id) => userRepository.getUserById(id);
const updateUser = async (id, data) => {
  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }
  return userRepository.updateUser(id, data);
};
const deleteUser = (id) => userRepository.deleteUser(id);

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
