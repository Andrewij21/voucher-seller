import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { X } from "lucide-react";
import Link from "next/link";

// interface DrawerMenuBody{
//     title:string;

// }

export default function DrawerMenu() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="link" className="font-semibold capitalize w-fit">
          Kelola voucher
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-w-screen-sm mx-auto">
        <DrawerHeader className="text-center relative">
          <DrawerClose asChild className="absolute left-4">
            {/* <Button variant="ghost" className="p-0"> */}
            <X className="h-8 w-8 text-blue-500 cursor-pointer" />
            {/* </Button> */}
          </DrawerClose>
          <DrawerTitle className="text-center capitalize">
            kelola voucher
          </DrawerTitle>
          <div className="min-h-full py-4">
            {/* Skeleton Content */}
            <div className="h-48 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <DrawerDescription className="font-semibold text-lg capitalize text-center">
            Atur Voucher biar produk kamu makin laku!
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button
              className="bg-blue-700 text-white capitalize font-semibold rounded-xl hover:bg-blue-800"
              asChild
            >
              <Link href="/voucherPenjual/aktif">ke daftar voucher</Link>
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
