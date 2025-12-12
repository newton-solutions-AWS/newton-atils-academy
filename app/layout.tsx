import "@/app/globals.css";
import NavBar from "@/components/ui/NavBar";
import MobileNav from "@/components/ui/MobileNav";
import { UserProvider } from "@/components/context/UserProvider";
import type { ReactNode } from "react";

export const metadata = {
  title: "ATILS Academy | Newton Solutions",
  description: "Elite multi-division cyber academy by Newton Solutions.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-200 antialiased">
        <UserProvider>
          {/* DESKTOP NAV */}
          <div className="hidden md:block">
            <NavBar />
          </div>

          {/* MOBILE NAV */}
          <div className="md:hidden">
            <MobileNav />
          </div>

          {/* PAGE CONTENT */}
          <main>{children}</main>
        </UserProvider>
      </body>
    </html>
  );
}