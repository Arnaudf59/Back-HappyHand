import { Eval } from "../models/evaluation";

class EvalController {

    create = async (req, res, next) => {
        res.status(201)
           .send(await Eval.create(req.body))
           .end()
        next();
    }
}

export const evalController = Object.freeze( new EvalController);