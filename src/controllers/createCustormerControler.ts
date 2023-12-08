import { FastifyRequest, FastifyReply } from "fastify"
import { createdCustomerService } from "../services/createdCustomerService"

class createCustormerControler {
    async handle(request: FastifyRequest, reply: FastifyReply) {

        const { name, email, fone, subject, message } = request.body as { name: string, email: string, fone: string, subject: string, message: string }

        const customerServie = new createdCustomerService()
        const customer = await customerServie.execute({ name, email, fone, subject, message })

        reply.send(customer)
    }
}

export { createCustormerControler }