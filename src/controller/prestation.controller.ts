import { Prestation } from "../models/prestation";

class PrestationController {

    create = async (req, res, next) => {
        res.status(201)
           .send(await Prestation.create(req.body))
           .end()
        next();
    }
}

export const prestationController = Object.freeze(new PrestationController());