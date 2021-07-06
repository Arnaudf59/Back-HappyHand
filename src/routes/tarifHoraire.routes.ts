import { tarifHoraireController } from "../controller/tarifHoraire.controller";

export const setTarifHoraireRouting = (app) => {

    const endpoint = "tarifhoraires";

    app.post(`/${endpoint}`, tarifHoraireController.create);
}