import { roleController } from "../controller/role.controller";

export const setRoleRouting = (app) => {

    const endpoint = "roles"; 

    app.get(`/${endpoint}/:id`, roleController.findByID);

    app.post(`/${endpoint}`, roleController.create);
}