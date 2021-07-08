"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.facturationController = void 0;
const facturation_1 = require("../models/facturation");
class FacturationController {
    constructor() {
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(201)
                .send(yield facturation_1.Facturation.create(req.body))
                .end();
            next();
        });
        this.findAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield facturation_1.Facturation.find().populate("devis"))
                .end();
            next();
        });
        this.findById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield facturation_1.Facturation.findById(req.params.id).populate("devis"))
                .end();
            next();
        });
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            yield facturation_1.Facturation.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
                if (data) {
                    res.status(200)
                        .send()
                        .end();
                }
                else {
                    res.status(404)
                        .send("Facturation inexistante")
                        .end();
                }
            });
            next();
        });
    }
}
exports.facturationController = Object.freeze(new FacturationController());
//# sourceMappingURL=facturation.controller.js.map