import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUpUser = async (root, { email, password, name }, context) => {
  const massagedEmail = email.toLowerCase();
  const hashedPass = await bcrypt.hash(password, 10);

  const createdUser = await context.prisma.createUser({
    name,
    email: massagedEmail,
    password: hashedPass,
    permissions: { set: ["USER"] },
  });
  const token = jwt.sign({ userId: createdUser.id }, process.env.JWT_SECRET);

  // hey if soemthing fails in here we need to delete the user :D !
  context.response.cookie("token", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 30,
  });
  return createdUser;
};
