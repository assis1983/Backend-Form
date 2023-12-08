import prismaClient from "../prisma";

interface CreatedFormProps {
    name: string
    email: string
    fone: string
    subject: string
    message: string
}

class createdCustomerService {
    async execute({ name, email, fone, subject, message }: CreatedFormProps) {
        if (!name || !email || !fone || !subject || !message) {
            throw new Error("Preencha todos os campos")
        }

        const customer = await prismaClient.customer.create({
            data: {
                name,
                email,
                fone,
                subject,
                message
            }
        })

        return customer
    }

}

export { createdCustomerService }