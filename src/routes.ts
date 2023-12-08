import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify"
import { createCustormerControler } from "./controllers/createCustormerControler"



export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.post("/form", async (request: FastifyRequest, reply: FastifyReply) => {
        return new createCustormerControler().handle(request, reply)
    })

}