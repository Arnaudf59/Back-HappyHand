import { Role } from "../models/role"

class RoleController {

    findByID = async (req ,res ,next ) => {
        res.status(200)
           .send(await Role.findById(req.params.id))
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