import express from 'express';
import colors from "colors";
import { setMongoConnect } from './config/mongoose.config';
import { setUserRouting } from './routes/user.routes';
import { setRoleRouting } from './routes/role.routes';
import { setMetierRouting } from './routes/metier.routes';
import { setPrestationRouting } from './routes/prestation.routes';
import { setTarifHoraireRouting } from './routes/tarifHoraire.routes';
import { setDevisRouting } from './routes/devis.routes';
import { setEvalRouting } from './routes/evaluation.routes';
import { setFacturationRouting } from './routes/facturation.routes';
import { setAuthRouting } from './routes/auth.routes';

    const app = express();
    const port = 8000;
    app.use(express.json());

    app.listen(port, () => {
        console.log(colors.green(`Serveur listening on port :`) + colors.yellow(`${port}`));
    });

    let user = (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    }

    app.post("/users", user);
    app.get("/users", user);

    setMongoConnect();

    setUserRouting(app);
    setRoleRouting(app);
    setMetierRouting(app);
    setPrestationRouting(app);
    setTarifHoraireRouting(app);
    setDevisRouting(app);
    setEvalRouting(app);
    setFacturationRouting(app);
    setAuthRouting(app);