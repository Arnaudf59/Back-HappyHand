import { facturationController } from "../controller/facturation.controller";

export const setFacturationRouting = (app) => {

    const endpoint = "facturations";

    app.get(`/${endpoint}`, facturationController.findAll);
    app.get(`/${endpoint}/:id`, facturationController.findById);

    app.post(`/${endpoint}`, facturationController.create);
}