import mongoose from "mongoose";
import { UserDoc } from "./user";

export class RolerDoc extends mongoose.Document{
    id_user : UserDoc;
    role: Number
  }

const roleSchema = new mongoose.Schema({

    id_user : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    role : {
        type: Number
    }
});

export const Role = mongoose.model("Role", roleSchema);