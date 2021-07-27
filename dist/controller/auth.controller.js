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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = require("../models/user");
class AuthController {
    constructor() {
        this.signup = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let user = req.body;
            try {
                let userExist = yield user_1.User.findOne({
                    email: user.email
                });
                if (userExist) {
                    return res.status(400).json({
                        msg: "User Already Exists"
                    });
                }
                const salt = yield bcrypt_1.default.genSalt(10);
                user.password = yield bcrypt_1.default.hash(user.password, salt);
                user = yield user_1.User.create(user);
                const payload = {
                    user: {
                        id: user.id,
                        role: user.role
                    }
                };
                jsonwebtoken_1.default.sign(payload, "randomString", {
                    expiresIn: 10000
                }, (err, token) => {
                    if (err)
                        throw err;
                    res.status(200).json({
                        token,
                        user: payload.user
                    });
                });
            }
            catch (err) {
                console.log(err.message);
                res.status(500).send("Error in Saving");
            }
        });
        this.signin = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            try {
                let user = yield user_1.User.findOne({
                    email
                });
                if (!user)
                    return res.status(400).json({
                        message: "User Not Exist"
                    });
                const isMatch = yield bcrypt_1.default.compare(password, user.password);
                if (!isMatch)
                    return res.status(400).json({
                        message: "Incorrect Password !"
                    });
                const payload = {
                    user: {
                        id: user.id,
                        role: user.role
                    }
                };
                jsonwebtoken_1.default.sign(payload, "randomString", {
                    expiresIn: 3600
                }, (err, token) => {
                    if (err)
                        throw err;
                    res.status(200).json({
                        token,
                        user: payload.user
                    });
                });
            }
            catch (e) {
                console.error(e);
                res.status(500).json({
                    message: "Server Error"
                });
            }
        });
    }
}
exports.authController = Object.freeze(new AuthController());
//# sourceMappingURL=auth.controller.js.map