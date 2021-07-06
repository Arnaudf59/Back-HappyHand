import { userController } from "../controller/user.controller";

export const setUserRouting = (app) => {

    const endpoint = "users";

    app.get(`/${endpoint}`, userController.findAll);
    app.get(`/${endpoint}/:id`, userController.findById);

    app.post(`/${endpoint}`, userController.create);

    app.patch(`/${endpoint}/:id`, userController.update);

    app.delete(`/${endpoint}/:id`, userController.delete);
}