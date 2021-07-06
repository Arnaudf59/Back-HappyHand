import { TarifHoraire } from "../models/tarifHoraire";

class TarifHoraireController {

    create = async (req, res, next) => {
        res.status(200)
           .send(await TarifHoraire.create(req.body))
           .end();
        next();
    }
}

export const tarifHoraireController = Object.freeze(new TarifHoraireController());