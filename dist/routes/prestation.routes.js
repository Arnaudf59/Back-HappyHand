"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPrestationRouting = void 0;
const prestation_controller_1 = require("../controller/prestation.controller");
const setPrestationRouting = (app) => {
    const endpoint = "prestations";
    app.get(`/${endpoint}`, prestation_controller_1.prestationController.findAll);
    app.get(`/${endpoint}/:id`, prestation_controller_1.prestationController.findById);
    app.get(`/${endpoint}/users/:id`, prestation_controller_1.prestationController.findByUser);
    app.get(`/${endpoint}/metiers/:id`, prestation_controller_1.prestationController.findByMetier);
    app.post(`/${endpoint}`, prestation_controller_1.prestationController.create);
};
exports.setPrestationRouting = setPrestationRouting;
//# sourceMappingURL=prestation.routes.js.map