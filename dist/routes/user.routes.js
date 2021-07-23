"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUserRouting = void 0;
const user_controller_1 = require("../controller/user.controller");
const setUserRouting = (app) => {
    const endpoint = "users";
    app.get(`/${endpoint}`, user_controller_1.userController.findAll);
    app.get(`/${endpoint}/:id`, user_controller_1.userController.findById);
    app.get(`/${endpoint}/roles/:id`, user_controller_1.userController.findByRole);
    app.get(`/${endpoint}/prestations/:id`, user_controller_1.userController.findByPrestation);
    app.get(`/${endpoint}/devis/:id`, user_controller_1.userController.findByPrestation);
    app.post(`/${endpoint}`, user_controller_1.userController.create);
    app.patch(`/${endpoint}/:id`, user_controller_1.userController.update);
    app.delete(`/${endpoint}/:id`, user_controller_1.userController.delete);
};
exports.setUserRouting = setUserRouting;
//# sourceMappingURL=user.routes.js.map