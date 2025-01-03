import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UbahKuotaVoucherSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface DrawerMenuUbahKuotaProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function DrawerMenuUbahKuota({
  open,
  onOpenChange,
}: DrawerMenuUbahKuotaProps) {
  const form = useForm<z.infer<typeof UbahKuotaVoucherSchema>>({
    resolver: zodResolver(UbahKuotaVoucherSchema),
    defaultValues: {
      kuota: "",
    },
  });
  function onSubmit(values: z.infer<typeof UbahKuotaVoucherSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-w-screen-sm mx-auto">
        <DrawerHeader className="text-center relative">
          <DrawerClose asChild className="absolute left-4">
            {/* <Button variant="ghost" className="p-0"> */}
            <X className="h-8 w-8 text-blue-500 cursor-pointer" />
            {/* </Button> */}
          </DrawerClose>
          <DrawerTitle className="text-center capitalize mb-4">
            Ubah Kuota Voucher
          </DrawerTitle>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 text-left"
            >
              <FormField
                control={form.control}
                name="kuota"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="number" placeholder="Contoh:10" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className="bg-blue-700 text-white capitalize font-semibold rounded-full hover:bg-blue-800 w-full"
                type="submit"
              >
                Terapkan
              </Button>
            </form>
          </Form>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
