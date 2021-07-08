"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAuthRouting = void 0;
const auth_controller_1 = require("../controller/auth.controller");
const setAuthRouting = (app) => {
    const endpoint = "auth";
    app.post(`/users/${endpoint}/signup`, auth_controller_1.authController.signup);
    app.post(`/users/${endpoint}/signin`, auth_controller_1.authController.signin);
};
exports.setAuthRouting = setAuthRouting;
//# sourceMappingURL=auth.routes.js.map