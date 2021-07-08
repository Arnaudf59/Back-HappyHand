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
           .send(await TarifHoraire.find().populate("user").populate("prestation"))
           .end();
        next();
    }

    findById = async (req, res, next) => {
        res.status(200)
           .send(await TarifHoraire.findById(req.params.id).populate("user").populate("prestation"))
           .end();
        next();
    }

    update = async (req, res, next) => {
        await TarifHoraire.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
            if(data) {
                res.status(200)
                .send()
                .end();
            }else{
                res.status(404)
                   .send("Tarif inexistante")
                   .end()
            }
        })
        next();
    }
}

export const tarifHoraireController = Object.freeze(new TarifHoraireController());