const bcrypt = require('bcrypt');
const userRepository = require('../repositories/user.repository');

const createUser = async ({ email, password, active }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return userRepository.create({ email, password: hashedPassword, active });
};

const getAllUsers = () => userRepository.findAll();

const getUserById = (id) => userRepository.findById(id);

const updateUser = async (id, data) => {
  const updateData = { ...data };

  if (updateData.password) {
    const salt = await bcrypt.genSalt(10);
    updateData.password = await bcrypt.hash(updateData.password, salt);
  } else {
    delete updateData.password;
  }

  const updatedUser = await userRepository.findByIdAndUpdate(id, updateData);
  return updatedUser;
};

const deleteUser = (id) => userRepository.deleteUser(id);

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
