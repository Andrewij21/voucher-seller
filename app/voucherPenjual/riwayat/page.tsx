import { FolderX, Search } from "lucide-react";
import DrawerMenu from "../_components/DrawerMenu";

export default function page() {
  return (
    <div className="py-4 space-y-4">
      <form action="">
        <div className="flex gap-x-2 w-full rounded-lg px-4 py-2 bg-slate-400/10 border border-gray-500">
          <Search className="text-slate-500 h-6 w-6" />
          <input
            type="text"
            name="search"
            placeholder="Cari Nama/Kode Voucher"
            autoComplete="off"
            className="outline-none border-none bg-transparent  text-slate-500"
          />
        </div>
      </form>
      <div>
        <DrawerMenu />
      </div>
      <div className="min-h-[600px] bg-gray-100 flex justify-center items-center">
        <div className="text-center">
          <FolderX className="w-28 h-28 mx-auto" />
          <h3 className="font-semibold capitalize text-muted-foreground">
            Belum ada riwayat voucher
          </h3>
          <p className="capitalize text-muted-foreground">
            Buat voucher sekarang!
          </p>
        </div>
      </div>
    </div>
  );
}
