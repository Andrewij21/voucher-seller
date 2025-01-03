"use client";
import { toast } from "sonner";
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
import { ReactNode } from "react";
import { Check, X } from "lucide-react";

interface ConfirmModalProps {
  children: ReactNode; // Menggunakan ReactNode untuk tipe children
}

export default function ConfirmModal({ children }: ConfirmModalProps) {
  const submitHandler = () => {
    return toast("Berhasil Mengakhiri Voucher", {
      position: "bottom-center",
      className: "border-green-400 bg-green-100 mb-24",
      actionButtonStyle: { backgroundColor: "transparent", color: "gray" },
      action: {
        label: <X className="h-4 w-4 bg-transparent" />,
        onClick(event) {
          return event.cancelable;
        },
      },
      icon: <Check className="text-green-400" />,
    });
  };
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader className="items-center">
          <DialogTitle>Akhiri Voucher</DialogTitle>
        </DialogHeader>
        <p className="font-medium text-sm text-center">
          Apakah kamu yakin mengakhiri Voucher Kemerdekaan Indonesia ?
        </p>
        <DialogFooter className="flex gap-x-2 flex-row">
          <DialogClose className="w-1/2" asChild>
            <Button className="bg-white text-blue-500  border-blue-500 border hover:bg-slate-200 rounded-full">
              Batal
            </Button>
          </DialogClose>
          <DialogClose className="w-1/2" asChild>
            <Button
              className="rounded-full bg-blue-500 text-white  hover:bg-blue-700"
              onClick={submitHandler}
            >
              Ya
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
