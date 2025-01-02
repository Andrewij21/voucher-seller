"use client";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import dateFormater from "@/lib/formaters";
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

export default function First({
  form,
  next,
}: {
  form: UseFormReturn<z.infer<typeof CreateVoucherSchema>>;
  next: () => void;
}) {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="step1.nama"
        render={({ field }) => {
          const charCount = form.watch("step1.nama")?.length || 0; // Watch nilai dari field "nama"
          const MAX_CHARACTERS = 60; // Batas maksimum karakter
          return (
            <FormItem>
              <FormLabel className="font-bold">Nama Voucher*</FormLabel>
              <FormControl>
                <Input placeholder="Contoh:Diskon Tahun Baru" {...field} />
              </FormControl>
              <div className="flex justify-between">
                <FormDescription>
                  Catatan: Nama Voucher tidak tampil di sisi pembeli
                </FormDescription>
                <div
                  className={cn(
                    "text-sm",
                    charCount > MAX_CHARACTERS
                      ? "text-red-500"
                      : "text-gray-500"
                  )}
                >
                  {charCount}/{MAX_CHARACTERS}
                </div>
              </div>
              <FormMessage />
            </FormItem>
          );
        }}
      />
      <FormField
        control={form.control}
        name="step1.kode"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-bold">Kode*</FormLabel>
            <FormControl>
              <Input
                placeholder="Maksimum 8 karakter"
                {...field}
                className="uppercase placeholder:capitalize"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="step1.target_produk"
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
                    <RadioGroupItem value="publik" />
                  </FormControl>
                  <div>
                    <FormLabel className="font-bold">Publik</FormLabel>
                    <FormDescription>
                      Semua pembeli dapat melihat dan menggunakan voucher
                    </FormDescription>
                  </div>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="terbatas" />
                  </FormControl>
                  <div>
                    <FormLabel className="font-bold">Terbatas</FormLabel>
                    <FormDescription>
                      Hanya pembeli yang kamu berikan kode, dapat menggunakan
                      voucher
                    </FormDescription>
                  </div>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="step1.masa_berlaku_awal"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel className="font-bold">Masa Berlaku Awal*</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] pl-3 justify-start text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="h-4 w-4 opacity-50" />
                    {field.value ? (
                      dateFormater(field.value)
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={(date) => field.onChange(date)} // Set nilai waktu saat user memilih
                  disabled={(date) => date < new Date()} // Tidak izinkan tanggal sebelumnya
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="step1.masa_berlaku_akhir"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel className="font-bold">Masa Berlaku Akhir*</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] pl-3 justify-start text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="h-4 w-4 opacity-50" />
                    {field.value ? (
                      dateFormater(field.value)
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={field.value ? new Date(field.value) : undefined} // Konversi ke Date
                  onSelect={(date) => field.onChange(date)} // Set nilai sebagai Date
                  disabled={(date) =>
                    date <=
                    new Date(
                      form.watch("step1.masa_berlaku_awal") || new Date()
                    )
                  } // Tidak boleh kurang dari masa_berlaku_awal
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button
        // type="submit"
        onClick={next}
        className="rounded-xl bg-blue-500 text-white w-full hover:bg-blue-700"
      >
        Selanjutnya
      </Button>
    </div>
  );
}
