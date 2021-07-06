import mongoose, { mongo } from "mongoose";
import crypto from "crypto";
import { RoleDoc } from "./role";

export class UserDoc extends mongoose.Document{
  nom : String;
  prenom : String;
  role: RoleDoc;
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
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    },
    //hash: String,
    //salt: String

});

export const User = mongoose.model("User", userSchema);