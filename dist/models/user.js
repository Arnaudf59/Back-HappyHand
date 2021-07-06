"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserDoc = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class UserDoc extends mongoose_1.default.Document {
}
exports.UserDoc = UserDoc;
const userSchema = new mongoose_1.default.Schema({
    //email: {
    //  type: String,
    //  unique: true,
    //  required: true
    //},
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    //date_naissance: {
    //  type: String,
    //  required: true
    //},
    role: {
        type: Number
    },
    //hash: String,
    //salt: String
});
exports.User = mongoose_1.default.model("User", userSchema);
//# sourceMappingURL=user.js.map