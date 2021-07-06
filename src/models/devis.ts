import mongoose from 'mongoose';
import { PrestationDoc } from './prestation';
import { UserDoc } from './user';

export class DevisDoc extends mongoose.Document {
    prestataire: UserDoc;
    prestation: PrestationDoc[];
    client: UserDoc;
    dateDevis: Date;
    prix: Number;
    datePrestation: Date;
    statusDevis: Number;
}

const devisSchema = new mongoose.Schema({
    prestataire: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    prestation: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Prestation'
    }],
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    dateDevis: {
        type: Date

    },
    prix: {
        type: Number
    },
    datePrestation: {
        type: Date
    },
    statusDevis: {
        type: Number
    }

})

export const Devis = mongoose.model<DevisDoc>("Devis", devisSchema);