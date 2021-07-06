import mongoose from 'mongoose';
import { PrestationDoc } from './prestation';
import { UserDoc } from './user';

export class EvalDoc extends mongoose.Document {
    
    user: UserDoc;
    prestation: PrestationDoc;
    prestataire : UserDoc;
    qualitePresta: String;
    qualiteComunication: String;
    qualiteDossierTech: String;
    niveauExpertise: String;

}

const evalSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    prestation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Prestation'
    },
    prestataire: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    qualitePresta: {
        type: String
    },
    qualiteComunication: {
        type: String

    },
    qualiteDossierTech: {
        type: String
    },
    niveauExpertise: {
        type: String
    }

});

export const Eval = mongoose.model<EvalDoc>("Eval", evalSchema);