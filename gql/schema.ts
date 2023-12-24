// The GraphQL schema
export const typeDefs = `#graphql
  
  type  Viaje{
    client: Cliente
    driver: Conductor
    money: Int!
    distance: Int!
    date: String!
    status: String
  }

  type Conductor {
   name: String!
   email: String!
   username: String!
   travels: [Viaje!]
  }

  type Trajeta {
    number: Int!
    cvv: Int!
    expirity: String!
    money: Int
  }

  type Cliente {
    name: String!
    email: String!
    cards: [Trajeta!]
    travels: [Viaje!]
  }

  type Query {
    clientes: [Cliente!]!
    conductores: [Conductor!]!
    viajes: [Viaje!]!
  }
  type Mutation {
    addTarjeta(number: Int!, cvv: Int!, expirity: String!): Trajeta!
    deleteTarjeta(id: ID!): Trajeta!
    addCliente(name: String!, email: String!): Cliente!
    deleteCliente(id: ID!): Cliente!
    addConductor(name: String!, email: String!, username: String!): Conductor!
    deleteConductor(id: ID!): Conductor!
    addViaje(money: Int!, distance: Int!, date: String!): Viaje!
    deleteViaje(id: ID!): Viaje!
    agregarTarjetaACliente(clienteId: ID!, tarjetaId: ID!): Cliente
    marcarViajeComoTerminado(viajeId: ID!): Viaje
  }
`;