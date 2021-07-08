"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFacturationRouting = void 0;
const facturation_controller_1 = require("../controller/facturation.controller");
const setFacturationRouting = (app) => {
    const endpoint = "facturations";
    app.get(`/${endpoint}`, facturation_controller_1.facturationController.findAll);
    app.get(`/${endpoint}/:id`, facturation_controller_1.facturationController.findById);
    app.post(`/${endpoint}`, facturation_controller_1.facturationController.create);
    app.patch(`/${endpoint}/:id`, facturation_controller_1.facturationController.update);
};
exports.setFacturationRouting = setFacturationRouting;
//# sourceMappingURL=facturation.routes.js.map