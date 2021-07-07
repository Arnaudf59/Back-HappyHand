import { TarifHoraire } from "../models/tarifHoraire";

class TarifHoraireController {

    create = async (req, res, next) => {
        res.status(200)
           .send(await TarifHoraire.create(req.body))
           .end();
        next();
    }

    findAll = async (req, res, next) => {
        res.status(200)
           .send(await TarifHoraire.find())
           .end();
        next();
    }

    findById = async (req, res, next) => {
        res.status(200)
           .send(await TarifHoraire.findById(req.params.id))
           .end();
        next();
    }
}

export const tarifHoraireController = Object.freeze(new TarifHoraireController());