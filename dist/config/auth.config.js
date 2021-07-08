"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (req, res, next) => {
    const token = req.header("token");
    if (!token)
        return res.status(401).json({ message: "User's not authenticated" });
    try {
        const decoded = jsonwebtoken_1.default.verify(token, "randomString");
        req.user = decoded.user;
        next();
    }
    catch (e) {
        console.error(e);
        res.status(500).send({ message: "Invalid Token" });
    }
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=auth.config.js.map