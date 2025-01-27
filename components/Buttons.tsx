"use client";

import { deleteContact } from "@/lib/actions";
import clsx from "clsx";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5";

export function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  const classname = clsx(
    "text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center",
    { "opacity-50  cursor-progress": pending }
  );

  return (
    <button type="submit" className={classname} disabled={pending}>
      {label === "save" ? (
        <span>{pending ? "saving..." : "save"}</span>
      ) : (
        <span>{pending ? "updating..." : "update"}</span>
      )}
    </button>
  );
}

export function CreateButton() {
  return (
    <Link
      href={"/contacts/create"}
      className="inline-flex items-center space-x-1 text-white bg-blue-700 px-5 py-[9px] text-sm rounded-sm hover:bg-blue-800"
    >
      <IoAddSharp size={20} />
      Create
    </Link>
  );
}

export function EditButton({ id }: { id: string }) {
  return (
    <Link
      href={`/contacts/edit/${id}`}
      className="rounded-sm border p-1 hover:bg-gray-100"
    >
      <IoPencil size={20} />
    </Link>
  );
}

export function DeleteButton({ id }: { id: string }) {
  const DeleteContactWithId = deleteContact.bind(null, id);
  return (
    <form action={DeleteContactWithId}>
      <button className="rounded-sm border p-1 hover:bg-gray-100">
        <IoTrashOutline size={20} />
      </button>
    </form>
  );
}
