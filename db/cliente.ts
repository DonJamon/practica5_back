import mongoose from "mongoose";
import { Cliente } from "../types.ts";
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  cards: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Tarjeta",
      required: false,
      default: []
    },
  travels: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Viaje",
      required: false,
      default: []
    },
});

export type ClienteModelType = mongoose.Document & Omit<Cliente, "id" >;

export const ClienteModel = mongoose.model<ClienteModelType>(
  "Cliente",
  ClienteSchema
);