"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = exports.RolerDoc = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class RolerDoc extends mongoose_1.default.Document {
}
exports.RolerDoc = RolerDoc;
const roleSchema = new mongoose_1.default.Schema({
    id_user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User"
    },
    role: {
        type: Number
    }
});
exports.Role = mongoose_1.default.model("Role", roleSchema);
//# sourceMappingURL=role.js.map