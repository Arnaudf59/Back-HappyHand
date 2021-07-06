import mongoose from 'mongoose';
import { EvalDoc } from './evaluation';
import { MetierDoc } from './metier';
import { UserDoc } from './user';

export class PrestationDoc extends mongoose.Document{

    metier : MetierDoc;
    description: String;
    tarifHorraire: Number;
    prestataire : UserDoc;
    status: Number;
    evaluation: EvalDoc;
}

const prestationSchema = new mongoose.Schema({

    metier : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Metier"
    },
    description : {
        type : String
    },
    tarifHorraire : {
        type : Number
    },
    presataire : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    status : {
        type : Number
    },
    evaluation : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Eval"
    }
})

export const Prestation = mongoose.model("Prestation", prestationSchema);