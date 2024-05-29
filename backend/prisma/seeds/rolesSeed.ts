import { prisma } from "../../src/lib/prisma";

export async function rolesSeed() {
  await prisma.roles.create({
    data: {
      name: "Admin",
    },
  });

  await prisma.roles.create({
    data: {
      name: "Psychologist",
    },
  });
};