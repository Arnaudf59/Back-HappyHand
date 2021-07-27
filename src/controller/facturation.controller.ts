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
           .send(await Facturation.find().populate("devis").populate({path: 'devis', populate : {path : 'client'}}).populate({path: 'devis', populate : {path : 'prestataire'}}))
           .end();
        next();
    }

    findById = async (req, res, next) => {
        res.status(200)
           .send(await Facturation.findById(req.params.id).populate("devis"))
           .end();
        next();
    }

    update = async (req, res, next) => {
        await Facturation.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
            if(data) {
                res.status(200)
                .send()
                .end();
            }else{
                res.status(404)
                   .send("Facturation inexistante")
                   .end()
            }
        })
        next();
    }
}

export const facturationController =Object.freeze(new FacturationController());