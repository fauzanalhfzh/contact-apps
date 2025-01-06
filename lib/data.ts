import { prisma } from "@/lib/prisma";

export async function getContacts() {
  try {
    const contacts = await prisma.contact.findMany();
    return contacts;
  } catch (error) {
    throw new Error("Failed to fetching data");
  }
}

export async function getContactById(id: string) {
  try {
    const contact = await prisma.contact.findUnique({
      where: { id },
    });
    return contact;
  } catch (error) {
    throw new Error("Failed to fetching data by id");
  }
}
