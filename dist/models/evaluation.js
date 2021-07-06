"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eval = exports.EvalDoc = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class EvalDoc extends mongoose_1.default.Document {
}
exports.EvalDoc = EvalDoc;
const evalSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User'
    },
    prestation: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Prestation'
    },
    prestataire: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User'
    },
    qualitePresta: {
        type: String
    },
    qualiteComunication: {
        type: String
    },
    qualiteDossierTech: {
        type: String
    },
    niveauExpertise: {
        type: String
    }
});
exports.Eval = mongoose_1.default.model("Eval", evalSchema);
//# sourceMappingURL=evaluation.js.map