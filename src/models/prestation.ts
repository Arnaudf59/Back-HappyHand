import mongoose from 'mongoose';
import { EvalDoc } from './evaluation';
import { MetierDoc } from './metier';
import { UserDoc } from './user';

export class PrestationDoc extends mongoose.Document{

    nom : String;
    metier : MetierDoc;
    description: String;
    //prestataire : UserDoc;
    //status: Number;
    //evaluation: EvalDoc;
}//

const prestationSchema = new mongoose.Schema({

    nom : {
        type : String
    },
    metier : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Metier"
    },
    description : {
        type : String
    }
    //presataire : {
    //    type: mongoose.Schema.Types.ObjectId,
    //    ref : "User"
    //},
    //status : {
    //    type : Number
    //},
    //evaluation : {
    //    type: mongoose.Schema.Types.ObjectId,
    //    ref : "Eval"
    //}
})

export const Prestation = mongoose.model("Prestation", prestationSchema);