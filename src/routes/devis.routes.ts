import { devisController } from "../controller/devis.controller";

export const setDevisRouting = (app) => {

    const endpoint = "devis";

    app.post(`/${endpoint}`, devisController.create);
}