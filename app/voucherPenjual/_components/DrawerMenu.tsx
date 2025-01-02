"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { SlidersHorizontal } from "lucide-react";

export default function DrawerMenu() {
  // State untuk menyimpan pilihan
  const [selected, setSelected] = useState({
    status: "Aktif",
    jenisVoucher: "diskon",
    targetVoucher: "publik",
    produk: "semua produk",
  });

  // Fungsi untuk menangani perubahan pilihan
  const handleSelect = (category: string, value: string) => {
    setSelected((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary">
          Filters <SlidersHorizontal />
        </Button>
      </DrawerTrigger>
      <DrawerContent
        aria-hidden="false"
        className="max-w-screen-sm mx-auto min-h-[500px]"
      >
        <DrawerHeader className="space-y-4">
          {/* Status */}
          <div className="space-y-2 text-left">
            <DrawerTitle>Status</DrawerTitle>
            <div className="flex gap-x-2">
              <Button
                variant={selected.status === "Aktif" ? "default" : "secondary"}
                onClick={() => handleSelect("status", "Aktif")}
              >
                Aktif
              </Button>
              <Button
                variant={
                  selected.status === "Akan Datang" ? "default" : "secondary"
                }
                onClick={() => handleSelect("status", "Akan Datang")}
              >
                Akan Datang
              </Button>
            </div>
            <Separator />
          </div>

          {/* Jenis Voucher */}
          <div className="space-y-2 text-left">
            <DrawerTitle>Jenis Voucher</DrawerTitle>
            <div className="flex gap-x-2">
              <Button
                variant={
                  selected.jenisVoucher === "diskon" ? "default" : "secondary"
                }
                onClick={() => handleSelect("jenisVoucher", "diskon")}
              >
                Diskon
              </Button>
              <Button
                variant={
                  selected.jenisVoucher === "biaya pengiriman"
                    ? "default"
                    : "secondary"
                }
                onClick={() => handleSelect("jenisVoucher", "biaya pengiriman")}
              >
                Biaya Pengiriman
              </Button>
            </div>
            <Separator />
          </div>

          {/* Target Voucher */}
          <div className="space-y-2 text-left">
            <DrawerTitle>Target Voucher</DrawerTitle>
            <div className="flex gap-x-2">
              <Button
                variant={
                  selected.targetVoucher === "publik" ? "default" : "secondary"
                }
                onClick={() => handleSelect("targetVoucher", "publik")}
              >
                Publik
              </Button>
              <Button
                variant={
                  selected.targetVoucher === "terbatas"
                    ? "default"
                    : "secondary"
                }
                onClick={() => handleSelect("targetVoucher", "terbatas")}
              >
                Terbatas
              </Button>
            </div>
            <Separator />
          </div>

          {/* Produk */}
          <div className="space-y-2 text-left">
            <DrawerTitle>Produk</DrawerTitle>
            <div className="flex gap-x-2">
              <Button
                variant={
                  selected.produk === "semua produk" ? "default" : "secondary"
                }
                onClick={() => handleSelect("produk", "semua produk")}
              >
                Semua Produk
              </Button>
              <Button
                variant={
                  selected.produk === "produk tertentu"
                    ? "default"
                    : "secondary"
                }
                onClick={() => handleSelect("produk", "produk tertentu")}
              >
                Produk Tertentu
              </Button>
            </div>
            <Separator />
          </div>
        </DrawerHeader>

        <DrawerFooter className="flex-row flex justify-center w-full">
          <DrawerClose asChild>
            <Button
              className="rounded-xl text-blue-500 border-blue-500 w-full hover:text-blue-500"
              variant="outline"
            >
              Batal
            </Button>
          </DrawerClose>
          <Button className="rounded-xl bg-blue-500 text-white w-full hover:bg-blue-700">
            Simpan
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
