"use client";
import { Button } from "@/components/ui/button";

export default function InformasiVoucher({ next }: { next: () => void }) {
  return (
    <div>
      <Button
        onClick={next}
        className="rounded-full bg-blue-500 text-white w-full hover:bg-blue-700"
      >
        Selanjutnya
      </Button>
    </div>
  );
}
