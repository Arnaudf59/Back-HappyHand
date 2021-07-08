import { evalController } from "../controller/evaluation.controller";

export const setEvalRouting = (app) => {
    
    const endpoint = "evals";

    app.get(`/${endpoint}`, evalController.findAll);
    app.get(`/${endpoint}/:id`, evalController.findById);
    app.get(`/${endpoint}/users/:id`, evalController.findByUser);
    app.get(`/${endpoint}/prestations/:id`, evalController.findByPrestation);
    app.get(`/${endpoint}/prestataires/:id`, evalController.findByPrestataire);
    app.get(`/${endpoint}/devis/:id`, evalController.findByDevis);

    app.post(`/${endpoint}`, evalController.create);
}