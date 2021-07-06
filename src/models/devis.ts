import mongoose from 'mongoose';

export class DevisDoc extends mongoose.Document {
    prestataire: PrestataireDoc;
    prestation: PrestationDoc;
    client: ClientDoc;
    dateDevis: Date;
    tarifHoraire: PrestataireDoc;
    prix: Number;
    datePrestation: Number;
    statusDevis: Number;
}

const devisSchema = new mongoose.Schema({
    prestataire: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Prestataire'
    },
    prestation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Prestation'
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    },
    dateDevis: {
        type: Date

    },
    tarifHoraire: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TarifHoraire'
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