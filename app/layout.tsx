import "./globals.css";
import NavBar from "@/components/ui/NavBar";
import MobileNav from "@/components/ui/MobileNav";
import { UserProvider } from "@/components/context/UserProvider";

export const metadata = {
  title: "ATILS Academy | Newton Solutions",
  description: "Elite multi-division cyber academy by Newton Solutions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-slate-950">
      <body className="min-h-screen bg-slate-950 text-slate-200 antialiased">
        
        <UserProvider>
          {/* TOP NAV */}
          <NavBar />

          {/* PAGE CONTENT */}
          <main className="pt-20 pb-20 max-w-7xl mx-auto px-4">
            {children}
          </main>

          {/* MOBILE NAV (bottom) */}
          <MobileNav />
        </UserProvider>

      </body>
    </html>
  );
}