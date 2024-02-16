import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./themeProvider";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="font-poppins dark:bg-[#000b0d] dark:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}