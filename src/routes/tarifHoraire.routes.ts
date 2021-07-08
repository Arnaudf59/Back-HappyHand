import { tarifHoraireController } from "../controller/tarifHoraire.controller";

export const setTarifHoraireRouting = (app) => {

    const endpoint = "tarifhoraires";

    app.get(`/${endpoint}`, tarifHoraireController.findAll);
    app.get(`/${endpoint}/:id`, tarifHoraireController.findById);

    app.post(`/${endpoint}`, tarifHoraireController.create);

    app.patch(`/${endpoint}/:id`, tarifHoraireController.update);
}