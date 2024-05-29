import { prisma } from "../../src/lib/prisma";

export async function clinicsSeed() {
  await prisma.clinics.create({
    data: {
      name: "Clinic 1",
      description: "Description 1",
    },
  });
}