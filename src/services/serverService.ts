import { IdParams, idParamsSchema } from "./../schema/commonSchemas";
import { CreateServerInput, RegionIdParams, RemoveServerInput } from "../schema/serverSchemas";
import prisma from "../utils/prisma";

async function getByRegion(input: RegionIdParams) {
  const servers = await prisma.server.findMany({
    where: { regionId: input.regionId },
  });

  return servers;
}

async function create(input: CreateServerInput) {
  const server = await prisma.server.create({
    data: { ...input },
  });

  return server;
}

async function remove(input: IdParams) {
  const server = await prisma.server.delete({
    where: input,
  });

  return server;
}

export default {
  getByRegion,
  create,
  remove,
};
