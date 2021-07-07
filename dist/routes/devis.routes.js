"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDevisRouting = void 0;
const devis_controller_1 = require("../controller/devis.controller");
const setDevisRouting = (app) => {
    const endpoint = "devis";
    app.get(`/${endpoint}`, devis_controller_1.devisController.findAll);
    app.get(`/${endpoint}/:id`, devis_controller_1.devisController.findById);
    app.get(`/${endpoint}/prestataires/:id`, devis_controller_1.devisController.findByPrestataire);
    app.get(`/${endpoint}/clients/:id`, devis_controller_1.devisController.findByClient);
    app.get(`/${endpoint}/prestations/:id`, devis_controller_1.devisController.findByPrestation);
    app.post(`/${endpoint}`, devis_controller_1.devisController.create);
};
exports.setDevisRouting = setDevisRouting;
//# sourceMappingURL=devis.routes.js.map