import mongoose from "mongoose";
import { PrestationDoc } from "./prestation";

export class MetierDoc extends mongoose.Document{

    metier : String;
    description : String;
    liste_prestataire: PrestationDoc[];
};

const metierSchema = new mongoose.Schema({

    metier : {
        type: String
    },
    description : {
        type : String
    },
    liste_prestataire : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Prestation"
    }]
});

export const Metier = mongoose.model("Metier", metierSchema);