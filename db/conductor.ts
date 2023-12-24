import mongoose from "mongoose";
import { Conductor } from "../types.ts";
const Schema = mongoose.Schema;

const ConductorSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  travels: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Viaje",
      required: false,
      default: []
    },
});

export type ConductorModelType = mongoose.Document & Omit<Conductor, "id" >;

export const ConductorModel = mongoose.model<ConductorModelType>(
  "Conductor",
  ConductorSchema
);