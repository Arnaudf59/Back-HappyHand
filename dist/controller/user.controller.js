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
exports.userController = void 0;
const prestation_1 = require("../models/prestation");
const user_1 = require("../models/user");
class UserController {
    constructor() {
        this.findAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield user_1.User.find().populate("role").populate("prestations").populate("metiers"))
                .end();
            next();
        });
        this.findById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield user_1.User.findById(req.params.id).populate("role").populate("prestations").populate("metiers"))
                .end();
            next();
        });
        this.findByRole = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield user_1.User.find({ "role": req.params.id }).populate("role").populate("prestations").populate("metiers"))
                .end();
            next();
        });
        this.findByPrestation = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let prestation = yield prestation_1.Prestation.findById(req.params.id);
            let user = yield user_1.User.find({ prestations: { $in: prestation._id } }).populate("role").populate("prestations").populate("metiers");
            res.status(200)
                .send(user)
                .end();
            next();
        });
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(201)
                .send(yield user_1.User.create(req.body))
                .end();
            next();
        });
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            yield user_1.User.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
                if (data) {
                    res.status(200)
                        .send()
                        .end();
                }
                else {
                    res.status(404)
                        .send("Utilisateur inexistante")
                        .end();
                }
            });
            next();
        });
        this.delete = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield user_1.User.findByIdAndRemove(req.params.id))
                .end();
            next();
        });
    }
}
exports.userController = Object.freeze(new UserController());
//# sourceMappingURL=user.controller.js.map