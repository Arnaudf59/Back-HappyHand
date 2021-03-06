import { userController } from "../controller/user.controller";

export const setUserRouting = (app) => {

    const endpoint = "users";

    app.get(`/${endpoint}`, userController.findAll);
    app.get(`/${endpoint}/:id`, userController.findById);
    app.get(`/${endpoint}/roles/:id`, userController.findByRole);
    app.get(`/${endpoint}/prestations/:id`, userController.findByPrestation);
    app.get(`/${endpoint}/devis/:id`, userController.findByPrestation);

    app.post(`/${endpoint}`, userController.create);

    app.patch(`/${endpoint}/:id`, userController.update);

    app.delete(`/${endpoint}/:id`, userController.delete);
}