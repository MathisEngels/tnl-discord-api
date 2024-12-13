import { FastifyRequest, FastifyReply } from "fastify";
import saurollService from "../services/saurollService";
import { IdParams } from "../schema/commonSchemas";
import { CreateSaurollInput, UpdateSaurollBody } from "../schema/saurollSchema";

export async function getSaurollSubscribers(_: FastifyRequest, reply: FastifyReply) {
  try {
    const subscribers = await saurollService.getAll();

    return reply.send(subscribers);
  } catch (error) {
    reply.status(500).send({ error: "Failed to get sauroll subscribers" });
  }
}

export async function getSaurollSubscriber(request: FastifyRequest<{ Params: IdParams }>, reply: FastifyReply) {
  try {
    const subscriber = await saurollService.get(request.params);

    return reply.send(subscriber);
  } catch (error) {
    reply.status(500).send({ error: "Failed to get sauroll subscriber" });
  }
}

export async function subscribeToSauroll(request: FastifyRequest<{ Body: CreateSaurollInput }>, reply: FastifyReply) {
  try {
    const guild = await saurollService.create(request.body);

    return reply.send(guild);
  } catch (error) {
    reply.status(500).send({ error: "Failed to subscribe to sauroll" });
  }
}

export async function updateSaurollSubscription(request: FastifyRequest<{ Params: IdParams; Body: UpdateSaurollBody }>, reply: FastifyReply) {
  try {
    const guild = await saurollService.update({ ...request.params, ...request.body });

    return reply.send(guild);
  } catch (error) {
    reply.status(500).send({ error: "Failed to update sauroll subscription" });
  }
}

export async function unsubscribeFromSauroll(request: FastifyRequest<{ Params: IdParams }>, reply: FastifyReply) {
  try {
    const guild = await saurollService.remove(request.params);

    return reply.send(guild);
  } catch (error) {
    reply.status(500).send({ error: "Failed to unsubscribe from sauroll" });
  }
}
