import Link from "next/link";
import AddModal from "./components/AddModal/AddModal";
import PantryItem from "./components/PantryItem/PantryItem";
import { useSearchParams } from "next/navigation";

interface SearchParamProps {
  searchParams: Record<string, string> | null | undefined;
}

export default async function Home({ searchParams }: SearchParamProps) {
  const pantry = await prisma?.pantry.findMany();

  return (
    <main className="flex relative min-h-screen flex-col justify-between p-24">
      <div className="flex flex-row flex-wrap gap-4">
        {pantry?.map((item) => (
          <PantryItem key={item.id} {...item} />
        ))}
      </div>
      <Link href="/?addItem=true">
        <button className="flex absolute bottom-10 right-10 rounded-full w-10 h-10 items-center justify-center bg-green-500 hover:bg-green-800">
          <span className="text-2xl">+</span>
        </button>
      </Link>
      <AddModal show={Boolean(searchParams?.addItem)} />
    </main>
  );
}
