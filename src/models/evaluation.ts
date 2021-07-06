import mongoose from 'mongoose';

export class EvalDoc extends mongoose.Document {
    user: UserDoc;
    prestation: PrestationDoc;
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