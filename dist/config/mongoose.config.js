"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setMongoConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const colors_1 = __importDefault(require("colors"));
const URL = 'mongodb://localhost:27017/happyhand';
const setMongoConnect = () => {
    mongoose_1.default.connect(URL, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(colors_1.default.red("Connecté à la base de données"));
        }
    });
};
exports.setMongoConnect = setMongoConnect;
//# sourceMappingURL=mongoose.config.js.map