const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/user.repository');

const login = async (email, password) => {
  const user = await userRepository.getUserByEmail(email);

  if (!user) {
    throw new Error('Usuário não encontrado');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Senha inválida');
  }

  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return { token };
};

module.exports = { login };
