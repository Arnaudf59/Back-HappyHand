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
exports.prestationController = void 0;
const metier_1 = require("../models/metier");
const prestation_1 = require("../models/prestation");
const user_1 = require("../models/user");
class PrestationController {
    constructor() {
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(201)
                .send(yield prestation_1.Prestation.create(req.body))
                .end();
            next();
        });
        this.findAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield prestation_1.Prestation.find())
                .end();
            next();
        });
        this.findById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield prestation_1.Prestation.findById(req.params.id))
                .end();
            next();
        });
        this.findByUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let user = yield user_1.User.findById(req.params.id);
            let prestations = yield prestation_1.Prestation.find({ _id: { $in: user.prestations } }).populate("metier");
            res.status(200)
                .send(prestations)
                .end();
            next();
        });
        this.findByMetier = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let metier = yield metier_1.Metier.findById(req.params.id);
            let prestations = yield prestation_1.Prestation.find({ _id: { $in: metier.liste_prestation } }).populate("metier");
            res.status(200)
                .send(prestations)
                .end();
            next();
        });
    }
}
exports.prestationController = Object.freeze(new PrestationController());
//# sourceMappingURL=prestation.controller.js.map