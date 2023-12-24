import { ViajeModelType } from "../db/viaje.ts";
import { Viaje } from "../types.ts";

export const viajeModelToViaje = (viajeModel: ViajeModelType): Viaje => {
  return {
    client: viajeModel.client,
    driver: petModel.driver,
    money: viajeModel.money,
    distance: viajeModel.distance,
    date: viajeModel.date,
    status: viajeModel.status,
  };
};