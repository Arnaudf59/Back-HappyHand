import { tarifHoraireController } from "../controller/tarifHoraire.controller";

export const setTarifHoraireRouting = (app) => {

    const endpoint = "tarifhoraires";

    app.get(`/${endpoint}`, tarifHoraireController.findAll);
    app.get(`/${endpoint}/:id`, tarifHoraireController.findById);
    app.get(`/${endpoint}/prestations/:id`, tarifHoraireController.findByPrestation);
    app.get(`/${endpoint}/prestations/:id/users/:user`, tarifHoraireController.findByPrestationAndUsers);

    app.post(`/${endpoint}`, tarifHoraireController.create);

    app.patch(`/${endpoint}/:id`, tarifHoraireController.update);
}