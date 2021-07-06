"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDevisRouting = void 0;
const devis_controller_1 = require("../controller/devis.controller");
const setDevisRouting = (app) => {
    const endpoint = "devis";
    app.post(`/${endpoint}`, devis_controller_1.devisController.create);
};
exports.setDevisRouting = setDevisRouting;
//# sourceMappingURL=devis.routes.js.map