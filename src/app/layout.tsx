import type { Metadata } from "next";
import "./globals.css";
import { LayoutProvider } from "./layoutProvider";

export const metadata: Metadata = {
  icons: "/images/perfil.png",
  title: "",
  description: "",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="font-poppins dark:bg-[#000b0d] dark:text-white">
        <LayoutProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </LayoutProvider>
      </body>
    </html>
  );
}