import ClinicsModel from "../models/clinicsModel";

export default class ClinicsService {
  clinicsModel = new ClinicsModel();

  createClinic = async (dataBody: { name: string, description: string }) => {
    const { data } = await this.clinicsModel.createClinic(dataBody);

    if (!data) {
      return { status: 'BAD_REQUEST', data: { message: 'Erro ao criar Clínica.' } };
    }

    return { status: 'CREATED', data: data };
  };

  getAllClinics = async () => {
    const { data } = await this.clinicsModel.getAllClinics();

    if (!data) {
      return { status: 'BAD_REQUEST', data: { message: 'Erro ao buscar Clínicas.' } };
    }

    return { status: 'OK', data: data };
  };

  getClinicById = async (id: number) => {
    const { data } = await this.clinicsModel.getClinicById(id);

    if (!data) {
      return { status: 'NOT_FOUND', data: { message: 'Clínica não encontrada.' } };
    }

    return { status: 'OK', data: data };
  };

  updateClinic = async (id: number, dataBody: { name: string, description: string }) => {
    const { data } = await this.clinicsModel.updateClinic(id, dataBody);

    if (!data) {
      return { status: 'BAD_REQUEST', data: { message: 'Erro ao atualizar Clínica.' } };
    }

    return { status: 'OK', data: data };
  };

  deleteClinic = async (id: number) => {
    const { data } = await this.clinicsModel.deleteClinic(id);

    if (!data) {
      return { status: 'BAD_REQUEST', data: { message: 'Erro ao deletar Clínica.' } };
    }

    return { status: 'NO_CONTENT' };
  };
}