import { prisma } from "../lib/prisma";

export default class ClinicsModel {
  async createClinic(data: { name: string, description: string }) {
    const result = await prisma.clinics.create({
      data,
    });

    return { data: result }
  };

  async getAllClinics() {
    const result = await prisma.clinics.findMany();

    return { data: result }
  };

  async getClinicById(clinicId: number) {
    const result = await prisma.clinics.findUnique({
      where: {
        id: clinicId
      },
    });

    return { data: result }
  };

  async updateClinic(id: number, data: { name: string, description: string }) {
    const result = await prisma.clinics.update({
      where: {
        id,
      },
      data,
    });

    return { data: result }
  };

  async deleteClinic(id: number) {
    const result = await prisma.clinics.delete({
      where: {
        id,
      },
    });

    return { data: result }
  };
}