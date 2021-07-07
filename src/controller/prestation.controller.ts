import { Metier } from "../models/metier";
import { Prestation } from "../models/prestation";
import { User } from "../models/user";

class PrestationController {

    create = async (req, res, next) => {
        res.status(201)
           .send(await Prestation.create(req.body))
           .end()
        next();
    }

    findAll = async(req, res, next) => {
        res.status(200)
           .send(await Prestation.find())
           .end();
        next();
    }

    findById = async (req, res, next) => {
        res.status(200)
           .send(await Prestation.findById(req.params.id))
           .end();
        next();
    }

    findByUser = async (req, res, next) => {
        let user: any = await User.findById(req.params.id);
        let prestations = await Prestation.find({ _id : {$in : user.prestations}}).populate("metier");
        res.status(200)
           .send(prestations)
           .end();
        next();
    }

    findByMetier = async (req, res, next) => {
        let metier: any = await Metier.findById(req.params.id);
        let prestations = await Prestation.find({ _id : {$in : metier.liste_prestation}}).populate("metier");
        res.status(200)
           .send(prestations)
           .end();
        next();
    }
}

export const prestationController = Object.freeze(new PrestationController());