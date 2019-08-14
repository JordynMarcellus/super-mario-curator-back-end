import { GraphQLServer } from "graphql-yoga";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import { prisma } from "./generated/prisma-client";
import { rootResolver } from "./resolvers/rootResolver";

// productionize this by pulling directly from env; temp stop-gap
dotenv.config();

const resolvers = rootResolver;

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers,
  context: req => ({
    ...req,
    prisma,
  }),
});

server.express.use(cookieParser());

server
  .start(details => console.log(`running on ${details.port}`))
  .catch(e => console.error(e));
