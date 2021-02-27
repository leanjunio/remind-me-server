import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

import { resolvers } from "./resolvers";
import typeDefs from "./schema";

const connString = process.env.CONNECTION_STRING ?? "mongodb://mongo:27017";

mongoose.connect(connString, { useNewUrlParser: true });

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
