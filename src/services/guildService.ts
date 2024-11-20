import { CreateGuildInput, ServerIdParams, RemoveGuildInput, UpdateGuildInput } from "../schema/guildSchemas";
import { DiscordIdParams } from "../schema/playerSchemas";
import prisma from "../utils/prisma";

async function getByServerId(input: ServerIdParams) {
  const guild = await prisma.guild.findMany({
    where: { serverId: input.serverId },
  });

  return guild;
}

async function getByDiscordId(input: DiscordIdParams) {
  const guild = await prisma.guild.findUnique({
    where: { discordGuildId: input.discordId },
  });

  return guild;
}

async function getWithSauroll() {
  const guilds = await prisma.guild.findMany({
    where: {
      NOT: {
        discordSaurollChannelId: null,
      },
    },
    select: {
      id: true,
      discordSaurollChannelId: true,
      discordSaurollRoleId: true,
    },
  });

  return guilds;
}

async function create(input: CreateGuildInput) {
  const { serverId, ...rest } = input;

  const data: any = {
    ...rest,
    server: {
      connect: { id: serverId },
    },
  };

  await prisma.guild.create({ data });
}

async function update(input: UpdateGuildInput) {
  const { id, serverId, ...rest } = input;

  const data: any = {
    ...rest,
  };

  if (serverId) {
    data.server = {
      connect: { id: serverId },
    };
  }

  const guild = await prisma.guild.update({
    where: { id: id },
    data,
  });

  return guild;
}

async function remove(input: RemoveGuildInput) {
  const guild = await prisma.guild.delete({
    where: { id: input.id },
  });

  return guild;
}

export default { getByServerId, getByDiscordId, getWithSauroll, create, update, remove };
