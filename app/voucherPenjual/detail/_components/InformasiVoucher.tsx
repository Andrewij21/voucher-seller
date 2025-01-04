"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Info } from "lucide-react";
import { Clipboard } from "lucide-react";

const fields = [
  {
    label: "Informasi voucher",
    fields: [
      {
        label: "Peforma voucher",
        value: "2/20 kuota terpakai",
      },
      {
        label: "Periode",
        value: "15 Mar 2024 20.00 s/d 15 Mar 2024 20.00",
      },
      {
        label: "Target",
        value: "Publik",
      },
      {
        label: "status",
        value: "Aktif",
      },
    ],
  },
  {
    label: "Detail Voucher",
    fields: [
      {
        label: "Jenis Voucher",
        value: "Diskon Produk",
      },
      {
        label: "Jenis Diskon",
        value: "Rp20.000",
      },
      {
        label: "Diskon",
        value: "Rp20.000",
      },
      {
        label: "Minimum Pembelian",
        value: "Rp100.000",
      },
      {
        label: "Target",
        value: "Publik",
      },
      {
        label: "Kuota Pemakaian",
        value: "50",
      },
      {
        label: "Kuota Pemakaian per Pembeli",
        value: "10",
      },
    ],
  },
  {
    label: "Daftar Produk untuk Voucher",
    fields: [
      {
        label: "Produk Terdaftar",
        value: "Semua Produk",
      },
    ],
  },
];

export default function InformasiVoucher({ next }: { next: () => void }) {
  return (
    <div className="bg-red-800 relative">
      <div className=" min-h-20"></div>
      <Ticket
        title="voucher kemerdekaan indonesia 17 agustus 1945 indonesia indo"
        code="CLR12345678"
      />
      <div className="bg-gray-100 space-y-4">
        {/* Informasi Voucher */}
        {fields.map((item, i) => (
          <InformasiVoucherSection item={item} key={i} />
        ))}
        {/* Total pengeluaran */}
        <TotalPengeluaranSection />
        <div className="px-2">
          <Button
            onClick={next}
            className="rounded-full bg-blue-500 text-white w-full hover:bg-blue-700"
          >
            Selanjutnya
          </Button>
        </div>
      </div>
    </div>
  );
}

interface InformasiVoucherSectionProps {
  label: string;
  fields: {
    label: string;
    value: string;
  }[];
}

function InformasiVoucherSection({
  item,
}: {
  item: InformasiVoucherSectionProps;
}) {
  return (
    <div
      className={`space-y-2 bg-white p-4 ${
        item.label.toLowerCase() === "informasi voucher" ? "pt-16" : ""
      }`}
    >
      {/* Header content */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold">{item.label}</h3>
        <Button
          variant="link"
          className="text-blue-500 font-semibold capitalize"
        >
          Ubah
        </Button>
      </div>
      {/* content */}
      {item.fields.map((field, i) => (
        <div key={i}>
          <div className="flex items-center justify-between mb-2">
            <p className="text-muted-foreground capitalize">{field.label}</p>
            {field.label === "status" ? (
              <Badge variant="success" className="capitalize">
                {field.value}
              </Badge>
            ) : (
              <p className="font-semibold capitalize">{field.value}</p>
            )}
          </div>
          {i !== item.fields.length - 1 && <Separator className="border-2" />}
        </div>
      ))}
    </div>
  );
}

function TotalPengeluaranSection() {
  return (
    <div className="space-y-2 bg-white p-4">
      {/* Header content */}
      <div className="flex items-center justify-start mb-4 gap-x-1">
        <h3 className="font-bold">Total Pengeluaran</h3>
        <Info />
      </div>
      {/* content */}
      <div className="flex items-center justify-between mb-2 border-transparent bg-green-100 py-2 px-4 rounded-lg">
        <p className="text-primary capitalize">Dipotong dari Transaksi</p>
        <p className="font-semibold capitalize">Rp40.000</p>
      </div>
    </div>
  );
}

function Ticket({ title, code }: { title: string; code: string }) {
  return (
    <div className="flex items-center space-x-4 bg-white border rounded-md shadow-md p-4 w-full max-w-md absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {/* Icon */}
      <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 text-yellow-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 13.5l-6-3m0 0l6-3m-6 3v6.75a2.25 2.25 0 002.25 2.25h11.25m-9-9.75L21 4.5m-6.75 7.5l6.75-3m-6.75 3v6.75a2.25 2.25 0 002.25 2.25h3.75m0-6.75l-6.75 3"
          />
        </svg>
      </div>

      {/* Ticket Content */}
      <div className="flex-1">
        <h1 className="font-bold capitalize text-primary text-xl">{title}</h1>
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-blue-600 text-sm font-medium">{code}</p>
          <button
            className="p-1 rounded-md bg-transparent hover:bg-blue-200 text-blue-600"
            onClick={() => navigator.clipboard.writeText(code)}
          >
            <Clipboard className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
