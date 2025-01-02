import { MessageSquare, Plus, User } from "lucide-react";
import Link from "next/link";

export default function BottomBar() {
  return (
    <section className="mt-20">
      <div className="flex justify-evenly items-center fixed bottom-0 left-0 right-0 bg-white shadow-lg px-4 py-2 z-50 mt-20">
        {/* Icon Pesan */}
        <div className="flex flex-col items-center text-muted-foreground space-y-1 w-full">
          <MessageSquare className="h-6 w-6" />
          <p className="text-sm">Pesan</p>
        </div>

        {/* Tombol Buat Voucher */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white rounded-full p-3 shadow-lg">
          <Link href="/buatVoucher">
            <Plus className="h-8 w-8" />
          </Link>
        </div>

        {/* Icon Profile */}
        <div className="flex flex-col items-center text-muted-foreground space-y-1 w-full">
          <User className="h-6 w-6" />
          <p className="text-sm">Profile</p>
        </div>
      </div>
    </section>
  );
}
