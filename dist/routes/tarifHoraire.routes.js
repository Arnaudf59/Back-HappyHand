"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTarifHoraireRouting = void 0;
const tarifHoraire_controller_1 = require("../controller/tarifHoraire.controller");
const setTarifHoraireRouting = (app) => {
    const endpoint = "tarifhoraires";
    app.post(`/${endpoint}`, tarifHoraire_controller_1.tarifHoraireController.create);
};
exports.setTarifHoraireRouting = setTarifHoraireRouting;
//# sourceMappingURL=tarifHoraire.routes.js.map