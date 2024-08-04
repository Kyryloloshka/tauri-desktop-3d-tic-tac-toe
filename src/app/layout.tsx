import { Rubik, Rubik_Mono_One } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/components/StoreProvider";
import MainDragArea from "@/components/MainDragArea";
import EscMenu from "@/components/EscMenu";

export const rubikMonoOne = Rubik_Mono_One({
  weight: ["400"],
  subsets: ["latin", "cyrillic"],
});
export const rubik = Rubik({
  weight: ["400", "300", "600"],
  subsets: ["latin", "cyrillic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${rubikMonoOne.className} h-[100dvh] common-container flex flex-col relative`}
        suppressHydrationWarning={true}
      >
        <StoreProvider>
          <MainDragArea>{children}</MainDragArea>
          <EscMenu />
        </StoreProvider>
      </body>
    </html>
  );
}
