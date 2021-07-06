import { Devis } from "../models/devis";

class DevisController {

    create = async (req, res , next) => {
        res.status(201)
           .send(await Devis.create(req.body))
           .end()
        next();
    }
}

export const devisController = Object.freeze(new DevisController());