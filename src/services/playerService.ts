import { IdParams } from "../schema/commonSchemas";
import { ServerIdParams } from "../schema/guildSchemas";
import { CreatePlayerInput, GuildIdParams, PlayerFilters, UpdatePlayerDKPInput, UpdatePlayerInput, DiscordIdParams, UpdatePlayerBody } from "../schema/playerSchemas";
import primsa from "../utils/prisma";

async function getById(input: IdParams) {
  const player = await primsa.player.findFirst({ where: { id: Number(input.id) } });

  return player;
}

async function getByDiscordId(input: DiscordIdParams) {
  const player = await primsa.player.findFirst({ where: input });

  return player;
}

async function getByServerId(input: ServerIdParams, filters?: PlayerFilters) {
  const players = await primsa.player.findMany({
    where: { ...input, ...filters },
    orderBy: { cp: "desc" },
    take: 20,
  });

  return players;
}

async function getByGuildId(input: GuildIdParams, filters?: PlayerFilters) {
  const players = await primsa.player.findMany({
    where: { ...input, ...filters },
    orderBy: { cp: "desc" },
  });

  return players;
}

async function create(input: CreatePlayerInput) {
  const { serverId, guildId, ...rest } = input;

  const data: any = {
    ...rest,
    dkp: 0,
    server: { connect: { id: serverId } },
  };

  if (guildId) data.guild = { connect: { id: guildId } };

  const user = await primsa.player.create({ data });

  return user;
}

async function update(input: UpdatePlayerInput) {
  const data: UpdatePlayerBody = {};

  if (input.cp) data.cp = input.cp;
  if (input.class) data.class = input.class;
  if (input.dkp) data.dkp = input.dkp;

  const user = await primsa.player.update({
    where: { discordId: input.discordId },
    data,
  });

  return user;
}

async function addDKP(input: UpdatePlayerDKPInput) {
  const user = await primsa.player.update({
    where: { discordId: input.discordId },
    data: { dkp: { increment: input.dkp } },
  });

  return user;
}

async function removeDKP(input: UpdatePlayerDKPInput) {
  const user = await primsa.player.update({
    where: { discordId: input.discordId },
    data: { dkp: { decrement: input.dkp } },
  });

  return user;
}

export default {
  getById,
  getByDiscordId,
  getByServerId,
  getByGuildId,
  create,
  update,
  addDKP,
  removeDKP,
};
