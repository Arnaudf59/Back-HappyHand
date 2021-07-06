import { facturationController } from "../controller/facturation.controller";

export const setFacturationRouting = (app) => {

    const endpoint = "facturations";

    app.post(`/${endpoint}`, facturationController.create);
}