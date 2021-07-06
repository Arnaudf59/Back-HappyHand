import { Facturation } from "../models/facturation";

class FacturationController {

    create = async (req, res, next) => {
        res.status(201)
           .send(await Facturation.create(req.body))
           .end()
        next();
    }
}

export const facturationController =Object.freeze(new FacturationController());