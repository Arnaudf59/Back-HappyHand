import mongoose from 'mongoose';
import { DevisDoc } from './devis';
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
    idDevis: DevisDoc;
    statusEvals : Number;

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
        type: Number
    },
    qualiteComunication: {
        type: Number

    },
    qualiteDossierTech: {
        type: Number
    },
    niveauExpertise: {
        type: Number
    },
    idDevis: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Devis'
    },
    statusEvals: {
        type: Number
    }

});

export const Eval = mongoose.model<EvalDoc>("Eval", evalSchema);