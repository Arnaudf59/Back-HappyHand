"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    date_naissance: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean
    },
    hash: String,
    salt: String
});
exports.User = mongoose_1.default.model("User", userSchema);
//# sourceMappingURL=user.js.map