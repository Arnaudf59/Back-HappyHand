import mongoose from "mongoose";
import { PrestationDoc } from "./prestation";

export class MetierDoc extends mongoose.Document{

    nom : String;
    description : String;
    liste_prestation: PrestationDoc[];
};

const metierSchema = new mongoose.Schema({

    nom : {
        type: String
    },
    description : {
        type : String
    },
    liste_prestation : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Prestation"
    }]
});

export const Metier = mongoose.model("Metier", metierSchema);