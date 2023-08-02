import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./globals.css";
import { Inter } from "next/font/google";
import { Menu } from "../components/Menu/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Full English Finder",
  description: "Find a proper Full English",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <Menu />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
