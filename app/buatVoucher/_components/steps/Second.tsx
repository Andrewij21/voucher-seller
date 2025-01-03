"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { CreateVoucherSchema } from "@/schema";
import { Input } from "@/components/ui/input";

export default function Second({
  form,
  next,
  prev,
}: {
  form: UseFormReturn<z.infer<typeof CreateVoucherSchema>>;
  next: () => void;
  prev: () => void;
}) {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="step2.jenis_voucher"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-bold">Jenis Voucher*</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="diskon_produk" />
                  </FormControl>
                  <div>
                    <FormLabel className="font-bold">Diskon Produk</FormLabel>
                  </div>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="biaya_pengiriman" />
                  </FormControl>
                  <div>
                    <FormLabel className="font-bold">
                      Biaya Pengiriman
                    </FormLabel>
                  </div>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {form.watch("step2.jenis_voucher") !== "biaya_pengiriman" && (
        <FormField
          control={form.control}
          name="step2.jenis_Diskon"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Jenis Diskon*</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="nominal" />
                    </FormControl>
                    <div>
                      <FormLabel className="font-bold">Nominal (Rp)</FormLabel>
                    </div>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="presentase" />
                    </FormControl>
                    <div>
                      <FormLabel className="font-bold">
                        Presentase (%)
                      </FormLabel>
                    </div>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
      <FormField
        control={form.control}
        name="step2.diskon"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-bold">Diskon*</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Contoh:1.000.000" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="step2.minimun_pembelian"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-bold">Minimun Pembelian*</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Contoh:1.000.000" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {form.watch("step2.jenis_Diskon") === "presentase" && (
        <FormField
          control={form.control}
          name="step2.maksimum_diskon.mode"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Batas Maksimum Diskon</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-2"
                >
                  <FormItem className="flex items-center space-x-3">
                    <FormControl>
                      <RadioGroupItem value="tidak_terbatas" />
                    </FormControl>
                    <FormLabel>Tidak Terbatas</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3">
                    <FormControl>
                      <RadioGroupItem value="atur_batas" />
                    </FormControl>
                    <FormLabel>Atur Batas Maksimum Diskon</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
      {form.watch("step2.maksimum_diskon.mode") === "atur_batas" && (
        <FormField
          control={form.control}
          name="step2.maksimum_diskon.value"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Masukkan nominal"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
      <FormField
        control={form.control}
        name="step2.kuota_pemakaian"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-bold">Kuota Pemakaian*</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Contoh:10" {...field} />
            </FormControl>
            <FormDescription>Maksimal penggunaan voucher</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="step2.kuota_pemakaian_per_pembeli"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-bold">
              Kuota Pemakaian Per Pembeli*
            </FormLabel>
            <FormControl>
              <Input type="number" placeholder="Contoh:10" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex gap-x-2">
        <Button
          // type="submit"
          onClick={prev}
          className="bg-white text-blue-500 w-full border-blue-500 border hover:bg-slate-200 rounded-full"
        >
          Sebelumnya
        </Button>
        <Button
          // type="submit"
          onClick={next}
          className="rounded-full bg-blue-500 text-white w-full hover:bg-blue-700"
        >
          Selanjutnya
        </Button>
      </div>
    </div>
  );
}
