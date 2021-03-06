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
exports.roleController = void 0;
const role_1 = require("../models/role");
class RoleController {
    constructor() {
        this.findByID = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(200)
                .send(yield role_1.Role.findById(req.params.id))
                .end();
            next();
        });
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            res.status(201)
                .send(yield role_1.Role.create(req.body))
                .end();
            next();
        });
    }
}
exports.roleController = Object.freeze(new RoleController());
//# sourceMappingURL=role.controller.js.map