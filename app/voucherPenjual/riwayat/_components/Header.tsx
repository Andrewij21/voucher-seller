import { Search } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
interface HeaderProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}
export default function Header({ searchQuery, setSearchQuery }: HeaderProps) {
  return (
    <>
      <form action="">
        <div className="flex gap-x-2 w-full rounded-lg px-4 py-2 bg-slate-400/10 border border-gray-500">
          <Search className="text-slate-500 h-6 w-6" />
          <input
            type="text"
            name="search"
            placeholder="Cari Nama/Kode Voucher"
            autoComplete="off"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update quer
            className="outline-none border-none bg-transparent  text-slate-500"
          />
        </div>
      </form>
    </>
  );
}
