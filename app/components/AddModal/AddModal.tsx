import Link from "next/link";
import { redirect } from "next/navigation";

interface AddModalProps {
  show: boolean;
}

export default function AddModal({ show }: AddModalProps) {
  async function createItem(formData: FormData) {
    "use server";

    const body = {
      name: formData.get("item-name"),
      quantity: formData.get("quantity"),
      expiration: formData.get("expiration"),
    };

    if (body.name && body.quantity && body.expiration) {
      await prisma?.pantry.create({
        data: {
          name: body.name as string,
          quantity: Number(body.quantity),
          expiration: new Date(body.expiration as string),
        },
      });

      redirect("/");
    }
  }

  if (!show) {
    return null;
  }

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative w-full transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <form action={createItem}>
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-base font-semibold leading-6 text-gray-900 mb-4"
                      id="modal-title"
                    >
                      Add new item
                    </h3>
                    <div className="text-gray-900">
                      <div className="flex flex-row gap-4 items-center">
                        <label className="w-32" htmlFor="item-name">
                          Name
                        </label>
                        <input
                          type="text"
                          name="item-name"
                          id="item-name"
                          className="block w-full rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div className="flex flex-row gap-4 items-center">
                        <label className="w-32" htmlFor="item-name">
                          Quantity
                        </label>
                        <input
                          type="number"
                          name="quantity"
                          id="quantity"
                          className="block w-full rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div className="flex flex-row gap-4 items-center">
                        <label className="w-32" htmlFor="item-name">
                          Expiration
                        </label>
                        <input
                          type="date"
                          name="expiration"
                          id="expiration"
                          className="block w-full rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="submit"
                  className="inline-flex w-full justify-center rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 sm:ml-3 sm:w-auto"
                >
                  Add
                </button>
                <Link href="/">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
