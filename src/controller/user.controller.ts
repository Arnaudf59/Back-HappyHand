import { Prestation } from "../models/prestation";
import { User } from "../models/user";

class UserController {

    findAll = async(req, res, next) => {
        res.status(200)
           .send(await User.find())
           .end();
        next();
    }

    findById = async (req, res, next) => {
        res.status(200)
           .send(await User.findById(req.params.id))
           .end();
        next();
    }

    findByRole = async (req, res, next) => {
        res.status(200)
           .send(await User.find({"role" : req.params.id}))
           .end();
        next();
    }

    findByPrestation = async (req, res, next) => {
        let prestation : any = await Prestation.findById(req.params.id);
        let user = await User.find({ prestations : {$in : prestation._id}}).populate("role").populate("prestations").populate("metiers");
        res.status(200)
           .send(user)
           .end()
        next();
    }

    create = async (req, res, next) => {
        res.status(201)
           .send(await User.create(req.body))
           .end()
        next();
    }

    update = async (req, res, next) => {
        await User.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
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

    delete = async (req, res, next) => {
        res.status(200)
           .send(await User.findByIdAndRemove(req.params.id))
           .end();
        next();
    }
}

export const userController = Object.freeze(new UserController());