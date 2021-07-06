"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prestation = exports.PrestationDoc = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class PrestationDoc extends mongoose_1.default.Document {
} //
exports.PrestationDoc = PrestationDoc;
const prestationSchema = new mongoose_1.default.Schema({
    nom: {
        type: String
    },
    metier: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Metier"
    },
    description: {
        type: String
    }
    //presataire : {
    //    type: mongoose.Schema.Types.ObjectId,
    //    ref : "User"
    //},
    //status : {
    //    type : Number
    //},
    //evaluation : {
    //    type: mongoose.Schema.Types.ObjectId,
    //    ref : "Eval"
    //}
});
exports.Prestation = mongoose_1.default.model("Prestation", prestationSchema);
//# sourceMappingURL=prestation.js.map