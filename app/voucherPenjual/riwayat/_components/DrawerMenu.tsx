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
interface DrawerMenuProps {
  initialFilter: {
    status: string;
    jenisVoucher: string;
    targetVoucher: string;
    produk: string;
  };
  onSaveFilter: (filter: {
    status: string;
    jenisVoucher: string;
    targetVoucher: string;
    produk: string;
  }) => void;
}

export default function DrawerMenu({
  initialFilter,
  onSaveFilter,
}: DrawerMenuProps) {
  // State untuk menyimpan pilihan
  const [selected, setSelected] = useState(initialFilter);

  // Fungsi untuk menangani perubahan pilihan
  const handleSelect = (category: string, value: string) => {
    setSelected((prev) => ({
      ...prev,
      [category]: value,
    }));
  };
  const handleSave = () => {
    onSaveFilter(selected); // Kirim filter ke parent
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary">
          Filters <SlidersHorizontal />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-w-screen-sm mx-auto min-h-[500px]">
        <DrawerHeader className="space-y-4">
          {/* Status */}
          <div className="space-y-2 text-left">
            <DrawerTitle>Status</DrawerTitle>
            <div className="flex gap-x-2">
              <Button
                variant={
                  selected.status === "aktif" ? "type1" : "secondaryRounded"
                }
                onClick={() => handleSelect("status", "aktif")}
              >
                Aktif
              </Button>
              <Button
                variant={
                  selected.status === "akan datang"
                    ? "type1"
                    : "secondaryRounded"
                }
                onClick={() => handleSelect("status", "akan datang")}
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
                  selected.jenisVoucher === "diskon"
                    ? "type1"
                    : "secondaryRounded"
                }
                onClick={() => handleSelect("jenisVoucher", "diskon")}
              >
                Diskon
              </Button>
              <Button
                variant={
                  selected.jenisVoucher === "biaya pengiriman"
                    ? "type1"
                    : "secondaryRounded"
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
                  selected.targetVoucher === "Publik"
                    ? "type1"
                    : "secondaryRounded"
                }
                onClick={() => handleSelect("targetVoucher", "Publik")}
              >
                Publik
              </Button>
              <Button
                variant={
                  selected.targetVoucher === "Terbatas"
                    ? "type1"
                    : "secondaryRounded"
                }
                onClick={() => handleSelect("targetVoucher", "Terbatas")}
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
                  selected.produk === "Semua Produk"
                    ? "type1"
                    : "secondaryRounded"
                }
                onClick={() => handleSelect("produk", "Semua Produk")}
              >
                Semua Produk
              </Button>
              <Button
                variant={
                  selected.produk === "Produk Tertentu"
                    ? "type1"
                    : "secondaryRounded"
                }
                onClick={() => handleSelect("produk", "Produk Tertentu")}
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
          <DrawerClose asChild>
            <Button
              className="rounded-xl bg-blue-500 text-white w-full hover:bg-blue-700"
              onClick={handleSave}
            >
              Simpan
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
