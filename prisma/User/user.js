import prisma from "./prisma";

export const createUser = async (email, name, hash) => {
  const user = await prisma.user.create({
    data: {
      name,
      email,
      hash,
    },
  });
  return user;
};
