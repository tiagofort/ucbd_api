const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/user.repository');

const login = async (email, password) => {
  const user = await userRepository.getUserByEmail(email);
  
  if (!user) {
    throw new Error('User not found');
  }
  
  if (user.active == false){
    throw new Error('User is no longer actived');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Wrong Password');
  }

  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return { token, email };
};

module.exports = { login };
