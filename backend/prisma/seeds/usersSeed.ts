import { prisma } from "../../src/lib/prisma";

export async function usersSeed() {
  await prisma.users.create({
    data: {
      clinicId: 1,
      roleId: 1,
      name: "Igor Righi",
      email: "igor@email.com",
      password: "123456",
    }
  });

  await prisma.users.create({
    data: {
      clinicId: 1,
      roleId: 2,
      name: "Ceci Trindade",
      email: "ceci@email.com",
      password: "123456",
    }
  });
};