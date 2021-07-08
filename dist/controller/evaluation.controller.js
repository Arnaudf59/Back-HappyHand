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
exports.evalController = void 0;
const devis_1 = require("../models/devis");
const evaluation_1 = require("../models/evaluation");
const prestation_1 = require("../models/prestation");
const user_1 = require("../models/user");
class EvalController {
    constructor() {
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(201)
                .send(yield evaluation_1.Eval.create(req.body))
                .end();
            next();
        });
        this.findAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield evaluation_1.Eval.find().populate("role").populate("prestations").populate("metiers"))
                .end();
            next();
        });
        this.findById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield evaluation_1.Eval.findById(req.params.id).populate("role").populate("prestations").populate("metiers"))
                .end();
            next();
        });
        this.findByUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let user = yield user_1.User.findById(req.params.id);
            let evals = yield evaluation_1.Eval.find({ user: { $in: user._id } }).populate("user").populate("prestation").populate("prestataire").populate("idDevis");
            res.status(200)
                .send(evals)
                .end();
            next();
        });
        this.findByPrestation = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let prestation = yield prestation_1.Prestation.findById(req.params.id);
            let evals = yield evaluation_1.Eval.find({ prestation: { $in: prestation._id } }).populate("user").populate("prestation").populate("prestataire").populate("idDevis");
            res.status(200)
                .send(evals)
                .end();
            next();
        });
        this.findByPrestataire = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let user = yield user_1.User.findById(req.params.id);
            let evals = yield evaluation_1.Eval.find({ prestataire: { $in: user._id } }).populate("user").populate("prestation").populate("prestataire").populate("idDevis");
            res.status(200)
                .send(evals)
                .end();
            next();
        });
        this.findByDevis = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let devis = yield devis_1.Devis.findById(req.params.id);
            let evals = yield evaluation_1.Eval.find({ idDevis: { $in: devis._id } }).populate("user").populate("prestation").populate("prestataire").populate("idDevis");
            res.status(200)
                .send(evals)
                .end();
            next();
        });
    }
}
exports.evalController = Object.freeze(new EvalController);
//# sourceMappingURL=evaluation.controller.js.map