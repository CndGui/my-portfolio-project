import type { Metadata } from "next";
import "./globals.css";
import { LayoutProvider } from "./layoutProvider";

export const metadata: Metadata = {
  title: "Guilherme - Front-end developer",
  description: "Fullstack developer, striving to demonstrate continuous improvement day by day. This is my portfolio, a project created so that I can share with everyone my experiences, projects, and my skills.",
  openGraph: {
    title: "Guilherme - Front-end developer",
    description: "Fullstack developer, striving to demonstrate continuous improvement day by day. This is my portfolio, a project created so that I can share with everyone my experiences, projects, and my skills.",
    images: [
      {
        url: "\images\opengraph-image.png",
        width: 1200,
        height: 630
      }
    ]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="font-poppins bg-lightPage dark:text-white">
        <LayoutProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </LayoutProvider>
      </body>
    </html>
  );
}