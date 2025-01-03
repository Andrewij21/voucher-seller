import BottomBar from "@/components/BottomBar";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="max-w-screen-sm min-h-screen mx-auto relative">
      {children}
      <Toaster />
      <BottomBar />
    </section>
  );
}
