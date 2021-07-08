"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setEvalRouting = void 0;
const evaluation_controller_1 = require("../controller/evaluation.controller");
const setEvalRouting = (app) => {
    const endpoint = "evals";
    app.get(`/${endpoint}`, evaluation_controller_1.evalController.findAll);
    app.get(`/${endpoint}/:id`, evaluation_controller_1.evalController.findById);
    app.get(`/${endpoint}/users/:id`, evaluation_controller_1.evalController.findByUser);
    app.get(`/${endpoint}/prestations/:id`, evaluation_controller_1.evalController.findByPrestation);
    app.get(`/${endpoint}/prestataires/:id`, evaluation_controller_1.evalController.findByPrestataire);
    app.get(`/${endpoint}/devis/:id`, evaluation_controller_1.evalController.findByDevis);
    app.post(`/${endpoint}`, evaluation_controller_1.evalController.create);
    app.patch(`/${endpoint}/:id`, evaluation_controller_1.evalController.update);
};
exports.setEvalRouting = setEvalRouting;
//# sourceMappingURL=evaluation.routes.js.map