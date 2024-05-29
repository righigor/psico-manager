import { prisma } from "../../src/lib/prisma";

export async function patientsSeed() {
  await prisma.patients.create({
    data: {
      clinicId: 1,
      name: "Lucas Mendes",
      email: "mendes@email.com",
      phoneNumber: "123456789",
      address: "Rua 1",
      birthDate: "1999-11-17T00:00:00.000Z",
      diagnosis: "Completamente maluco!!",
    }
  });
};  