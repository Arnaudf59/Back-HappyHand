import { prestationController } from "../controller/prestation.controller";

export const setPrestationRouting = (app) =>{

    const endpoint = "prestations";

    app.post(`/${endpoint}`, prestationController.create);
}