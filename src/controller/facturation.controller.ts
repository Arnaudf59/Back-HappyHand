import { Facturation } from "../models/facturation";

class FacturationController {

    create = async (req, res, next) => {
        res.status(201)
           .send(await Facturation.create(req.body))
           .end()
        next();
    }

    findAll = async(req, res, next) => {
        res.status(200)
           .send(await Facturation.find().populate("devis"))
           .end();
        next();
    }

    findById = async (req, res, next) => {
        res.status(200)
           .send(await Facturation.findById(req.params.id).populate("devis"))
           .end();
        next();
    }
}

export const facturationController =Object.freeze(new FacturationController());