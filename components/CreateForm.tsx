"use client"

import { saveContact } from "@/lib/actions";
import { useFormState } from "react-dom";

export default function CreateForm() {
  const [state, formAction] = useFormState(saveContact, null);

  return (
    <>
      <form action={formAction}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-900"
          >
            Nama Lengkap
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Nama Lengkap..."
          />
          <div
            id="name-error"
            className="mt-2 text-sm text-red-500"
            aria-live="polite"
            aria-atomic="true"
          >
            {state?.Error?.name}
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-900"
          >
            Nomor WhatsApp
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Nomor WhatsApp"
          />
          <div
            id="phone-error"
            className="mt-2 text-sm text-red-500"
            aria-live="polite"
            aria-atomic="true"
          >
            {state?.Error?.phone}
          </div>
          <div
            id="message-error"
            className="mt-2 text-sm text-red-500"
            aria-live="polite"
            aria-atomic="true"
          >
            {state?.message}
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center"
        >
          Submit
        </button>
      </form>
    </>
  );
}
