"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Facturation = exports.FacturationDoc = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class FacturationDoc extends mongoose_1.default.Document {
}
exports.FacturationDoc = FacturationDoc;
const facturationSchema = new mongoose_1.default.Schema({
    devis: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Devis'
    },
    montant: {
        type: Number
    },
    dateFacturation: {
        type: Date
    }
});
exports.Facturation = mongoose_1.default.model("Facturation", facturationSchema);
//# sourceMappingURL=facturation.js.map