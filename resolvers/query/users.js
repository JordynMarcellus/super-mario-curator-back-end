export const users = async (root, { email }, context) => {
  const users = await context.prisma.users();
  return users;
};
