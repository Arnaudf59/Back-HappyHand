import { prestationController } from "../controller/prestation.controller";

export const setPrestationRouting = (app) =>{

    const endpoint = "prestations";

    app.get(`/${endpoint}`, prestationController.findAll);
    app.get(`/${endpoint}/:id`, prestationController.findById);
    app.get(`/${endpoint}/users/:id`, prestationController.findByUser);
    app.get(`/${endpoint}/metiers/:id`, prestationController.findByMetier);

    app.post(`/${endpoint}`, prestationController.create);
}