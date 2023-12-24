import { GraphQLError } from "graphql";
import { ClienteModel, ClienteModelType } from "../db/cliente.ts";
import { ConductorModel, ConductorModelType } from "../db/conductor.ts";
import { ViajeModel, ViajeModelType } from "../db/viaje.ts";

export const Query = {
  clientes: async (): Promise<ClienteModelType[]> => {
    const clientes = await ClienteModel.find().exec();
    return clientes;
  },  

  conductores: async (): Promise<ConductorModelType[]> => {
    const conductores = await ConductorModel.find().exec();
    return conductores;
  },

  viajes: async (): Promise<ViajeModelType[]> => {
    const viajes = await ViajeModel.find().exec();
    return viajes;
  },
};