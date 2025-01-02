"use client";
import { CreateVoucherSchema } from "@/schema";
import Nav from "./_components/Nav";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { addDays, addMinutes } from "date-fns";
import First from "./_components/steps/First";
import { useState } from "react";
import Second from "./_components/steps/Second";
import Third from "./_components/steps/Third";

// const steps = [
//   {
//     fields:[]
//   }
// ]

export default function Page() {
  const now = new Date();
  const defaultStartDate = addMinutes(now, 15);
  const defaultEndDate = addDays(defaultStartDate, 30);

  const form = useForm<z.infer<typeof CreateVoucherSchema>>({
    resolver: zodResolver(CreateVoucherSchema),
    defaultValues: {
      step1: {
        nama: "",
        kode: "",
        target_produk: "publik",
        masa_berlaku_awal: defaultStartDate,
        masa_berlaku_akhir: defaultEndDate,
      },
      step2: {
        jenis_voucher: "diskon_produk",
        jenis_Diskon: "nominal",
        diskon: "",
        minimun_pembelian: "",
        kuota_pemakaian: "",
        kuota_pemakaian_per_pembeli: "",
        maksimum_diskon: { mode: "tidak_terbatas", value: "" },
      },
      step3: {
        target_produk: "semua_produk",
        gambar_produk: "",
      },
    },
  });

  const [currentStep, setCurrentStep] = useState(1);

  const next = async () => {
    const fieldsToValidate = `step${currentStep}` as keyof z.infer<
      typeof CreateVoucherSchema
    >;
    const isValid = await form.trigger(fieldsToValidate);

    if (isValid && currentStep < 3) {
      setCurrentStep((step) => step + 1);
    }
  };
  const prev = () => {
    if (currentStep > 0) setCurrentStep((step) => step - 1);
  };

  function onSubmit(values: z.infer<typeof CreateVoucherSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <section className="max-w-screen-sm min-h-screen mx-auto">
      <Nav />
      <div className="px-2 py-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {currentStep === 1 && <First form={form} next={next} />}
            {currentStep === 2 && (
              <Second form={form} next={next} prev={prev} />
            )}
            {currentStep === 3 && <Third form={form} prev={prev} />}
          </form>
        </Form>
      </div>
    </section>
  );
}
