import { prisma } from "../src/lib/prisma";
import { clinicsSeed, rolesSeed, usersSeed, patientsSeed, psychologistsSeed } from "./seeds";

async function seed() {
  await clinicsSeed();
  await rolesSeed();
  await usersSeed();
  await patientsSeed();
  await psychologistsSeed();
}

seed().then(() => {
  console.log("Seeding complete");
  prisma.$disconnect();
});