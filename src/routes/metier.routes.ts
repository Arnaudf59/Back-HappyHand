import { metierController } from "../controller/metier.controller";

export const setMetierRouting = (app) => {

    const endpoint = "metiers";

    app.get(`/${endpoint}`, metierController.findAll);
    app.get(`/${endpoint}/:id`, metierController.findById);
    app.get(`/${endpoint}/prestations/:id`, metierController.findMetierByPrestation);

    app.post(`/${endpoint}`, metierController.create);
}