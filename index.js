import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./generated/prisma-client";
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// productionize this by pulling directly from env; temp stop-gap
dotenv.config();

const resolvers = {
  Query: {
    users(root, { email }, context) {
      return context.prisma.users();
    },
  },
  Mutation: {
    async signUpUser(root, { email, password, name }, context) {
      const massagedEmail = email.toLowerCase();
      const hashedPass = await bcrypt.hash(password, 10);

      const createdUser = await context.prisma.createUser({
        name,
        email: massagedEmail,
        password: hashedPass,
        permissions: { set: ["USER"] },
      });
      const token = jwt.sign(
        { userId: createdUser.id },
        process.env.JWT_SECRET
      );
      console.log(token);

      // hey if soemthing fails in here we need to delete the user :D !

      // this isn't working but that's ok...
      context.response.cookie("token", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 30,
      });
      return createdUser;
    },
  },
};

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
