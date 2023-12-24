import { GraphQLError } from "graphql";
import { ClienteModel, ClienteModelType } from "../db/cliente.ts";
import { ConductorModel, ConductorModelType } from "../db/conductor.ts";
import { ViajeModel, ViajeModelType } from "../db/viaje.ts";
import { TarjetaModel, TarjetaModelType } from "../db/tarjeta.ts";
import mongoose from "mongoose";

export const Mutation = {
  addTarjeta: async (
    _: unknown,
    args: { number: number; cvv: number; expirity: string;}
  ): Promise<TarjetaModelType> => {
    const tarjeta = {
      number: args.number,
      cvv: args.cvv,
      expirity: args.expirity,
    };
    const newTarjeta = await TarjetaModel.create(tarjeta);
    return newTarjeta;
  },
  deleteTarjeta: async (
    _: unknown,
    args: { id: string }
  ): Promise<TarjetaModelType> => {
    const tarjeta = await TarjetaModel.findByIdAndDelete(args.id);
    if (!tarjeta) {
      throw new GraphQLError(`No tarjeta found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return tarjeta;
  },
  addCliente: async (
    _: unknown,
    args: { name: string; email: string;}
  ): Promise<ClienteModelType> => {
    const cliente = {
      name: args.name,
      email: args.email,
    };
    const newCliente = await ClienteModel.create(cliente);
    return newCliente;
  },
  deleteCliente: async (
    _: unknown,
    args: { id: string }
  ): Promise<ClienteModelType> => {
    const cliente = await ClienteModel.findByIdAndDelete(args.id);
    if (!cliente) {
      throw new GraphQLError(`No cliente found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return cliente;
  },
  addConductor: async (
    _: unknown,
    args: { name: string; email: string; username: string;}
  ): Promise<ConductorModelType> => {
    const conductor = {
      name: args.name,
      email: args.email,
      username: args.username,
    };
    const newConductor = await ConductorModel.create(conductor);
    return newConductor;
  },
  deleteConductor: async (
    _: unknown,
    args: { id: string }
  ): Promise<ConductorModelType> => {
    const conductor = await ConductorModel.findByIdAndDelete(args.id);
    if (!conductor) {
      throw new GraphQLError(`No conductor found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return conductor;
  },
  addViaje: async (
    _: unknown,
    args: { money: number; distance: number; date: string;}
  ): Promise<ViajeModelType> => {
    const viaje = {
      money: args.money,
      distance: args.distance,
      date: args.date,
    };
    const newViaje = await ViajeModel.create(viaje);
    return newViaje;
  },
  deleteViaje: async (
    _: unknown,
    args: { id: string }
  ): Promise<ViajeModelType> => {
    const viaje = await ViajeModel.findByIdAndDelete(args.id);
    if (!viaje) {
      throw new GraphQLError(`No viaje found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return viaje;
  },
  agregarTarjetaACliente: async (
    _: unknown,
    args: { clienteId: string; tarjetaId: string }
  ): Promise<ClienteModelType> => {
    try {
      const cliente = await ClienteModel.findById(args.clienteId);
      if (!cliente) {
        throw new GraphQLError(`No se encontró un cliente con ID ${args.clienteId}`, {
          extensions: { code: "NOT_FOUND" },
        });
      }

      const tarjeta = await TarjetaModel.findById(args.tarjetaId);
      if (!tarjeta) {
        throw new GraphQLError(`No se encontró una tarjeta con ID ${args.tarjetaId}`, {
          extensions: { code: "NOT_FOUND" },
        });
      }
      cliente.cards.push(tarjeta);
      await cliente.save();
      return cliente;
    } catch (error) {
      throw new GraphQLError(error.message, {
        extensions: { code: "INTERNAL_SERVER_ERROR" },
      });
    }
  },  
marcarViajeComoTerminado: async (
    _: unknown,
    args: { viajeId: string }
  ): Promise<ViajeModelType> => {
    try {
      const viaje = await ViajeModel.findByIdAndUpdate(
        args.viajeId,
        { status: "Terminado" },
        { new: true }
      );

      if (!viaje) {
        throw new GraphQLError(`No se encontró un viaje con ID ${args.viajeId}`, {
          extensions: { code: "NOT_FOUND" },
        });
      }

      return viaje;
    } catch (error) {
      throw new GraphQLError(error.message, {
        extensions: { code: "INTERNAL_SERVER_ERROR" },
      });
    }
  },
  
};