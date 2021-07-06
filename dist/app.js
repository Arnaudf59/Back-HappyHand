"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const colors_1 = __importDefault(require("colors"));
const mongoose_config_1 = require("./config/mongoose.config");
const user_routes_1 = require("./routes/user.routes");
const role_routes_1 = require("./routes/role.routes");
const app = express_1.default();
const port = 8000;
app.use(express_1.default.json());
app.listen(port, () => {
    console.log(colors_1.default.green(`Serveur listening on port :`) + colors_1.default.yellow(`${port}`));
});
let user = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
};
app.post("/users", user);
app.get("/users", user);
mongoose_config_1.setMongoConnect();
user_routes_1.setUserRouting(app);
role_routes_1.setRoleRouting(app);
//# sourceMappingURL=app.js.map