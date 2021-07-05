import mongoose, { mongo } from "mongoose";
import crypto from "crypto";

const userSchema = new mongoose.Schema ({
    email: {
        type: String,
        unique: true,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      prenom: {
        type: String,
        required: true
      },
      date_naissance: {
        type: String,
        required: true
      },
      admin: {
          type : Boolean
      },
      hash: String,
      salt: String

});

export const User = mongoose.model("User", userSchema);