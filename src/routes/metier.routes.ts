import { metierController } from "../controller/metier.controller";

export const setMetierRouting = (app) => {

    const endpoint = "metiers";

    app.post(`/${endpoint}`, metierController.create);
}