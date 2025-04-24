/**
 * @namespace repositories/auth
 * @description Repositório para operações de autenticação
 */
/**
 * @requires prisma from "../infrastructures/prisma"
 */

const prisma = require("../infrastructures/prisma");

/**
 * @typedef {Object} UserData
 * @property {string} name - Nome do usuário
 * @property {string} email - E-mail do usuário
 * @property {string} password - Senha (criptografada)
 */

/**
 * Cria um novo usuário
 * @param {UserData} userData - Dados do usuário
 * @returns {Promise<Object>} O usuário criado
 */
exports.createUser = async (userData) => {
  return await prisma.user.create({
    data: userData,
  });
};

/**
 * Busca um usuário pelo e-mail
 * @param {string} email - E-mail do usuário
 * @returns {Promise<Object|null>} O usuário encontrado ou null
 */
exports.findUserByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: { email },
  });
};

/**
 * Atualiza os dados do usuário
 * @param {string} userId - ID do usuário
 * @param {Partial<UserData>} newData - Dados a serem atualizados
 * @returns {Promise<Object>} O usuário atualizado
 */
exports.updateUser = async (userId, newData) => {
  return await prisma.user.update({
    where: { id: userId },
    data: newData,
  });
};
