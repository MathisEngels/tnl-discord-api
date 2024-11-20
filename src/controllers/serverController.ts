import { FastifyReply, FastifyRequest } from "fastify";
import serverService from "../services/serverService";
import { CreateServerInput, RegionIdParams, RemoveServerInput } from "../schema/serverSchemas";
import { IdParams } from "../schema/commonSchemas";

export async function getServerByRegionId(req: FastifyRequest<{ Params: RegionIdParams }>, reply: FastifyReply) {
  try {
    const servers = await serverService.getByRegion(req.params);

    return reply.send(servers);
  } catch (error) {
    reply.status(500).send({ error: "Failed to get servers" });
  }
}

export async function createServer(req: FastifyRequest<{ Body: CreateServerInput }>, reply: FastifyReply) {
  try {
    const region = await serverService.create(req.body);

    return reply.status(201).send(region);
  } catch (error) {
    reply.status(500).send({ error: "Failed to create server" });
  }
}

export async function removeServer(req: FastifyRequest<{ Params: IdParams }>, reply: FastifyReply) {
  try {
    await serverService.remove(req.params);

    return reply.status(204).send();
  } catch (error) {
    reply.status(500).send({ error: "Failed to delete server" });
  }
}
