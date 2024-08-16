import { Pantry } from "@prisma/client";

export default function PantryItem(item: Pantry) {
  return (
    <div className="flex flex-col relative rounded-2xl min-w-full w-full sm:min-w-80 sm:w-80 bg-[#ffffff] shadow-xl">
      <figure className="flex justify-center items-center rounded-2xl">
        <img
          src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png"
          alt="Card Preview"
          className="rounded-t-2xl"
        />
      </figure>
          <div className="flex absolute w-10 h-10 justify-center items-center top-0 right-0 rounded-full p-1 bg-lime-600">
            {item.quantity}
          </div>
      <div className="flex flex-col p-8">
        <div className="text-2xl font-bold   text-[#374151] pb-6">
          {item.name}
        </div>
        <div className=" text-lg   text-[#374151]">
          Best before:{" "}
          {item.expiration.toLocaleString("en-GB", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        <div className="flex justify-between pt-6">
          <button className="bg-red-600 text-[#ffffff]  font-bold text-base  p-3 rounded-lg hover:bg-red-800 active:scale-95 transition-transform transform">
            Delete
          </button>
          <button className="bg-[#7e22ce] text-[#ffffff]  font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
