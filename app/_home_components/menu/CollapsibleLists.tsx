import { Button } from "@/components/ui/button";
import CollapsibleItem from "./CollapsibleItem";
import DrawerMenu from "./DrawerMenu";

const contentLists = [
  {
    title: "diskusi",
    content: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
          vero.
        </p>
      </>
    ),
  },
  {
    title: "kelola produk",
    content: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
          vero.
        </p>
      </>
    ),
  },
  {
    title: "kelola pesanan",
    content: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
          vero.
        </p>
      </>
    ),
  },
  {
    title: "kelola pelanggan",
    content: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
          vero.
        </p>
      </>
    ),
  },
  {
    title: "pusat promosi",
    content: (
      <div className="flex flex-col py-1">
        <DrawerMenu />
        <Button variant="link" className="font-semibold capitalize w-fit">
          promosi penjual
        </Button>
      </div>
    ),
  },
  {
    title: "faktur pajak",
    content: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
          vero.
        </p>
      </>
    ),
  },
  {
    title: "pengaturan merchant",
    content: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
          vero.
        </p>
      </>
    ),
  },
];
export default function CollapsibleLists({}) {
  return (
    <div className="space-y-4">
      {contentLists.map((item, i) => (
        <CollapsibleItem title={item.title} content={item.content} key={i} />
      ))}
    </div>
  );
}
