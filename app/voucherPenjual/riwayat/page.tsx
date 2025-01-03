"use client";
// import { FolderX } from "lucide-react";
import { useState } from "react";
import Header from "./_components/Header";
import VoucherCardLists from "./_components/VoucherCardLists";
import { dummyVouchers } from "@/app/_Data";
import DrawerMenu from "../_components/DrawerMenu";
import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterCriteria, setFilterCriteria] = useState({
    status: "",
    jenisVoucher: "",
    targetVoucher: "",
    produk: "",
  });

  // Filter vouchers berdasarkan query pencarian
  const filteredVouchers = dummyVouchers.filter((voucher) => {
    const matchesSearch = voucher.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus =
      !filterCriteria.status || voucher.status === filterCriteria.status;
    const matchesJenisVoucher =
      !filterCriteria.jenisVoucher ||
      voucher.type === filterCriteria.jenisVoucher;
    const matchesTargetVoucher =
      !filterCriteria.targetVoucher ||
      voucher.targetVoucher === filterCriteria.targetVoucher;
    const matchesProduk =
      !filterCriteria.produk || voucher.targetProduct === filterCriteria.produk;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesJenisVoucher &&
      matchesTargetVoucher &&
      matchesProduk
    );
  });
  const resetFilter = () => {
    setFilterCriteria({
      status: "",
      jenisVoucher: "",
      targetVoucher: "",
      produk: "",
    });
  };
  return (
    <div className="py-4 space-y-4 z-10">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div>
        <DrawerMenu
          initialFilter={filterCriteria}
          onSaveFilter={(newFilter) => setFilterCriteria(newFilter)}
        />
      </div>
      <div className="min-h-[600px] bg-gray-100 flex flex-col">
        {filteredVouchers.length > 0 ? (
          <VoucherCardLists vouchers={filteredVouchers} />
        ) : (
          <div className="text-center min-h-screen flex flex-col items-center justify-center">
            <SearchX className="h-12 w-12" />
            <h3 className="font-semibold capitalize text-muted-foreground">
              Data tidak Ditemukan. Mohon coba hapus beberapa filter.
            </h3>
            <h3 className="font-semibold capitalize text-muted-foreground">
              atau
            </h3>
            <Button
              onClick={resetFilter}
              className="bg-blue-500 text-white capitalize font-semibold rounded-full hover:bg-blue-600"
            >
              Atur ulang filter
            </Button>
          </div>
        )}

        {/* <div className="text-center">
        <FolderX className="w-28 h-28 mx-auto" />
        <h3 className="font-semibold capitalize text-muted-foreground">
          Belum ada voucher yang aktif
        </h3>
        <p className="capitalize text-muted-foreground">
          Buat voucher sekarang!
        </p>
      </div> */}
      </div>
    </div>
  );
}

{
  /* <div className="min-h-[600px] bg-gray-100 flex justify-center items-center">
  <div className="text-center">
    <FolderX className="w-28 h-28 mx-auto" />
    <h3 className="font-semibold capitalize text-muted-foreground">
      Belum ada riwayat voucher
    </h3>
    <p className="capitalize text-muted-foreground">
      Buat voucher sekarang!
    </p>
  </div>
</div> */
}
