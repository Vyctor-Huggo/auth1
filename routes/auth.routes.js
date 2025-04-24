const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

/**
 * Rota para registrar um novo usuário
 */
router.post('/register', authController.register);

/**
 * Rota para login de usuário
 */
router.post('/login', authController.login);

/**
 * Exporta a função que conecta essas rotas ao app principal
 * @param {import("express").Express} app - A instância principal do Express
 */
exports.authRouter = (app) => {
  app.use('/auth', router);
};
