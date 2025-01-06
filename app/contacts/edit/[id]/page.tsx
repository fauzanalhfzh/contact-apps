import EditForm from "@/components/EditForm";
import { getContactById } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function EditContactPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const contact = await getContactById(id);

  if (!contact) {
    notFound();
  }
  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Update Kontak</h1>
      <EditForm contact={contact} />
    </div>
  );
}
