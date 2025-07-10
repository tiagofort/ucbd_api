const { login } = require('../services/auth.service');

const loginController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email e senha são obrigatórios' });
  }

  try {
    const result = await login(email, password); 
    res.json(result);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

module.exports = { loginController };
