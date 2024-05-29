import { FastifyInstance } from "fastify";
import ClinicsController from "../controllers/clinicsController";

const clinicsController = new ClinicsController();

async function clinicsRoutes(fastify: FastifyInstance) {
  fastify.post("/clinics", clinicsController.createClinic);
  fastify.get("/clinics", clinicsController.getAllClinics);
  fastify.get("/clinics/:id", clinicsController.getClinicById);
  fastify.put("/clinics/:id", clinicsController.updateClinic);
  fastify.delete("/clinics/:id", clinicsController.deleteClinic);
}

export default clinicsRoutes;