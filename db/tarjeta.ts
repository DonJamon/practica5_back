import mongoose from "mongoose";
import { Tarjeta } from "../types.ts";
const Schema = mongoose.Schema;

const TarjetaSchema = new Schema({
  number: { type: Number, required: true },
  cvv: { type: Number, required: true },
  expirity: { type: String, required: true },
  money: {type: Number,required: false},
});

export type TarjetaModelType = mongoose.Document & Omit<Tarjeta, "id" >;

export const TarjetaModel = mongoose.model<TarjetaModelType>(
  "Tarjeta",
  TarjetaSchema
);