import { evalController } from "../controller/evaluation.controller";

export const setEvalRouting = (app) => {
    
    const endpoint = "evals";

    app.get(`/${endpoint}`, evalController.findAll);
    app.get(`/${endpoint}/:id`, evalController.findById);

    app.post(`/${endpoint}`, evalController.create);
}