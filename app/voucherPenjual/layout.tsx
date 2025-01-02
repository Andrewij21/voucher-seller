import BottomBar from "@/components/BottomBar";
import Nav from "./_components/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="max-w-screen-sm min-h-screen mx-auto relative">
      <Nav />
      <div className="px-2">{children}</div>
      <BottomBar />
    </section>
  );
}
