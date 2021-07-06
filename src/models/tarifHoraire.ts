import mongoose from "mongoose";
import { PrestationDoc } from "./prestation";
import { UserDoc } from "./user";

export class tarifHoraireDoc extends mongoose.Document {
    user: UserDoc;
    prestation: PrestationDoc;
    tauxHoraire: Number;
}

const tarifHoraireSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    prestation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Prestation"
    },
    tauxHoraire: {
        type: Number
    }
})

export const TarifHoraire = mongoose.model("TarifHoraire", tarifHoraireSchema);