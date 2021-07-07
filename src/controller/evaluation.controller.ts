import { Eval } from "../models/evaluation";

class EvalController {

    create = async (req, res, next) => {
        res.status(201)
           .send(await Eval.create(req.body))
           .end()
        next();
    }

    findAll = async(req, res, next) => {
        res.status(200)
           .send(await Eval.find().populate("role").populate("prestations").populate("metiers"))
           .end();
        next();
    }

    findById = async (req, res, next) => {
        res.status(200)
           .send(await Eval.findById(req.params.id).populate("role").populate("prestations").populate("metiers"))
           .end();
        next();
    }
}

export const evalController = Object.freeze( new EvalController);