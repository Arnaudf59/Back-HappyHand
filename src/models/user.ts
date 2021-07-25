import mongoose, { mongo } from "mongoose";
import crypto from "crypto";
import { RoleDoc } from "./role";
import { PrestationDoc } from "./prestation";
import { MetierDoc } from "./metier";

export class UserDoc extends mongoose.Document{
  email : String;
  password : String;
  nom : String;
  prenom : String;
  dateNaissance : Number;
  role : RoleDoc;
  adresse : String;
  ville : String;
  codePostal : String;
  nomPrestataire : String;
  prestations : PrestationDoc[];
  metiers : MetierDoc[];
}

const userSchema = new mongoose.Schema ({
    email: {
      type: String,
      unique: true,
      required: true
    },
    password : {
      type : String,
      required: true
    },
    nom: {
      type: String,
      required: true
    },
    prenom: {
      type: String,
      required: true
    },
    dateNaissance: {
      type: Number,
    },
    role: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    },
    adresse : {
      type: String
    },
    ville : {
      type: String
    }, 
    codePostal : {
      type: String
    },
    nomPrestataire: {
      type : String
    },
    description : {
      type: String
    },
    prestations : [{
      type : mongoose.Schema.Types.ObjectId,
      ref: 'Prestation'
    }],
    metiers : [{
      type : mongoose.Schema.Types.ObjectId,
      ref: 'Metier'
    }]

    //hash: String,
    //salt: String

});

export const User = mongoose.model("User", userSchema);