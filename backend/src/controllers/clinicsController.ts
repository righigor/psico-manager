import { FastifyReply, FastifyRequest } from "fastify";
import ClinicsService from "../services/clinicsService";
import { mapHttpStatus } from "../utils/mapHttpStatus";

export default class ClinicsController {
  clinicsService = new ClinicsService();

  createClinic = async (request: FastifyRequest, reply: FastifyReply) => {
    const dataBody = request.body as { name: string, description: string };
    const { status, data } = await this.clinicsService.createClinic(dataBody);

    reply.code(mapHttpStatus(status)).send(data);
  };

  getAllClinics = async (request: FastifyRequest, reply: FastifyReply) => {
    const { status, data } = await this.clinicsService.getAllClinics();

    reply.code(mapHttpStatus(status)).send(data);
  };

  getClinicById = async (request: FastifyRequest, reply: FastifyReply) => {
    const id = request.params as { id: string };
    const { status, data } = await this.clinicsService.getClinicById(Number(id.id));

    reply.code(mapHttpStatus(status)).send(data);
  };

  updateClinic = async (request: FastifyRequest, reply: FastifyReply) => {
    const id = request.params as { id: string };
    const dataBody = request.body as { name: string, description: string };
    const { status, data } = await this.clinicsService.updateClinic(Number(id.id), dataBody);

    reply.code(mapHttpStatus(status)).send(data);
  };

  deleteClinic = async (request: FastifyRequest, reply: FastifyReply) => {
    const id = request.params as { id: string };
    const { status } = await this.clinicsService.deleteClinic(Number(id.id));

    reply.code(mapHttpStatus(status)).send();
  };
}