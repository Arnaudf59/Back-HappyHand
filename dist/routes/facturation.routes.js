"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFacturationRouting = void 0;
const facturation_controller_1 = require("../controller/facturation.controller");
const setFacturationRouting = (app) => {
    const endpoint = "facturations";
    app.post(`/${endpoint}`, facturation_controller_1.facturationController.create);
};
exports.setFacturationRouting = setFacturationRouting;
//# sourceMappingURL=facturation.routes.js.map