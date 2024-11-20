import { IdParams } from "../schema/commonSchemas";
import { RegionInput } from "../schema/regionSchemas";
import prisma from "../utils/prisma";

async function getAll() {
  const regions = await prisma.region.findMany();

  return regions;
}

async function create(input: RegionInput) {
  const region = await prisma.region.create({
    data: { ...input },
  });

  return region;
}

async function remove(input: IdParams) {
  const region = await prisma.region.delete({
    where: input,
  });

  return region;
}

export default {
  getAll,
  create,
  remove,
};
