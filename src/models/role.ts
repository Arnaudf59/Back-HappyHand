import mongoose from "mongoose";
import { UserDoc } from "./user";

export class RoleDoc extends mongoose.Document{
    role: Number
  }

const roleSchema = new mongoose.Schema({

    role : {
        type: Number
    }
});

export const Role = mongoose.model("Role", roleSchema);