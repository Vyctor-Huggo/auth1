const { authRouter } = require("./auth.routes");

module.exports = (app) => {
    authRouter(app);
}