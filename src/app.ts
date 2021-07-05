import express from 'express';
import colors from "colors";
import { setMongoConnect } from './config/mongoose.config';
import { setUserRouting } from './routes/user.route';

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