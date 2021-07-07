"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setEvalRouting = void 0;
const evaluation_controller_1 = require("../controller/evaluation.controller");
const setEvalRouting = (app) => {
    const endpoint = "evals";
    app.get(`/${endpoint}`, evaluation_controller_1.evalController.findAll);
    app.get(`/${endpoint}/:id`, evaluation_controller_1.evalController.findById);
    app.post(`/${endpoint}`, evaluation_controller_1.evalController.create);
};
exports.setEvalRouting = setEvalRouting;
//# sourceMappingURL=evaluation.routes.js.map