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
import cors from 'cors'

    const app = express();
    const port = 8000;
    app.use(express.json());
    app.use(cors());

    app.listen(port, () => {
        console.log(colors.green(`Serveur listening on port :`) + colors.yellow(`${port}`));
    });

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