import { Devis } from "../models/devis";
import { Prestation } from "../models/prestation";
import { User } from "../models/user";

class DevisController {

    create = async (req, res , next) => {
        res.status(201)
           .send(await Devis.create(req.body))
           .end()
        next();
    }

    findAll = async(req, res, next) => {
        res.status(200)
           .send(await Devis.find().populate("prestataire").populate("client").populate("prestation"))
           .end();
        next();
    }

    findById = async (req, res, next) => {
        res.status(200)
           .send(await Devis.findById(req.params.id).populate("prestataire").populate("client").populate("prestation"))
           .end();
        next();
    }

    findByPrestataire = async (req, res, next) => {
        let user: any = await User.findById(req.params.id);
        let devis = await Devis.find({ prestataire : {$in : user._id}}).populate("prestataire").populate("client").populate("prestation");
        res.status(200)
           .send(devis)
           .end()
        next();
    }

    findByClient = async (req, res, next) => {
        let user: any = await User.findById(req.params.id);
        let devis = await Devis.find({ client : {$in : user._id}}).populate("prestataire").populate("client").populate("prestation");
        res.status(200)
           .send(devis)
           .end()
        next();
    }

    findByPrestation = async (req, res, next) => {
        let prestations: any = await Prestation.findById(req.params.id);
        let devis = await Devis.find({ prestation : {$in : prestations._id}}).populate("prestataire").populate("client").populate("prestation");
        res.status(200)
           .send(devis)
           .end()
        next();
    }

    update = async (req, res, next) => {
        await Devis.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
            if(data) {
                res.status(200)
                .send()
                .end();
            }else{
                res.status(404)
                   .send("Devis inexistante")
                   .end()
            }
        })
        next();
    }
}

export const devisController = Object.freeze(new DevisController());