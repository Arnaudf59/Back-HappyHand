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
exports.devisController = void 0;
const devis_1 = require("../models/devis");
const prestation_1 = require("../models/prestation");
const user_1 = require("../models/user");
class DevisController {
    constructor() {
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(201)
                .send(yield devis_1.Devis.create(req.body))
                .end();
            next();
        });
        this.findAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield devis_1.Devis.find().populate("prestataire").populate("client").populate("prestation"))
                .end();
            next();
        });
        this.findById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield devis_1.Devis.findById(req.params.id).populate("prestataire").populate("client").populate("prestation"))
                .end();
            next();
        });
        this.findByPrestataire = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let user = yield user_1.User.findById(req.params.id);
            let devis = yield devis_1.Devis.find({ prestataire: { $in: user._id } }).populate("prestataire").populate("client").populate("prestation");
            res.status(200)
                .send(devis)
                .end();
            next();
        });
        this.findByClient = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let user = yield user_1.User.findById(req.params.id);
            let devis = yield devis_1.Devis.find({ client: { $in: user._id } }).populate("prestataire").populate("client").populate("prestation");
            res.status(200)
                .send(devis)
                .end();
            next();
        });
        this.findByPrestation = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let prestations = yield prestation_1.Prestation.findById(req.params.id);
            let devis = yield devis_1.Devis.find({ prestation: { $in: prestations._id } }).populate("prestataire").populate("client").populate("prestation");
            res.status(200)
                .send(devis)
                .end();
            next();
        });
    }
}
exports.devisController = Object.freeze(new DevisController());
//# sourceMappingURL=devis.controller.js.map