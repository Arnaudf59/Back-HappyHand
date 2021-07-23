"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTarifHoraireRouting = void 0;
const tarifHoraire_controller_1 = require("../controller/tarifHoraire.controller");
const setTarifHoraireRouting = (app) => {
    const endpoint = "tarifhoraires";
    app.get(`/${endpoint}`, tarifHoraire_controller_1.tarifHoraireController.findAll);
    app.get(`/${endpoint}/:id`, tarifHoraire_controller_1.tarifHoraireController.findById);
    app.get(`/${endpoint}/prestations/:id`, tarifHoraire_controller_1.tarifHoraireController.findByPrestation);
    app.get(`/${endpoint}/users/:id`, tarifHoraire_controller_1.tarifHoraireController.findByUser);
    app.get(`/${endpoint}/prestations/:id/users/:user`, tarifHoraire_controller_1.tarifHoraireController.findByPrestationAndUsers);
    app.post(`/${endpoint}`, tarifHoraire_controller_1.tarifHoraireController.create);
    app.patch(`/${endpoint}/:id`, tarifHoraire_controller_1.tarifHoraireController.update);
};
exports.setTarifHoraireRouting = setTarifHoraireRouting;
//# sourceMappingURL=tarifHoraire.routes.js.map