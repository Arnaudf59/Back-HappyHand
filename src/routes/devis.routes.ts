import { devisController } from "../controller/devis.controller";

export const setDevisRouting = (app) => {

    const endpoint = "devis";

    app.get(`/${endpoint}`, devisController.findAll);
    app.get(`/${endpoint}/:id`, devisController.findById);
    app.get(`/${endpoint}/prestataires/:id`, devisController.findByPrestataire);
    app.get(`/${endpoint}/clients/:id`, devisController.findByClient);
    app.get(`/${endpoint}/prestations/:id`, devisController.findByPrestation);

    app.post(`/${endpoint}`, devisController.create);

    app.patch(`/${endpoint}/:id`, devisController.update);
}