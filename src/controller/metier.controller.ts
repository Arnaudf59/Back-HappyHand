import { Metier } from "../models/metier";
import { Prestation } from "../models/prestation";

class MetierController {

    create = async (req, res, next) => {
        res.status(201)
           .send(await Metier.create(req.body))
           .end()
        next();
    }

    findAll = async(req, res, next) => {
        res.status(200)
           .send(await Metier.find().populate("liste_prestation"))
           .end();
        next();
    }

    findById = async (req, res, next) => {
        res.status(200)
           .send(await Metier.findById(req.params.id).populate("liste_prestation"))
           .end();
        next();
    }

    findMetierByPrestation = async (req, res, next) => {
        let prestation : any = await Prestation.findById(req.params.id); 
        let metier = await Metier.find({ liste_prestation : {
            $in : prestation._id
        }}).populate("prestations");
        res.status(200)
           .send(metier)
           .end()
        next();
    }
}

export const metierController = Object.freeze(new MetierController());