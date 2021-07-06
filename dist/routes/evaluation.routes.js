"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setEvalRouting = void 0;
const evaluation_controller_1 = require("../controller/evaluation.controller");
const setEvalRouting = (app) => {
    const endpoint = "evals";
    app.post(`/${endpoint}`, evaluation_controller_1.evalController.create);
};
exports.setEvalRouting = setEvalRouting;
//# sourceMappingURL=evaluation.routes.js.map