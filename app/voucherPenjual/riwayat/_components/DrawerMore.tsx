import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { EllipsisVertical, X } from "lucide-react";
export default function DrawerMore() {
  return (
    <>
      <Drawer>
        <DrawerTrigger>
          <EllipsisVertical className="h-6 w-6" />
        </DrawerTrigger>
        <DrawerContent className="max-w-screen-sm mx-auto min-h-3.5">
          <DrawerHeader className="text-center relative">
            <DrawerTitle className="text-center">Atur</DrawerTitle>
            <DrawerClose asChild className="absolute left-4">
              {/* <Button variant="ghost" className="p-0"> */}
              <X className="h-8 w-8 text-blue-500 cursor-pointer" />
              {/* </Button> */}
            </DrawerClose>
          </DrawerHeader>
          <div className="p-4 space-y-4">
            <div>
              <h3 className="capitalize font-semibold">Detail</h3>
              <Separator className="" />
            </div>
            <div>
              <h3 className="capitalize font-semibold">Salin</h3>
              <Separator className="" />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
