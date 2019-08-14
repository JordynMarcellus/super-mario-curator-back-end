import { users } from "./query/users";
import { signUpUser } from "./mutation/signUpUser.js";

export const rootResolver = {
  Query: {
    users,
  },
  Mutation: {
    signUpUser,
  },
};
