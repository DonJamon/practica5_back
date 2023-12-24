import { TarjetaModelType } from "../db/tarjeta.ts";
import { Tarjeta } from "../types.ts";

export const tarjetaModelToTarjeta = (tarjetaModel: TarjetaModelType): Tarjeta => {
  return {
    number: tarjetaModel.number,
    cvv: tarjetaModel.cvv,
    expirity: tarjetaModel.expirity,
    money: tarjetaModel.money,
  };
};