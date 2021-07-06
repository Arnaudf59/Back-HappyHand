"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPrestationRouting = void 0;
const prestation_controller_1 = require("../controller/prestation.controller");
const setPrestationRouting = (app) => {
    const endpoint = "prestations";
    app.post(`/${endpoint}`, prestation_controller_1.prestationController.create);
};
exports.setPrestationRouting = setPrestationRouting;
//# sourceMappingURL=prestation.routes.js.map