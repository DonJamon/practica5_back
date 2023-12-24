import { ClienteModelType } from "../db/cliente.ts";
import { Cliente } from "../types.ts";

export const clienteModelToCliente = (clienteModel: ClienteModelType): Cliente => {
  return {
    name: clienteModel.name,
    email: clienteModel.email,
    cards: clienteModel.cards,
    travels: clienteModel.travels,
  };
};