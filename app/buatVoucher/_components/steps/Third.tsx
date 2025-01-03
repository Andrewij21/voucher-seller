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

export default function Third({
  form,
  prev,
}: {
  form: UseFormReturn<z.infer<typeof CreateVoucherSchema>>;
  prev: () => void;
}) {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="step3.target_produk"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-bold">Target Produk*</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="semua_produk" />
                  </FormControl>
                  <div>
                    <FormLabel className="font-bold">Semua Produk</FormLabel>
                    <FormDescription>
                      Voucher dapat digunakan untuk semua produk
                    </FormDescription>
                  </div>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="produk_tertentu" />
                  </FormControl>
                  <div>
                    <FormLabel className="font-bold">Produk Tertentu</FormLabel>
                    <FormDescription>
                      Voucher hanya berlaku untuk produk terpilih
                    </FormDescription>
                  </div>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {form.watch("step3.target_produk") === "produk_tertentu" && (
        <FormField
          control={form.control}
          name="step3.gambar_produk"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Unggah Gambar Produk*</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      const file = e.target.files[0];
                      field.onChange(file.name); // Simpan nama file ke state
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
      <div className="flex gap-x-2">
        <Button
          // type="submit"
          onClick={prev}
          className="bg-white text-blue-500 w-full border-blue-500 border hover:bg-slate-200 rounded-xl"
        >
          Sebelumnya
        </Button>
        <Button
          type="submit"
          // onClick={next}
          className="rounded-xl bg-blue-500 text-white w-full hover:bg-blue-700"
        >
          simpan
        </Button>
      </div>
    </div>
  );
}
