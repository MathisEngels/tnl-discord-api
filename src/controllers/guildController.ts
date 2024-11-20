import { FastifyReply, FastifyRequest } from "fastify";
import { CreateGuildInput, ServerIdParams, RemoveGuildInput, UpdateGuildBody } from "../schema/guildSchemas";
import guildService from "../services/guildService";
import { IdParams } from "../schema/commonSchemas";
import { DiscordIdParams } from "../schema/playerSchemas";

export async function getGuildsByServerId(req: FastifyRequest<{ Params: ServerIdParams }>, reply: FastifyReply) {
  try {
    const guild = await guildService.getByServerId(req.params);

    return reply.send(guild);
  } catch (error) {
    reply.status(500).send({ error: "Failed to fetch guild" });
  }
}

export async function getGuildsByDiscordId(req: FastifyRequest<{ Params: DiscordIdParams }>, reply: FastifyReply) {
  try {
    const guild = await guildService.getByDiscordId(req.params);

    return reply.send(guild);
  } catch (error) {
    reply.status(500).send({ error: "Failed to fetch guild" });
  }
}

export async function getGuildWithSauroll(_: FastifyRequest, reply: FastifyReply) {
  try {
    const guild = await guildService.getWithSauroll();

    return reply.send(guild);
  } catch (error) {
    reply.status(500).send({ error: "Failed to fetch guild" });
  }
}

export async function createGuild(req: FastifyRequest<{ Body: CreateGuildInput }>, reply: FastifyReply) {
  try {
    await guildService.create(req.body);

    return reply.status(201).send();
  } catch (error) {
    console.log(error);
    reply.status(500).send({ error: "Failed to create guild" });
  }
}

export async function updateGuild(req: FastifyRequest<{ Params: IdParams; Body: UpdateGuildBody }>, reply: FastifyReply) {
  try {
    const guild = await guildService.update({ ...req.params, ...req.body });

    return reply.status(201).send(guild);
  } catch (error) {
    reply.status(500).send({ error: "Failed to update guild" });
  }
}

export async function deleteGuild(req: FastifyRequest<{ Body: RemoveGuildInput }>, reply: FastifyReply) {
  try {
    await guildService.remove(req.body);

    return reply.status(204).send();
  } catch (error) {
    reply.status(500).send({ error: "Failed to delete guild" });
  }
}
