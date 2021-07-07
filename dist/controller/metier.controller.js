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
exports.metierController = void 0;
const metier_1 = require("../models/metier");
const prestation_1 = require("../models/prestation");
class MetierController {
    constructor() {
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(201)
                .send(yield metier_1.Metier.create(req.body))
                .end();
            next();
        });
        this.findAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield metier_1.Metier.find().populate("liste_prestation"))
                .end();
            next();
        });
        this.findById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield metier_1.Metier.findById(req.params.id).populate("liste_prestation"))
                .end();
            next();
        });
        this.findMetierByPrestation = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let prestation = yield prestation_1.Prestation.findById(req.params.id);
            let metier = yield metier_1.Metier.find({ liste_prestation: {
                    $in: prestation._id
                } }).populate("prestations");
            res.status(200)
                .send(metier)
                .end();
            next();
        });
    }
}
exports.metierController = Object.freeze(new MetierController());
//# sourceMappingURL=metier.controller.js.map