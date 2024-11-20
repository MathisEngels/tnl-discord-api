import Fastify from "fastify";
import { registerRoutes } from "./routes";
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";

const app = Fastify({ logger: true });

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

registerRoutes(app);

export default app.withTypeProvider<ZodTypeProvider>();
