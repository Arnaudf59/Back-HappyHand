"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Devis = exports.DevisDoc = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class DevisDoc extends mongoose_1.default.Document {
}
exports.DevisDoc = DevisDoc;
const devisSchema = new mongoose_1.default.Schema({
    prestataire: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User'
    },
    prestation: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'Prestation'
        }],
    client: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User'
    },
    dateDevis: {
        type: Date
    },
    prix: {
        type: Number
    },
    datePrestation: {
        type: Date
    },
    statusDevis: {
        type: Number
    }
});
exports.Devis = mongoose_1.default.model("Devis", devisSchema);
//# sourceMappingURL=devis.js.map