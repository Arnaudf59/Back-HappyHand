import { Metier } from "../models/metier";

class MetierController {

    create = async (req, res, next) => {
        res.status(201)
           .send(await Metier.create(req.body))
           .end()
        next();
    }
}

export const metierController = Object.freeze(new MetierController());