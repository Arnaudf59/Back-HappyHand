import mongoose, { mongo } from "mongoose";
import crypto from "crypto";

export class UserDoc extends mongoose.Document{
  nom : String;
  prenom : String;
  admin: Number;
}

const userSchema = new mongoose.Schema ({
    //email: {
    //  type: String,
    //  unique: true,
    //  required: true
    //},
    nom: {
      type: String,
      required: true
    },
    prenom: {
      type: String,
      required: true
    },
    //date_naissance: {
    //  type: String,
    //  required: true
    //},
    role: {
        type : Number
    },
    //hash: String,
    //salt: String

});

export const User = mongoose.model("User", userSchema);