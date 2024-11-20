import { FastifyReply, FastifyRequest } from "fastify";
import {
  CreatePlayerInput,
  DiscordIdParams,
  GuildIdParams,
  PlayerFilters,
  UpdatePlayerBody,
  UpdatePlayerDKPBody,
} from "../schema/playerSchemas";
import playerService from "../services/playerService";
import { IdParams } from "../schema/commonSchemas";
import { ServerIdParams } from "../schema/guildSchemas";

export async function getPlayerById(req: FastifyRequest<{ Params: IdParams }>, reply: FastifyReply) {
  try {
    const player = await playerService.getById(req.params);

    return reply.send(player);
  } catch (error) {
    reply.status(500).send({ error: "Failed to fetch player" });
  }
}

export async function getPlayerByDiscordId(req: FastifyRequest<{ Params: DiscordIdParams }>, reply: FastifyReply) {
  try {
    const player = await playerService.getByDiscordId(req.params);
    console.log(req.params, player)

    return reply.send(player);
  } catch (error) {
    reply.status(500).send({ error: "Failed to fetch player" });
  }
}

export async function getPlayersByServerId(req: FastifyRequest<{ Params: ServerIdParams; Querystring: PlayerFilters }>, reply: FastifyReply) {
  try {
    const players = await playerService.getByServerId(req.params, req.query);

    return reply.send(players);
  } catch (error) {
    reply.status(500).send({ error: "Failed to fetch players" });
  }
}

export async function getPlayersByGuildId(req: FastifyRequest<{ Params: GuildIdParams; Querystring: PlayerFilters }>, reply: FastifyReply) {
  try {
    const players = await playerService.getByGuildId(req.params, req.query);

    return reply.send(players);
  } catch (error) {
    reply.status(500).send({ error: "Failed to fetch players" });
  }
}

export async function createPlayer(req: FastifyRequest<{ Body: CreatePlayerInput }>, reply: FastifyReply) {
  try {
    const user = await playerService.create(req.body);

    return reply.status(201).send(user);
  } catch (error) {
    reply.status(500).send({ error: "Failed to create player" });
  }
}

export async function updatePlayer(req: FastifyRequest<{ Params: DiscordIdParams; Body: UpdatePlayerBody }>, reply: FastifyReply) {
  try {
    const user = await playerService.update({ ...req.params, ...req.body });

    return reply.status(201).send(user);
  } catch (error) {
    reply.status(500).send({ error: "Failed to update player" });
  }
}

export async function updatePlayerDKP(req: FastifyRequest<{ Params: DiscordIdParams; Body: UpdatePlayerDKPBody }>, reply: FastifyReply) {
  try {
    const input = { ...req.params, ...req.body };

    let user;
    if (input.dkp < 0) {
      user = await playerService.removeDKP(input);
    } else {
      user = await playerService.addDKP(input);
    }

    return reply.status(201).send(user);
  } catch (error) {
    reply.status(500).send({ error: "Failed to update DKP" });
  }
}
