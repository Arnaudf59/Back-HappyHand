import { Devis } from "../models/devis";
import { Eval } from "../models/evaluation";
import { Prestation } from "../models/prestation";
import { User } from "../models/user";

class EvalController {

    create = async (req, res, next) => {
        res.status(201)
           .send(await Eval.create(req.body))
           .end()
        next();
    }

    findAll = async(req, res, next) => {
        res.status(200)
           .send(await Eval.find().populate("user").populate("prestation").populate("prestataire").populate("idDevis"))
           .end();
        next();
    }

    findById = async (req, res, next) => {
        res.status(200)
           .send(await Eval.findById(req.params.id).populate("user").populate("prestation").populate("prestataire").populate("idDevis"))
           .end();
        next();
    }

    findByUser = async (req, res, next) => {
        let user : any = await User.findById(req.params.id);
        let evals = await Eval.find({ user : {$in : user._id}}).populate("user").populate("prestation").populate("prestataire").populate("idDevis");
        res.status(200)
           .send(evals)
           .end()
        next();
    }

    findByPrestation = async (req, res, next) => {
        let prestation : any = await Prestation.findById(req.params.id);
        let evals = await Eval.find({ prestation : {$in : prestation._id}}).populate("user").populate("prestation").populate("prestataire").populate("idDevis");
        res.status(200)
           .send(evals)
           .end()
        next();
    }

    findByPrestataire = async (req, res, next) => {
        let user : any = await User.findById(req.params.id);
        let evals = await Eval.find({ prestataire : {$in : user._id}}).populate("user").populate("prestation").populate("prestataire").populate("idDevis");
        res.status(200)
           .send(evals)
           .end()
        next();
    }

    findByDevis = async (req, res, next) => {
        let devis : any = await Devis.findById(req.params.id);
        let evals = await Eval.find({ idDevis : {$in : devis._id}}).populate("user").populate("prestation").populate("prestataire").populate("idDevis");
        res.status(200)
           .send(evals)
           .end()
        next();
    }

    update = async (req, res, next) => {
        await Eval.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
            if(data) {
                res.status(200)
                .send()
                .end();
            }else{
                res.status(404)
                   .send("VUtilisateur inexistante")
                   .end()
            }
        })
        next();
    }
}

export const evalController = Object.freeze( new EvalController);