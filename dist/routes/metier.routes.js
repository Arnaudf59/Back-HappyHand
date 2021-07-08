"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setMetierRouting = void 0;
const metier_controller_1 = require("../controller/metier.controller");
const setMetierRouting = (app) => {
    const endpoint = "metiers";
    app.get(`/${endpoint}`, metier_controller_1.metierController.findAll);
    app.get(`/${endpoint}/:id`, metier_controller_1.metierController.findById);
    app.get(`/${endpoint}/prestations/:id`, metier_controller_1.metierController.findMetierByPrestation);
    app.post(`/${endpoint}`, metier_controller_1.metierController.create);
};
exports.setMetierRouting = setMetierRouting;
//# sourceMappingURL=metier.routes.js.map