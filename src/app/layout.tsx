import type { Metadata } from "next";
import "./globals.css";
import { LayoutProvider } from "./layoutProvider";

export const metadata: Metadata = {
  title: "Guilherme - Front-end developer",
  description: "Fullstack developer, striving to demonstrate continuous improvement day by day. This is my portfolio, a project created so that I can share with everyone my experiences, projects, and my skills.",
  openGraph: {
    title: "Guilherme - Front-end developer",
    description: "Fullstack developer, striving to demonstrate continuous improvement day by day. This is my portfolio, a project created so that I can share with everyone my experiences, projects, and my skills.",
    images: "images/opengraph-image.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="font-poppins bg-lightPage dark:bg-darkPage dark:text-white">
        <LayoutProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </LayoutProvider>
      </body>
    </html>
  );
}