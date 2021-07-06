import { Role } from "../models/role"

class RoleController {

    findByUserID = async (req ,res ,next ) => {
        res.status(200)
           .send(await Role.find({"id_user": req.params.id}).populate("UserDoc"))
           .end();
        next();
    }

    create = async (req, res, next) => {
        console.log(req.body);
        res.status(201)
           .send(await Role.create(req.body))
           .end()
        next();
    }
}

export const roleController = Object.freeze(new RoleController());