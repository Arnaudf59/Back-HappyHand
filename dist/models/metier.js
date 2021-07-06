"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metier = exports.MetierDoc = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class MetierDoc extends mongoose_1.default.Document {
}
exports.MetierDoc = MetierDoc;
;
const metierSchema = new mongoose_1.default.Schema({
    metier: {
        type: String
    },
    description: {
        type: String
    },
    liste_prestataire: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Prestation"
        }]
});
exports.Metier = mongoose_1.default.model("Metier", metierSchema);
//# sourceMappingURL=metier.js.map