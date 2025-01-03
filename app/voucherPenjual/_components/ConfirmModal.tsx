import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { ReactNode } from "react";

interface ConfirmModalProps {
  children: ReactNode; // Menggunakan ReactNode untuk tipe children
}

export default function ConfirmModal({ children }: ConfirmModalProps) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader className="items-center">
          <DialogTitle>Keluar Halaman Ini?</DialogTitle>
        </DialogHeader>
        <p className="font-medium text-sm text-center">
          Data voucher tidak akan tersimpan sebelum kamu klik Simpan
        </p>
        <DialogFooter className="flex gap-x-2 w-full">
          <DialogClose className="w-full">
            <Button
              className="bg-white text-blue-500 w-full border-blue-500 border hover:bg-slate-200 rounded-full "
              asChild
            >
              <Link href="/">Ya keluar</Link>
            </Button>
          </DialogClose>
          <DialogClose className="w-full">
            <Button className="rounded-xl bg-blue-500 text-white w-full hover:bg-blue-700">
              Batal
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
