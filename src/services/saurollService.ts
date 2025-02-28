import { IdParams } from "../schema/commonSchemas";
import { CreateSaurollInput, UpdateSaurollInput } from "../schema/saurollSchema";
import prisma from "../utils/prisma";

async function getAll() {
  const saurollers = await prisma.sauroll.findMany();

  return saurollers;
}

async function getAllByGuildId(input: IdParams) {
  const sauroller = await prisma.sauroll.findMany({
    where: { discordGuildId: input.id },
  });

  return sauroller;
}

async function create(input: CreateSaurollInput) {
  const subscriber = await prisma.sauroll.create({
    data: input,
  });

  return subscriber;
}

async function update(input: UpdateSaurollInput) {
  const { id, ...rest } = input;
  const sauroll = await prisma.sauroll.update({
    where: { discordVoiceChannelId: id },
    data: rest,
  });

  return sauroll;
}

async function remove(input: IdParams) {
  const sauroller = await prisma.sauroll.delete({
    where: { discordVoiceChannelId: input.id },
  });

  return sauroller;
}

export default { getAll, getAllByGuildId, create, update, remove };
