import mongoose from 'mongoose';

export class FacturationDoc extends mongoose.Document {
    devis: DevisDoc;
    montant: Number;
    dateFacturation: Date;


}

const facturationSchema = new mongoose.Schema({
    devis: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Devis'
    },
    montant: {
        type: Number
    },
    dateFacturation: {
        type: Date
    }

});

export const Facturation = mongoose.model<FacturationDoc>("Eval", facturationSchema);