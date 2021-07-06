"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRoleRouting = void 0;
const role_controller_1 = require("../controller/role.controller");
const setRoleRouting = (app) => {
    const endpoint = "roles";
    app.get(`/${endpoint}/:id`, role_controller_1.roleController.findByUserID);
    app.post(`/${endpoint}`, role_controller_1.roleController.create);
};
exports.setRoleRouting = setRoleRouting;
//# sourceMappingURL=role.routes.js.map