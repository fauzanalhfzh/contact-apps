"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const contactSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(11),
});

export async function saveContact(prevState: any, formData: FormData) {
  const validateFields = contactSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!validateFields.success) {
    return {
        Error: validateFields.error.flatten().fieldErrors
    }
  }
  try {
    await prisma.contact.create({
        data: {
            name: validateFields.data.name,
            phone: validateFields.data.phone
        }
    })
  } catch (error) {
    return {message: "Failed to create contact"}
  }
  revalidatePath("/contacts")
  redirect("/contacts")
}