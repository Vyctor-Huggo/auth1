const authRepository = require("../repositories/auth.repository");
const bcrypt = require("bcrypt");

/**
 * Registra um novo usuário no sistema.
 * Verifica se o e-mail já está cadastrado e salva com senha criptografada.
 * 
 * @param {Object} userData - Dados do novo usuário
 * @param {string} userData.name - Nome do usuário
 * @param {string} userData.email - E-mail do usuário
 * @param {string} userData.password - Senha do usuário
 * @returns {Promise<Object>} O usuário criado
 * @throws {Error} Se o e-mail já estiver cadastrado
 */
exports.registerUser = async ({ name, email, password }) => {
  const existing = await authRepository.findUserByEmail(email);
  if (existing) throw new Error("E-mail já cadastrado");

  const hash = await bcrypt.hash(password, 10);
  return await authRepository.createUser({ name, email, password: hash });
};

/**
 * Realiza o login de um usuário.
 * Compara a senha informada com o hash salvo no banco.
 * 
 * @param {Object} loginData - Dados de login
 * @param {string} loginData.email - E-mail do usuário
 * @param {string} loginData.password - Senha do usuário
 * @returns {Promise<Object>} O usuário autenticado
 * @throws {Error} Se o e-mail não existir ou a senha for inválida
 */
exports.loginUser = async ({ email, password }) => {
  const user = await authRepository.findUserByEmail(email);
  if (!user) throw new Error("E-mail não cadastrado");

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) throw new Error("Senha inválida");

  return user;
};
