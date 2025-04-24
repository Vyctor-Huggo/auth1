const authService = require("../services/auth.service");

/**
 * Controller para registrar um novo usuário.
 * Recebe os dados do `req.body` e envia para o serviço de autenticação.
 * @param {import("express").Request} req - Objeto da request Express
 * @param {import("express").Response} res - Objeto da response Express
 */
exports.register = async (req, res) => {
  try {
    const user = await authService.registerUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * Controller para registrar um novo usuário.
 * Recebe os dados do `req.body` e envia para o serviço de autenticação.
 * @param {import("express").Request} req - Objeto da request Express
 * @param {import("express").Response} res - Objeto da response Express
 */
exports.login = async (req, res) => {
    try {
      const user = await authService.loginUser(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
};