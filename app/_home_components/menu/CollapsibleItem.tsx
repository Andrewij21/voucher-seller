import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Separator } from "@/components/ui/separator";
import { ChevronDown } from "lucide-react";
import { JSX } from "react";

interface CollapsibleListsBody {
  title: string;
  content: JSX.Element;
}

export default function CollapsibleItem({
  title,
  content,
}: CollapsibleListsBody) {
  return (
    <>
      <Collapsible className="">
        <CollapsibleTrigger className="flex justify-between items-center w-full">
          <h4 className="capitalize font-semibold text-foreground">{title}</h4>
          <ChevronDown />
        </CollapsibleTrigger>
        <CollapsibleContent asChild>{content}</CollapsibleContent>
        <Separator className="mt-2" />
      </Collapsible>
    </>
  );
}
