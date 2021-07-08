import { authController } from "../controller/auth.controller";

export const setAuthRouting = (app) => {

    const endpoint = "auth";

    app.post(`/users/${endpoint}/signup`, authController.signup);
    app.post(`/users/${endpoint}/signin`, authController.signin);
}