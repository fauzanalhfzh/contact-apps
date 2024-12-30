import {prisma} from "@/lib/prisma"

export async function getContacts () {
    try {
        const contacts = await prisma.contact.findMany()
        return contacts
    } catch (error) {
        throw new Error("Failed to fetching data")
    }
}