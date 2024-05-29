import { prisma } from "../../src/lib/prisma";

export async function psychologistsSeed() {
  await prisma.psychologists.create({
    data: {
      UserId: 2,
      phoneNumber: "123456789",
      education: "Graduanda em Psicologia",
      experience: "Experiência em atendimento infantil",
      specialization: "Psicologia Infantil",
      bio: "Psicóloga infantil com experiência em atendimento de crianças com autismo.",
      address: "Rua 6",
      instagram: "https://www.instagram.com/cecitrindade/",
      sessionPrice: 150,
      licenseNumber: "123456",
      photoUrl: "none"
    }
  });
}