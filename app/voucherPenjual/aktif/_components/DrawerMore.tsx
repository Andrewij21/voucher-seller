"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { EllipsisVertical, X } from "lucide-react";
import ConfirmModal from "../../_components/ConfirmModal";
import { useState } from "react";
import DrawerMenuUbahKuota from "../../_components/DrawerMenuUbahKuota";
import Link from "next/link";

export default function DrawerMore() {
  const [isModalAkhiriOpen, setIsModalAkhiriOpen] = useState(false);
  const [isModalKuotaOpen, setIsModalKuotaOpen] = useState(false);
  return (
    <>
      <Drawer>
        <DrawerTrigger>
          <EllipsisVertical className="h-6 w-6" />
        </DrawerTrigger>
        <DrawerContent className="max-w-screen-sm mx-auto min-h-3.5">
          <DrawerHeader className="text-center relative">
            <DrawerTitle className="text-center">Atur</DrawerTitle>
            <DrawerClose asChild className="absolute left-4">
              {/* <Button variant="ghost" className="p-0"> */}
              <X className="h-8 w-8 text-blue-500 cursor-pointer" />
              {/* </Button> */}
            </DrawerClose>
          </DrawerHeader>
          <div className="p-4 space-y-4">
            <div>
              <DrawerClose asChild>
                <Link href="/voucherPenjual/detail">
                  <h3 className="capitalize font-semibold">Detail</h3>
                </Link>
              </DrawerClose>
              <Separator className="" />
            </div>
            <div>
              <DrawerClose>
                <h3
                  className="capitalize font-semibold"
                  onClick={() => {
                    setIsModalKuotaOpen(true); // Membuka modal
                  }}
                >
                  Ubah Kuota
                </h3>
                <Separator className="" />
              </DrawerClose>
            </div>
            <div>
              <h3 className="capitalize font-semibold">Salin</h3>
              <Separator className="" />
            </div>
            <div>
              <DrawerClose>
                <h3
                  className="capitalize font-semibold"
                  onClick={() => {
                    setIsModalAkhiriOpen(true); // Membuka modal
                  }}
                >
                  Akhiri
                </h3>
                <Separator className="" />
              </DrawerClose>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
      <DrawerMenuUbahKuota
        open={isModalKuotaOpen}
        onOpenChange={setIsModalKuotaOpen}
      />
      <ConfirmModal
        open={isModalAkhiriOpen}
        onOpenChange={setIsModalAkhiriOpen}
      />
    </>
  );
}
