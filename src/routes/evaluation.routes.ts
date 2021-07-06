import { evalController } from "../controller/evaluation.controller";

export const setEvalRouting = (app) => {
    
    const endpoint = "evals";

    app.post(`/${endpoint}`, evalController.create);
}